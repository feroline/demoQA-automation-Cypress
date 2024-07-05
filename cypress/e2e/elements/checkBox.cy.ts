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

	describe('Partição Mista (Colapse e Expand juntos)', () => {
		describe('Expand e Collapse itens do Checkbox', () => {
			it.only('Home', () => {
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

				CheckBox.collapseExpandButton(CheckBox.nodeHome())
					.click()
					.then(() => {
						CheckBox.nodeDesktop().should('not.exist');
						CheckBox.nodeDocuments().should('not.exist');
						CheckBox.nodeDownloads().should('not.exist');
					});
			});
		});
	});

	// TODO: implementar partição inválida
	describe('Partição Inválida', () => {});
});
