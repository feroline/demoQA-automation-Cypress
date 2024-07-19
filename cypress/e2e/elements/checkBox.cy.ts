import HomePage from '../../pageObjects/home/HomePage';
import ElementsLink from '../../support/Enum/links/Elements';
import CheckBoxPage from '../../pageObjects/checkBox/CheckBoxPage';
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
			CheckBox.getNodeByLabel('home')
				.should('be.visible')
				.and('contain.text', CheckBoxText.Home);

			// TODO: Usar Within logo abaixo
			CheckBox.collapseExpandNode('home').then(() => {
				CheckBox.getNodeByLabel('desktop')
					.should('be.visible')
					.and('contain.text', CheckBoxText.Desktop);
				CheckBox.getNodeByLabel('documents')
					.should('be.visible')
					.and('contain.text', CheckBoxText.Documents);
				CheckBox.getNodeByLabel('downloads')
					.should('be.visible')
					.and('contain.text', CheckBoxText.Downloads);
			});
		});

		it('Desktop', () => {
			CheckBox.collapseExpandNode('home');

			CheckBox.getNodeByLabel('desktop')
				.should('be.visible')
				.and('contain.text', CheckBoxText.Desktop);

			CheckBox.collapseExpandNode('desktop').then(() => {
				CheckBox.getNodeByLabel('notes')
					.should('be.visible')
					.and('contain.text', CheckBoxText.Notes);

				CheckBox.getNodeByLabel('commands')
					.should('be.visible')
					.and('contain.text', CheckBoxText.Commands);
			});
		});

		it('Documents', () => {
			CheckBox.collapseExpandNode('home');

			CheckBox.getNodeByLabel('documents')
				.should('be.visible')
				.and('contain.text', CheckBoxText.Documents);
			CheckBox.collapseExpandNode('documents').then(() => {
				CheckBox.getNodeByLabel('workspace')
					.should('be.visible')
					.and('contain.text', CheckBoxText.Workspace);
				CheckBox.getNodeByLabel('office')
					.should('be.visible')
					.and('contain.text', CheckBoxText.Office);
			});

			CheckBox.collapseExpandNode('workspace').then(() => {
				CheckBox.getNodeByLabel('react')
					.should('be.visible')
					.and('contain.text', CheckBoxText.React);
				CheckBox.getNodeByLabel('angular')
					.should('be.visible')
					.and('contain.text', CheckBoxText.Angular);
				CheckBox.getNodeByLabel('veu')
					.should('be.visible')
					.and('contain.text', CheckBoxText.Veu);
			});

			CheckBox.collapseExpandNode('office').then(() => {
				CheckBox.getNodeByLabel('public')
					.should('be.visible')
					.and('contain.text', CheckBoxText.Public);
				CheckBox.getNodeByLabel('private')
					.should('be.visible')
					.and('contain.text', CheckBoxText.Private);
				CheckBox.getNodeByLabel('classified')
					.should('be.visible')
					.and('contain.text', CheckBoxText.Classified);
				CheckBox.getNodeByLabel('general')
					.should('be.visible')
					.and('contain.text', CheckBoxText.General);
			});
		});

		it('Downloads', () => {
			CheckBox.collapseExpandNode('home');

			CheckBox.getNodeByLabel('downloads')
				.should('be.visible')
				.and('contain.text', CheckBoxText.Downloads);

			CheckBox.collapseExpandNode('downloads').then(() => {
				CheckBox.getNodeByLabel('wordFile')
					.should('be.visible')
					.and('contain.text', CheckBoxText.Word_file);
				CheckBox.getNodeByLabel('excelFile')
					.should('be.visible')
					.and('contain.text', CheckBoxText.Excel_file);
			});
		});

		it('Todos os itens', () => {
			CheckBox.getNodeByLabel('home').should('be.visible');

			CheckBox.expandAll();

			CheckBox.getTreeNode().then(() => {
				CheckBox.getNodeByLabel('desktop').should('be.visible');
				CheckBox.getNodeByLabel('documents').should('be.visible');
				CheckBox.getNodeByLabel('downloads').should('be.visible');
				CheckBox.getNodeByLabel('notes').should('be.visible');
				CheckBox.getNodeByLabel('commands').should('be.visible');
				CheckBox.getNodeByLabel('workspace').should('be.visible');
				CheckBox.getNodeByLabel('react').should('be.visible');
				CheckBox.getNodeByLabel('angular').should('be.visible');
				CheckBox.getNodeByLabel('veu').should('be.visible');
				CheckBox.getNodeByLabel('office').should('be.visible');
				CheckBox.getNodeByLabel('public').should('be.visible');
				CheckBox.getNodeByLabel('private').should('be.visible');
				CheckBox.getNodeByLabel('classified').should('be.visible');
				CheckBox.getNodeByLabel('general').should('be.visible');
				CheckBox.getNodeByLabel('wordFile').should('be.visible');
				CheckBox.getNodeByLabel('excelFile').should('be.visible');
			});
		});
	});

	describe('Colapsar Itens', () => {
		it('Home', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('home').then(() => {
				CheckBox.getNodeByLabel('desktop').should('not.exist');
				CheckBox.getNodeByLabel('documents').should('not.exist');
				CheckBox.getNodeByLabel('downloads').should('not.exist');
			});
		});

		it('Desktop', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('desktop');
			CheckBox.collapseExpandNode('desktop').then(() => {
				CheckBox.getNodeByLabel('notes').should('not.exist');
				CheckBox.getNodeByLabel('commands').should('not.exist');
			});
		});

		it('Documents', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('documents');

			CheckBox.collapseExpandNode('workspace');
			CheckBox.collapseExpandNode('workspace').then(() => {
				CheckBox.getNodeByLabel('react').should('not.exist');
				CheckBox.getNodeByLabel('angular').should('not.exist');
				CheckBox.getNodeByLabel('veu').should('not.exist');
			});

			CheckBox.collapseExpandNode('office');
			CheckBox.collapseExpandNode('office').then(() => {
				CheckBox.getNodeByLabel('public').should('not.exist');
				CheckBox.getNodeByLabel('private').should('not.exist');
				CheckBox.getNodeByLabel('classified').should('not.exist');
				CheckBox.getNodeByLabel('general').should('not.exist');
			});

			CheckBox.collapseExpandNode('documents').then(() => {
				CheckBox.getNodeByLabel('workspace').should('not.exist');
				CheckBox.getNodeByLabel('office').should('not.exist');
			});
		});

		it('Downloads', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('downloads');
			CheckBox.collapseExpandNode('downloads').then(() => {
				CheckBox.getNodeByLabel('wordFile').should('not.exist');
				CheckBox.getNodeByLabel('excelFile').should('not.exist');
			});
		});

		it('Todos os itens', () => {
			CheckBox.getNodeByLabel('home').should('be.visible');

			CheckBox.expandAll();
			CheckBox.collapseAll();

			CheckBox.getTreeNode().then(() => {
				CheckBox.getNodeByLabel('desktop').should('not.exist');
				CheckBox.getNodeByLabel('documents').should('not.exist');
				CheckBox.getNodeByLabel('downloads').should('not.exist');
				CheckBox.getNodeByLabel('notes').should('not.exist');
				CheckBox.getNodeByLabel('commands').should('not.exist');
				CheckBox.getNodeByLabel('workspace').should('not.exist');
				CheckBox.getNodeByLabel('react').should('not.exist');
				CheckBox.getNodeByLabel('angular').should('not.exist');
				CheckBox.getNodeByLabel('veu').should('not.exist');
				CheckBox.getNodeByLabel('office').should('not.exist');
				CheckBox.getNodeByLabel('public').should('not.exist');
				CheckBox.getNodeByLabel('private').should('not.exist');
				CheckBox.getNodeByLabel('classified').should('not.exist');
				CheckBox.getNodeByLabel('general').should('not.exist');
				CheckBox.getNodeByLabel('wordFile').should('not.exist');
				CheckBox.getNodeByLabel('excelFile').should('not.exist');
			});
		});
	});

	describe('Marcar Itens', () => {
		it('Home', () => {
			CheckBox.getNodeByLabel('home').click();
			CheckBox.getCheckInput('home').should('be.checked');
			CheckBox.expandAll();

			CheckBox.getCheckInput('desktop').should('be.checked');
			CheckBox.getCheckInput('documents').should('be.checked');
			CheckBox.getCheckInput('downloads').should('be.checked');
			CheckBox.getCheckInput('notes').should('be.checked');
			CheckBox.getCheckInput('commands').should('be.checked');
			CheckBox.getCheckInput('workspace').should('be.checked');
			CheckBox.getCheckInput('react').should('be.checked');
			CheckBox.getCheckInput('angular').should('be.checked');
			CheckBox.getCheckInput('veu').should('be.checked');
			CheckBox.getCheckInput('office').should('be.checked');
			CheckBox.getCheckInput('public').should('be.checked');
			CheckBox.getCheckInput('private').should('be.checked');
			CheckBox.getCheckInput('classified').should('be.checked');
			CheckBox.getCheckInput('general').should('be.checked');
			CheckBox.getCheckInput('wordFile').should('be.checked');
			CheckBox.getCheckInput('excelFile').should('be.checked');
		});

		it('Desktop', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('desktop');

			CheckBox.getNodeByLabel('desktop').click();
			CheckBox.getCheckInput('desktop').should('be.checked');
			CheckBox.getCheckInput('notes').should('be.checked');
			CheckBox.getCheckInput('commands').should('be.checked');

			CheckBox.getCheckInput('documents').should('not.be.checked');
			CheckBox.getCheckInput('downloads').should('not.be.checked');
		});

		it('Documents', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('documents');
			CheckBox.collapseExpandNode('workspace');
			CheckBox.collapseExpandNode('office');

			CheckBox.getNodeByLabel('documents').click();
			CheckBox.getCheckInput('documents').should('be.checked');

			CheckBox.getCheckInput('workspace').should('be.checked');
			CheckBox.getCheckInput('react').should('be.checked');
			CheckBox.getCheckInput('angular').should('be.checked');
			CheckBox.getCheckInput('veu').should('be.checked');

			CheckBox.getCheckInput('office').should('be.checked');
			CheckBox.getCheckInput('public').should('be.checked');
			CheckBox.getCheckInput('private').should('be.checked');
			CheckBox.getCheckInput('classified').should('be.checked');
			CheckBox.getCheckInput('general').should('be.checked');

			CheckBox.getCheckInput('desktop').should('not.be.checked');
			CheckBox.getCheckInput('downloads').should('not.be.checked');
		});

		it('Downloads', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('downloads');

			CheckBox.getNodeByLabel('downloads').click();
			CheckBox.getCheckInput('downloads').should('be.checked');
			CheckBox.getCheckInput('wordFile').should('be.checked');
			CheckBox.getCheckInput('excelFile').should('be.checked');

			CheckBox.getCheckInput('documents').should('not.be.checked');
			CheckBox.getCheckInput('desktop').should('not.be.checked');
		});
	});

	describe('Desmarcar Itens', () => {
		it('Home', () => {
			CheckBox.getNodeByLabel('home').dblclick();
			CheckBox.getCheckInput('home').should('not.be.checked');
			CheckBox.expandAll();

			CheckBox.getCheckInput('desktop').should('not.be.checked');
			CheckBox.getCheckInput('documents').should('not.be.checked');
			CheckBox.getCheckInput('downloads').should('not.be.checked');
			CheckBox.getCheckInput('notes').should('not.be.checked');
			CheckBox.getCheckInput('commands').should('not.be.checked');
			CheckBox.getCheckInput('workspace').should('not.be.checked');
			CheckBox.getCheckInput('react').should('not.be.checked');
			CheckBox.getCheckInput('angular').should('not.be.checked');
			CheckBox.getCheckInput('veu').should('not.be.checked');
			CheckBox.getCheckInput('office').should('not.be.checked');
			CheckBox.getCheckInput('public').should('not.be.checked');
			CheckBox.getCheckInput('private').should('not.be.checked');
			CheckBox.getCheckInput('classified').should('not.be.checked');
			CheckBox.getCheckInput('general').should('not.be.checked');
			CheckBox.getCheckInput('wordFile').should('not.be.checked');
			CheckBox.getCheckInput('excelFile').should('not.be.checked');
		});

		it('Desktop', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('desktop');

			CheckBox.getNodeByLabel('desktop').dblclick();
			CheckBox.getCheckInput('desktop').should('not.be.checked');
			CheckBox.getCheckInput('notes').should('not.be.checked');
			CheckBox.getCheckInput('commands').should('not.be.checked');
		});

		it('Documents', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('documents');
			CheckBox.collapseExpandNode('workspace');
			CheckBox.collapseExpandNode('office');

			CheckBox.getNodeByLabel('documents').dblclick();
			CheckBox.getCheckInput('documents').should('not.be.checked');

			CheckBox.getCheckInput('workspace').should('not.be.checked');
			CheckBox.getCheckInput('react').should('not.be.checked');
			CheckBox.getCheckInput('angular').should('not.be.checked');
			CheckBox.getCheckInput('veu').should('not.be.checked');

			CheckBox.getCheckInput('office').should('not.be.checked');
			CheckBox.getCheckInput('public').should('not.be.checked');
			CheckBox.getCheckInput('private').should('not.be.checked');
			CheckBox.getCheckInput('classified').should('not.be.checked');
			CheckBox.getCheckInput('general').should('not.be.checked');
		});

		it('Downloads', () => {
			CheckBox.collapseExpandNode('home');
			CheckBox.collapseExpandNode('downloads');

			CheckBox.getNodeByLabel('downloads').dblclick();
			CheckBox.getCheckInput('downloads').should('not.be.checked');
			CheckBox.getCheckInput('wordFile').should('not.be.checked');
			CheckBox.getCheckInput('excelFile').should('not.be.checked');
		});
	});
});
