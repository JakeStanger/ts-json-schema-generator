import * as ts from "typescript";
import { Context } from "../NodeParser";
import { SubNodeParser } from "../SubNodeParser";
import { BaseType } from "../Type/BaseType";
export declare class ParameterNodeParser implements SubNodeParser {
    supportsNode(node: ts.ParameterDeclaration): boolean;
    createType(node: ts.ParameterDeclaration, context: Context): BaseType;
}
