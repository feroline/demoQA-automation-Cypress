class WebTablesPage {
	webTablesMenu() {
		return cy.getItemMenu('Web Tables').click();
	}

	headerTable() {
		return cy.get('div.ReactTable div.rt-thead.-header');
	}

	/**
	 *
	 * @param index
	 * @returns linha da tabela de acordo com o index passado
	 */
	rowTable(index: number) {
		return cy.get(`div[role="rowgroup"]:nth-child(${index})`);
	}
}

export default WebTablesPage;
