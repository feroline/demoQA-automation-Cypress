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
