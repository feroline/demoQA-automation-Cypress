// TODO: Adicionar cenário na tela inicial que valida todos os itens do menu;

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

Cypress.Commands.add('visitarToolsQA', (url: string) => {
	cy.visit(url, { failOnStatusCode: false, timeout: 130000 });
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
		} else if (tipo == 'basic') {
			cy
				.get(locator, { timeout: 6000 })
				.and('css', 'border-color', Colors.Success);
		}
	}
);

Cypress.Commands.add('verificaUrl', (partialURL: string) => {
	cy.url().should('equal', Cypress.config('baseUrl') + partialURL);
});

Cypress.Commands.add(
	'validateOldUserForm',
	(userData: Array<string>, exist: boolean) => {
		if (exist === true) {
			userData.forEach((dado) => {
				cy.get(`input[value="${dado}"]`).should('exist');
			});
		} else {
			userData.forEach((dado) => {
				cy.get(`input[value="${dado}"]`).should('not.exist');
			});
		}
	}
);
