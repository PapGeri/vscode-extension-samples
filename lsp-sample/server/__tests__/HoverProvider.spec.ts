import { HoverListener } from '../src/listeners/HoverListener';
import { getFileContentFromFileName, setupAntlr } from './utils';
import { getCurrentToken, tokenIsDeclaration, isGlobalRule, getChildContent } from '../src/provider/HoverProvider';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';


describe('Hover Provider and Listener', () => {
	let hoverListener: HoverListener = new HoverListener();

	describe('Functions with empty file', () => {
		const file = getFileContentFromFileName('empty.p4');
		setupAntlr(file, hoverListener);
		const mockNode: RuleNode | undefined = undefined;

		it('getCurrentToken should return undefined', () => {
			let list: TerminalNode[] = hoverListener.nodeList;
			expect(getCurrentToken(0, list)).toBe(undefined);
		})

		it('tokenIsDeclaration should return false', () => {
			expect(tokenIsDeclaration(mockNode)).toBeFalsy();
		})

		it('isGlobalRule should return undefined', () => {
			expect(isGlobalRule(mockNode)).toBe(undefined)
		})

		it('getChildContent should return empty string', () => {
			expect(getChildContent(mockNode)).toEqual('');
		})

	})

	describe('Functions with good p4 file', () => {
		const file = getFileContentFromFileName('HoverTestFile.p4');
		setupAntlr(file, hoverListener);

		describe('Working good with good data', () => {
			it('should return some value', () => {
				let list: TerminalNode[] = hoverListener.nodeList;
				expect(getCurrentToken(34, list)).toBeInstanceOf(TerminalNode);
			})
	
			it('should test tokenIsDeclaration Function', () => {
				let list: TerminalNode[] = hoverListener.nodeList;
				let token = list[5];
				expect(tokenIsDeclaration(token._parent)).toBeTruthy();
			})
		})
		
		describe('Working good with wrong data', () => {

			it('should return undefined when the index is wrong', () => {
				let list: TerminalNode[] = hoverListener.nodeList;
				let testResult = getCurrentToken(-3, list);
				expect(testResult).toEqual(undefined);
			})

			it('sould retun false', () => {
				let list: TerminalNode[] = hoverListener.nodeList;
				let token = list[3];
				expect(tokenIsDeclaration(token._parent)).toBeFalsy();
			})
		})
		
	})

})
