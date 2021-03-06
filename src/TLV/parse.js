"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseTLV(buffer) {
    var TLV = {}, currentIndex = 0;
    while (currentIndex < buffer.length) {
        var iBuffer = buffer.slice(currentIndex + 2, currentIndex + 2 + buffer[currentIndex + 1]);
        if (TLV[buffer[currentIndex]])
            TLV[buffer[currentIndex]] = Buffer.concat([TLV[buffer[currentIndex]], iBuffer]);
        else
            TLV[buffer[currentIndex]] = iBuffer;
        currentIndex += 2 + buffer[currentIndex + 1];
    }
    return TLV;
}
exports.default = parseTLV;
