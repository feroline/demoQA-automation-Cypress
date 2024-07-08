import Node from '../../support/Types/Node';
class CheckBoxPage {
	/**
	 * @param node é o elemento que deseja expandir e collapsar
	 * @type Node
	 * @returns ação de collapse e expand do elemento desejado
	 * @example  CheckBox.collapseExpandNode('home')
	 */
	collapseExpandNode(node: Node): Cypress.Chainable<JQuery<HTMLElement>> {
		return this.getNode(node).siblings('button.rct-collapse-btn').click();
	}

	expandAll() {
		return cy.get('#tree-node button.rct-option-expand-all').click();
	}

	collapseAll() {
		return cy.get('#tree-node button.rct-option-collapse-all').click();
	}

	treeNode() {
		return cy.get('#tree-node');
	}

	getNode(node: Node): Cypress.Chainable<JQuery<HTMLElement>> {
		return cy.get(`label[for="tree-node-${node}"]`);
	}
}

export default CheckBoxPage;
