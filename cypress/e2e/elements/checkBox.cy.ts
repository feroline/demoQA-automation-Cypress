import HomePage from "../../pages/HomePage";
import ElementsLink from "../../support/Enum/links/Elements";

const Home = new HomePage();


beforeEach(() => {
  cy.visitarToolsQA();
  Home.elements().click();
  cy.getItemMenu('Check Box').click();
});

describe("Testes da tela com Check Box", () => {
    it("Verifica URL da página", () => {
        cy.url().should("include", ElementsLink.TEXT_BOX);
      });
})