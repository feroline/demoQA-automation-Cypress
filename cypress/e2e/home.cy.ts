import HomePage from '../pages/home/HomePage';
import HomeLinks from '../support/Enum/links/Home';

const Home = new HomePage();

beforeEach(() => {
	cy.visitarToolsQA();
});

describe('Teste de Home', () => {
	describe('Verificando Visibilidade', () => {
		it('Banner', () => {
			Home.setLink(HomeLinks.Banner);
			Home.getBanner().should('be.visible');
		});

		it('Elements', () => {
			Home.getElements().should('be.visible');
		});

		it('Forms', () => {
			Home.getForms().should('be.visible');
		});

		it('Alerts, Frames & Windows', () => {
			Home.getAlertsFramesWindows().should('be.visible');
		});

		it('Widgets', () => {
			Home.getWidgets().should('be.visible');
		});

		it('Interactions', () => {
			Home.getInteractions().should('be.visible');
		});

		it('Book Store', () => {
			Home.getBookStore().should('be.visible');
		});
	});

	describe('Verificando Redirecionamento', () => {
		it('Banner', () => {
			Home.setLink(HomeLinks.Banner);
			Home.getBanner()
				.should('exist')
				.click()
				.then(() => {
					cy.request('eq', Home.getLink()).its('status').should('eq', 200);
				});
		});

		it('Elements', () => {
			Home.setLink(HomeLinks.Elements);
			Home.getElements().click();
			cy.url().should('contains', Home.getLink());
		});

		it('Forms', () => {
			Home.setLink(HomeLinks.Forms);
			cy.url().should('contains', Home.getLink());
		});

		it('Alerts, Frames & Windows', () => {
			Home.setLink(HomeLinks.Alerts_Frames_Windows);
			Home.getAlertsFramesWindows().click();
			cy.url().should('contains', Home.getLink());
		});

		it('Widgets', () => {
			Home.setLink(HomeLinks.Widgets);
			Home.getWidgets().click();
			cy.url().should('contains', Home.getLink());
		});

		it('Interactions', () => {
			Home.setLink(HomeLinks.Interaction);
			Home.getInteractions().click();
			cy.url().should('contains', Home.getLink());
		});

		it('Book Store', () => {
			Home.setLink(HomeLinks.Book_store);
			Home.getBookStore().click();
			cy.url().should('contains', Home.getLink());
		});
	});
});
