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
		it('Verifica URL da página', () => {
			cy.verificaUrl(ElementsLink.WebTables);
		});
	});
	describe('Verifica apresentação dos usuários na tabela', () => {
		it('Verifica as colunas ', () => {
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

		it('Verifica os dados da fixture por ordenação e valor', () => {
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

	describe('Verifica a pesquisa dos usuários apresentados na tabela', () => {
		// TODO: ANTES DE INICIAR A ESCRITAS DOS CENÁRIOS, ADICIONAR AO CHECKLIST
		// it('Pesquisa por usuário com dado Inexistente - dado utilizado:Firstname',() => {})
		// it('Pesquisa por usuário com dado Parcial - dado utilizado:Email', () => {})
	});
});
