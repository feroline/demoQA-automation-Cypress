import HomeLocators from './HomeLocators';
import Cards from '../../support/Enum/Cards';

class HomePage {
	link?: string;

	constructor(link?: string) {
		this.link = link;
	}

	banner() {
		return cy.get(HomeLocators.homeBanner(this.getLink()));
	}

	elements() {
		return cy.xpath(HomeLocators.cardXpath(Cards.Elements));
	}

	forms() {
		return cy.xpath(HomeLocators.cardXpath(Cards.Forms));
	}

	alertsFramesWindows() {
		return cy.xpath(HomeLocators.cardXpath(Cards.Alerts_Frames_Windows));
	}

	widgets() {
		return cy.xpath(HomeLocators.cardXpath(Cards.Widgets));
	}

	interactions() {
		return cy.xpath(HomeLocators.cardXpath(Cards.Interactions));
	}

	bookStore() {
		return cy.xpath(HomeLocators.cardXpath(Cards.Book_Store_Application));
	}

	setLink(link: string) {
		return (this.link = link);
	}

	getLink() {
		return this.link;
	}
}

export default HomePage;
