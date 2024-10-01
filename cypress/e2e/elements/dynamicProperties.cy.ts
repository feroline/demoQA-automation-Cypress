import ElementsLink from '@enum/links/Elements';
import DynamicPropertiesPage from '@pageObject/dynamicProperties/DynamicPropertiesPage';

const DynamicProperties = new DynamicPropertiesPage();

beforeEach(() => {
	cy.visitarToolsQA(ElementsLink.DynamicProperties);
});

describe('Verificar botão que ficará habilitado após tempo pré-definido', () => {
	it('Verificar se o botão está desabilitado', () => {
		DynamicProperties.verificarAtividadeBtn(false);
	});

	it('Verificar se o botão está habilitado', () => {
		DynamicProperties.verificarAtividadeBtn(true);
	});
});

describe('Verficar botão muda a cor do texto após tempo pré-definido', () => {
	it('Verificar se o botão tem a cor padrão do texto', () => {
		DynamicProperties.verificarCorDoTexto(false);
	});

	it('Veriricar se o botão tem a cor do texto após a mudança', () => {
		DynamicProperties.verificarCorDoTexto(true);
	});
});

describe('Verificar botão que fica visível após o tempo pré-definido', () => {
	it('Verificar se o botão está invisível', () => {
		DynamicProperties.verificarVisibilidade(false);
	});

	it('Verificar se o botão está visível', () => {
		DynamicProperties.verificarVisibilidade(true);
	});
});
