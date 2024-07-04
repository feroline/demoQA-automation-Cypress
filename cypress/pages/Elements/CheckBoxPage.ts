class CheckBoxPage {
    
    //FIXME: CORRIGIR COLAPSE E EXPAND PARA SEUS SIGNIFICADOS CORRETOS 
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

    nodeDesktop() {
        return cy.get('label[for="tree-node-desktop"]')
    }

    nodeDocuments() {
        return cy.get('label[for="tree-node-documents"]')
    }

    nodeDownloads() {
        return cy.get('label[for="tree-node-downloads"]')
    }

}

export default CheckBoxPage;