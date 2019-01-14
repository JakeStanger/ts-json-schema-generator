"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const VoidType_1 = require("../Type/VoidType");
class VoidNodeParser {
    supportsNode(node) {
        return node.kind === ts.SyntaxKind.VoidKeyword;
    }
    createType(node, context) {
        return new VoidType_1.VoidType();
    }
}
exports.VoidNodeParser = VoidNodeParser;
//# sourceMappingURL=VoidNodeParser.js.map