import { data } from '../../../node_modules/cypress/types/jquery/index';
import HomePage from '../../pageObjects/home/HomePage';
import WebTablesPage from '../../pageObjects/webTables/WebTablesPage';
import Colors from '../../support/Enum/Colors';

const Home = new HomePage();
const WebTables = new WebTablesPage();

beforeEach(() => {
	cy.visitarToolsQA();
	Home.elements().click();
	WebTables.webTablesMenu();
});

describe('Visualizar Dados', () => {
	it('Verifica se as colunas estão sendo apresentadas na tabela', () => {
		cy.fixture('/webTables/colunas').then((colunas) => {
			WebTables.headerTable()
				.should('contain.text', `${colunas.firstname}`)
				.should('contain.text', `${colunas.lastname}`)
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

describe('Pesquisar Dados', () => {
	// TODO: Pesquisar por dado inexistente
	// TODO: Usar Within nas tables
	describe('Pesquisar por Firstname', () => {
		it('Pesquisa com string completa', () => {
			cy.fixture('/webTables/data').then((data) => {
				// TODO: CONVERTER EM MÉTODO
				let firstname = data[0].firstname;

				WebTables.setSearchBox(firstname);
				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', firstname);
			});
		});

		it('Pesquisa com string parcial', () => {
			cy.fixture('/webTables/data').then((data) => {
				// TODO: CONVERTER EM MÉTODO
				let firstname = data[0].firstname;

				for (let i = 0; i <= 3; i++) {
					WebTables.setSearchBox(firstname[i]);
				}

				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', firstname);
			});
		});

		it('Pesquisa com string LowerCase', () => {
			cy.fixture('/webTables/data').then((data) => {
				// TODO: CONVERTER EM MÉTODO
				let firstname = data[0].firstname;

				WebTables.setSearchBox(firstname.toLowerCase());
				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', firstname);
			});
		});
		it('Pesquisa com string UpperCase', () => {
			cy.fixture('/webTables/data').then((data) => {
				// TODO: CONVERTER EM MÉTODO
				let firstname = data[0].firstname;

				WebTables.setSearchBox(firstname.toUpperCase());
				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', firstname);
			});
		});
	});

	describe('Pesquisar por Lastname', () => {
		it('Pesquisa com string completa', () => {
			cy.fixture('/webTables/data').then((data) => {
				let lastname = data[0].lastname;

				WebTables.setSearchBox(lastname);
				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', lastname);
			});
		});

		it('Pesquisa com string parcial', () => {
			cy.fixture('/webTables/data').then((data) => {
				let lastname = data[0].lastname;

				for (let i = 0; i <= 3; i++) {
					WebTables.setSearchBox(lastname[i]);
				}

				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', lastname);
			});
		});

		it('Pesquisa com string LowerCase', () => {
			cy.fixture('/webTables/data').then((data) => {
				let lastname = data[0].lastname;

				WebTables.setSearchBox(lastname.toLowerCase());
				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', lastname);
			});
		});
		it('Pesquisa com string UpperCase', () => {
			cy.fixture('/webTables/data').then((data) => {
				let lastname = data[0].lastname;

				WebTables.setSearchBox(lastname.toUpperCase());
				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', lastname);
			});
		});
	});

	describe('Pesquisar por Age', () => {
		it('Pesquisa com string completa', () => {
			cy.fixture('/webTables/data').then((data) => {
				let age = data[0].age;

				WebTables.setSearchBox(age);
				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', age);
			});
		});
		it('Pesquisa com string parcial', () => {
			cy.fixture('/webTables/data').then((data) => {
				let age = data[0].age;

				WebTables.setSearchBox(age[1]);
				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', age);
			});
		});
	});

	describe('Pesquisar por Email', () => {
		it('Pesquisa com string completa', () => {
			cy.fixture('/webTables/data').then((data) => {
				let email = data[0].email;

				WebTables.setSearchBox(email);
				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', email);
			});
		});

		it('Pesquisa com string parcial', () => {
			cy.fixture('/webTables/data').then((data) => {
				let email = data[0].email;

				for (let i = 0; i <= 3; i++) {
					WebTables.setSearchBox(email[i]);
				}

				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', email);
			});
		});

		it('Pesquisa com string LowerCase', () => {
			cy.fixture('/webTables/data').then((data) => {
				let email = data[0].email;

				WebTables.setSearchBox(email.toLowerCase());
				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', email);
			});
		});
		it('Pesquisa com string UpperCase', () => {
			cy.fixture('/webTables/data').then((data) => {
				let email = data[0].email;

				WebTables.setSearchBox(email.toUpperCase());
				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', email);
			});
		});
	});

	describe('Pesquisar por Salary', () => {
		it('Pesquisa com string completa', () => {
			cy.fixture('/webTables/data').then((data) => {
				let salary = data[0].salary;

				WebTables.setSearchBox(salary);
				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', salary);
			});
		});

		it('Pesquisa com string parcial', () => {
			cy.fixture('/webTables/data').then((data) => {
				let salary = data[0].salary;

				for (let i = 0; i <= 3; i++) {
					WebTables.setSearchBox(salary[i]);
				}

				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', salary);
			});
		});

		it('Pesquisa com string LowerCase', () => {
			cy.fixture('/webTables/data').then((data) => {
				let salary = data[0].salary;

				WebTables.setSearchBox(salary.toLowerCase());
				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', salary);
			});
		});
		it('Pesquisa com string UpperCase', () => {
			cy.fixture('/webTables/data').then((data) => {
				let salary = data[0].salary;

				WebTables.setSearchBox(salary.toUpperCase());
				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', salary);
			});
		});
	});

	describe('Pesquisar por Departament', () => {
		it('Pesquisa com string completa', () => {
			cy.fixture('/webTables/data').then((data) => {
				let departament = data[0].department;

				WebTables.setSearchBox(departament);
				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', departament);
			});
		});

		it('Pesquisa com string parcial', () => {
			cy.fixture('/webTables/data').then((data) => {
				let departament = data[0].departament;

				for (let i = 0; i <= 3; i++) {
					WebTables.setSearchBox(departament[i]);
				}

				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', departament);
			});
		});

		it('Pesquisa com string LowerCase', () => {
			cy.fixture('/webTables/data').then((data) => {
				let departament = data[0].departament;

				WebTables.setSearchBox(departament.toLowerCase());
				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', departament);
			});
		});
		it('Pesquisa com string UpperCase', () => {
			cy.fixture('/webTables/data').then((data) => {
				let departament = data[0].departament;

				WebTables.setSearchBox(departament.toUpperCase());
				WebTables.searchBtn();
				WebTables.rowTable().should('contain.text', departament);
			});
		});
	});
});

// TODO: ADICIONAR CRUD DE TESTES:
describe.only('Adicionar Dados', () => {
	describe('Partição Válida', () => {
		it('Verificar visibilidade modal', () => {
			WebTables.modalVisible(false);
			WebTables.newUserBtn();
			WebTables.modalVisible(true);
			WebTables.modalClose();
			WebTables.modalVisible(false);
		});
		it('Preencher com todos os campos', () => {
			WebTables.newUserBtn();
			WebTables.createUser(true);
		});
	});

	describe('Partição Inválida', () => {
		it.only('Não preencher os campos', () => {
			WebTables.newUserBtn();
			WebTables.modalVisible(true);
			WebTables.createUser(false);
			// TODO:Converter em um método as seguintes linhas
			WebTables.validateFirstname('error');
			WebTables.validateLastname('error');
		});
	});
});

// TODO: ADICIONAR PARTIÇÃO DE ADICIONAR
// TODO: ADICIONAR PARTIÇÃO DE EDITAR
// TODO: ADICIONAR PARTIÇÃO DE EXCLUIR
