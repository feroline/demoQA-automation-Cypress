import WebTablesPage from '../../pageObjects/webTables/WebTablePage';
import ElementsLink from '../../support/Enum/links/Elements';

const WebTables = new WebTablesPage();

beforeEach(() => {
	cy.visitarToolsQA(ElementsLink.WebTables);
});

describe('Testes na WebTable', () => {
	const colunasFixture = '/webTables/colunas';
	const dataFixture = '/webTables/data';

	describe('Tela inicial', () => {
		it.only('Verifica URL da página', () => {
			cy.verificaURL(ElementsLink.WebTables);
			// cy.url().should('equal', Cypress.config('baseUrl') + ElementsLink.WebTables);
		});
	});
	describe('Verifica apresentação dos dados na tabela', () => {
		it('Verifica se as colunas estão sendo apresentadas na tabela', () => {
			WebTables.headerTable().within(($headerTable) => {
				cy.fixture(colunasFixture).then((coluna) => {
					expect($headerTable).to.contain(coluna.firstname);
					expect($headerTable).to.contain(coluna.lastname);
					expect($headerTable).to.contain(coluna.age);
					expect($headerTable).to.contain(coluna.salary);
					expect($headerTable).to.contain(coluna.department);
					expect($headerTable).to.contain(coluna.action);
				});
			});
		});

		it('Verifica se os dados da fixture, estão sendo apresentados com os mesmos valores e ordenação, na tabela ', () => {
			cy.fixture(dataFixture).then((data) => {
				for (let i in data) {
					WebTables.rowTable(parseInt(i)).within(($row) => {
						expect($row).to.contain(data[i].firstname);
						expect($row).to.contain(data[i].lastname);
						expect($row).to.contain(data[i].age);
						expect($row).to.contain(data[i].salary);
						expect($row).to.contain(data[i].department);
					});
				}
			});
		});
	});
});
