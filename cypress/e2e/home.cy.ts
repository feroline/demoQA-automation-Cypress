beforeEach(() => {
    cy.visit('/')
 })

describe('Home', () => {
    describe('Visibilidade', () => {

        it('Banner', () => {
            cy.get('div.home-banner').should('be.visible');
           
        })
        
    })
    
})