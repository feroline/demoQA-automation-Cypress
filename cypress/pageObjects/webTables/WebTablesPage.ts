const searchInput = '#searchBox';
class WebTablesPage {
	// TODO: ADICIONAR LOCATOR
	webTablesMenu() {
		return cy.getItemMenu('Web Tables').click();
	}

	headerTable() {
		return cy.get('div.ReactTable div.rt-thead.-header');
	}

	/**
	 *
	 * @param index localização da linha
	 * @returns a linhha ou as linhas da tabela
	 */
	rowTable(index?: number) {
		return index == undefined
			? cy.get('div[role="rowgroup"]')
			: cy.get(`div[role="rowgroup"]:nth-child(${index})`);
	}

	setSearchBox(text: string) {
		return cy.get(searchInput).type(text);
	}

	searchBtn() {
		return cy.get(searchInput).siblings('div.input-group-append').click();
	}

	createUser() {
		cy.get('#userForm').within(($form) => {
			cy.fixture('/webTables/createUser').then((user) => {
				cy.get('input#firstName').type(user.firstname);
				cy.get('input#lastName').type(user.lastname);
				cy.get('input#userEmail').type(user.email);
				cy.get('input#age').type(user.age);
				cy.get('input#salary').type(user.salary);
				cy.get('input#department').type(user.department);
				cy.get('button[type="submit"]').click();
			});
		});
	}
}

export default WebTablesPage;
