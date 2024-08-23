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

	editFirstUser() {
		cy.get(locators.actionEdit).first().click();
	}

	getFistRow() {
		return cy.get(locators.actionEdit).first().parents(locators.divRow);
	}

	editUser(userData: string[] | Array<any> | void, editUserFixture: user) {
		cy.get(locators.userForm).within(() => {
			// userData.forEach((dado) => {
			// 	cy.get(`input[value="${dado}"]`);
			// });
			cy.get(locators.firstnameInput).clear().type(editUserFixture.firstname);
			cy.get(locators.lasnameInput).clear().type(editUserFixture.lastname);
			cy.get(locators.ageInput).clear().type(editUserFixture.age);
			cy.get(locators.emailInput).clear().type(editUserFixture.email);
			cy.get(locators.salaryInput).clear().type(editUserFixture.salary);
			cy.get(locators.departmentInput).clear().type(editUserFixture.department);
			cy.get(locators.submitBtn).click();
		});
	}

	//para que os resultados possam ser explorados deve ser chamado dentro de uma promisse com 'then'
	getUserRow(indiceRow?: number): Array<string> {
		let userRow = new Array();
		let row;

		if (!indiceRow || indiceRow === 0) {
			row = cy.get(locators.actionEdit).first().parents(locators.divRow);
		} else {
			row = cy.get(locators.actionEdit).eq(indiceRow).parents(locators.divRow);
		}

		row.within(($row) => {
			let celulas = $row[0].childNodes;
			let length = celulas.length;

			celulas.forEach((celula, i) => {
				//não vai armazenar os valores da celula de action
				if (i != length - 1) {
					userRow.push(celula.textContent);
				}
			});
		});

		return userRow;
	}
}

export default WebTablesPage;
