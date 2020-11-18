import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { P4grammarListener } from '../antlr_autogenerated/P4grammarListener';
import { Hover } from 'vscode-languageserver';
import { StartContext } from '../antlr_autogenerated/P4grammarParser';

export class MyListener implements P4grammarListener {

	private myMap: Map<string,TerminalNode>;
	//private myMap: Map<number,string>;
	private myList: string[];

	constructor(){
		this.myList = new Array<string>();
		this.myMap = new Map<string,TerminalNode>();
		//this.myMap = new Map<number,string>();
	}

	getHoverContent(word: string): Hover | undefined {
		
		let content: string | undefined;
		if(this.myMap.has(word)){
			content = this.myMap.get(word)?.payload.stopIndex.toString();
			console.log('megtalaltam')
		} else {
			content = `The word I am pointing at:${word}`;
			console.log('nem talaltam meg')
		}

		// for(let tokens of this.myList){
		// 	if(word == tokens.text){
		// 		content = {
		// 			contents: tokens.payload.charPositionInLine.toString()
		// 		}
		// 	}
		// }
		
		// for(let key of this.myMap.keys()){
		// 	console.log(key);
		// }
		
		// console.log(this.myList);
		return {
			contents: content!
		};
	}

	enterStart(ctx: StartContext){
		this.myMap = new Map();
		// ctx.start.startIndex;
		// belso pozicioknal
		// start az elso tokenje, stop legutolso
	}

	visitTerminal(node: TerminalNode) {
		//this.myList.push(node.text);
		this.myMap.set(node.text, node);
		
	}
}