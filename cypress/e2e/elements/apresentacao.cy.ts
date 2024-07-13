import HomePage from '../../pages/home/HomePage';
const Home = new HomePage();

beforeEach(() => {
	cy.visitarToolsQA();
	Home.getElements().click();
});

describe('Testes da página Elements', () => {
	describe('Tela inicial', () => {
		it('Verifica mensagem apresentada', () => {
			cy.verificaMensagemInicial();
		});
	});
});
