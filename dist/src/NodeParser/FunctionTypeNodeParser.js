"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const FunctionType_1 = require("../Type/FunctionType");
const isHidden_1 = require("../Utils/isHidden");
class FunctionTypeNodeParser {
    constructor(typeChecker, childNodeParser) {
        this.typeChecker = typeChecker;
        this.childNodeParser = childNodeParser;
    }
    supportsNode(node) {
        return node.kind === ts.SyntaxKind.FunctionType;
    }
    createType(node, context) {
        const hidden = isHidden_1.referenceHidden(this.typeChecker);
        const visibleParams = node.parameters.filter((item) => !hidden(item));
        const argumentOrder = visibleParams.map(item => item.symbol.escapedName);
        const argumentTypes = node.parameters
            .filter((item) => !hidden(item))
            .reduce((map, item) => {
            if (item.type) {
                map[item.symbol.escapedName] = this.childNodeParser.createType(item.type, context);
                return map;
            }
            throw new Error("FunctionTypeNodeParser: parameter does not have a type");
        }, {});
        return new FunctionType_1.FunctionType(argumentOrder, argumentTypes, this.childNodeParser.createType(node.type, context));
    }
}
exports.FunctionTypeNodeParser = FunctionTypeNodeParser;
//# sourceMappingURL=FunctionTypeNodeParser.js.map