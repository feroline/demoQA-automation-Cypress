class HomePage {
	link?: string;

	constructor(link?: string) {
		this.link = link;
	}

	banner() {
		return cy.get(`div.home-banner a[href="${this.getLink()}"]`);
	}

	elements() {
		return this.cardByTitle('Elements');
	}

	forms() {
		return this.cardByTitle('Forms');
	}

	alertsFramesWindows() {
		return this.cardByTitle('Alerts, Frame & Windows');
	}

	widgets() {
		return this.cardByTitle('Widgets');
	}

	interactions() {
		return this.cardByTitle('Interactions');
	}

	bookStore() {
		return this.cardByTitle('Book Store Application');
	}

	setLink(link: string) {
		return (this.link = link);
	}

	getLink() {
		return this.link;
	}

	private cardByTitle(title: string) {
		return cy.xpath(
			`//div[contains(@class, 'card-body')][contains(.,'${title}')]`
		);
	}
}

export default HomePage;
