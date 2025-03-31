import FormsLink from '@enum/links/Forms';
//TODO usar plugin de dados fake ou uma fixture para preencher os campos com dados
//TODO: importar pageObject e criar métodos
import Locators from '@pageObject/forms/praticForm/PraticFormLocators';

beforeEach(() => {
	cy.visitarToolsQA(FormsLink.praticForm);
});

describe('Inserir dados válidos no formulário', () => {
	it('Preencher todos os campos', () => {
		//TODO: Passar os dados para o enum
		//TODO: Passar as chamadas para os métodos no pageObject
		//name
		cy.get(Locators.nameLabel).should('be.visible').and('have.text', 'Name');
		cy.get(Locators.firstNameInput).type('Carol');
		cy.get(Locators.lastnameInput).type('Rocha');

		//e-mail
		cy.get(Locators.emailLabel).should('be.visible').and('have.text', 'Email');
		cy.get(Locators.emailInput).type('emaildaCarol@gmail.com');

		//gender
		cy
			.get(Locators.genderLabel)
			.should('be.visible')
			.and('contain.text', 'Gender');
		cy.get(Locators.maleLabel).should('be.visible').and('have.text', 'Male');
		cy.get(Locators.maleInput).should('exist');
		//FIXME: Verificar se o input está verificando a cor certa
		cy
			.get(Locators.femaleLabel)
			.should('exist')
			.and('have.text', 'Female')
			.and('contain.css', 'background-color', 'rgba(0, 0, 0, 0)');

		cy.get(Locators.femaleLabel).click();

		// TODO: Adicionar verificação de css por após o click

		cy.get(Locators.otherLabel).should('be.visible').and('have.text', 'Other');
		cy.get(Locators.otherInput).should('exist');

		//TODO: Continuar com a verificação do MOBILE para frente
	});
});
