class ElementsPage {

    getMensagemInicial(mensagem: string) {
        return cy.xpath(`//div[contains(@class,'playgound-body')][contains(.,'${mensagem}')]`)
    }


}

export default ElementsPage