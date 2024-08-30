import LinksPage from '@pageObject/links/LinksPage';
import ElementsLinks from '@enum/links/Elements';

const Links = new LinksPage();
const baseUrl = Cypress.config('baseUrl');

beforeEach(() => {
	cy.visitarToolsQA(ElementsLinks.Links);
});

describe('Simple Link', () => {
	it('Check FrontEnd (Opens New Tab)', () => {
		Links.getsimpleLink().then(($link) => {
			const href = Links.getPropHref($link);

			cy.visit(href);
			Links.checkRedirectFrontHome();
			cy.url().should('be.equal', `${baseUrl}/`);
		});
	});

	it('Check Backend (API)', () => {
		Links.getsimpleLink().then(($link) => {
			const href = Links.getPropHref($link);

			cy.request(href).as('request');

			cy.get('@request').then((response) => {
				Links.expectStatus(response, 200);
				Links.expectUrl(response, `${baseUrl}/`);
			});
		});
	});
});

// TODO: Implementar dynamic link
// it('Dynamic Link', () => {})

// TODO: Implementar os testes de API
// describe('Backend(API)',() =>{})
