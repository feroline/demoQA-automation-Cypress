// @ts-nocheck

import LinksPage from '../../pageObjects/links/linksPage';
import ElementsLinks from '../../support/Enum/links/Elements';

const Links = new LinksPage();
const baseUrl = Cypress.config('baseUrl');

beforeEach(() => {
	cy.visitarToolsQA(ElementsLinks.Links);
});

describe('Opens New Tab - Frontend', () => {
	it('Verificar status e url de resposta do Simple Link', () => {
		Links.getsimpleLink().then(($link) => {
			cy.request(Links.getPropHref($link)).as('request');

			cy.get('@request').then((response) => {
				Links.expectStatus(response, 200);
				Links.expectUrl(response, `${baseUrl}/`);
			});
		});
	});

	// TODO: Implementar dynamic link
	// it('Dynamic Link', () => {})
});

// TODO: Implementar os testes de API
// describe('Backend(API)',() =>{})
