import Colors from '@enum/Colors';
import locators from './TextBoxLocators';

class ElementsPage {
	// TODO remover return nestes casos abaixo
	// TODO ver se é preciso remover return nos outros casos
	username() {
		return cy.get(locators.usernameInput);
	}

	email() {
		return cy.get(locators.emailInput);
	}

	currentAddress() {
		return cy.get(locators.currentAddressInput);
	}

	permanentAddress() {
		return cy.get(locators.permanentAddressInput);
	}

	submitButton() {
		return cy.get(locators.submitBtn);
	}

	output() {
		return cy.get(locators.output);
	}

	outputName() {
		return cy.get(locators.output).find(locators.nameOutout);
	}

	outputEmail() {
		return cy.get(locators.output).find(locators.emailOutput);
	}

	outputCurrentAddress() {
		return cy.get(locators.output).find(locators.currentAddressInput);
	}

	outputPermanentAddress() {
		return cy.get(locators.output).find(locators.permanentAddressInput);
	}

	// TODO: Chamar commands
	validateErrorEmail() {
		return cy
			.get(locators.emailInput, { timeout: 6000 })
			.should('have.class', 'field-error')
			.and('css', 'border-color', Colors.Error);
	}
}

export default ElementsPage;
