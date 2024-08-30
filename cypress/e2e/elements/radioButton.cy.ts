import ElementsLink from '@enum/links/Elements';
import RadioButtonPage from '@pageObjects/radioButton/RadioBtnPage';

const RadioButton = new RadioButtonPage();

beforeEach(() => {
	cy.visitarToolsQA(ElementsLink.RadioButton);
});

describe('Testes da página de Radio Button', () => {
	it('Verifica URL da página', () => {
		cy.url().should('include', ElementsLink.RadioButton);
	});

	// TODO: Criar método checkRadio('radio:TypeRadio')
	// TODO: criar método verifyRadio('checked:boolean, disabled?:boolean')

	describe('Verificar os itens que foram marcados', () => {
		it('Marcar Yes', () => {
			RadioButton.yesByRadio().should('not.be.checked');
			RadioButton.yesByLabel().click();
			RadioButton.yesByRadio().should('be.checked');
		});

		it('Marcar Impressive', () => {
			RadioButton.impressiveByRadio().should('not.be.checked');
			RadioButton.impressiveByLabel().click();
			RadioButton.impressiveByRadio().should('be.checked');
		});

		it('Marcar No', () => {
			RadioButton.noByRadio().should('not.be.checked');
			RadioButton.noByLabel().click();
			RadioButton.noByRadio().should('not.be.checked').and('be.disabled');
		});
	});

	describe('Verificar os que não foram marcados', () => {
		it('Marcar Yes', () => {
			RadioButton.yesByLabel().click();
			RadioButton.impressiveByRadio().should('not.be.checked');
			RadioButton.noByRadio().should('not.be.checked');
		});

		it('Marcar Impressive', () => {
			RadioButton.impressiveByLabel().click();
			RadioButton.yesByLabel().should('not.be.checked');
			RadioButton.noByRadio().should('not.be.checked');
		});

		it('Marcar No', () => {
			RadioButton.noByLabel().click();
			RadioButton.yesByLabel().should('not.be.checked');
			RadioButton.impressiveByLabel().should('not.be.checked');
		});
	});
});
