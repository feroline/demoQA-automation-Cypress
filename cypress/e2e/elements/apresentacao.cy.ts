import ElementsLink from '../../support/Enum/links/Elements';

beforeEach(() => {
	cy.visitarToolsQA(ElementsLink.Elements);
	// cy.visit(ElementsLink.Elements, { failOnStatusCode: false, timeout: 20000 });
});

describe('Testes da página Elements', () => {
	describe('Tela inicial', () => {
		it('Verifica URL da página', () => {
			cy.url().should('include', ElementsLink.Elements);
		});

		it('Verifica mensagem apresentada', () => {
			cy.verificaMensagemInicial();
		});
	});
});
