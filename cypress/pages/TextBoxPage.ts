import Colors from "./../support/Enum/Colors";
class ElementsPage {
  textBoxMenu() {
    return cy.getItemMenu("Text Box");
  }

  username() {
    return cy.get("#userName");
  }

  email() {
    return cy.get("#userEmail");
  }

  currentAddress() {
    return cy.get("#currentAddress");
  }

  permanentAddress() {
    return cy.get("#permanentAddress");
  }

  submitButton() {
    return cy.get("#submit");
  }

  output() {
    return cy.get("#output");
  }

  outputName() {
    return this.output().find("#name");
  }

  outputEmail() {
    return this.output().find("#email");
  }

  outputCurrentAddress() {
    return this.output().find("#currentAddress");
  }

  outputPermanentAddress() {
    return this.output().find("#permanentAddress");
  }

  validateErrorEmail() {
    return this.email()
      .should("have.class", "field-error")
      .and("css", "border-color", Colors.ERROR);
  }
}

export default ElementsPage;
