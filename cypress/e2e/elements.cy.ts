import HomePage from "../pages/HomePage"
import ElementsPage from "../pages/ElementsPage";

const Home = new HomePage()
const Elements = new ElementsPage()

beforeEach(() => {
    cy.visit('/');
});

describe('Testes da página Elements', () => {
    describe('Tela inicial', () => {
        it('Verifica mensagem apresentada', () => {
            const mensagem = "Please select an item from left to start practice."
            Home.getElements().click();
            Elements.getMensagemInicial(mensagem).should('be.visible');       
        });
    });

    describe('Text Box', () => {})

    describe('Check Box', () => {})

    describe('Radio Button', () => {})

    describe('Web Tables', () => {})

    describe('Buttons', () => {})

    describe('Links', () => {})

    describe('Broken Links - Images', () => {})

    describe('Upload and Download', () => {})
    
    describe('Dynamic Properties', () => {})
})


