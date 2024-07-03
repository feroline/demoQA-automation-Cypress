class ElementsPage {

    textBoxMenu() {
        return cy.getItemMenu('Text Box')
    }

    username() {
        return cy.get('#userName')
    }

    email() {
        return cy.get('#userEmail')
    }

    currentAddress() {
        return cy.get('#currentAddress')
    }

    permanentAddress() {
        return cy.get('#permanentAddress')
    }

    submitButton() {
        return cy.get('#submit')
    }

}

export default ElementsPage