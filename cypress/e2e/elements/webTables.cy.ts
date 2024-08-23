import { forIn } from '../../../node_modules/cypress/types/lodash/index';
import WebTablesPage from '../../pageObjects/webTables/WebTablePage';
import ElementsLink from '../../support/Enum/links/Elements';

const WebTables = new WebTablesPage();

const msgTabbleNotFound = 'No rows found';
const webTableDataFixture = '/webTables/data';
const colunasFixture = '/webTables/colunas';
const usuariosFixture = '/webTables/data';
const validUserFixture = '/webTables/validUser';
const emptyUserFixture = '/webTables/emptyUser';
const invalidUserFixture = '/webTables/invalidUser';
const editUserFixture = '/webTables/editUser';

beforeEach(() => {
	cy.visitarToolsQA(ElementsLink.WebTables);
});

describe('Testes na WebTable', () => {
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
			cy.fixture(usuariosFixture).then((usuario) => {
				for (let i in usuario) {
					WebTables.rowTable(parseInt(i)).within(($row) => {
						expect($row).to.contain(usuario[i].firstname);
						expect($row).to.contain(usuario[i].lastname);
						expect($row).to.contain(usuario[i].age);
						expect($row).to.contain(usuario[i].salary);
						expect($row).to.contain(usuario[i].department);
					});
				}
			});
		});
	});

	describe('Verifica a pesquisa dos usuários apresentados na tabela', () => {
		it('Pesquisar usuário Inexistente - dado utilizado:Firstname', () => {
			WebTables.searchUser(false, 'Inexistente');
			WebTables.verifyMsgTable(msgTabbleNotFound);
		});

		it('Pesquisar usuário com espaço em branco', () => {
			WebTables.searchUser(false, '        ');
			WebTables.verifyMsgTable(msgTabbleNotFound);
		});

		it('Pesquisar usuário com informação completa e com enter - dado utilizado:Firstname', () => {
			cy.fixture(webTableDataFixture).then((data) => {
				let firstname = data[0].firstname;

				WebTables.setSearchBox(`${firstname}{ENTER}`);
				WebTables.verifyDataRowTable(firstname, true);
			});
		});

		it('Pesquisar usuário com informação incompleta - dado utilizado:Firstname', () => {
			cy.fixture(webTableDataFixture).then((data) => {
				let firstname = data[0].firstname;

				WebTables.setSearchBox(`${firstname}{BACKSPACE}{BACKSPACE}{BACKSPACE}`);
				WebTables.searchBtn();
				WebTables.verifyDataRowTable(firstname, true);
			});
		});

		it('Pesquisar usuário com informação LowerCase - dado utilizado:Firstname', () => {
			cy.fixture(webTableDataFixture).then((data) => {
				let firstname = data[0].firstname;

				WebTables.setSearchBox(firstname.toLowerCase());
				WebTables.searchBtn();
				WebTables.verifyDataRowTable(firstname, true);
			});
		});

		it('Pesquisar usuário com informação UpperCase - dado utilizado:Firstname', () => {
			cy.fixture(webTableDataFixture).then((data) => {
				let firstname = data[0].firstname;

				WebTables.setSearchBox(firstname.toUpperCase());
				WebTables.searchBtn();
				WebTables.verifyDataRowTable(firstname, true);
			});
		});
	});

	describe('Adicionar usuário e verificar adição de usuário', () => {
		it('Abrir e fechar modal', () => {
			WebTables.modalVisible(false);
			WebTables.newUserBtn();
			WebTables.modalVisible(true);
			WebTables.modalClose();
			WebTables.modalVisible(false);
		});

		describe('Partição Válida', () => {
			it('Adicionar usuário com todos os Dados válidos', () => {
				WebTables.newUserBtn();
				cy.fixture(validUserFixture).then((user) => {
					WebTables.createUser(user);
					WebTables.verifyDataRowTable(user.firstname, true);
					WebTables.verifyDataRowTable(user.lastname, true);
					WebTables.verifyDataRowTable(user.age, true);
					WebTables.verifyDataRowTable(user.email, true);
					WebTables.verifyDataRowTable(user.salary, true);
					WebTables.verifyDataRowTable(user.department, true);
				});
			});
		});

		describe('Partição inválida', () => {
			it('Não preencher os campos e clicar em salvar', () => {
				WebTables.newUserBtn();
				WebTables.formSubmit();
				WebTables.validateEmptyForm();
			});

			it('Preenche os campos com espaço em branco e clicar em salvar', () => {
				WebTables.newUserBtn();
				cy.fixture(emptyUserFixture).then((user) => {
					WebTables.createUser(user);
				});
				WebTables.validateEmptyForm();
			});

			it('Preencher os campos com dados inválidos e clicar em salvar', () => {
				WebTables.newUserBtn();
				cy.fixture(invalidUserFixture).then((user) => {
					WebTables.createUser(user);

					WebTables.validateEmail();
					WebTables.validateSalary();
					WebTables.validateAge();

					WebTables.verifyDataRowTable(user.firstname, false);
					WebTables.verifyDataRowTable(user.lastname, false);
					WebTables.verifyDataRowTable(user.email, false);
					WebTables.verifyDataRowTable(user.age, false);
					WebTables.verifyDataRowTable(user.salary, false);
					WebTables.verifyDataRowTable(user.department, false);
				});
			});
		});
	});

	describe('Editar usuário verificar edição de usuário', () => {
		it('Verificar visibilidade do modal', () => {
			WebTables.modalVisible(false);
			WebTables.newUserBtn();
			WebTables.modalVisible(true);
			WebTables.modalClose();
			WebTables.modalVisible(false);
		});

		describe('Dados válidos', () => {
			it('Editar usuário com dados válidos', () => {
				let oldUser = WebTables.getUserRow();

				WebTables.editFirstUser();

				cy.fixture(editUserFixture).then((user) => {
					WebTables.editUser(oldUser, user);

					WebTables.verifyDataRowTable(user.firstname, true);
					WebTables.verifyDataRowTable(user.lastname, true);
					WebTables.verifyDataRowTable(user.age, true);
					WebTables.verifyDataRowTable(user.email, true);
					WebTables.verifyDataRowTable(user.salary, true);
					WebTables.verifyDataRowTable(user.department, true);

					oldUser.forEach((dado) => {
						WebTables.verifyDataRowTable(dado, false);
					});
				});
			});
		});

		// TODO Implementar edição de usuários com dados inválidos
		// TODO Implementar edição de usuários com com dados faltantes
		describe('Dados inválidos', () => {});
	});

	// TODO: Implementar exclusão de usuário
	// describe('Excluir usuário e verificar exclusão de usuário',() => {})
});
