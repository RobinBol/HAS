/// <reference types="node" />
import { EventEmitter } from 'events';
import HAS from './HAS';
export default class TCP extends EventEmitter {
    private TCPServer;
    private TCPConnectionPool;
    private readonly TCPConnectionPoolMax;
    private TCPPort;
    private HTTPPort;
    connections: {
        [index: string]: any;
    };
    private server;
    constructor(server: HAS);
    listen(TCPPort: number, HTTPPort: number): void;
    private onConnection(socket);
    private createNonce(framesCounter);
    private write(buffer);
    private hasExtraOpenConnection();
    private createNewConnection();
    private readAndDeleteFirstLineOfBuffer(buffer);
    close(callback?: () => void): void;
    sendNotification(socketIDs: string[], notification: string): string[];
    revokeConnections(clientID: string): void;
}
