class RadioButtonPage {
	radioBtnMenu() {
		return cy.getItemMenu('Radio Button');
	}

	yesByRadio() {
		return cy.get('#yesRadio');
	}

	impressiveByRadio() {
		return cy.get('#impressiveRadio');
	}

	noByRadio() {
		return cy.get('#noRadio');
	}

	yesByLabel() {
		return cy.get('label[for="yesRadio"]');
	}

	impressiveByLabel() {
		return cy.get('label[for="impressiveRadio"]');
	}

	noByLabel() {
		return cy.get('label[for="noRadio"]');
	}
}

export default RadioButtonPage;
