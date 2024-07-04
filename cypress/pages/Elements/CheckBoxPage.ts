class CheckBoxPage {
    
    /**
     * @param elementNode é o elemento que deseja expandir
     * @type Cypress.Chainable<JQuery<HTMLElement>>
     * @returns collapse button of the elementNode 
     * @example  CheckBox.collapseButton(CheckBox.nodeHome())
     */
    collapseButton(elementNode: Cypress.Chainable<JQuery<HTMLElement>>):Cypress.Chainable<JQuery<HTMLElement>> {
        return elementNode.siblings('button.rct-collapse-btn')
    }

    nodeHome() {
        return cy.get('label[for="tree-node-home"]')
    }

}

export default CheckBoxPage;