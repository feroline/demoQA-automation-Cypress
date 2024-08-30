import locators from './HomeLocators';
import Cards from '@enum/Cards';

class HomePage {
	link?: string;

	constructor(link?: string) {
		this.link = link;
	}

	banner() {
		return cy.get(locators.homeBanner(this.getLink()));
	}

	elements() {
		return cy.xpath(locators.cardXpath(Cards.Elements));
	}

	forms() {
		return cy.xpath(locators.cardXpath(Cards.Forms));
	}

	alertsFramesWindows() {
		return cy.xpath(locators.cardXpath(Cards.Alerts_Frames_Windows));
	}

	widgets() {
		return cy.xpath(locators.cardXpath(Cards.Widgets));
	}

	interactions() {
		return cy.xpath(locators.cardXpath(Cards.Interactions));
	}

	bookStore() {
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
