import HomePage from '../../pages/HomePage';
import ElementsLink from '../../support/Enum/links/Elements';

const Home = new HomePage();


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
                cy.get('label[for="tree-node-home"]')
                    .siblings('button.rct-collapse-btn')
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