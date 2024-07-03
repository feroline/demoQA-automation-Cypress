import HomePage from "../pages/HomePage"
import ElementsPage from "../pages/ElementsPage"
import ElementsLink from "../support/Enum/links/Elements"

const Home = new HomePage()
const Elements = new ElementsPage()

beforeEach(() => {
    cy.visit('/');
    Home.getElements().click();
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
                cy.get('#userName').type('Username');
                cy.get('#userEmail').type('username@gmail.com')
                cy.get('#currentAddress').type('Current Address')
                cy.get('#permanentAddress').type('Permanent Address')
                cy.get('#submit').click();
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


