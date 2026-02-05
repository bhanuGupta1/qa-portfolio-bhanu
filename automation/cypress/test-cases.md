# Test Cases — Cypress E2E (Executed)

## CYP-TC-01: Commands page opens and correct heading is shown
Steps:
- Visit /commands/querying
Expected:
- URL includes /commands/querying
- H1 contains "Querying"

## CYP-TC-02: Utilities page shows key content blocks
Steps:
- Visit /utilities
Expected:
- URL includes /utilities
- H1 contains "Utilities"
- Page contains visible text for Cypress._ and Cypress.$
