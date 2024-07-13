import locators from './HomeLocators';
import Cards from '../../support/Enum/Cards';

class HomePage {
	link?: string;

	constructor(link?: string) {
		this.link = link;
	}

	getBanner() {
		return cy.get(locators.homeBanner(this.getLink()));
	}

	getElements() {
		return cy.xpath(locators.cardXpath(Cards.Elements));
	}

	getForms() {
		return cy.xpath(locators.cardXpath(Cards.Forms));
	}

	getAlertsFramesWindows() {
		return cy.xpath(locators.cardXpath(Cards.Alerts_Frames_Windows));
	}

	getWidgets() {
		return cy.xpath(locators.cardXpath(Cards.Widgets));
	}

	getInteractions() {
		return cy.xpath(locators.cardXpath(Cards.Interactions));
	}

	getBookStore() {
		return cy.xpath(locators.cardXpath(Cards.Book_Store_Application));
	}

	setLink(link: string) {
		return (this.link = link);
	}

	getLink() {
		return this.link;
	}
}

export default HomePage;
