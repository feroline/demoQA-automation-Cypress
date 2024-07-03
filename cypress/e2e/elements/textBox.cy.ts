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

                TextBox.outputName()
                    .should('contain.text', 'Name')
                    .and('contain.text',usuario.name)
                TextBox.outputEmail()
                    .should('contain.text', 'Email')
                    .and('contain.text',usuario.email)
                TextBox.outputCurrentAddress()
                    .should('contain.text', 'Current Address')
                    .and('contain.text',usuario.currentAddress)
                TextBox.outputPermanentAddress()
                    .should('contain.text','Permananet Address')
                    .and('contain.text',usuario.permanentAddress)
                   
            })
            
        })

        it('Preencher somente o campo de Nome', () => {

            cy.fixture('/usuarios/valido').then(usuario => {
    
                TextBox.username().type(usuario.name);
                TextBox.submitButton().click();    

                TextBox.outputName()
                    .should('contain.text', 'Name')
                    .and('contain.text',usuario.name)
                TextBox.outputEmail().should('not.exist')
                TextBox.outputCurrentAddress().should('not.exist')
                TextBox.outputPermanentAddress().should('not.exist')
                   
            })
        })
        it.only('Preencher somente o campo de E-mail', () => {
            cy.fixture('/usuarios/valido').then(usuario => {
                
                TextBox.email().type(usuario.email)
                TextBox.submitButton().click();    

                TextBox.outputName().should('not.exist')
                TextBox.outputEmail()
                    .should('contain.text', 'Email')
                    .and('contain.text',usuario.email)
                TextBox.outputCurrentAddress().should('not.exist')
                TextBox.outputPermanentAddress().should('not.exist')
                   
            })
        })
        it('Preencher somente o campo de Endereço Atual', () => {})
        it('Preencher somente o campo de Endereço Permanente', () => {})
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
                    .and('not.contain.text', `Email:${usuario.email}`) // TODO: COLOCAR VERIFICAÇÃO DE E-MAIL
                    .and('not.contain.text', `Current Address :${usuario.currentAddress}`)
                    .and('not.contain.text', `Permananet Address :${usuario.permanentAddress}`)
            })

        })
        it('Preencher campo de e-mail com e-mail inválido', () => {
                
                cy.fixture('/usuarios/invalido').then(usuario => {
                    
                    TextBox.username().type(usuario.name);
                    TextBox.email().type(usuario.email)
                    TextBox.currentAddress().type(usuario.currentAddress)
                    TextBox.permanentAddress().type(usuario.permanentAddress)
                    TextBox.submitButton().click();    
    
                    // TODO: Converter em método
                    TextBox.email()
                        .should('have.class', 'field-error')
                        .and('css', 'border-color', 'rgb(255, 0, 0)') //TODO: COLOCAR COR DE ERRO EM UM ENUM
                    
                    TextBox.output()
                        .should('not.contain.text', `Name:${usuario.name}`)
                        .and('not.contain.text', `Email:${usuario.email}`)
                        .and('not.contain.text', `Current Address :${usuario.currentAddress}`)
                        .and('not.contain.text', `Permananet Address :${usuario.permanentAddress}`)
                })
        })
        it('Não preencher os campos e clicar em "Submit"', () => {
            TextBox.submitButton().click();    

            TextBox.output()
                .should('not.be.visible')
            // TODO: Colocar pelos IDs

        })
    })
})
