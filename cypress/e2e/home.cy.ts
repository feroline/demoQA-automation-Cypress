import HomePage from "../pages/HomePage"
const Home = new HomePage();

beforeEach(() => {
    cy.visit('/')
 })

describe('Home', () => {
    describe('Visibilidade', () => {

        it('Banner', () => {
           Home.getBanner().should('be.visible');
        })
        
    })

    describe.only('Redirecionamento', () => {
        it.only('Banner', () => {
            Home.getLinkBanner()
                .should('exist')
                .click().then(() => {
                    cy.request('eq', Home.getStringLinkBanner).its('status').should('eq', 200)
                })
        })
    })
    
})