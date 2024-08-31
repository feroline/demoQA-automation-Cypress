import locators from './BrokenLinksLocators';

class BrokenLinksPage {
	checkValidImage() {
		cy
			.get(locators.validImage)
			.should('exist')
			.and('be.visible')
			//@ts-ignore
			.and(($img) => expect($img[0].naturalWidth).to.be.gt(0));
	}

	checkBrokenImage() {
		cy
			.get(locators.brokenImage)
			.should('exist')
			.and('be.visible')
			//@ts-ignore
			.and(($img) => expect($img[0].naturalWidth).to.be.gt(0));
	}

	checkValidLink() {
		cy
			.xpath(locators.validLinkXpath)
			.click()
			.then(
				//@ts-ignore com o {timeout}
				() => {
					cy.url().should('be.contains', Cypress.config('baseUrl'));
				},
				{ timeout: 10000 }
			);
	}

	checkInvalidLink() {
		cy
			.xpath(locators.invalidLinkXpath)
			.click()
			.then(() => {
				cy
					.get(locators.pragrafoBrokenLink)
					.should('contain.text', '500 status code');
			});
	}
}

export default BrokenLinksPage;
