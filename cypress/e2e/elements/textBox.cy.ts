import TextBoxPage from '@pageObjects/textBox/TextBoxPage';
import ElementsLink from '@enum/links/Elements';

const TextBox = new TextBoxPage();
const usuarioValidoFixture = '/usuarios/valido';
const usuarioVazio = '/usuarios/vazio';
beforeEach(() => {
	cy.visitarToolsQA(ElementsLink.Text_box);
});

describe('Teste da tela com Text Box', () => {
	it('Verifica URL da página', () => {
		cy.url().should('include', ElementsLink.Text_box);
	});

	describe('Partição Valida', () => {
		// TODO: Pegar dado por userForm e usar within

		it('Preencher todos os campos com dados válidos', () => {
			cy.fixture(usuarioValidoFixture).then((usuario) => {
				TextBox.username().type(usuario.name);
				TextBox.email().type(usuario.email);
				TextBox.currentAddress().type(usuario.currentAddress);
				TextBox.permanentAddress().type(usuario.permanentAddress);
				TextBox.submitButton().click();

				// TODO: Passar o label para um enum
				TextBox.outputName()
					.should('contain.text', 'Name')
					.and('contain.text', usuario.name);
				TextBox.outputEmail()
					.should('contain.text', 'Email')
					.and('contain.text', usuario.email);
				TextBox.outputCurrentAddress()
					.should('contain.text', 'Current Address')
					.and('contain.text', usuario.currentAddress);
				TextBox.outputPermanentAddress()
					.should('contain.text', 'Permananet Address')
					.and('contain.text', usuario.permanentAddress);
			});
		});

		it('Preencher somente o campo de Nome', () => {
			cy.fixture(usuarioValidoFixture).then((usuario) => {
				TextBox.username().type(usuario.name);
				TextBox.submitButton().click();

				TextBox.outputName()
					.should('contain.text', 'Name')
					.and('contain.text', usuario.name);
				TextBox.outputEmail().should('not.exist');
				TextBox.outputCurrentAddress().should('not.exist');
				TextBox.outputPermanentAddress().should('not.exist');
			});
		});
		it('Preencher somente o campo de E-mail', () => {
			cy.fixture(usuarioValidoFixture).then((usuario) => {
				TextBox.email().type(usuario.email);
				TextBox.submitButton().click();

				TextBox.outputName().should('not.exist');
				TextBox.outputEmail()
					.should('contain.text', 'Email')
					.and('contain.text', usuario.email);
				TextBox.outputCurrentAddress().should('not.exist');
				TextBox.outputPermanentAddress().should('not.exist');
			});
		});
		it('Preencher somente o campo de Endereço Atual', () => {
			cy.fixture(usuarioValidoFixture).then((usuario) => {
				TextBox.currentAddress().type(usuario.currentAddress);
				TextBox.submitButton().click();

				TextBox.outputName().should('not.exist');
				TextBox.outputEmail().should('not.exist');
				TextBox.outputCurrentAddress()
					.should('contain.text', 'Current Address')
					.and('contain.text', usuario.currentAddress);
				TextBox.outputPermanentAddress().should('not.exist');
			});
		});
		it('Preencher somente o campo de Endereço Permanente', () => {
			cy.fixture(usuarioValidoFixture).then((usuario) => {
				TextBox.permanentAddress().type(usuario.permanentAddress);
				TextBox.submitButton().click();

				TextBox.outputName().should('not.exist');
				TextBox.outputEmail().should('not.exist');
				TextBox.outputCurrentAddress().should('not.exist');
				TextBox.outputPermanentAddress()
					.should('contain.text', 'Permananet Address')
					.and('contain.text', usuario.permanentAddress);
			});
		});
	});

	describe('Partição Inválida', () => {
		it.skip('Preencher todos os campos com espaço em branco', () => {
			cy.fixture(usuarioVazio).then((usuario) => {
				TextBox.username().type(usuario.name);
				TextBox.email().type(usuario.email);
				TextBox.currentAddress().type(usuario.currentAddress);
				TextBox.permanentAddress().type(usuario.permanentAddress);
				TextBox.submitButton().click();

				TextBox.outputName().should('not.exist');
				TextBox.outputEmail().should('not.exist');
				TextBox.outputCurrentAddress().should('not.exist');
				TextBox.outputPermanentAddress().should('not.exist');

				TextBox.validateErrorEmail();
			});
		});
		it.skip('Preencher campo de e-mail com e-mail inválido', () => {
			cy.fixture('/usuarios/invalido').then((usuario) => {
				TextBox.username().type(usuario.name);
				TextBox.email().type(usuario.email);
				TextBox.currentAddress().type(usuario.currentAddress);
				TextBox.permanentAddress().type(usuario.permanentAddress);
				TextBox.submitButton().click();

				TextBox.outputName().should('not.exist');
				TextBox.outputEmail().should('not.exist');
				TextBox.outputCurrentAddress().should('not.exist');
				TextBox.outputPermanentAddress().should('not.exist');

				TextBox.validateErrorEmail();
			});
		});
		it('Não preencher os campos e clicar em "Submit"', () => {
			TextBox.submitButton().click();

			TextBox.outputName().should('not.exist');
			TextBox.outputEmail().should('not.exist');
			TextBox.outputCurrentAddress().should('not.exist');
			TextBox.outputPermanentAddress().should('not.exist');
		});
	});
});
