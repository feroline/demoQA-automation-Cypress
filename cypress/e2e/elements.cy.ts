import HomePage from "../pages/HomePage"
import ElementsPage from "../pages/ElementsPage"
import ElementsLink from "../support/Enum/links/Elements"

const Home = new HomePage()
const Elements = new ElementsPage()

beforeEach(() => {
    cy.visitarToolsQA();
    Home.getElements().click();
    cy.fixture('/usuarios/valido').as('usuarioValido.fixture');
});

describe('Testes da página Elements', () => {
    describe('Tela inicial', () => {
        it('Verifica mensagem apresentada', () => {
            cy.verificaMensagemInicial();            
        });
    });

    describe('Text Box', () => {
        
        it('Verifica URL da página', () => {
            Elements.getTextBoxMenu().click();
            cy.url().should('include', ElementsLink.TEXT_BOX);
        })

        describe('Partição Valida', () => {
            it.only('Preencher todos os campos com dados válidos', () => {
                Elements.getTextBoxMenu().click();

                cy.fixture('/usuarios/valido').then(usuario => {
                    cy.get('#userName').type(usuario.name);
                    cy.get('#userEmail').type(usuario.email)
                    cy.get('#currentAddress').type(usuario.currentAddress)
                    cy.get('#permanentAddress').type(usuario.permanentAddress)
                    cy.get('#submit').click();    
                })

               
                // Name:Username
                // Email:username@gmail.com
                // Current Address :Current Address
                // Permananet Address :Permanent Address

                cy.get('#output')
                    .should('contain.text', 'Name:Username')
                    .and('contain.text', 'Email:username@gmail.com')
                    .and('contain.text', 'Current Address :Current Address')
                    .and('contain.text', 'Permananet Address :Permanent Address')
            })
        })
        
        describe('Partição Inválida', () => {
            it('Preencher todos os campos com espaço em branco', () => {})
            it('Preencher campo de e-mail com e-mail inválido', () => {})
            it('Não preencher os campos e clicar em "Submit"', () => {})
        })
    })

    describe('Check Box', () => {})

    describe('Radio Button', () => {})

    describe('Web Tables', () => {})

    describe('Buttons', () => {})

    describe('Links', () => {})

    describe('Broken Links - Images', () => {})

    describe('Upload and Download', () => {})
    
    describe('Dynamic Properties', () => {})
})


