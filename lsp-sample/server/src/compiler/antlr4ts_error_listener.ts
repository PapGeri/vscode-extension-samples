import { Recognizer, Token } from 'antlr4ts';
import { ANTLRErrorListener } from 'antlr4ts/ANTLRErrorListener';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { Diagnostic, DiagnosticSeverity } from 'vscode-languageserver';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { Override } from 'antlr4ts/Decorators';
 
export class MyErrorListener implements ANTLRErrorListener<Token> {

	private textDocument: TextDocument;
	private diagnostics: Diagnostic[];

	constructor(text: TextDocument) {
		this.textDocument = text;
		this.diagnostics = new Array<Diagnostic>();
	}  

	public isEmpty(): boolean {
		return this.diagnostics.length === 0;
	}

	get diagnostic(): Diagnostic[] {
		return this.diagnostics;
	}

	@Override
	public syntaxError<T extends Token>(_recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, _line: number, _charPositionInLine: number, msg: string, _e: RecognitionException | undefined): void {
		
		let start = offendingSymbol!.startIndex;
		let stop = offendingSymbol!.stopIndex;
		// terminalNodeon meg getsymbol es annak az indexei jok
		
		if(start >= 0 && stop >= 0) {
			//if(offendingSymbol !instanceof TerminalNode) {
				let currentDiagnostic: Diagnostic = {
					
					severity: DiagnosticSeverity.Error,
					range:
					{
						start: this.textDocument.positionAt(start),
						end: this.textDocument.positionAt(stop),
						// start: this.textDocument.positionAt(offendingSymbol._symbol.startIndex),
						// end: this.textDocument.positionAt(offendingSymbol._symbol.startIndex)	
					},
					message: msg,
					source: 'P4 Language Server',
				};
				console.log(currentDiagnostic);
				console.log(this.textDocument.getText(currentDiagnostic.range));
				this.diagnostics.push(currentDiagnostic);
			//}
		}
	}
}