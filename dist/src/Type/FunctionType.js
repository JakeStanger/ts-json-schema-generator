"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseType_1 = require("./BaseType");
class FunctionType extends BaseType_1.BaseType {
    constructor(argumentOrder, argumentTypes, returnType) {
        super();
        this.argumentOrder = argumentOrder;
        this.argumentTypes = argumentTypes;
        this.returnType = returnType;
    }
    getId() {
        return "("
            + Object.values(this.argumentTypes).map((item) => item.getId()).join(",")
            + ") => "
            + this.returnType.getId();
    }
    getArgumentOrder() {
        return this.argumentOrder;
    }
    getArgumentTypes() {
        return this.argumentTypes;
    }
    getReturnType() {
        return this.returnType;
    }
}
exports.FunctionType = FunctionType;
//# sourceMappingURL=FunctionType.js.map