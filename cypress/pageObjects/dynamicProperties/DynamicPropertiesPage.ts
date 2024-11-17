import locator from './DynamicPropertiesLocators';
import Colors from '@enum/Colors';

const tempoLimite = 5000;

class DynamicPropertiesPage {
	verificarNotEnabledBtn() {
		cy.get(locator.enableAfterBtn).should('not.be.enabled');
	}

	verificarEnabledBtn() {
		cy.wait(tempoLimite);
		cy.get(locator.enableAfterBtn).should('be.enabled');
	}

	verificarCorDefault() {
		cy
			.get(locator.colorChangeBtn)
			.and('have.css', 'color', Colors.DefaultTextDynamicProperties);
	}

	verificarCorErro() {
		cy.wait(tempoLimite);
		cy.get(locator.colorChangeBtn).should('have.css', 'color', Colors.Error);
	}

	verificarNaoExistencia() {
		cy.get(locator.visibleAfterBtn).should('not.exist');
	}

	verificarExistenciaVisibilidade() {
		cy.wait(tempoLimite);
		cy.get(locator.visibleAfterBtn).should('exist').and('be.visible');
	}
}

export default DynamicPropertiesPage;
