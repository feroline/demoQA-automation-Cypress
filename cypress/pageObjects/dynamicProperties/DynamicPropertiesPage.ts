import locator from './dynamicPropertiesLocators';
import Colors from '@enum/Colors';

const tempo = 5000;
const timeOfLoad = 2500;

class DynamicPropertiesPage {
	verificarAtividadeBtn(atividade: boolean) {
		if (!atividade) {
			cy
				.get(locator.enableAfterBtn, { timeout: tempo - timeOfLoad })
				.should('not.be.enabled');
		} else if (atividade) {
			cy.wait(tempo);
			cy.get(locator.enableAfterBtn).should('be.enabled');
		}
	}

	verificarCorDoTexto(mudanca: boolean) {
		if (!mudanca) {
			cy
				.get(locator.colorChangeBtn, { timeout: tempo - timeOfLoad })
				.and('have.css', 'color', Colors.DefaultTextDynamicProperties);
		} else if (mudanca) {
			cy.wait(tempo);
			cy.get(locator.colorChangeBtn).should('have.css', 'color', Colors.Error);
		}
	}

	verificarVisibilidade(visivel: boolean) {
		if (!visivel) {
			cy
				.get(locator.visibleAfterBtn, { timeout: tempo - timeOfLoad })
				.should('not.exist');
		} else if (visivel) {
			cy.wait(5000);
			cy.get(locator.visibleAfterBtn).should('be.visible');
		}
	}
}

export default DynamicPropertiesPage;
