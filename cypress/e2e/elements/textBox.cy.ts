import HomePage from "../../pages/HomePage"
import TextBoxPage from "../../pages/TextBoxPage"
import ElementsLink from "../../support/Enum/links/Elements"

const Home = new HomePage()
const TextBox = new TextBoxPage()

beforeEach(() => {
    cy.visitarToolsQA();
    Home.getElements().click();
    cy.fixture('/usuarios/valido').as('usuarioValido.fixture');
    TextBox.textBoxMenu().click();
});


describe('Teste da tela com Text Box', () => {
        
    it('Verifica URL da página', () => {  
        cy.url().should('include', ElementsLink.TEXT_BOX);
    })

    describe('Partição Valida', () => {
        it('Preencher todos os campos com dados válidos', () => {

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
        it('Preencher todos os campos com espaço em branco', () => {

            cy.fixture('/usuarios/vazio').then(usuario => {
                
                // TODO: Converter em método
                TextBox.username().type(usuario.name);
                TextBox.email().type(usuario.email)
                TextBox.currentAddress().type(usuario.currentAddress)
                TextBox.permanentAddress().type(usuario.permanentAddress)
                TextBox.submitButton().click();    

                // TODO: Converter em método
                TextBox.output()
                    .should('not.contain.text', `Name:${usuario.name}`)
                    // .and('contain.text', `Email:${usuario.email}`) TODO: COLOCAR VERIFICAÇÃO DE E-MAIL
                    .and('not.contain.text', `Current Address :${usuario.currentAddress}`)
                    .and('not.contain.text', `Permananet Address :${usuario.permanentAddress}`)
            })

        })
        it.only('Preencher campo de e-mail com e-mail inválido', () => {
                
                cy.fixture('/usuarios/invalido').then(usuario => {
                    
                    TextBox.username().type(usuario.name);
                    TextBox.email().type(usuario.email)
                    TextBox.currentAddress().type(usuario.currentAddress)
                    TextBox.permanentAddress().type(usuario.permanentAddress)
                    TextBox.submitButton().click();    
    
                    TextBox.email()
                        .should('have.class', 'field-error')
                        .and('css', 'border-color', 'rgb(255, 0, 0)') //TODO: COLOCAR COR DE ERRO EM UM ENUM
                    
                })
        })
        it('Não preencher os campos e clicar em "Submit"', () => {})
    })
})
