import HomePage from "../../pages/HomePage"
import ElementsPage from "../../pages/ElementsPage"
import ElementsLink from "../../support/Enum/links/Elements"

const Home = new HomePage()
const Elements = new ElementsPage()

beforeEach(() => {
    cy.visitarToolsQA();
    Home.getElements().click();
    cy.fixture('/usuarios/valido').as('usuarioValido.fixture');
});


describe('Teste da tela com Text Box', () => {
        
    it('Verifica URL da página', () => {
        Elements.textBoxMenu().click();
        cy.url().should('include', ElementsLink.TEXT_BOX);
    })

    describe('Partição Valida', () => {
        it('Preencher todos os campos com dados válidos', () => {
            Elements.textBoxMenu().click();

            cy.fixture('/usuarios/valido').then(usuario => {
                
                Elements.username().type(usuario.name);
                Elements.email().type(usuario.email)
                Elements.currentAddress().type(usuario.currentAddress)
                Elements.permanentAddress().type(usuario.permanentAddress)
                Elements.submitButton().click();    

                cy.get('#output')
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
