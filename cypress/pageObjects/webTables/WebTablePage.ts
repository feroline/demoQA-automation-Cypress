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
			? cy
					.get(locators.rowTable, { timeout: 8000 })
					.first()
					.children(locators.divRow)
			: cy
					.get(locators.rowTable, { timeout: 8000 })
					.eq(indice)
					.children(locators.divRow);
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

	verifyDataRowTable(text: string, contain: boolean) {
		contain === true
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
		cy.validateColors(tipo, locators.emailInput);
		cy.validateColors(tipo, locators.ageInput);
		cy.validateColors(tipo, locators.salaryInput);
	}

	validadeFirstname() {
		cy.validateColors('error', locators.firstnameInput);
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

	editUserAction(indiceRow: number) {
		cy.get(locators.actionEdit).eq(indiceRow).click();
	}

	deleteUserAction(indiceRow: number) {
		cy.get(locators.actionDelete).eq(indiceRow).click();
	}

	getFistRow() {
		return cy.get(locators.actionEdit).first().parents(locators.divRow);
	}

	editUser(userData: Array<string>, editUserFixture: user) {
		cy.get(locators.userForm).within(() => {
			cy.validateOldUserForm(userData, true);

			cy.get(locators.lasnameInput).clear().type(editUserFixture.lastname);
			cy.get(locators.ageInput).clear().type(editUserFixture.age);
			cy.get(locators.emailInput).clear().type(editUserFixture.email);
			cy.get(locators.salaryInput).clear().type(editUserFixture.salary);
			cy.get(locators.departmentInput).clear().type(editUserFixture.department);
			cy.get(locators.firstnameInput).clear().type(editUserFixture.firstname);
			cy.get(locators.submitBtn).click();
		});
	}

	getDataRow(row: any): string[] {
		let userData: string[] = [];

		row.then(($row: any) => {
			let celulas = $row[0].childNodes;

			celulas.forEach((celula: any, i: number) => {
				if (i != celulas.length - 1) {
					userData.push(celula.textContent);
				}
			});
		});

		return userData;
	}
}

export default WebTablesPage;
