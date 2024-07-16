import HomePage from '../../pagesObjects/home/HomePage';
import ElementsLink from '../../support/Enum/links/Elements';
const Home = new HomePage();

beforeEach(() => {
	cy.visitarToolsQA();
	Home.elements().click();
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
