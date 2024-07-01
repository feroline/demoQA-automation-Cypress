import HomePage from "../../pages/HomePage"
const Home = new HomePage()


const linkBanner = "https://www.toolsqa.com/selenium-training/"
const linkElments = "https://demoqa.com/elements"
const linkForms = "https://demoqa.com/forms"
const linkAlertsFramesWindows = "https://demoqa.com/alertsWindows"

beforeEach(() => {
  cy.visit("/")
});

describe("Teste de Home", () => {
  describe("Verificando Visibilidade", () => {
    it("Banner", () => {
      Home.setLink(linkBanner)
      Home.getBanner().should("be.visible")
    })


    it("Elements", () => {
        Home.getElements().should("be.visible")
    })

    it("Forms", () => {
        Home.getForms().should("be.visible")
    })

    it("Alerts, Frames & Windows", () => {
      Home.getAlertsFramesWindows().should("be.visible")
    })

  });

  describe("Verificando Redirecionamento", () => {
    it("Banner", () => {
      Home.setLink(linkBanner)
      Home.getBanner()
        .should("exist")
        .click()
        .then(() => {
          cy.request("eq", Home.getLink()).its("status").should("eq", 200)
        })
    })

    it("Elements", () => {
      Home.setLink(linkElments);
      Home.getElements().click();
      cy.url().should("eq", Home.getLink())
    })

    it("Forms", () => {
      Home.setLink(linkForms)
      Home.getForms().click()
      cy.url().should("eq", Home.getLink())
    })

    it("Alerts, Frames & Windows", () => {
      Home.setLink(linkAlertsFramesWindows)
      Home.getAlertsFramesWindows().click()
      cy.url().should("eq", Home.getLink())
    })
  })
})

