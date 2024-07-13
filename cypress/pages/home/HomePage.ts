import HomeLocators from './HomeLocators';
class HomePage {
	link?: string;

	constructor(link?: string) {
		this.link = link;
	}

	banner() {
		return cy.get(HomeLocators.homeBanner(this.getLink()));
	}

	elements() {
		return cy.xpath(HomeLocators.cardXpath('Elements'));
	}

	forms() {
		return cy.xpath(HomeLocators.cardXpath('Forms'));
	}

	alertsFramesWindows() {
		return cy.xpath(HomeLocators.cardXpath('Alerts, Frame & Windows'));
	}

	widgets() {
		return cy.xpath(HomeLocators.cardXpath('Widgets'));
	}

	interactions() {
		return cy.xpath(HomeLocators.cardXpath('Interactions'));
	}

	bookStore() {
		return cy.xpath(HomeLocators.cardXpath('Book Store Application'));
	}

	setLink(link: string) {
		return (this.link = link);
	}

	getLink() {
		return this.link;
	}
}

export default HomePage;
