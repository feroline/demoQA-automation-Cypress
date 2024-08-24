import locator from './ButtonsLocatos';
import mensagens from '../../support/Enum/ButtonsMsg';

class ButtonsPage {
	dbClickButton(dbClick: boolean) {
		dbClick === true
			? cy.get(locator.dbClickBtn).dblclick()
			: cy.get(locator.dbClickBtn).click();
	}

	dbClickMsg(exist: boolean) {
		exist === true
			? cy
					.get(locator.dbClickMsg)
					.should('exist')
					.and('contain.text', mensagens.DbClickMsg)
					.and('be.visible')
			: cy.get(locator.dbClickMsg).should('not.exist');
	}

	rightClick(rightClick: boolean) {
		rightClick === true
			? cy.get(locator.rightClickBtn).rightclick()
			: cy.get(locator.rightClickBtn).click();
	}

	rightClickMsg(exist: boolean) {
		exist === true
			? cy
					.get(locator.rightClickMsg)
					.should('exist')
					.and('contain.text', mensagens.RightClickMsg)
					.and('be.visible')
			: cy.get(locator.rightClickMsg).should('not.exist');
	}

	dynamicClick() {
		cy.xpath(locator.dynamicBtnByXpath).click();
	}

	dynamicClickMsg() {
		cy
			.get(locator.dynamicClickMsg)
			.should('exist')
			.and('contain.text', mensagens.DynamiClickMsg)
			.and('be.visible');
	}
}

export default ButtonsPage;
