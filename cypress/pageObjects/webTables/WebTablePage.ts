import locators from './WebTableLocators';
class WebTablesPage {
	webTablesMenu() {
		return cy.getItemMenu(locators.itemMenu).click();
	}

	headerTable() {
		return cy.get(locators.headerTable);
	}

	/**
	 *
	 * @param indice indice da linha da tabela
	 * @returns  todas as linhas da tabela ou a linha desejada da tabela pelo indice
	 * @example WebTables.rowTable(0);
	 */
	rowTable(indice?: number) {
		return indice == undefined
			? cy.get(locators.rowTable).first()
			: cy.get(locators.rowTable).eq(indice);
	}

	search(text: string) {
		cy.get(locators.searchInput).type(text);
	}

	searchBtn() {
		cy.get(locators.searchInput).siblings(locators.searchBtn).click();
	}

	searchUser(exist: boolean, text: string) {
		cy.get(locators.searchInput).type(text);
		cy.get(locators.searchInput).siblings(locators.searchBtn).click();

		let firstRow = cy.get(locators.rowTable).first();

		exist
			? firstRow.should('contain.text', text)
			: firstRow.should('not.contain.text', text);
	}

	setSearchBox(text: string) {
		cy.get(locators.searchInput).type(text);
	}

	verifyMsgTable(msg: string) {
		cy.get(locators.rowMsg).should('contain.text', msg);
	}

	verifyDataRowTable(text: string, contain?: boolean) {
		contain == true || contain == undefined
			? cy.get(locators.rowTable).should('contain.text', text)
			: cy.get(locators.rowTable).should('not.contain.text', text);
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

	createUser(userFixture: user) {
		cy.get(locators.userForm).within(() => {
			cy.get(locators.firstnameInput).type(userFixture.firstname);
			cy.get(locators.lasnameInput).type(userFixture.lastname);
			cy.get(locators.ageInput).type(userFixture.age);
			cy.get(locators.emailInput).type(userFixture.email);
			cy.get(locators.salaryInput).type(userFixture.salary);
			cy.get(locators.departmentInput).type(userFixture.department);
			cy.get(locators.submitBtn).click();
		});
	}

	formSubmit() {
		cy.get(locators.submitBtn).click();
	}

	validateEmptyForm() {
		const tipo = 'error';
		cy.validateColors(tipo, locators.firstnameInput);
		cy.validateColors(tipo, locators.lasnameInput);
		cy.validateColors(tipo, locators.emailInput);
		cy.validateColors(tipo, locators.ageInput);
		cy.validateColors(tipo, locators.salaryInput);
		cy.validateColors(tipo, locators.departmentInput);
	}

	validateEmail() {
		cy.validateColors('error', locators.emailInput);
	}

	validateSalary() {
		cy.validateColors('error', locators.salaryInput);
	}

	validateAge() {
		cy.validateColors('error', locators.ageInput);
	}
}

export default WebTablesPage;
