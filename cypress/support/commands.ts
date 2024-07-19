Cypress.Commands.add('getItemMenu', (textoItem: string) => {
	cy.xpath(
		`//div[contains(@class,'show') and contains(@class,'collapse') ]/ul/li/span[contains(.,'${textoItem}')]`
	);
});

Cypress.Commands.add('verificaMensagemInicial', () => {
	const mensagem = 'Please select an item from left to start practice.';
	return cy
		.xpath(`//div[contains(@class,'playgound-body')][contains(.,'${mensagem}')]`)
		.should('be.visible');
});

Cypress.Commands.add('visitarToolsQA', () => {
	cy.visit('/', { failOnStatusCode: false });
	Cypress.on('uncaught:exception', (err, runnable) => {
		return false;
	});
});

import Colors from './Enum/Colors';
Cypress.Commands.add(
	'validateColors',
	(tipo: ResponseType, locator: string) => {
		if (tipo == 'error') {
			cy.get(locator, { timeout: 6000 }).and('css', 'border-color', Colors.Error);
		} else if (tipo == 'default') {
			cy
				.get(locator, { timeout: 6000 })
				.and('css', 'border-color', Colors.Standard);
		} else if ('basic') {
			cy
				.get(locator, { timeout: 6000 })
				.and('css', 'border-color', Colors.Success);
		}
	}
);
