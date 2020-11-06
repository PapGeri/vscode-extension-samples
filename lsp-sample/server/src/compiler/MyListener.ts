import { Override } from 'antlr4ts/Decorators';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { P4grammarListener } from '../antlr_autogenerated/P4grammarListener';


export default class MyListener implements P4grammarListener {

	@Override
	public visitTerminal(node: TerminalNode) {
		console.log(`Here is the visitTerminal function: ${node.text}`)
	}
}