describe('Content validation (example.cypress.io)', () => {
  it('opens Utilities and checks key content is visible', () => {
    cy.visit('https://example.cypress.io/utilities');
    cy.url().should('include', '/utilities');

    cy.get('h1').should('contain.text', 'Utilities');
    cy.contains('Cypress._').should('be.visible');
    cy.contains('Cypress.$').should('be.visible');
  });
});
