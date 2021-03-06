"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("events");
var NET = require("net");
var ChaCha = require("./encryption/ChaCha20Poly1305AEAD");
var ExtendedBuffer = require('extended-buffer');
var delimiter = Buffer.from('\r\n');
var debug = require('debug')('TCP');
var TCP = (function (_super) {
    __extends(TCP, _super);
    function TCP(server) {
        var _this = _super.call(this) || this;
        _this.TCPConnectionPool = [];
        _this.TCPConnectionPoolMax = 8;
        _this.connections = {};
        _this.server = server;
        _this.TCPServer = NET.createServer();
        _this.connections = [];
        _this.TCPServer.on('listening', function () {
            _this.emit('listening', _this.TCPPort);
            debug('Listening on ' + _this.TCPPort);
        });
        _this.TCPServer.on('error', function (error) {
            console.error(error);
            debug(error);
        });
        _this.TCPServer.on('connection', _this.onConnection.bind(_this));
        return _this;
    }
    TCP.prototype.listen = function (TCPPort, HTTPPort) {
        this.TCPPort = TCPPort;
        this.HTTPPort = HTTPPort;
        this.TCPServer.listen(this.TCPPort);
        for (var i = 0; i < this.TCPConnectionPoolMax; i++)
            this.createNewConnection();
    };
    TCP.prototype.onConnection = function (socket) {
        var _this = this;
        socket.ID = "" + new Date().getTime() + Math.floor(Math.random() * 1000);
        this.connections[socket.ID] = socket;
        debug(socket.ID + " connected");
        socket.on('close', function () {
            debug(socket.ID + " disconnected");
            delete _this.connections[socket.ID];
            if (_this.server.config.SRP && _this.server.config.SRP.socketID === socket.ID) {
                _this.server.config.SRP = undefined;
                _this.server.config.lastPairStepTime = undefined;
            }
            socket.end();
            socket.destroy();
        });
        socket.on('data', function (data) {
            debug(socket.ID + " packet received");
            if (socket.isEncrypted) {
                socket.hasReceivedEncryptedData = true;
                var result = Buffer.alloc(0);
                for (var index = 0; index < data.length;) {
                    var AAD = data.slice(index, index + 2), length = AAD.readUInt16LE(0), encryptedData = data.slice(index + 2, index + 2 + length), tag = data.slice(index + 2 + length, index + 2 + length + 16), decrypted = ChaCha.expertDecrypt(socket.HAPEncryption.controllerToAccessoryKey, _this.createNonce(socket.HAPEncryption.incomingFramesCounter), tag, encryptedData, AAD);
                    if (decrypted) {
                        result = Buffer.concat([result, decrypted]);
                        index += index + 2 + length + 16;
                        socket.HAPEncryption.incomingFramesCounter++;
                    }
                    else {
                        socket.emit('close');
                        return;
                    }
                }
                data = result;
            }
            var _a = _this.readAndDeleteFirstLineOfBuffer(data), firstLine = _a.firstLine, rest = _a.rest;
            _this.write(Buffer.concat([firstLine, delimiter, Buffer.from("X-Real-Socket-ID: " + socket.ID, 'ascii'), delimiter, rest]));
        });
        socket.setTimeout(3600000);
        socket.on('timeout', function () {
            debug(socket.ID + " timedout");
            socket.emit('close');
        });
        socket.keepAliveForEver = function () {
            socket.setTimeout(0);
            socket.setKeepAlive(true, 1800000);
        };
        socket.safeWrite = function (buffer) {
            if (socket.hasReceivedEncryptedData) {
                var result = Buffer.alloc(0);
                for (var index = 0; index < buffer.length;) {
                    var length = Math.min(buffer.length - index, 1024), lengthBuffer = Buffer.alloc(2);
                    lengthBuffer.writeUInt16LE(length, 0);
                    var enceypted = ChaCha.expertEncrypt(socket.HAPEncryption.accessoryToControllerKey, _this.createNonce(socket.HAPEncryption.outgoingFramesCounter), buffer.slice(index, index + length), lengthBuffer);
                    result = Buffer.concat([result, lengthBuffer, enceypted]);
                    index += length;
                    socket.HAPEncryption.outgoingFramesCounter++;
                }
                buffer = result;
            }
            debug(socket.ID + " packet sent");
            socket.write(buffer);
        };
        socket.sendNotification = function (notification) {
            var body = "EVENT/1.0 200 OK" + delimiter + "Content-Type: application/hap+json" + delimiter + "Content-Length: " + notification.length + delimiter + delimiter + notification;
            socket.safeWrite(Buffer.from(body));
        };
        socket.on('error', function (error) {
            debug(error);
        });
    };
    TCP.prototype.createNonce = function (framesCounter) {
        var buffer = new ExtendedBuffer();
        buffer.writeUInt64LE(framesCounter);
        return Buffer.concat([Buffer.alloc(4), buffer.buffer]);
    };
    TCP.prototype.write = function (buffer) {
        var wrote = false;
        for (var _i = 0, _a = this.TCPConnectionPool; _i < _a.length; _i++) {
            var connection = _a[_i];
            if (!connection.isBusy) {
                connection.safeWrite(buffer);
                wrote = true;
                break;
            }
        }
        if (!wrote)
            this.createNewConnection().safeWrite(buffer);
    };
    TCP.prototype.hasExtraOpenConnection = function () {
        if (this.TCPConnectionPool.length > this.TCPConnectionPoolMax && this.TCPConnectionPool.filter(function (connection) { return !connection.isBusy; }).length >= 1)
            return true;
        return false;
    };
    TCP.prototype.createNewConnection = function () {
        var _this = this;
        var connection = NET.createConnection(this.HTTPPort);
        connection.on('connect', function () {
            debug('New socked connected.');
            connection.isConnected = true;
            if (connection.pendingWrite) {
                connection.safeWrite(connection.pendingWrite);
                delete connection.pendingWrite;
            }
        });
        connection.on('error', function (error) {
            debug(error);
            connection.emit('close');
        });
        connection.on('close', function () {
            _this.TCPConnectionPool.splice(_this.TCPConnectionPool.indexOf(connection), 1);
            debug("Socked disconnected. Remained: " + _this.TCPConnectionPool.length);
            connection.end();
            connection.destroy();
        });
        connection.setTimeout(0);
        connection.setKeepAlive(true, 1800000);
        connection.setNoDelay(0);
        connection.on('data', function (data) {
            debug("Data received from HTTP.");
            var currentLine = '', prevs = Buffer.alloc(0), rests = data;
            while (true) {
                var _a = _this.readAndDeleteFirstLineOfBuffer(rests), firstLine = _a.firstLine, rest = _a.rest;
                currentLine = firstLine.toString('utf8');
                rests = rest;
                if (currentLine.indexOf('X-Real-Socket-ID') > -1)
                    break;
                else
                    prevs = Buffer.concat([prevs, delimiter, firstLine]);
                if (firstLine.length === 0)
                    break;
            }
            var socketID = (currentLine.split(':')[1]).trim();
            if (_this.connections[socketID])
                _this.connections[socketID].safeWrite(Buffer.concat([prevs, delimiter, rests]));
            connection.isBusy = false;
            if (_this.hasExtraOpenConnection())
                connection.emit('close');
        });
        connection.safeWrite = function (buffer) {
            connection.isBusy = true;
            if (connection.isConnected) {
                debug("Data sent to HTTP.");
                connection.write(buffer);
            }
            else {
                connection.pendingWrite = connection.pendingWrite || Buffer.alloc(0);
                connection.pendingWrite = Buffer.concat([connection.pendingWrite, buffer]);
            }
        };
        this.TCPConnectionPool.push(connection);
        return connection;
    };
    TCP.prototype.readAndDeleteFirstLineOfBuffer = function (buffer) {
        var firstLine = Buffer.alloc(0);
        for (var index = 0; index < buffer.length; index++) {
            if (buffer[index] == delimiter[0] && buffer[index + 1] == delimiter[1])
                break;
            else
                firstLine = Buffer.concat([firstLine, buffer.slice(index, index + 1)]);
        }
        return { firstLine: firstLine, rest: buffer.slice(firstLine.length + delimiter.length) };
    };
    TCP.prototype.close = function (callback) {
        for (var _i = 0, _a = this.TCPConnectionPool; _i < _a.length; _i++) {
            var connection = _a[_i];
            connection.emit('close');
        }
        this.TCPServer.close(callback);
        for (var socketID in this.connections)
            this.connections[socketID].emit('close');
    };
    TCP.prototype.sendNotification = function (socketIDs, notification) {
        var sent = [];
        for (var _i = 0, socketIDs_1 = socketIDs; _i < socketIDs_1.length; _i++) {
            var socketID = socketIDs_1[_i];
            if (this.connections[socketID]) {
                this.connections[socketID].sendNotification(notification);
                sent.push(socketID);
            }
        }
        return sent;
    };
    TCP.prototype.revokeConnections = function (clientID) {
        var _loop_1 = function (index) {
            var connection = this_1.connections[index];
            if (connection.clientID == clientID) {
                connection.isAuthenticated = false;
                connection.isAdmin = false;
                setTimeout(function () {
                    connection.emit('close');
                }, 5000);
            }
        };
        var this_1 = this;
        for (var index in this.connections) {
            _loop_1(index);
        }
    };
    return TCP;
}(events_1.EventEmitter));
exports.default = TCP;
