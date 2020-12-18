import { CompletionItem } from 'vscode-languageserver';
import { COMPLETION_LISTENER } from '../compiler/antlr4ts_proxy';

export function getCompletionItems(): CompletionItem[] {
	
	let completionItems: CompletionItem[] = new Array<CompletionItem>();

	const tokenArray: string[] | undefined = COMPLETION_LISTENER?.completionList;
	const uniqueArr = [...new Set(tokenArray)];
	
	completionItems = uniqueArr.map(text => CompletionItem.create(text));

	return completionItems;
}