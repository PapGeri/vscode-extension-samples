import { CompletionItem, Position } from 'vscode-languageserver';
import { Range, TextDocument } from 'vscode-languageserver-textdocument';
import { MY_LISTENER } from '../compiler/antlr4ts_proxy';

export function getCompletionItems(textDoc: TextDocument | undefined, position: Position): CompletionItem[] {

	// lekerni hogy eppen mit irt be eddig,
	// String.startsWith() a listener listajaban levo terminalisok mindegyikevel
	// Ha true akkor berakni a completionItem-be
	// EZ

	let completion: CompletionItem[] = new Array<CompletionItem>();

	const myarray: string[] = MY_LISTENER!.compList;
	const uniqueArr = [...new Set(myarray)];
	
	// const result: CompletionItem[] = answer.map((member,index) => member.label += myarray[index]);

	// const result: CompletionItem[] = answer.map((oldObj, index) => {
	// 	let newObj: CompletionItem = {label : ''}
	// 	newObj['label'] = myarray[index];
	// 	return newObj;
	// })
	
	let startpos: Range = {
		start : { line: position.line, character: position.character},
		end : { line: position.line, character: position.character+1}
	};

	console.log(textDoc?.getText(startpos));
	completion = uniqueArr.map(text => CompletionItem.create(text));
	
	// console.log(answer[0])
	// console.log(answer[1])


	return completion;
}