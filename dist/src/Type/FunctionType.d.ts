import { BaseType } from "./BaseType";
export declare class FunctionType extends BaseType {
    private argumentOrder;
    private argumentTypes;
    private returnType;
    constructor(argumentOrder: string[], argumentTypes: {
        [key: string]: BaseType;
    }, returnType: BaseType);
    getId(): string;
    getArgumentOrder(): string[];
    getArgumentTypes(): {
        [key: string]: BaseType;
    };
    getReturnType(): BaseType;
}
