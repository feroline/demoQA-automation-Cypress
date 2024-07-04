import HomePage from '../../pages/HomePage'
import ElementsLink from '../../support/Enum/links/Elements'
import CheckBoxPage from '../../pages/elements/CheckBoxPage'

const Home = new HomePage()
const CheckBox = new CheckBoxPage()

beforeEach(() => {
  cy.visitarToolsQA();
  Home.elements().click();
  cy.getItemMenu('Check Box').click();
});

describe('Testes da tela com Check Box', () => {
    it('Verifica URL da página', () => {
        cy.url().should('include', ElementsLink.CHECK_BOX);
      });

    describe('Partição Válida', () => {
        describe('Expand itens do Checkbox', () => {
            it.only('Expand Home', () => {
                CheckBox.collapseButton(CheckBox.nodeHome())
                    .click().then(() => {
                        cy.get('label[for="tree-node-desktop"]').should('be.visible').and('contain.text', 'Desktop')
                        cy.get('label[for="tree-node-documents"]').should('be.visible').and('contain.text', 'Documents')
                        cy.get('label[for="tree-node-downloads"]').should('be.visible').and('contain.text', 'Downloads')
                    })

            })
        })

        describe('Collapse itens do Checkbox', () => {})
    })

    // TODO: implementar partição inválida
    describe('Partição Inválida', () => {})
})