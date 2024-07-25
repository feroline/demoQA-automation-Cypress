// Import commands.js using ES2015 syntax:
import './commands';
require('@cypress/xpath');

declare global {
	namespace Cypress {
		interface Chainable {
			xpath(xpathSelector: string): Chainable;
			getItemMenu(textoItem: string): Chainable;
			verificaMensagemInicial(): Chainable;
			visitarToolsQA(partialURL?: string): Chainable;
			validateColors(tipo: ResponseType, locator: string): Chainable;
			/**
			 * @description Verifica se a URL da página atual é exatamente igual a URL base + URL parcial passada como parâmetro
			 * @param urlParcial URL parcial enviada, segue o padrão '/url-desejada'
			 * @example cy.verificaURL('/url-desejada/x')
			 */
			verificaUrl(partialURL: string): Chainable;
		}
	}
}
