import HomePage from '@pageObject/home/HomePage';
import HomeLinks from '@enum/links/Home';

const Home = new HomePage();

beforeEach(() => {
	cy.visitarToolsQA('/');
});

describe('Teste de Home', () => {
	describe('Verificando Visibilidade', () => {
		it('Banner', () => {
			Home.setLink(HomeLinks.Banner);
			Home.banner().should('be.visible');
		});

		it('Elements', () => {
			Home.elements().should('be.visible');
		});

		it('Forms', () => {
			Home.forms().should('be.visible');
		});

		it('Alerts, Frames & Windows', () => {
			Home.alertsFramesWindows().should('be.visible');
		});

		it('Widgets', () => {
			Home.widgets().should('be.visible');
		});

		it('Interactions', () => {
			Home.interactions().should('be.visible');
		});

		it('Book Store', () => {
			Home.bookStore().should('be.visible');
		});
	});

	describe('Verificando Redirecionamento', () => {
		it('Banner', () => {
			Home.setLink(HomeLinks.Banner);
			Home.banner()
				.should('exist')
				.click()
				.then(() => {
					cy.request('eq', Home.getLink()).its('status').should('eq', 200);
				});
		});

		it('Elements', () => {
			Home.setLink(HomeLinks.Elements);
			Home.elements().click();
			cy.url().should('contains', Home.getLink());
		});

		it('Forms', () => {
			Home.setLink(HomeLinks.Forms);
			Home.forms().click();
			cy.url().should('contains', Home.getLink());
		});

		it('Alerts, Frames & Windows', () => {
			Home.setLink(HomeLinks.Alerts_Frames_Windows);
			Home.alertsFramesWindows().click();
			cy.url().should('contains', Home.getLink());
		});

		it('Widgets', () => {
			Home.setLink(HomeLinks.Widgets);
			Home.widgets().click();
			cy.url().should('contains', Home.getLink());
		});

		it('Interactions', () => {
			Home.setLink(HomeLinks.Interaction);
			Home.interactions().click();
			cy.url().should('contains', Home.getLink());
		});

		it('Book Store', () => {
			Home.setLink(HomeLinks.Book_store);
			Home.bookStore().click();
			cy.url().should('contains', Home.getLink());
		});
	});
});
