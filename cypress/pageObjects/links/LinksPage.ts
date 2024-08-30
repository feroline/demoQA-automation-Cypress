import locators from './LinksLocators';

class LinksPage {
	getsimpleLink() {
		return cy.get(locators.simpleLink).click();
	}

	getPropHref($link: JQuery<HTMLElement>) {
		return $link.prop('href');
	}

	expectStatus(response: Response | Object | any, cod: number) {
		expect(response.status).be.equal(200);
	}

	expectUrl(response: Response | Object | any, urlEsperada: URL) {
		expect(response.allRequestResponses[0]['Request URL']).be.equal(urlEsperada);
	}
}

export default LinksPage;
