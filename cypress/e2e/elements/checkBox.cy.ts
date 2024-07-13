import HomePage from '../../pages/home/HomePage';
import ElementsLink from '../../support/Enum/links/Elements';
import CheckBoxPage from '../../pages/Elements/CheckBoxPage';
import CheckBoxText from '../../support/Enum/CheckBoxText';

const Home = new HomePage();
const CheckBox = new CheckBoxPage();

beforeEach(() => {
	cy.visitarToolsQA();
	Home.elements().click();
	CheckBox.checkBoxMenu();
});

describe('Testes da tela com Check Box', () => {
	it('Verifica URL da página', () => {
		cy.url().should('include', ElementsLink.Checkbox);
	});

	describe('Expandir itens', () => {
		it('Home', () => {
			CheckBox.nodeByLabel('home')
				.should('be.visible')
				.and('contain.text', CheckBoxText.HOME);

			CheckBox.collapseExpandNode('home').then(() => {
				CheckBox.nodeByLabel('desktop')
					.should('be.visible')
					.and('contain.text', CheckBoxText.DESKTOP);
				CheckBox.nodeByLabel('documents')
					.should('be.visible')
					.and('contain.text', CheckBoxText.DOCUMENTS);
				CheckBox.nodeByLabel('downloads')
					.should('be.visible')
					.and('contain.text', CheckBoxText.DOWNLOADS);
			});
		});

		it('Desktop', () => {
			CheckBox.collapseExpandNode('home');

			CheckBox.nodeByLabel('desktop')
				.should('be.visible')
				.and('contain.text', CheckBoxText.DESKTOP);

			CheckBox.collapseExpandNode('desktop').then(() => {
				CheckBox.nodeByLabel('notes')
					.should('be.visible')
					.and('contain.text', CheckBoxText.NOTES);

				CheckBox.nodeByLabel('commands')
					.should('be.visible')
					.and('contain.text', CheckBoxText.COMMANDS);
			});
		});

		it('Documents', () => {
			CheckBox.collapseExpandNode('home');

			CheckBox.nodeByLabel('documents')
				.should('be.visible')
				.and('contain.text', CheckBoxText.DOCUMENTS);
			CheckBox.collapseExpandNode('documents').then(() => {
				CheckBox.nodeByLabel('workspace')
					.should('be.visible')
					.and('contain.text', CheckBoxText.WORKSPACE);
				CheckBox.nodeByLabel('office')
					.should('be.visible')
					.and('contain.text', CheckBoxText.OFFICE);
			});

			CheckBox.collapseExpandNode('workspace').then(() => {
				CheckBox.nodeByLabel('react')
					.should('be.visible')
					.and('contain.text', CheckBoxText.REACT);
				CheckBox.nodeByLabel('angular')
					.should('be.visible')
					.and('contain.text', CheckBoxText.ANGULAR);
				CheckBox.nodeByLabel('veu')
					.should('be.visible')
					.and('contain.text', CheckBoxText.VEU);
			});

			CheckBox.collapseExpandNode('office').then(() => {
				CheckBox.nodeByLabel('public')
					.should('be.visible')
					.and('contain.text', CheckBoxText.PUBLIC);
				CheckBox.nodeByLabel('private')
					.should('be.visible')
					.and('contain.text', CheckBoxText.PRIVATE);
				CheckBox.nodeByLabel('classified')
					.should('be.visible')
					.and('contain.text', CheckBoxText.CLASSIFIED);
				CheckBox.nodeByLabel('general')
					.should('be.visible')
					.and('contain.text', CheckBoxText.GENERAL);
			});
		});

		it('Downloads', () => {
			CheckBox.collapseExpandNode('home');

			CheckBox.nodeByLabel('downloads')
				.should('be.visible')
				.and('contain.text', CheckBoxText.DOWNLOADS);

			CheckBox.collapseExpandNode('downloads').then(() => {
				CheckBox.nodeByLabel('wordFile')
					.should('be.visible')
					.and('contain.text', CheckBoxText.WORD_FILE);
				CheckBox.nodeByLabel('excelFile')
					.should('be.visible')
					.and('contain.text', CheckBoxText.EXCEL_FILE);
			});
		});

		it('Todos os itens', () => {
			CheckBox.nodeByLabel('home').should('be.visible');

			CheckBox.expandAll();

			CheckBox.treeNode().then(() => {
				CheckBox.nodeByLabel('desktop').should('be.visible');
				CheckBox.nodeByLabel('documents').should('be.visible');
				CheckBox.nodeByLabel('downloads').should('be.visible');
				CheckBox.nodeByLabel('notes').should('be.visible');
				CheckBox.nodeByLabel('commands').should('be.visible');
				CheckBox.nodeByLabel('workspace').should('be.visible');
				CheckBox.nodeByLabel('react').should('be.visible');
				CheckBox.nodeByLabel('angular').should('be.visible');
				CheckBox.nodeByLabel('veu').should('be.visible');
				CheckBox.nodeByLabel('office').should('be.visible');
				CheckBox.nodeByLabel('public').should('be.visible');
				CheckBox.nodeByLabel('private').should('be.visible');
				CheckBox.nodeByLabel('classified').should('be.visible');
				CheckBox.nodeByLabel('general').should('be.visible');
				CheckBox.nodeByLabel('wordFile').should('be.visible');
				CheckBox.nodeByLabel('excelFile').should('be.visible');
			});
		});
	});

	describe('Colapsar Itens', () => {
		it('Home', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('home').then(() => {
				CheckBox.nodeByLabel('desktop').should('not.exist');
				CheckBox.nodeByLabel('documents').should('not.exist');
				CheckBox.nodeByLabel('downloads').should('not.exist');
			});
		});

		it('Desktop', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('desktop');
			CheckBox.collapseExpandNode('desktop').then(() => {
				CheckBox.nodeByLabel('notes').should('not.exist');
				CheckBox.nodeByLabel('commands').should('not.exist');
			});
		});

		it('Documents', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('documents');

			CheckBox.collapseExpandNode('workspace');
			CheckBox.collapseExpandNode('workspace').then(() => {
				CheckBox.nodeByLabel('react').should('not.exist');
				CheckBox.nodeByLabel('angular').should('not.exist');
				CheckBox.nodeByLabel('veu').should('not.exist');
			});

			CheckBox.collapseExpandNode('office');
			CheckBox.collapseExpandNode('office').then(() => {
				CheckBox.nodeByLabel('public').should('not.exist');
				CheckBox.nodeByLabel('private').should('not.exist');
				CheckBox.nodeByLabel('classified').should('not.exist');
				CheckBox.nodeByLabel('general').should('not.exist');
			});

			CheckBox.collapseExpandNode('documents').then(() => {
				CheckBox.nodeByLabel('workspace').should('not.exist');
				CheckBox.nodeByLabel('office').should('not.exist');
			});
		});

		it('Downloads', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('downloads');
			CheckBox.collapseExpandNode('downloads').then(() => {
				CheckBox.nodeByLabel('wordFile').should('not.exist');
				CheckBox.nodeByLabel('excelFile').should('not.exist');
			});
		});

		it('Todos os itens', () => {
			CheckBox.nodeByLabel('home').should('be.visible');

			CheckBox.expandAll();
			CheckBox.collapseAll();

			CheckBox.treeNode().then(() => {
				CheckBox.nodeByLabel('desktop').should('not.exist');
				CheckBox.nodeByLabel('documents').should('not.exist');
				CheckBox.nodeByLabel('downloads').should('not.exist');
				CheckBox.nodeByLabel('notes').should('not.exist');
				CheckBox.nodeByLabel('commands').should('not.exist');
				CheckBox.nodeByLabel('workspace').should('not.exist');
				CheckBox.nodeByLabel('react').should('not.exist');
				CheckBox.nodeByLabel('angular').should('not.exist');
				CheckBox.nodeByLabel('veu').should('not.exist');
				CheckBox.nodeByLabel('office').should('not.exist');
				CheckBox.nodeByLabel('public').should('not.exist');
				CheckBox.nodeByLabel('private').should('not.exist');
				CheckBox.nodeByLabel('classified').should('not.exist');
				CheckBox.nodeByLabel('general').should('not.exist');
				CheckBox.nodeByLabel('wordFile').should('not.exist');
				CheckBox.nodeByLabel('excelFile').should('not.exist');
			});
		});
	});

	describe('Marcar Itens', () => {
		it('Home', () => {
			CheckBox.nodeByLabel('home').click();
			CheckBox.inputCheck('home').should('be.checked');
			CheckBox.expandAll();

			CheckBox.inputCheck('desktop').should('be.checked');
			CheckBox.inputCheck('documents').should('be.checked');
			CheckBox.inputCheck('downloads').should('be.checked');
			CheckBox.inputCheck('notes').should('be.checked');
			CheckBox.inputCheck('commands').should('be.checked');
			CheckBox.inputCheck('workspace').should('be.checked');
			CheckBox.inputCheck('react').should('be.checked');
			CheckBox.inputCheck('angular').should('be.checked');
			CheckBox.inputCheck('veu').should('be.checked');
			CheckBox.inputCheck('office').should('be.checked');
			CheckBox.inputCheck('public').should('be.checked');
			CheckBox.inputCheck('private').should('be.checked');
			CheckBox.inputCheck('classified').should('be.checked');
			CheckBox.inputCheck('general').should('be.checked');
			CheckBox.inputCheck('wordFile').should('be.checked');
			CheckBox.inputCheck('excelFile').should('be.checked');
		});

		it('Desktop', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('desktop');

			CheckBox.nodeByLabel('desktop').click();
			CheckBox.inputCheck('desktop').should('be.checked');
			CheckBox.inputCheck('notes').should('be.checked');
			CheckBox.inputCheck('commands').should('be.checked');

			CheckBox.inputCheck('documents').should('not.be.checked');
			CheckBox.inputCheck('downloads').should('not.be.checked');
		});

		it('Documents', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('documents');
			CheckBox.collapseExpandNode('workspace');
			CheckBox.collapseExpandNode('office');

			CheckBox.nodeByLabel('documents').click();
			CheckBox.inputCheck('documents').should('be.checked');

			CheckBox.inputCheck('workspace').should('be.checked');
			CheckBox.inputCheck('react').should('be.checked');
			CheckBox.inputCheck('angular').should('be.checked');
			CheckBox.inputCheck('veu').should('be.checked');

			CheckBox.inputCheck('office').should('be.checked');
			CheckBox.inputCheck('public').should('be.checked');
			CheckBox.inputCheck('private').should('be.checked');
			CheckBox.inputCheck('classified').should('be.checked');
			CheckBox.inputCheck('general').should('be.checked');

			CheckBox.inputCheck('desktop').should('not.be.checked');
			CheckBox.inputCheck('downloads').should('not.be.checked');
		});

		it('Downloads', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('downloads');

			CheckBox.nodeByLabel('downloads').click();
			CheckBox.inputCheck('downloads').should('be.checked');
			CheckBox.inputCheck('wordFile').should('be.checked');
			CheckBox.inputCheck('excelFile').should('be.checked');

			CheckBox.inputCheck('documents').should('not.be.checked');
			CheckBox.inputCheck('desktop').should('not.be.checked');
		});
	});

	describe('Desmarcar Itens', () => {
		it('Home', () => {
			CheckBox.nodeByLabel('home').dblclick();
			CheckBox.inputCheck('home').should('not.be.checked');
			CheckBox.expandAll();

			CheckBox.inputCheck('desktop').should('not.be.checked');
			CheckBox.inputCheck('documents').should('not.be.checked');
			CheckBox.inputCheck('downloads').should('not.be.checked');
			CheckBox.inputCheck('notes').should('not.be.checked');
			CheckBox.inputCheck('commands').should('not.be.checked');
			CheckBox.inputCheck('workspace').should('not.be.checked');
			CheckBox.inputCheck('react').should('not.be.checked');
			CheckBox.inputCheck('angular').should('not.be.checked');
			CheckBox.inputCheck('veu').should('not.be.checked');
			CheckBox.inputCheck('office').should('not.be.checked');
			CheckBox.inputCheck('public').should('not.be.checked');
			CheckBox.inputCheck('private').should('not.be.checked');
			CheckBox.inputCheck('classified').should('not.be.checked');
			CheckBox.inputCheck('general').should('not.be.checked');
			CheckBox.inputCheck('wordFile').should('not.be.checked');
			CheckBox.inputCheck('excelFile').should('not.be.checked');
		});

		it('Desktop', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('desktop');

			CheckBox.nodeByLabel('desktop').dblclick();
			CheckBox.inputCheck('desktop').should('not.be.checked');
			CheckBox.inputCheck('notes').should('not.be.checked');
			CheckBox.inputCheck('commands').should('not.be.checked');
		});

		it('Documents', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('documents');
			CheckBox.collapseExpandNode('workspace');
			CheckBox.collapseExpandNode('office');

			CheckBox.nodeByLabel('documents').dblclick();
			CheckBox.inputCheck('documents').should('not.be.checked');

			CheckBox.inputCheck('workspace').should('not.be.checked');
			CheckBox.inputCheck('react').should('not.be.checked');
			CheckBox.inputCheck('angular').should('not.be.checked');
			CheckBox.inputCheck('veu').should('not.be.checked');

			CheckBox.inputCheck('office').should('not.be.checked');
			CheckBox.inputCheck('public').should('not.be.checked');
			CheckBox.inputCheck('private').should('not.be.checked');
			CheckBox.inputCheck('classified').should('not.be.checked');
			CheckBox.inputCheck('general').should('not.be.checked');
		});

		it('Downloads', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('downloads');

			CheckBox.nodeByLabel('downloads').dblclick();
			CheckBox.inputCheck('downloads').should('not.be.checked');
			CheckBox.inputCheck('wordFile').should('not.be.checked');
			CheckBox.inputCheck('excelFile').should('not.be.checked');
		});
	});
});
