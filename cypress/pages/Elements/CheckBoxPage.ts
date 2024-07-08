import Node from '../../support/Types/Node';
class CheckBoxPage {
	// FIXME CORRIGIR O COMENTÁRIO ABAIXO
	/**
	 * @param elementNode é o elemento irmão do botão que deseja expandir e colapsar
	 * @type Cypress.Chainable<JQuery<HTMLElement>>
	 * @returns collapse e expand button do elemento que foi passado
	 * @example  CheckBox.collapseExpandNode(CheckBox.nodeHome())
	 * OR CheckBox.collapseExpandNode(cy.get('label[for="tree-node-home"]'))
	 */
	collapseExpandNode(node: Node): Cypress.Chainable<JQuery<HTMLElement>> {
		return this.getNode(node).siblings('button.rct-collapse-btn').click();
	}

	collapseAll() {
		return cy.get('#tree-node button.rct-option-expand-all').click();
	}

	treeNode() {
		return cy.get('#tree-node');
	}

	liNode(
		elementNode: Cypress.Chainable<JQuery<HTMLElement>>
	): Cypress.Chainable<JQuery<HTMLLIElement>> {
		return elementNode.parent('span').parent('li');
	}

	getNode(node: Node): Cypress.Chainable<JQuery<HTMLElement>> {
		return cy.get(`label[for="tree-node-${node}"]`);
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

	nodeOffice() {
		return cy.get('label[for="tree-node-office"]');
	}

	nodeDownloads() {
		return cy.get('label[for="tree-node-downloads"]');
	}
}

export default CheckBoxPage;
