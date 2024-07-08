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
			CheckBox.getNode('home')
				.should('be.visible')
				.and('contain.text', CheckBoxEnum.TEXT_HOME);

			CheckBox.collapseExpandNode('home').then(() => {
				CheckBox.getNode('desktop')
					.should('be.visible')
					.and('contain.text', CheckBoxEnum.TEXT_DESKTOP);
				CheckBox.getNode('documents')
					.should('be.visible')
					.and('contain.text', CheckBoxEnum.TEXT_DOCUMENTS);
				CheckBox.getNode('downloads')
					.should('be.visible')
					.and('contain.text', CheckBoxEnum.TEXT_DOWNLOADS);
			});
		});

		it.only('Desktop', () => {
			CheckBox.collapseExpandNode('home');

			CheckBox.getNode('desktop')
				.should('be.visible')
				.and('contain.text', CheckBoxEnum.TEXT_DESKTOP);

			CheckBox.collapseExpandNode('desktop').then(() => {
				CheckBox.getNode('notes')
					.should('be.visible')
					.and('contain.text', CheckBoxEnum.TEXT_NOTES);

				CheckBox.getNode('commands')
					.should('be.visible')
					.and('contain.text', CheckBoxEnum.TEXT_COMMANDS);
			});
		});

		it.skip('Documents', () => {
			CheckBox.collapseExpandNode(CheckBox.nodeHome()).click();

			CheckBox.nodeDocuments()
				.should('be.visible')
				.and('contain.text', CheckBoxEnum.TEXT_DOCUMENTS);

			CheckBox.collapseExpandNode(CheckBox.nodeDocuments()).click();
			CheckBox.nodeWorkspace()
				.should('be.visible')
				.and('contain.text', CheckBoxEnum.TEXT_WORKSPACE);

			CheckBox.collapseExpandNode(CheckBox.nodeWorkspace()).click();
			CheckBox.nodeReact()
				.should('be.visible')
				.and('contain.text', CheckBoxEnum.TEXT_REACT)
				.and('contain.text', CheckBoxEnum.TEXT_ANGULAR)
				.and('contain.text', CheckBoxEnum.TEXT_VEU);
			CheckBox.collapseExpandNode(CheckBox.nodeWorkspace()).click();

			CheckBox.nodeOffice()
				.should('be.visible')
				.and('contain.text', CheckBoxEnum.TEXT_OFFICE);
			CheckBox.collapseExpandNode(CheckBox.nodeOffice()).click();
		});

		it('Downloads', () => {
			CheckBox.collapseExpandNode(CheckBox.nodeHome()).click();

			CheckBox.nodeDownloads()
				.should('be.visible')
				.and('contain.text', CheckBoxEnum.TEXT_DOWNLOADS);

			CheckBox.collapseExpandNode(CheckBox.nodeDownloads()).click();
			CheckBox.liNode(CheckBox.nodeDownloads())
				.should('contain.html', CheckBox.getHTMLnode('wordFile'))
				.and('contain.text', CheckBoxEnum.TEXT_WORD_FILE)
				.should('contain.html', CheckBox.getHTMLnode('excelFile'))
				.and('contain.text', CheckBoxEnum.TEXT_EXCEL_FILE);
		});

		it('Expand Todos os itens', () => {
			CheckBox.nodeHome().should('be.visible');

			cy.get('#tree-node .rct-options button.rct-option-expand-all').click();

			cy.get('#tree-node').then(($treeNode) => {
				CheckBox.nodeDesktop().should('be.visible');
				CheckBox.nodeDocuments().should('be.visible');
				CheckBox.nodeDownloads().should('be.visible');
				// TODO Adicionar validações
			});
		});
	});

	describe('Partição Collapse', () => {
		it('Home', () => {
			CheckBox.nodeHome()
				.should('be.visible')
				.and('contain.text', CheckBoxEnum.TEXT_HOME);

			CheckBox.collapseExpandNode(CheckBox.nodeHome()).click();

			CheckBox.collapseExpandNode(CheckBox.nodeHome())
				.click()
				.then(() => {
					CheckBox.nodeDesktop().should('not.exist');
					CheckBox.nodeDocuments().should('not.exist');
					CheckBox.nodeDownloads().should('not.exist');
				});
		});

		it('Desktop', () => {
			CheckBox.collapseExpandNode(CheckBox.nodeHome()).click();

			CheckBox.nodeDesktop()
				.should('be.visible')
				.and('contain.text', CheckBoxEnum.TEXT_DESKTOP);

			CheckBox.collapseExpandNode(CheckBox.nodeDesktop()).click();
			CheckBox.collapseExpandNode(CheckBox.nodeDesktop()).click();
			CheckBox.liNode(CheckBox.nodeDesktop())
				.should('not.contain.html', CheckBox.getHTMLnode('notes'))
				.and('not.contain.text', CheckBoxEnum.TEXT_NOTES)
				.should('not.contain.html', CheckBox.getHTMLnode('commands'))
				.and('not.contain.text', CheckBoxEnum.TEXT_COMMANDS);
		});

		it('Documents', () => {
			CheckBox.collapseExpandNode(CheckBox.nodeHome()).click();

			CheckBox.nodeDocuments()
				.should('be.visible')
				.and('contain.text', CheckBoxEnum.TEXT_DOCUMENTS);

			CheckBox.collapseExpandNode(CheckBox.nodeDocuments()).click();
			CheckBox.collapseExpandNode(CheckBox.nodeDocuments()).click();

			CheckBox.liNode(CheckBox.nodeDocuments())
				.should('not.contain.html', CheckBox.getHTMLnode('workspace'))
				.and('not.contain.text', CheckBoxEnum.TEXT_WORKSPACE)
				.should('not.contain.html', CheckBox.getHTMLnode('office'))
				.and('not.contain.text', CheckBoxEnum.TEXT_OFFICE);
		});

		it('Downloads', () => {
			CheckBox.collapseExpandNode(CheckBox.nodeHome()).click();

			CheckBox.nodeDownloads()
				.should('be.visible')
				.and('contain.text', CheckBoxEnum.TEXT_DOWNLOADS);

			CheckBox.collapseExpandNode(CheckBox.nodeDownloads()).click();
			CheckBox.collapseExpandNode(CheckBox.nodeDownloads()).click();

			CheckBox.liNode(CheckBox.nodeDownloads())
				.should('not.contain.html', CheckBox.getHTMLnode('wordFile'))
				.and('not.contain.text', CheckBoxEnum.TEXT_WORD_FILE)
				.should('not.contain.html', CheckBox.getHTMLnode('excelFile'))
				.and('not.contain.text', CheckBoxEnum.TEXT_EXCEL_FILE);
		});
	});

	// TODO Adicionar validação de Check
});
