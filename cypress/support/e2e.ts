// Import commands.js using ES2015 syntax:
import './commands';
require('@cypress/xpath');

declare global {
	namespace Cypress {
		interface Chainable {
			xpath(xpathSelector: string): Chainable<any>;
			getItemMenu(textoItem: string): Chainable<any>;
			verificaMensagemInicial(): Chainable<any>;
			visitarToolsQA(): Chainable<any>;
		}
	}
}
