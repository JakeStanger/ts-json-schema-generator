"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const BooleanType_1 = require("../Type/BooleanType");
class ParameterNodeParser {
    supportsNode(node) {
        return node.kind === ts.SyntaxKind.Parameter;
    }
    createType(node, context) {
        console.log(node);
        console.log(Object.keys(node));
        return new BooleanType_1.BooleanType();
    }
}
exports.ParameterNodeParser = ParameterNodeParser;
//# sourceMappingURL=ParameterNodeParser.js.map