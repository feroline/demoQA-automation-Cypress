import ButtonsPage from '@pageObject/buttons/ButtonsPage';
import ElementsLink from '@enum/links/Elements';

const Buttons = new ButtonsPage();

beforeEach(() => {
	cy.visitarToolsQA(ElementsLink.Buttons);
});

describe('Botão Double Click', () => {
	it('Verificar se o botão Double Click funciona e apresenta mensagem', () => {
		Buttons.dbClickButton(true);
		Buttons.dbClickMsg(true);
	});

	it('Verificar se DB click não funciona apenas com 1 click e não apresenta mensagem', () => {
		Buttons.dbClickButton(false);
		Buttons.dbClickMsg(false);
	});
});

describe('Botão Right Click', () => {
	it('Verificar se Right click fubciona e apresenta mensagem', () => {
		Buttons.rightClick(true);
		Buttons.rightClickMsg(true);
	});

	it('Verificar se Right Click não funciona com Left Click e não apresenta mensagem', () => {
		Buttons.rightClick(false);
		Buttons.rightClickMsg(false);
	});
});

describe('Dynamic Click', () => {
	it('Verificar se o clique dinâmico funciona e apresenta mensagem', () => {
		Buttons.dynamicClick();
		Buttons.dynamicClickMsg();
	});
});
