import { TodoCommentRequest } from './../../../../node_modules/typescript/lib/typescript.d';
import CheckBoxNode from '../../../support/Types/CheckBoxNode';
import locators from './CheckBoxLocators';

class CheckBoxPage {
	checkBoxMenu() {
		return cy.getItemMenu(locators.itemMenu).click();
	}
	// FIXME: type node alterado para string, passar valores por enum -- simplificar
	/**
	 * @param node é o elemento que deseja expandir e collapsar
	 * @type Node
	 * @returns ação de collapse e expand do elemento desejado
	 * @example  CheckBox.collapseExpandNode('home')
	 */
	collapseExpandNode(node: string) {
		return cy
			.get(locators.nodeLabel(node))
			.siblings(locators.collapseExpandBtn)
			.click();
	}

	expandAll() {
		cy.get(locators.expandAllBtn()).click();
	}

	collapseAll() {
		cy.get(locators.collapseAllBtn()).click();
	}

	getTreeNode() {
		return cy.get(locators.treeNode);
	}

	getNodeByLabel(node: string) {
		return cy.get(locators.nodeLabel(node));
	}

	getCheckInput(node: string) {
		return cy.get(locators.nodeLabel(node)).find(locators.checkInput);
	}
}

export default CheckBoxPage;
