import locators from './WebTableLocators';
class WebTablesPage {
	// TODO: ADICIONAR LOCATOR
	webTablesMenu() {
		return cy.getItemMenu(locators.itemMenu).click();
	}

	headerTable() {
		return cy.get(locators.headerTable);
	}

	/**
	 *
	 * @param index localização da linha
	 * @returns a linhha ou as linhas da tabela
	 */
	rowTable(index?: number) {
		// TODO: verificar se há algum método no cypress pronto para tables e rows
		return index == undefined
			? cy.get(locators.rowTable).first()
			: cy.get(locators.rowTable).eq(index);
	}

	setSearchBox(text: string) {
		return cy.get(locators.searchInput).type(text);
	}

	searchBtn() {
		return cy.get(locators.searchInput).siblings(locators.searchBtn).click();
	}

	newUserBtn() {
		cy.get(locators.newUserBtn).click();
	}

	modalVisible(visible: boolean) {
		visible
			? cy.get(locators.modal).should('be.visible')
			: cy.get(locators.modal).should('not.exist');
	}

	modalClose() {
		cy.get(locators.modalCloseBtn).click();
	}

	createUser(user: boolean) {
		if (user) {
			cy.get(locators.userForm).within(($form) => {
				cy.fixture('/webTables/createUser').then((user) => {
					cy.get(locators.firstnameInput).type(user.firstname);
					cy.get(locators.lasnameInput).type(user.lastname);
					cy.get(locators.emailInput).type(user.email);
					cy.get(locators.ageInput).type(user.age);
					cy.get(locators.salaryInput).type(user.salary);
					cy.get(locators.departmentInput).type(user.department);
					cy.get(locators.submitBtn).click();
				});
			});
		} else {
			cy.get(locators.submitBtn).click();
		}
	}

	// TODO: ADICIONAR VALIDATE INIDIVIDUAL DOS CAMPOS OBRIGATÓRIOS
	validateFirstname(tipo: ResponseType) {
		cy.validateColors(tipo, locators.firstnameInput);
	}

	validateLastname(tipo: ResponseType) {
		cy.validateColors(tipo, locators.lasnameInput);
	}

	validateEmail(tipo: ResponseType) {
		cy.validateColors(tipo, locators.emailInput);
	}

	validateAge(tipo: ResponseType) {
		cy.validateColors(tipo, locators.ageInput);
	}

	validateSalary(tipo: ResponseType) {
		cy.validateColors(tipo, locators.salaryInput);
	}

	validateDepartment(tipo: ResponseType) {
		cy.validateColors(tipo, locators.departmentInput);
	}

	validadeEmpty() {
		const tipo = 'error';
		cy.validateColors(tipo, locators.firstnameInput);
		cy.validateColors(tipo, locators.lasnameInput);
		cy.validateColors(tipo, locators.emailInput);
		cy.validateColors(tipo, locators.ageInput);
		cy.validateColors(tipo, locators.salaryInput);
		cy.validateColors(tipo, locators.departmentInput);
	}
}

export default WebTablesPage;
