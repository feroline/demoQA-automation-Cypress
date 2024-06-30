import HomePage from "../../pages/HomePage";
const Home = new HomePage();

beforeEach(() => {
  cy.visit("/");
  Home.setLinkBanner("https://www.toolsqa.com/selenium-training/");
});

describe("Teste de Home", () => {
  describe("Verificando Visibilidade", () => {
    it.only("Banner", () => {
      Home.getBanner().should("be.visible");
    });
  });

  describe("Verificando Redirecionamento", () => {
    it("Banner", () => {
      Home.getBanner()
        .should("exist")
        .click()
        .then(() => {
          cy.request("eq", Home.getLinkBanner())
            .its("status")
            .should("eq", 200);
        });
    });
  });
});
