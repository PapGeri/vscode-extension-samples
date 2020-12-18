import { P4grammarListener } from '../antlr_autogenerated/P4grammarListener';
import { 
	VariableDeclarationContext,
	StartContext, 
	NameContext, 
	ActionDeclarationContext, 
	StructTypeDeclarationContext, 
	TableDeclarationContext, 
	ControlTypeDeclarationContext, 
	ParserTypeDeclarationContext 
} from '../antlr_autogenerated/P4grammarParser';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { RuleContext } from 'antlr4ts/RuleContext';

export enum ContextDeclarationEnum {
	VARIABLE = 'variable',
	ACTION = 'action',
	STRUCT = 'struct',
	TABLE = 'table',
	CONTROL = 'control',
	PARSER = 'parser'
}

export interface ContextInfo{
	type: ContextDeclarationEnum,
	name: RuleContext,
}

export class CompletionResolveListener implements P4grammarListener {

	private terminalTextList: Array<string>;
	private resolverMap: Map<RuleContext | undefined, ContextInfo>;

	constructor(){
		this.terminalTextList = new Array<string>();
		this.resolverMap = new Map<RuleContext | undefined, ContextInfo>();
	}

	visitTerminal(node: TerminalNode): void {
		this.terminalTextList.push(node.text);
	}

	enterStart(ctx: StartContext): void {
		this.resolverMap = new Map<RuleContext | undefined, ContextInfo>();
	}

	enterVariableDeclaration(ctx: VariableDeclarationContext): void {
		this.resolverMap.set(ctx, {type: ContextDeclarationEnum.VARIABLE, name: ctx});
	}

	enterActionDeclaration(ctx: ActionDeclarationContext): void {
		this.resolverMap.set(ctx, {type: ContextDeclarationEnum.ACTION, name: ctx});
	}

	enterStructTypeDeclaration(ctx: StructTypeDeclarationContext): void {
		this.resolverMap.set(ctx, {type: ContextDeclarationEnum.STRUCT, name: ctx});
	}

	enterTableDeclaration(ctx: TableDeclarationContext): void {
		this.resolverMap.set(ctx, {type: ContextDeclarationEnum.STRUCT, name: ctx});
	}

	enterControlTypeDeclaration(ctx: ControlTypeDeclarationContext): void {
		this.resolverMap.set(ctx, {type: ContextDeclarationEnum.CONTROL, name: ctx});
	}

	enterParserTypeDeclaration(ctx: ParserTypeDeclarationContext): void {
		this.resolverMap.set(ctx, {type: ContextDeclarationEnum.PARSER, name: ctx});
	}

	get tokenTextList(): Array<string> {
		return this.terminalTextList;
	}

	get compResolvMap(): Map<RuleContext | undefined, ContextInfo> {
		return this.resolverMap;
	}
}

