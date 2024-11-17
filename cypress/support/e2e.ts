import './commands';

require('@cypress/xpath');
require('cy-verify-downloads').addCustomCommand();

beforeEach(() => {
	cy.session('performance', () => {
		cy.visit('/', {
			timeout: 100000,
		});
	});
});

Cypress.on('uncaught:exception', (err, runnable) => {
	return false;
});

declare global {
	namespace Cypress {
		interface Chainable {
			xpath(xpathSelector: string): Chainable;
			getItemMenu(textoItem: string): Chainable;
			verificaMensagemInicial(): Chainable;
			visitarToolsQA(partialURL: string): Chainable;
			validateColors(tipo: ResponseType, locator: string): Chainable;
			/**
			 * @description Verifica se a URL da página atual é exatamente igual a URL base + URL parcial passada como parâmetro
			 * @param urlParcial URL parcial enviada, segue o padrão '/url-desejada'
			 * @example cy.verificaURL('/url-desejada/x')
			 */
			verificaUrl(partialURL: string): Chainable;
			validateOldUserForm(userData: Array<string>, exist: boolean): Chainable;
			/**
			 * @param textOfFile
			 * @param options
			 * @tutorial https://www.npmjs.com/package/cy-verify-downloads
			 */
			verifyDownload(textOfFile: string, options?: Object): Chainable;
		}
	}
}
