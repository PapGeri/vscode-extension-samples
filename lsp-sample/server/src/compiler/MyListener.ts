import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { P4grammarListener } from '../antlr_autogenerated/P4grammarListener';
import { Hover } from 'vscode-languageserver';
import { StartContext } from '../antlr_autogenerated/P4grammarParser';

export class MyListener implements P4grammarListener {

	private myList: TerminalNode[];

	constructor(){
		this.myList = new Array<TerminalNode>();
	}

	getHoverContent(index: number): Hover | undefined {
		
		let content: string | undefined = "Couldnt find anythang";
		for(let token of this.myList){
			if((index == token.symbol.startIndex && index == token.symbol.stopIndex) || (index <= token.symbol.stopIndex && index >= token.symbol.startIndex)){
				content = token.text;
			}
		}
		
		return {
			contents: content!
		};
	}

	enterStart(ctx: StartContext){
		this.myList = [];
		// ctx.start.startIndex;
		// belso pozicioknal
		// start az elso tokenje, stop legutolso
	}

	visitTerminal(node: TerminalNode) {
		this.myList.push(node);
	}
}