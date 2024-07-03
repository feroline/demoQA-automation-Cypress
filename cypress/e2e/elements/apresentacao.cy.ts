import HomePage from "../../pages/HomePage"
const Home = new HomePage()

beforeEach(() => {
    cy.visitarToolsQA();
    Home.getElements().click();
});

describe('Testes da página Elements', () => {
    describe('Tela inicial', () => {
        it('Verifica mensagem apresentada', () => {
            cy.verificaMensagemInicial();            
        });
    });
 
    // TODO: Implementar testes abaixo em arquivos separados
    describe('Check Box', () => {})

    describe('Radio Button', () => {})

    describe('Web Tables', () => {})

    describe('Buttons', () => {})

    describe('Links', () => {})

    describe('Broken Links - Images', () => {})

    describe('Upload and Download', () => {})
    
    describe('Dynamic Properties', () => {})

})


