import ElementsLink from '@enum/links/Elements';

beforeEach(() => {
	cy.visitarToolsQA(ElementsLink.Elements);
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
