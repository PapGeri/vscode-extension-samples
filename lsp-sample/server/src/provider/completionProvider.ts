import { CompletionItem } from 'vscode-languageserver';
import { COMPLETION_LISTENER } from '../compiler/antlr4ts_proxy';

export function getCompletionItems(): CompletionItem[] {

	// lekerni hogy eppen mit irt be eddig,
	// String.startsWith() a listener listajaban levo terminalisok mindegyikevel
	// Ha true akkor berakni a completionItem-be
	

	let completion: CompletionItem[] = new Array<CompletionItem>();

	const myarray: string[] = COMPLETION_LISTENER!.completionList;
	const uniqueArr = [...new Set(myarray)];
	

	// let currentRange: Range = {
	// 	start : { line: position.line, character: position.character-1},
	// 	end : { line: position.line, character: position.character}
	// };

	// console.log(textDoc?.getText(currentRange));
	completion = uniqueArr.map(text => CompletionItem.create(text));

	return completion;
}