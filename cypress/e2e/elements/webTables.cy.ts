import HomePage from '../../pages/HomePage';
import WebTablesPage from '../../pages/Elements/WebTablesPage';
import { forEach } from '../../../node_modules/cypress/types/lodash/index';

const Home = new HomePage();
const WebTables = new WebTablesPage();

beforeEach(() => {
	cy.visitarToolsQA();
	Home.elements().click();
	WebTables.webTablesMenu();
});

describe('Partição Visualizar Dados', () => {
	it('Verifica se as colunas estão sendo apresentadas na tabela', () => {
		cy.fixture('/webTables/colunas').then((colunas) => {
			WebTables.headerTable()
				.should('contain.text', `${colunas.firstname}`)
				.should('contain.text', `${colunas.lastnamae}`)
				.should('contain.text', `${colunas.age}`)
				.should('contain.text', `${colunas.salary}`)
				.should('contain.text', `${colunas.department}`)
				.should('contain.text', `${colunas.action}`);
		});
	});
	it('Verifica se os dados estão sendo apresentados na tebela', () => {
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

describe('Partição Pesquisar Dados', () => {
	describe('Pesquisar Nome', () => {
		it('Pesquisa com string parcial', () => {
			cy.fixture('/webTables/data').then((data) => {
				let firstname = data[0].firstname;

				for (let i = 0; i <= 3; i++) {
					WebTables.setSearchBox(firstname[i]);
				}

				WebTables.searchBtn().click();
				WebTables.rowTable().should('contain.text', firstname);
			});
		});

		it('Pesquisa com string LowerCase', () => {
			cy.fixture('/webTables/data').then((data) => {
				let firstname = data[0].firstname;

				WebTables.setSearchBox(firstname.toLowerCase());
				WebTables.searchBtn().click();
				WebTables.rowTable().should('contain.text', firstname);
			});
		});
		it('Pesquisa com string UpperCase', () => {
			cy.fixture('/webTables/data').then((data) => {
				let firstname = data[0].firstname;

				WebTables.setSearchBox(firstname.toUpperCase());
				WebTables.searchBtn().click();
				WebTables.rowTable().should('contain.text', firstname);
			});
		});
	});
});
