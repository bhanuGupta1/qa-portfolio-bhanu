describe('Basic navigation (example.cypress.io)', () => {
  it('opens a Commands page via direct URL and confirms heading', () => {
    cy.visit('https://example.cypress.io/commands/querying');
    cy.url().should('include', '/commands/querying');
    cy.get('h1').should('contain.text', 'Querying');
  });
});