import { CompletionListener } from '../src/listeners/CompletionListener';
import { getFileContentFromFileName, setupAntlr } from './utils';
import { getCompletionItems } from '../src/provider/CompletionProvider';

describe('Completion Provider and Listener', () => {
	it('is the first test', () => {
		expect(true).toBeTruthy();
	})

	describe('Function with empty file', () => {
		let compListener = new CompletionListener();
		let file = getFileContentFromFileName('empty.p4');
		setupAntlr(file, compListener);

		it('should return an empty array', () => {
			expect(getCompletionItems()).toHaveLength(0);
		})
	})

})