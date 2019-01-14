import { Definition } from "../Schema/Definition";
import { SubTypeFormatter } from "../SubTypeFormatter";
import { BaseType } from "../Type/BaseType";
import { FunctionType } from "../Type/FunctionType";
import { TypeFormatter } from "../TypeFormatter";
export declare class FunctionTypeFormatter implements SubTypeFormatter {
    private childTypeFormatter;
    constructor(childTypeFormatter: TypeFormatter);
    supportsType(type: FunctionType): boolean;
    getDefinition(type: FunctionType): Definition;
    getChildren(type: FunctionType): BaseType[];
}
