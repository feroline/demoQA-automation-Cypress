import HomePage from "../../pages/HomePage";
const Home = new HomePage();

const linkBanner = "https://www.toolsqa.com/selenium-training/";
const linkElments = "https://demoqa.com/elements"

beforeEach(() => {
  cy.visit("/");
});

describe("Teste de Home", () => {
  describe("Verificando Visibilidade", () => {
    it("Banner", () => {
      Home.setLink(linkBanner)
      Home.getBanner().should("be.visible")
    })

    it("Elements", () => {
        Home.setLink()
    })
  });

  describe("Verificando Redirecionamento", () => {
    it("Banner", () => {
      Home.setLink(linkBanner);
      Home.getBanner()
        .should("exist")
        .click()
        .then(() => {
          cy.request("eq", Home.getLink()).its("status").should("eq", 200);
        });
    });
  });
});
