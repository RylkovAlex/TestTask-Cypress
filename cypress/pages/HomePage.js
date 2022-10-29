class HomePage {
  elements = {
    popup: () => cy.get('.popup-callback'),
    showPresentationButton: () =>
      cy.get('span').contains('Заказать презентацию'),
    popupMailLink: () => cy.get('.popup-callback a[href*=mailto]'),
    popupPhoneLink: () => cy.get('.popup-callback a[href*=tel]'),
  };

  showPresentationClick() {
    this.elements.showPresentationButton().click();
  }
}

export default HomePage;
