import HomePage from "../../pages/HomePage";
const Home = new HomePage();

beforeEach(() => {
  cy.visitarToolsQA();
  Home.elements().click();
});

describe("Testes da página Elements", () => {
  describe("Tela inicial", () => {
    it("Verifica mensagem apresentada", () => {
      cy.verificaMensagemInicial();
    });
  });

});
