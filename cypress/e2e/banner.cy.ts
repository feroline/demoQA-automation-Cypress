beforeEach(() => {
    cy.visit('/')
 })

describe('Home', () => {
    describe('Banner', () => {

        it('Verificar Link Banner', () => {
            cy.get('div.home-banner a[href="https://www.toolsqa.com/selenium-training/"]').should('be.visible')
            cy.get('div.home-banner a[href="https://www.toolsqa.com/selenium-training/"]')
            .click().then(() => {
                cy.request('eq', 'https://www.toolsqa.com/selenium-training/').its('status').should('eq', 200)
            })
        })
        
    })
    
})