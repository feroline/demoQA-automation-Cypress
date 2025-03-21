import BrokenLinksPage from '@pageObject/elements/brokenLinks/BrokenLinksPage';
import ElementsLinks from '@enum/links/Elements';

const brokenLinks = new BrokenLinksPage();

beforeEach(() => {
	cy.visitarToolsQA(ElementsLinks.BrokenLinks);
});

describe('Broken Links', () => {
	it('Check Valid Image', () => {
		brokenLinks.checkValidImage();
	});

	it.skip('Check Broken Image', () => {
		brokenLinks.checkBrokenImage();
	});

	it('Check Valid Link', () => {
		brokenLinks.checkValidLink();
	});

	it('Check Broken Link - 500 status code', () => {
		brokenLinks.checkInvalidLink();
	});
});
