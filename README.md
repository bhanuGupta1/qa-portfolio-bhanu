# QA Engineering Portfolio — Bhanu Gupta

Hands-on QA portfolio built during my Bachelor of IT at Otago Polytechnic, New Zealand. Demonstrates manual testing, API testing, and test automation skills across real-world applications.

---

## What's Inside

### 1. Manual Web Testing — SEEK (NZ)
Exploratory and structured testing of [SEEK New Zealand](https://www.seek.co.nz) as a guest user, focused on usability, authentication gating behaviour, and accessibility.

**Includes:** Test Plan, 14 Executed Test Cases, 6 Bug Reports (with severity, impact, and evidence), Risk Matrix, RTM, Accessibility Checks, Test Summary Report

**Folder:** [`manual/`](./manual)

---

### 2. API Testing — DummyJSON (Postman + Newman)
Automated API test suite covering authentication, user management, full product CRUD, and chained auth flows against the DummyJSON REST API.

**18 requests, 47 assertions** across 5 categories:

| Category | Requests | What's Tested |
|----------|----------|---------------|
| Pre-Auth Checks | 2 | Unauthenticated access: no token (401), fake token (401) |
| Auth | 3 | Valid login (token stored), invalid creds, empty body |
| Users | 4 | List, get by ID, invalid ID (404), pagination |
| Products (CRUD) | 8 | GET, POST, PUT, DELETE, search, sort, schema validation |
| Authenticated Access | 1 | Chained auth: login token reused on /auth/me |

**Key patterns:** Chained auth (login stores JWT, reused on protected routes), full CRUD coverage, schema validation (field types, value ranges), negative testing, pagination, sort verification

**Includes:** Test Plan, 18 Test Cases, Newman HTML Report, CI Pipeline, Evidence Screenshots

**Folder:** [`api/`](./api)

---

### 3. Automation — Cypress E2E Framework

#### Phase 1: Learning (example.cypress.io)
My first Cypress tests — 2 basic smoke tests covering page navigation and content validation on the official Cypress demo site. These taught me Cypress fundamentals: `cy.visit()`, `cy.get()`, URL assertions, and headless CLI execution.

**Preserved in:** [`automation/cypress-framework/cypress/e2e/old-demo/`](./automation/cypress-framework/cypress/e2e/old-demo)

#### Phase 2: Full Framework (Sauce Demo)
Complete E2E automation framework built against [Sauce Demo](https://www.saucedemo.com), a real e-commerce app with login, products, cart, and checkout.

**24 test cases** across 5 spec files:

| Spec | Tests | Coverage |
|------|-------|----------|
| `login.cy.js` | 5 | Valid login, locked user, invalid creds, empty fields |
| `inventory.cy.js` | 3 | Product count, names/prices, logout |
| `cart.cy.js` | 6 | Add/remove items, cart verification, continue shopping |
| `checkout.cy.js` | 6 | Happy path, missing fields, cancel, post-purchase |
| `sorting.cy.js` | 4 | Name A-Z/Z-A, price low-high/high-low |

**Framework features:**

- Page Object Model — `LoginPage`, `InventoryPage`, `CartPage`, `CheckoutPage`
- Custom commands — `cy.login()`, `cy.loginAs()`, `cy.addToCart()`, `cy.verifyCartCount()`
- Data-driven fixtures — 6 user types, full product data with expected sort orders
- Screenshot on failure
- GitHub Actions CI/CD pipeline

**Folder:** [`automation/cypress-framework/`](./automation/cypress-framework)

---

### 4. Automation — Playwright E2E Framework (TypeScript)

Same app (Sauce Demo), different framework. Built with Playwright + TypeScript to demonstrate tool flexibility and compare approaches. Multi-browser testing (Chromium, Firefox, WebKit), auto-wait, trace viewer.

**29 test cases** across 5 spec files:

| Spec | Tests | Coverage |
|------|-------|----------|
| `login.spec.ts` | 7 | Valid login, locked user, invalid creds, empty fields, error dismissal |
| `inventory.spec.ts` | 4 | Product count, names/prices, logout, direct access protection |
| `cart.spec.ts` | 7 | Add/remove items, cart verification, continue shopping |
| `checkout.spec.ts` | 7 | Happy path, missing fields, cancel, total verification, post-purchase |
| `sorting.spec.ts` | 4 | Name A-Z/Z-A, price low-high/high-low |

**Framework features:**

- Page Object Model — `LoginPage`, `InventoryPage`, `CartPage`, `CheckoutPage` (TypeScript)
- Data-driven fixtures — 7 user types, full product data, checkout data
- Multi-browser — Chromium, Firefox, WebKit
- Screenshot on failure, trace on retry
- GitHub Actions CI/CD pipeline

**Folder:** [`automation/playwright-framework/`](./automation/playwright-framework)

---

## How to Run Tests

### Cypress
```bash
cd automation/cypress-framework
npm install
npm test                    # headless
npm run cy:open             # interactive UI
```

### Playwright
```bash
cd automation/playwright-framework
npm install
npx playwright install      # download browsers
npm test                    # all browsers
npm run test:chromium       # chromium only
npm run test:headed         # see the browser
npm run report              # view HTML report
```

---

## Tools & Technologies

- **Manual Testing** — SEEK (NZ), structured test design, risk-based testing
- **API Testing** — Postman, Newman CLI, htmlextra reporter, CRUD testing, chained auth flows
- **Automation** — Cypress 15.x, JavaScript, Page Object Model
- **CI/CD** — GitHub Actions
- **Version Control** — Git, GitHub

---

## About Me

I'm Bhanu Gupta, a final-year Bachelor of IT student at Otago Polytechnic International Campus, New Zealand. I'm building this portfolio to demonstrate practical QA and IT skills through hands-on projects, not just theory.

This portfolio is a work in progress — more sections covering Playwright, Selenium, networking, Linux, and security testing are planned.

- **GitHub:** [github.com/bhanuGupta1](https://github.com/bhanuGupta1)
- **Email:** bhanugupta2001@gmail.com
