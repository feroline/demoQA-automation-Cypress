import locators from './LinksLocators';
import homeLocators from '@pageObject/home/HomeLocators';
import Cards from '@enum/Cards';

class LinksPage {
	getsimpleLink() {
		return cy.get(locators.simple).click();
	}

	getDynamicLink() {
		return cy.get(locators.dynamic).click();
	}

	getPropHref($link: JQuery<HTMLElement>) {
		return $link.prop('href');
	}

	createdLink() {
		cy.get(locators.created).click();
	}

	noContentLink() {
		cy.get(locators.noContent).click();
	}

	movedLink() {
		cy.get(locators.moved).click();
	}

	badRequestLink() {
		cy.get(locators.badRequest).click();
	}

	unauthorizedLink() {
		cy.get(locators.unauthorized).click();
	}

	forbiddenLink() {
		cy.get(locators.forbidden).click();
	}

	notFoundLink() {
		cy.get(locators.notFound).click();
	}

	expectStatus(statusRecebido: number | undefined, cod: number) {
		expect(statusRecebido).be.equal(cod);
	}

	expectUrl(urlRecebida: string | undefined, urlEsperada: string) {
		expect(urlRecebida).be.equal(urlEsperada);
	}

	expectRequestUrl(requestUrl: string, urlEsperada: string) {
		expect(requestUrl).be.equal(urlEsperada);
	}

	checkRedirectFrontHome() {
		cy.xpath(homeLocators.cardXpath(Cards.Elements)).should('be.visible');
	}
}

export default LinksPage;
