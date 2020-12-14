import { CompletionItem } from 'vscode-languageserver';
import { COMPLETION_LISTENER } from '../compiler/antlr4ts_proxy';

export function getCompletionItems(): CompletionItem[] {
	
	let completion: CompletionItem[] = new Array<CompletionItem>();

	const myarray: string[] = COMPLETION_LISTENER!.completionList;
	const uniqueArr = [...new Set(myarray)];
	
	completion = uniqueArr.map(text => CompletionItem.create(text));

	return completion;
}