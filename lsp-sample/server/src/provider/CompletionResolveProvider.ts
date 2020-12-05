import { CompletionItem } from 'vscode-languageserver';
import { RESOLVE_LISTENER } from '../compiler/antlr4ts_proxy';
import { RuleContext } from 'antlr4ts/RuleContext';
import { CompletionResolveListener, ContextInfo } from '../listeners/CompletionResolveListener';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';

export function CompletionResolveProvider(item: CompletionItem): CompletionItem {

	let helperMap: Map<RuleContext | undefined, ContextInfo> | undefined = RESOLVE_LISTENER?.compResolvMap;

	for(let [context, info] of helperMap!) {
		if(item.label == info.name) {
			item.detail = `(${info.type}) ` + getDeclarationText(context);
			item.documentation = getDocumentation(info);
		}
	}

	return item;
}

function getDeclarationText(context: RuleContext | undefined): string {

	let resultText: string = '';
	let tokenTextListener = new CompletionResolveListener();
	let allTokenText: string[] = tokenTextListener.tokenTextList;

	ParseTreeWalker.DEFAULT.walk(tokenTextListener, context!);

	for(let index = 0; index < allTokenText.length; index++){
		let currentToken: string = allTokenText[index];
		if(index === 0){
			resultText += currentToken;
		}
		else if(currentToken.length < 2) {
			resultText += currentToken;
		} else {
			resultText += ' ' + currentToken;
		}
	}

	return resultText;
}

function getDocumentation(type: ContextInfo): string{

	let documentation: string = '';
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