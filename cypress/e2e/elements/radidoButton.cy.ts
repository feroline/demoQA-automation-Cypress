import HomePage from '../../pages/HomePage';
import RadioButtonPage from '../../pages/Elements/RadioButtonPage';

const Home = new HomePage();
const RadioButton = new RadioButtonPage();

beforeEach(() => {
	cy.visitarToolsQA();
	Home.elements().click();
	RadioButton.radioBtnMenu().click();
});

it('Marcar Yes', () => {
	RadioButton.yesByRadio().should('not.be.checked');
	RadioButton.yesByLabel().click();
	RadioButton.yesByRadio().should('be.checked');
});

it('Marcar Impressive', () => {
	RadioButton.impressiveByRadio().should('not.be.checked');
	RadioButton.impressiveByLabel().click();
	RadioButton.impressiveByRadio().should('be.checked');
});

it('Marcar No', () => {
	RadioButton.noByRadio().should('not.be.checked');
	RadioButton.noByLabel().click();
	RadioButton.noByRadio().should('not.be.checked').and('be.disabled');
});
