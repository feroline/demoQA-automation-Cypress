import HomePage from '../../pages/HomePage';
import WebTablesPage from '../../pages/Elements/WebTablesPage';

const Home = new HomePage();
const WebTables = new WebTablesPage();

beforeEach(() => {
	cy.visitarToolsQA();
	Home.elements().click();
	WebTables.webTablesMenu();
});

describe('Visualizar Dados', () => {
	it('Verifica se as colunas estão sendo apresentadas na tabela', () => {
		cy.fixture('/webTables/data').then((data) => {
			cy
				.get('div.ReactTable div.rt-thead.-header')
				.should('contain.text', `${data.colunas.firstname}`)
				.should('contain.text', `${data.colunas.lastnamae}`)
				.should('contain.text', `${data.colunas.age}`)
				.should('contain.text', `${data.colunas.salary}`)
				.should('contain.text', `${data.colunas.department}`)
				.should('contain.text', `${data.colunas.action}`);
		});
	});
	it.only('Verifica se os dados estão sendo apresentados na tebela', () => {
		cy.fixture('/webTables/data').then((data) => {
			cy
				.get('div[role="rowgroup"]:nth-child(1)')
				.should('contain.text', `${data.data00.firstname}`)
				.and('contain.text', `${data.data00.lastname}`)
				.and('contain.text', `${data.data00.age}`)
				.and('contain.text', `${data.data00.salary}`)
				.and('contain.text', `${data.data00.department}`);
			cy
				.get('div[role="rowgroup"]:nth-child(2)')
				.should('contain.text', `${data.data01.firstname}`)
				.and('contain.text', `${data.data01.lastname}`)
				.and('contain.text', `${data.data01.age}`)
				.and('contain.text', `${data.data01.salary}`)
				.and('contain.text', `${data.data01.department}`);
			cy
				.get('div[role="rowgroup"]:nth-child(3)')
				.should('contain.text', `${data.data02.firstname}`)
				.and('contain.text', `${data.data02.lastname}`)
				.and('contain.text', `${data.data02.age}`)
				.and('contain.text', `${data.data02.salary}`)
				.and('contain.text', `${data.data02.department}`);
		});
	});
});
