import HomePage from "../pages/HomePage"
import HomeLinks from "../support/Enum/links/Home"

const Home = new HomePage()

beforeEach(() => {
  cy.visit("/")
});

describe("Teste de Home", () => {
  describe("Verificando Visibilidade", () => {
    it("Banner", () => {
      Home.setLink(HomeLinks.BANNER)
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

    it("Widgets", () => {
      Home.setLink(linkWidgets)
      Home.getWidgets().should("be.visible")
    })

    it("Interactions", () => {
      Home.setLink(linkInteractions)
      Home.getInteractions().should("be.visible")
    })
  
    it("Book Store", () => {
      Home.getBookStore().should("be.visible")
    })  

  });

  describe("Verificando Redirecionamento", () => {
    it("Banner", () => {
      Home.getBanner()
        .should("exist")
        .click()
        .then(() => {
          cy.request("eq", HomeLinks.BANNER).its("status").should("eq", 200)
        })
    })

    it("Elements", () => {
      Home.getElements().click();
      cy.url().should("contains", HomeLinks.ELEMENTS)
    })

    it("Forms", () => {
      Home.getForms().click()
      cy.url().should("contains", HomeLinks.FORMS)
    })

    it("Alerts, Frames & Windows", () => {
      Home.getAlertsFramesWindows().click()
      cy.url().should("contains", HomeLinks.ALERTS_FRAMES_WINDOWS)
    })

    it("Widgets", () => {
      Home.getWidgets().click()
      cy.url().should("contains", HomeLinks.WIDGETS)
    })

    it("Interactions", () => {
      Home.getInteractions().click()
      cy.url().should("contains", HomeLinks.INTERACTIONS)
    })
    
    it("Book Store", () => {
      Home.getBookStore().click()
      cy.url().should("contains",HomeLinks.BOOKSTORE)
    })

  })

})

