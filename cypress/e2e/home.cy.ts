import HomePage from '../pages/home/HomePage';
import HomeLinks from '../support/Enum/links/Home';

const Home = new HomePage();

//TODO: retirar os get dos métodos que  não são get
beforeEach(() => {
	cy.visitarToolsQA();
});

describe('Teste de Home', () => {
	describe('Verificando Visibilidade', () => {
		it('Banner', () => {
			Home.setLink(HomeLinks.BANNER);
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
			Home.setLink(HomeLinks.BANNER);
			Home.banner()
				.should('exist')
				.click()
				.then(() => {
					cy.request('eq', Home.getLink()).its('status').should('eq', 200);
				});
		});

		it('Elements', () => {
			Home.setLink(HomeLinks.ELEMENTS);
			Home.elements().click();
			cy.url().should('contains', Home.getLink());
		});

		it('Forms', () => {
			Home.setLink(HomeLinks.FORMS);
			Home.forms().click();
			cy.url().should('contains', Home.getLink());
		});

		it('Alerts, Frames & Windows', () => {
			Home.setLink(HomeLinks.ALERTS_FRAMES_WINDOWS);
			Home.alertsFramesWindows().click();
			cy.url().should('contains', Home.getLink());
		});

		it('Widgets', () => {
			Home.setLink(HomeLinks.WIDGETS);
			Home.widgets().click();
			cy.url().should('contains', Home.getLink());
		});

		it('Interactions', () => {
			Home.setLink(HomeLinks.INTERACTIONS);
			Home.interactions().click();
			cy.url().should('contains', Home.getLink());
		});

		it('Book Store', () => {
			Home.setLink(HomeLinks.BOOKSTORE);
			Home.bookStore().click();
			cy.url().should('contains', Home.getLink());
		});
	});
});
