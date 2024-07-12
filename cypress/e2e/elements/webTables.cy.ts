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
		cy.fixture('/webTables/data').then((colunas) => {
			WebTables.headerTable()
				.should('contain.text', `${colunas.firstname}`)
				.should('contain.text', `${colunas.lastnamae}`)
				.should('contain.text', `${colunas.age}`)
				.should('contain.text', `${colunas.salary}`)
				.should('contain.text', `${colunas.department}`)
				.should('contain.text', `${colunas.action}`);
		});
	});
	it.only('Verifica se os dados estão sendo apresentados na tebela', () => {
		cy.fixture('/webTables/data').then((datas) => {
			for (let i in datas) {
				cy.log('Dados da linha da tabela: ');

				WebTables.rowTable(parseInt(i) + 1)
					.should('contain.text', `${datas[i].firstname}`)
					.and('contain.text', `${datas[i].lastname}`)
					.and('contain.text', `${datas[i].age}`)
					.and('contain.text', `${datas[i].salary}`)
					.and('contain.text', `${datas[i].department}`);
			}
		});
	});
});
