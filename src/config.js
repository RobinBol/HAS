"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FS = require("fs");
var crypto = require("crypto");
var Ed25519 = require('ed25519');
var Config = (function () {
    function Config(deviceName, deviceID, category, configDir, TCPPort, setupCode) {
        this.CCN = 1;
        this.featureFlag = 0x00;
        this.protocolVersion = '1.0';
        this.CSN = 1;
        this.statusFlag = 0x01;
        this.failedAuthCounter = 0;
        this.pairings = {};
        this.UUIDMap = {};
        if (deviceName)
            this.deviceName = deviceName;
        else
            throw new Error('Invalid Device Name');
        if (deviceID && deviceID.match(/^([0-9A-Fa-f]{2}[:]){5}([0-9A-Fa-f]{2})$/))
            this.deviceID = deviceID;
        else
            throw new Error('Invalid Device ID');
        if (category && !isNaN(category) && category > 0 && category < 20)
            this.category = category;
        else
            throw new Error('Invalid Category Identifier');
        if (TCPPort && !isNaN(TCPPort) && TCPPort > 0)
            this.TCPPort = TCPPort;
        else
            throw new Error('Invalid HTTP Port');
        if (setupCode && setupCode.match(/^[0-9]{3}-[0-9]{2}-[0-9]{3}$/))
            this.setupCode = setupCode;
        else
            throw new Error('Invalid Setup Code');
        if (configDir) {
            this.configDir = configDir;
            if (FS.existsSync(configDir)) {
                this.readConfig();
            }
            else {
                this.writeConfig();
            }
        }
        else
            throw new Error('Invalid Config File');
    }
    Config.prototype.readConfig = function () {
        var config = JSON.parse(FS.readFileSync(this.configDir, 'utf8'));
        if (config) {
            this.CCN = config.CCN;
            this.pairings = config.pairings || {};
            if (Object.keys(this.pairings).length > 0)
                this.statusFlag = 0x00;
            if (config.publicKey)
                this.publicKey = Buffer.from(config.publicKey, 'hex');
            if (config.privateKey)
                this.privateKey = Buffer.from(config.privateKey, 'hex');
            if (config.UUIDMap)
                this.UUIDMap = config.UUIDMap;
        }
        else
            throw new Error('Invalid Config File');
    };
    Config.prototype.writeConfig = function () {
        if (!this.publicKey || !this.privateKey) {
            var seed = crypto.randomBytes(32);
            var keyPair = Ed25519.MakeKeypair(seed);
            this.publicKey = keyPair.publicKey;
            this.privateKey = keyPair.privateKey;
        }
        FS.writeFileSync(this.configDir, JSON.stringify({
            CCN: this.CCN,
            pairings: this.pairings,
            publicKey: this.publicKey.toString('hex'),
            privateKey: this.privateKey.toString('hex'),
            UUIDMap: this.UUIDMap
        }), 'utf8');
    };
    Config.prototype.setServer = function (server) {
        if (this.server)
            throw new Error('Server is already set.');
        this.server = server;
    };
    Config.prototype.increaseCCN = function (updateBonjour) {
        if (updateBonjour === void 0) { updateBonjour = true; }
        this.CCN++;
        if (this.CCN > 4294967295)
            this.CCN = 1;
        if (updateBonjour)
            this.server.updateBonjour();
        this.writeConfig();
    };
    Config.prototype.getTXTRecords = function () {
        return {
            'c#': this.CCN,
            ff: this.featureFlag,
            id: this.deviceID,
            md: this.deviceName,
            pv: this.protocolVersion,
            's#': this.CSN,
            sf: this.statusFlag,
            ci: this.category
        };
    };
    Config.prototype.addPairing = function (ID, publicKey, isAdmin) {
        var IDString = ID.toString('utf8');
        if (this.pairings[IDString]) {
            throw new Error('ID already exists.');
        }
        this.pairings[IDString] = {
            publicKey: publicKey.toString('hex'),
            isAdmin: isAdmin
        };
        if (isAdmin) {
            this.statusFlag = 0x00;
            this.server.updateBonjour();
        }
        this.writeConfig();
    };
    Config.prototype.removePairing = function (ID) {
        var IDString = ID.toString('utf8');
        if (!this.pairings[IDString]) {
            throw new Error('ID does NOT exists.');
        }
        delete this.pairings[IDString];
        if (Object.keys(this.pairings).length <= 0) {
            this.statusFlag = 0x01;
            this.server.updateBonjour();
        }
        this.writeConfig();
    };
    Config.prototype.updatePairing = function (ID, isAdmin) {
        var IDString = ID.toString('utf8');
        if (!this.pairings[IDString])
            throw new Error('ID does NOT exists.');
        this.pairings[IDString].isAdmin = isAdmin;
        this.writeConfig();
    };
    Config.prototype.getPairings = function (ID) {
        if (ID) {
            var IDString = ID.toString('utf8');
            if (!this.pairings[IDString])
                return false;
            return this.pairings[IDString];
        }
        else
            return this.pairings;
    };
    Config.prototype.getHASID = function (UUID) {
        UUID = UUID.toString().toUpperCase();
        if (this.UUIDMap[UUID])
            return this.UUIDMap[UUID];
        var values = [0];
        for (var UUID_1 in this.UUIDMap)
            values.push(this.UUIDMap[UUID_1]);
        var lastID = Math.max.apply(Math, values);
        lastID++;
        this.UUIDMap[UUID] = lastID;
        this.writeConfig();
        return lastID;
    };
    return Config;
}());
exports.default = Config;
