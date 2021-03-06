"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const symbolAtNode_1 = require("./symbolAtNode");
function isHidden(symbol) {
    const jsDocTags = symbol.getJsDocTags();
    if (!jsDocTags || !jsDocTags.length) {
        return false;
    }
    const jsDocTag = jsDocTags.find((tag) => tag.name === "hide");
    return !!jsDocTag;
}
exports.isHidden = isHidden;
function isNodeHidden(node) {
    const symbol = symbolAtNode_1.symbolAtNode(node);
    if (!symbol) {
        return null;
    }
    return isHidden(symbol);
}
exports.isNodeHidden = isNodeHidden;
function referenceHidden(typeChecker) {
    return function (node) {
        if (node.kind === ts.SyntaxKind.TypeReference) {
            return isHidden(typeChecker.getSymbolAtLocation(node.typeName));
        }
        return isNodeHidden(node);
    };
}
exports.referenceHidden = referenceHidden;
//# sourceMappingURL=isHidden.js.map