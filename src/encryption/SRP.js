"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
var BigInteger = require('jsbn').BigInteger;
var SRP = (function () {
    function SRP(password) {
        this.username = Buffer.from('Pair-Setup');
        this.length = 3072;
        this.generator = new BigInteger('05');
        this.hashFunction = 'sha512';
        this.modules = new BigInteger('FFFFFFFF FFFFFFFF C90FDAA2 2168C234 C4C6628B 80DC1CD1 29024E08 8A67CC74 020BBEA6 3B139B22 514A0879 8E3404DD EF9519B3 CD3A431B 302B0A6D F25F1437 4FE1356D 6D51C245 E485B576 625E7EC6 F44C42E9 A637ED6B 0BFF5CB6 F406B7ED EE386BFB 5A899FA5 AE9F2411 7C4B1FE6 49286651 ECE45B3D C2007CB8 A163BF05 98DA4836 1C55D39A 69163FA8 FD24CF5F 83655D23 DCA3AD96 1C62F356 208552BB 9ED52907 7096966D 670C354E 4ABC9804 F1746C08 CA18217C 32905E46 2E36CE3B E39E772C 180E8603 9B2783A2 EC07A28F B5C55DF0 6F4C52C9 DE2BCBF6 95581718 3995497C EA956AE5 15D22618 98FA0510 15728E5A 8AAAC42D AD33170D 04507A33 A85521AB DF1CBA64 ECFB8504 58DBEF0A 8AEA7157 5D060C7D B3970F85 A6E1E4C7 ABF5AE8C DB0933D7 1E8C94E0 4A25619D CEE3D226 1AD2EE6B F12FFA06 D98A0864 D8760273 3EC86A64 521F2B18 177B200C BBE11757 7A615D6C 770988C0 BAD946E2 08E24FA0 74E5AB31 43DB5BFC E0FD108E 4B82D120 A93AD2CA FFFFFFFF FFFFFFFF'.split(/ /).join(''), 16);
        if (password)
            this.password = Buffer.from(password);
        else
            throw new Error('Invalid Password');
        this.salt = crypto.randomBytes(16);
        this.createVerifier();
        this.createB();
    }
    SRP.prototype.createB = function () {
        this.BPrivate = this.buffer2BigInt(crypto.randomBytes(32));
        var BPublic = this.createK().multiply(this.buffer2BigInt(this.verifier)).add(this.generator.modPow(this.BPrivate, this.modules)).mod(this.modules);
        this.BPublic = this.bigInt2Buffer(BPublic);
    };
    SRP.prototype.createK = function () {
        return this.buffer2BigInt(crypto.createHash(this.hashFunction).update(this.fixLength(this.modules)).update(this.fixLength(this.generator)).digest());
    };
    SRP.prototype.createXHash = function () {
        var identityHash = crypto.createHash(this.hashFunction).update(this.username).update(Buffer.from(':')).update(this.password).digest();
        var saltHash = crypto.createHash(this.hashFunction).update(this.salt).update(identityHash).digest();
        return this.buffer2BigInt(saltHash);
    };
    SRP.prototype.createVerifier = function () {
        this.verifier = this.bigInt2Buffer(this.generator.modPow(this.createXHash(), this.modules));
    };
    SRP.prototype.getPublicKey = function () {
        return this.BPublic;
    };
    SRP.prototype.setClientPublicKey = function (buffer) {
        this.APublic = buffer;
        this.createRandomScrambling();
        this.createPremasterSecret();
        this.createSessionKey();
        this.createM1Proof();
    };
    SRP.prototype.createRandomScrambling = function () {
        this.randomScrambling = this.buffer2BigInt(crypto.createHash(this.hashFunction).update(this.fixLength(this.APublic)).update(this.fixLength(this.BPublic)).digest());
    };
    SRP.prototype.createPremasterSecret = function () {
        this.premasterSecret = this.bigInt2Buffer(this.buffer2BigInt(this.APublic).multiply(this.buffer2BigInt(this.verifier).modPow(this.randomScrambling, this.modules)).modPow(this.BPrivate, this.modules).mod(this.modules));
    };
    SRP.prototype.createSessionKey = function () {
        this.sessionKey = crypto.createHash(this.hashFunction).update(this.premasterSecret).digest();
    };
    SRP.prototype.getSessionKey = function () {
        return this.sessionKey;
    };
    SRP.prototype.createM1Proof = function () {
        var headerHash = crypto.createHash(this.hashFunction).update(this.bigInt2Buffer(this.modules)).digest(), headerHelperHash = crypto.createHash(this.hashFunction).update(this.bigInt2Buffer(this.generator)).digest();
        for (var index = 0; index < headerHash.length; index++)
            headerHash[index] ^= headerHelperHash[index];
        this.M1Proof = crypto.createHash(this.hashFunction).update(headerHash).update(crypto.createHash(this.hashFunction).update(this.username).digest()).update(this.salt).update(this.APublic).update(this.BPublic).update(this.sessionKey).digest();
    };
    SRP.prototype.checkClientProof = function (clientProof) {
        return clientProof.toString('hex') === this.M1Proof.toString('hex');
    };
    SRP.prototype.getM2Proof = function () {
        this.M2Proof = crypto.createHash(this.hashFunction).update(this.APublic).update(this.M1Proof).update(this.sessionKey).digest();
        return this.M2Proof;
    };
    SRP.prototype.buffer2BigInt = function (buffer) {
        return new BigInteger(buffer.toString('hex'), 16);
    };
    SRP.prototype.bigInt2Buffer = function (bigInt) {
        var hex = bigInt.toString(16);
        if (hex.length % 2 === 1)
            hex = '0' + hex;
        return Buffer.from(hex, 'hex');
    };
    SRP.prototype.fixLength = function (input) {
        if (!Buffer.isBuffer(input))
            input = this.bigInt2Buffer(input);
        var length = this.length / 8;
        var padding = length - input.length;
        var result = Buffer.alloc(length);
        result.fill(0, 0, padding);
        input.copy(result, padding);
        return result;
    };
    ;
    return SRP;
}());
exports.default = SRP;
