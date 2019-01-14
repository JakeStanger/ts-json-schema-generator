"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FunctionType_1 = require("../Type/FunctionType");
class FunctionTypeFormatter {
    constructor(childTypeFormatter) {
        this.childTypeFormatter = childTypeFormatter;
    }
    supportsType(type) {
        return type instanceof FunctionType_1.FunctionType;
    }
    getDefinition(type) {
        const argTypes = type.getArgumentTypes();
        const propertyOrder = type.getArgumentOrder();
        const returnType = type.getReturnType();
        const properties = {
            __returnValue__: this.childTypeFormatter.getDefinition(returnType),
        };
        Object.entries(argTypes).forEach(([key, value]) => {
            properties[key] = this.childTypeFormatter.getDefinition(value);
        });
        return {
            type: "function",
            properties,
            propertyOrder,
        };
    }
    getChildren(type) {
        return Object.values(type.getArgumentTypes()).reduce((result, item) => [
            ...result,
            ...this.childTypeFormatter.getChildren(item),
        ], []);
    }
}
exports.FunctionTypeFormatter = FunctionTypeFormatter;
//# sourceMappingURL=FunctionTypeFormatter.js.map