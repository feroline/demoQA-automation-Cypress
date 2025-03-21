import ElementsLink from '@enum/links/Elements';
import DynamicPropertiesPage from '@pageObject/elements/dynamicProperties/DynamicPropertiesPage';

const DynamicProperties = new DynamicPropertiesPage();

beforeEach(() => {
	cy.session(
		'dynamic-properties',
		() => {
			cy.visit(ElementsLink.DynamicProperties, {
				timeout: 130000,
			});
		},
		{ cacheAcrossSpecs: true }
	);
});

describe('Testes dinâmicos', { retries: 7 }, () => {
	describe('Verificar botão que ficará habilitado após tempo pré-definido', () => {
		it('Verificar se o botão está desabilitado', () => {
			cy.visit(ElementsLink.DynamicProperties, {
				onBeforeLoad: () => {
					DynamicProperties.verificarNotEnabledBtn();
				},
				timeout: 13000,
			});
		});

		it('Verificar se o botão está habilitado', () => {
			cy.visitarToolsQA(ElementsLink.DynamicProperties);
			DynamicProperties.verificarEnabledBtn();
		});
	});

	describe('Verficar botão muda a cor do texto após tempo pré-definido', () => {
		it('Verificar se o botão tem a cor padrão do texto', () => {
			cy.visit(ElementsLink.DynamicProperties, {
				onBeforeLoad: () => {
					DynamicProperties.verificarCorDefault();
				},
				timeout: 13000,
			});
		});

		it('Verificar se o botão tem a cor do texto após a mudança', () => {
			cy.visitarToolsQA(ElementsLink.DynamicProperties);
			DynamicProperties.verificarCorErro();
		});
	});

	describe('Verificar botão que fica visível após o tempo pré-definido', () => {
		it('Verificar se o botão está invisível', () => {
			cy.visit(ElementsLink.DynamicProperties, {
				onBeforeLoad: () => {
					DynamicProperties.verificarNaoExistencia();
				},
				timeout: 13000,
			});
		});

		it('Verificar se o botão está visível', () => {
			cy.visitarToolsQA(ElementsLink.DynamicProperties);
			DynamicProperties.verificarExistenciaVisibilidade();
		});
	});
});
