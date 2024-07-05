import HomePage from '../../pages/HomePage';
import ElementsLink from '../../support/Enum/links/Elements';
import CheckBoxPage from '../../pages/Elements/CheckBoxPage';
import CheckBoxEnum from '../../support/Enum/CheckBox';

const Home = new HomePage();
const CheckBox = new CheckBoxPage();

beforeEach(() => {
	cy.visitarToolsQA();
	Home.elements().click();
	cy.getItemMenu('Check Box').click();
});

describe('Testes da tela com Check Box', () => {
	it('Verifica URL da página', () => {
		cy.url().should('include', ElementsLink.CHECK_BOX);
	});

	describe('Partição Expand', () => {
		it('Home', () => {
			CheckBox.nodeHome()
				.should('be.visible')
				.and('contain.text', CheckBoxEnum.TEXT_HOME);

			CheckBox.collapseExpandButton(CheckBox.nodeHome())
				.click()
				.then(() => {
					CheckBox.nodeDesktop()
						.should('be.visible')
						.and('contain.text', CheckBoxEnum.TEXT_DESKTOP);
					CheckBox.nodeDocuments()
						.should('be.visible')
						.and('contain.text', CheckBoxEnum.TEXT_DOCUMENTS);
					CheckBox.nodeDownloads()
						.should('be.visible')
						.and('contain.text', CheckBoxEnum.TEXT_DOWNLOADS);
				});
		});

		it('Desktop', () => {
			CheckBox.collapseExpandButton(CheckBox.nodeHome()).click();

			CheckBox.nodeDesktop()
				.should('be.visible')
				.and('contain.text', CheckBoxEnum.TEXT_DESKTOP);

			CheckBox.collapseExpandButton(CheckBox.nodeDesktop()).click();
			CheckBox.liNode(CheckBox.nodeDesktop())
				.should('contain.html', CheckBox.getHTMLnode('notes'))
				.and('contain.text', CheckBoxEnum.TEXT_NOTES)
				.should('contain.html', CheckBox.getHTMLnode('commands'))
				.and('contain.text', CheckBoxEnum.TEXT_COMMANDS);
		});

		it('Documents');
		it('Downloads');
	});

	describe('Partição Collapse', () => {
		it('Home', () => {
			CheckBox.nodeHome()
				.should('be.visible')
				.and('contain.text', CheckBoxEnum.TEXT_HOME);

			CheckBox.collapseExpandButton(CheckBox.nodeHome()).click();

			CheckBox.collapseExpandButton(CheckBox.nodeHome())
				.click()
				.then(() => {
					CheckBox.nodeDesktop().should('not.exist');
					CheckBox.nodeDocuments().should('not.exist');
					CheckBox.nodeDownloads().should('not.exist');
				});
		});

		it('Desktop', () => {
			CheckBox.collapseExpandButton(CheckBox.nodeHome()).click();

			CheckBox.nodeDesktop()
				.should('be.visible')
				.and('contain.text', CheckBoxEnum.TEXT_DESKTOP);

			CheckBox.collapseExpandButton(CheckBox.nodeDesktop()).click();
			CheckBox.collapseExpandButton(CheckBox.nodeDesktop()).click();
			CheckBox.liNode(CheckBox.nodeDesktop())
				.should('not.contain.html', CheckBox.getHTMLnode('notes'))
				.and('not.contain.text', CheckBoxEnum.TEXT_NOTES)
				.should('not.contain.html', CheckBox.getHTMLnode('commands'))
				.and('not.contain.text', CheckBoxEnum.TEXT_COMMANDS);
		});
	});
});
