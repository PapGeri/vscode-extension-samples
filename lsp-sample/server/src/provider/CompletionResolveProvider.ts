import { CompletionItem } from 'vscode-languageserver';
import { RESOLVE_LISTENER } from '../compiler/antlr4ts_proxy';
import { RuleContext } from 'antlr4ts/RuleContext';
import { CompletionResolveListener, ContextInfo } from '../listeners/CompletionResolveListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';

export function CompletionResolveProvider(item: CompletionItem): CompletionItem {

	let helperMap: Map<RuleContext | undefined, ContextInfo> | undefined = RESOLVE_LISTENER?.compResolvMap;

	for(let [context, info] of helperMap!) {
		if(item.label === info.name) {
			item.detail = `(${info.type}) ` + getDeclarationText(context);
			item.documentation = getDocumentation(info);
		}
	}

	return item;
}

export function getDeclarationText(context: RuleContext | undefined): string {

	let tokenTextListener = new CompletionResolveListener();
	let allTokenText: string[] = tokenTextListener.tokenTextList;

	let walker: ParseTreeWalker = new ParseTreeWalker();
	walker.walk(tokenTextListener, context!);

	return getFormattedString(allTokenText);
}

export function getFormattedString(list: string[]): string {

	let result: string = '';

	for(let i = 0; i < list.length; i++) {
		if(i === 0){
			result += list[i];
		} else if(list[i].length < 2) {
			result += list[i];
		} else {
			result += ' ' + list[i];
		}
	}

	return result;
}

export function getDocumentation(type: ContextInfo): string{

	let documentation: string | undefined;
	switch(type.type) {
		case 'action': {
			documentation = 'This is an action declaration';
			break;
		}
		case 'variable': {
			documentation = 'This is a variable declaration';
			break;
		}
		case 'struct': {
			documentation = 'This is a struct declaration';
			break;
		}
		case 'table': {
			documentation = 'this is a table declaration';
			break;
		}
		case 'control': {
			documentation = 'This is a control declaration';
			break;
		}
		case 'parser': {
			documentation = 'This is a parser declaration'
			break;
		}
		default:
			documentation = '';
			break;
	}

	return documentation;
}