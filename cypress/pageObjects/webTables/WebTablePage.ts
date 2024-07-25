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
			? cy.get(locators.rowTable)
			: cy.get(locators.rowTable).eq(indice);
	}
}

export default WebTablesPage;
