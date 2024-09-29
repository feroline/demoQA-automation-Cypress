import LinksPage from '@pageObject/links/LinksPage';
import ElementsLinks from '@enum/links/Elements';
import Link from '@enum/links/Link';

const Links = new LinksPage();
const baseUrl = Cypress.config('baseUrl');

beforeEach(() => {
	cy.visitarToolsQA(ElementsLinks.Links);
});

describe('Open new tab', () => {
	describe('Simple Link', () => {
		it('Check FrontEnd (Opens New Tab)', () => {
			Links.getsimpleLink().then(($link) => {
				cy.visit(Links.getPropHref($link));
				cy.url().should('be.equal', `${baseUrl}/`);
				Links.checkRedirectFrontHome();
			});
		});

		it('Check Backend (API)', () => {
			Links.getsimpleLink().then(($link) => {
				cy.request(Links.getPropHref($link)).as('request');

				cy.get('@request').then((response) => {
					//@ts-ignore
					let urlRecebida = response.allRequestResponses[0]['Request URL'];
					//@ts-ignore
					Links.expectStatus(response.status, 200);
					Links.expectUrl(urlRecebida, `${baseUrl}/`);
				});
			});
		});
	});

	describe('Dynamic Link', () => {
		it('Check FrontEnd (Opens New Tab)', () => {
			Links.getDynamicLink().then(($link) => {
				cy.visit(Links.getPropHref($link));
				cy.url().should('be.equal', `${baseUrl}/`);
				Links.checkRedirectFrontHome();
			});
		});

		it('Check Backend (API)', () => {
			Links.getDynamicLink().then(($link) => {
				cy.request(Links.getPropHref($link)).as('request');

				cy.get('@request').then((response) => {
					//@ts-ignore
					let urlRecebida = response.allRequestResponses[0]['Request URL'];
					//@ts-ignore
					Links.expectStatus(response.status, 200);
					Links.expectUrl(urlRecebida, `${baseUrl}/`);
				});
			});
		});
	});
});

describe('Send an api call', () => {
	it('Created', () => {
		cy.intercept('GET', `**${Link.Created}`).as('intercept');

		Links.createdLink();

		cy.wait('@intercept').then(({ request, response }) => {
			Links.expectUrl(request.url, `${baseUrl}${Link.Created}`);
			Links.expectStatus(response?.statusCode, 201);
		});
	});

	it('No Content', () => {
		cy.intercept('GET', `**${Link.NoContent}`).as('intercept');

		Links.noContentLink();

		cy.wait('@intercept').then(({ request, response }) => {
			Links.expectUrl(request.url, `${baseUrl}${Link.NoContent}`);
			Links.expectStatus(response?.statusCode, 204);
		});
	});

	it('Moved', () => {
		cy.intercept('GET', `**${Link.Moved}`).as('intercept');

		Links.movedLink();

		cy.wait('@intercept').then(({ request, response }) => {
			Links.expectUrl(request.url, `${baseUrl}${Link.Moved}`);
			Links.expectStatus(response?.statusCode, 301);
		});
	});

	it('Bad Request', () => {
		cy.intercept('GET', `**${Link.BadRequest}`).as('intercept');

		Links.badRequestLink();

		cy.wait('@intercept').then(({ request, response }) => {
			Links.expectUrl(request.url, `${baseUrl}${Link.BadRequest}`);
			Links.expectStatus(response?.statusCode, 400);
		});
	});

	it('Unauthorized', () => {
		cy.intercept('GET', `**${Link.Unauthorized}`).as('intercept');

		Links.unauthorizedLink();

		cy.wait('@intercept').then(({ request, response }) => {
			Links.expectUrl(request.url, `${baseUrl}${Link.Unauthorized}`);
			Links.expectStatus(response?.statusCode, 401);
		});
	});

	it('Forbidden', () => {
		cy.intercept('GET', `**${Link.Forbidden}`).as('intercept');

		Links.forbiddenLink();

		cy.wait('@intercept').then(({ request, response }) => {
			Links.expectUrl(request.url, `${baseUrl}${Link.Forbidden}`);
			Links.expectStatus(response?.statusCode, 403);
		});
	});

	it('Not Found', () => {
		cy.intercept('GET', `**${Link.NotFound}`).as('intercept');

		Links.notFoundLink();

		cy.wait('@intercept').then(({ request, response }) => {
			Links.expectUrl(request.url, `${baseUrl}${Link.NotFound}`);
			Links.expectStatus(response?.statusCode, 404);
		});
	});
});
