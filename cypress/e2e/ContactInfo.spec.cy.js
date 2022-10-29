import HomePage from '../pages/HomePage';

const EMAIL = 'sales@byndyusoft.com';
const PHONE = '8 800 775-15-21';
const BASE_URL = 'https://byndyusoft.com/';

const getPopup = () => cy.get('.popup-callback');
const getShowPresentationButton = () =>
  cy.get('span').contains('Заказать презентацию');

describe('contact information test', () => {
  it('should display correct contact info', () => {
    cy.visit('https://www.google.ru/');

    cy.get('input[name="q"]').type('Byndyusoft{enter}');

    // Should be on a new URL which
    // includes '/search?q=Byndyusoft'

    cy.url().should('include', '/search?q=Byndyusoft');

    // Get first result and click on it
    // target _self to open ion current tab
    cy.get('.g a').first().invoke('attr', 'target', '_self').click();

    // Should be on a Byndyusoft URL
    cy.url().should('eq', BASE_URL);
    const page = new HomePage();

    const popup = page.elements.popup();
    popup.should('have.css', 'display', 'none');

    page.showPresentationClick();
    popup.should('not.have.css', 'display', 'none');

    page.elements.popupMailLink().should((elem) => {
      expect(elem.text().trim()).to.equal(EMAIL);
    });

    page.elements.popupPhoneLink().should((elem) => {
      expect(elem.text().trim()).to.equal(PHONE);
    });
  });
});
