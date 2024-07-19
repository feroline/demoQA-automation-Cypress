// Import commands.js using ES2015 syntax:
import './commands';
require('@cypress/xpath');

declare global {
	namespace Cypress {
		interface Chainable {
			xpath(xpathSelector: string): Chainable;
			getItemMenu(textoItem: string): Chainable;
			verificaMensagemInicial(): Chainable;
			visitarToolsQA(): Chainable;
			validateColors(tipo: ResponseType, locator: string): Chainable;
		}
	}
}
