import HomePage from "../../pages/HomePage"
import TextBoxPage from "../../pages/TextBoxPage"
import ElementsLink from "../../support/Enum/links/Elements"

const Home = new HomePage()
const TextBox = new TextBoxPage()

beforeEach(() => {
    cy.visitarToolsQA();
    Home.getElements().click();
    cy.fixture('/usuarios/valido').as('usuarioValido.fixture');
});


describe('Teste da tela com Text Box', () => {
        
    it('Verifica URL da página', () => {
        TextBox.textBoxMenu().click();
        cy.url().should('include', ElementsLink.TEXT_BOX);
    })

    describe('Partição Valida', () => {
        it.only('Preencher todos os campos com dados válidos', () => {
            TextBox.textBoxMenu().click();

            cy.fixture('/usuarios/valido').then(usuario => {
                
                TextBox.username().type(usuario.name);
                TextBox.email().type(usuario.email)
                TextBox.currentAddress().type(usuario.currentAddress)
                TextBox.permanentAddress().type(usuario.permanentAddress)
                TextBox.submitButton().click();    

                TextBox.output()
                    .should('contain.text', `Name:${usuario.name}`)
                    .and('contain.text', `Email:${usuario.email}`)
                    .and('contain.text', `Current Address :${usuario.currentAddress}`)
                    .and('contain.text', `Permananet Address :${usuario.permanentAddress}`)

            })
            
        })
    })
    
    describe('Partição Inválida', () => {
        it('Preencher todos os campos com espaço em branco', () => {})
        it('Preencher campo de e-mail com e-mail inválido', () => {})
        it('Não preencher os campos e clicar em "Submit"', () => {})
    })
})
