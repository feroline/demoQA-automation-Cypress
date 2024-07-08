import Node from '../../support/Types/Node';
class CheckBoxPage {
	/**
	 * @param elementNode é o elemento irmão do botão que deseja expandir e colapsar
	 * @type Cypress.Chainable<JQuery<HTMLElement>>
	 * @returns collapse e expand button do elemento que foi passado
	 * @example  CheckBox.collapseExpandButton(CheckBox.nodeHome())
	 * OR CheckBox.collapseExpandButton(cy.get('label[for="tree-node-home"]'))
	 */
	collapseExpandButton(
		elementNode: Cypress.Chainable<JQuery<HTMLElement>>
	): Cypress.Chainable<JQuery<HTMLElement>> {
		return elementNode.siblings('button.rct-collapse-btn');
	}

	liNode(
		elementNode: Cypress.Chainable<JQuery<HTMLElement>>
	): Cypress.Chainable<JQuery<HTMLLIElement>> {
		return elementNode.parent('span').parent('li');
	}

	nodeHome() {
		return cy.get('label[for="tree-node-home"]');
	}

	nodeDesktop() {
		return cy.get('label[for="tree-node-desktop"]');
	}

	nodeDocuments() {
		return cy.get('label[for="tree-node-documents"]');
	}

	nodeWorkspace() {
		return cy.get('label[for="tree-node-workspace"]');
	}

	nodeReact() {
		return cy.get('label[for="tree-node-react"]');
	}

	nodeDownloads() {
		return cy.get('label[for="tree-node-downloads"]');
	}
}

export default CheckBoxPage;
