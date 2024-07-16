import locators from './RadioButtonLocators';

class RadioButtonPage {
	radioBtnMenu() {
		return cy.getItemMenu(locators.itemMenu).click();
	}

	yesByRadio() {
		return cy.get(locators.yesRadio);
	}

	impressiveByRadio() {
		return cy.get(locators.impressiveRadio);
	}

	noByRadio() {
		return cy.get(locators.noRadio);
	}

	yesByLabel() {
		return cy.get(locators.yesLabel);
	}

	impressiveByLabel() {
		return cy.get(locators.impressiveLabel);
	}

	noByLabel() {
		return cy.get(locators.noLabel);
	}
}

export default RadioButtonPage;
