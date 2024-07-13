import CheckBoxNode from '../../support/Types/CheckBoxNode';
class CheckBoxPage {
	checkBoxMenu() {
		return cy.getItemMenu('Check Box').click();
	}
	/**
	 * @param node é o elemento que deseja expandir e collapsar
	 * @type Node
	 * @returns ação de collapse e expand do elemento desejado
	 * @example  CheckBox.collapseExpandNode('home')
	 */
	collapseExpandNode(node: CheckBoxNode) {
		return this.nodeByLabel(node).siblings('button.rct-collapse-btn').click();
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

	nodeByLabel(node: CheckBoxNode) {
		return cy.get(`label[for="tree-node-${node}"]`);
	}

	inputCheck(node: CheckBoxNode) {
		return this.nodeByLabel(node).find('input[type="checkbox"]');
	}
}

export default CheckBoxPage;
