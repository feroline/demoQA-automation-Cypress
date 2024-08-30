import locators from './LinksLocators';
import homeLocators from '../home/HomeLocators';
import Cards from '../../support/Enum/Cards';

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

	expectUrl(response: Response | Object | any, urlEsperada: string) {
		expect(response.allRequestResponses[0]['Request URL']).be.equal(urlEsperada);
	}

	checkRedirectFrontHome() {
		cy.xpath(homeLocators.cardXpath(Cards.Elements)).should('be.visible');
	}
}

export default LinksPage;
