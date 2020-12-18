/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
	createConnection,
	TextDocuments,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	HoverParams,
	Hover
} from 'vscode-languageserver';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

import { getDataFromAntlr, getDiagnosticsFromAntlr } from './compiler/antlr4ts_proxy';
import { getHoverContent } from './provider/HoverProvider';
import { getCompletionItems } from './provider/CompletionProvider';
import { CompletionResolveProvider } from './provider/CompletionResolveProvider';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
export let connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager. 
let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;
let hasDiagnosticRelatedInformationCapability: boolean = false;

connection.onInitialize((params: InitializeParams) => {
	let capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we fall back using global settings.
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true,
			},
			hoverProvider: true,
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };

// Cache the settings of all open documents
let documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	}
});


// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

// documents.onDidSave(e => {
// 	connection.sendDiagnostics({ uri: e.document.uri, diagnostics: getDiagnosticsFromAntlr()});
// })

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	// await sleep(3000);
	// getDataFromAntlr(documents.get(change.document.uri)!);
	// let mySetting = await getDocumentSettings(change.document.uri);
	getDataFromAntlr(change.document);
	connection.sendDiagnostics({ uri: change.document.uri, diagnostics: getDiagnosticsFromAntlr()});
	
});

connection.onHover(({textDocument, position}: HoverParams): Hover | undefined => {

	const document = documents.get(textDocument.uri);
	const currentIndexFromDocument: number | undefined  = document?.offsetAt(position);
	
	const finalContent: Hover | undefined = getHoverContent(currentIndexFromDocument!);
	return finalContent? finalContent : undefined;
});


// This handler provides the initial list of the completion items.
connection.onCompletion(({}: TextDocumentPositionParams): CompletionItem[] => {

	const finalCompletion: CompletionItem[] = getCompletionItems();
	return finalCompletion;
});

connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
	
	let currentItem: CompletionItem = CompletionResolveProvider(item);
	return currentItem;
});

// connection.onSignatureHelp(SignatureHelpProvider);


documents.listen(connection);

connection.listen();