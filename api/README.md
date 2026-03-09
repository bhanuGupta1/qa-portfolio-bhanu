# API Testing — DummyJSON (Postman + Newman)

## Overview
Automated API test suite covering authentication, user management, product CRUD, and protected endpoint access against the DummyJSON REST API.

## What's Covered

| Category | Requests | What's Tested |
|----------|----------|---------------|
| Auth | 3 | Valid login (token stored), invalid creds, empty body |
| Users | 4 | List all, get by ID, invalid ID (404), pagination |
| Products (CRUD) | 8 | GET, POST, PUT, DELETE, search, sort, schema validation, invalid ID |
| Protected (Chained Auth) | 3 | No token (401), valid token (200), fake token (401) |
| **Total** | **18 requests** | **47 assertions** |

## Key Testing Patterns
- Chained auth flow: login stores JWT token, reused on /auth/me endpoint
- Full CRUD: Create, Read, Update, Delete on products
- Schema validation: required fields, data types, value ranges (price > 0, rating 0-5)
- Negative testing: invalid credentials, missing auth, non-existent resources
- Pagination: limit and skip query parameters validated
- Sort verification: confirms ascending price order programmatically

## Tools
- Postman v11 (collection + environment)
- Newman CLI + htmlextra reporter
- GitHub Actions CI pipeline

## How to Run

### Postman
1. Import `postman/DummyJSON-API-Tests-Bhanu.postman_collection.json`
2. Import `postman/dummyjson-env.postman_environment.json`
3. Select "dummyjson-env" environment
4. Run collection in order (auth must run first to store token)

### Newman CLI
```bash
npm i -g newman newman-reporter-htmlextra

newman run "api/postman/DummyJSON-API-Tests-Bhanu.postman_collection.json" \
  -e "api/postman/dummyjson-env.postman_environment.json" \
  -r cli,htmlextra \
  --reporter-htmlextra-export "api/newman/newman-report.html"
```

## File Structure
```
api/
├── postman/
│   ├── DummyJSON-API-Tests-Bhanu.postman_collection.json
│   └── dummyjson-env.postman_environment.json
├── newman/
│   └── newman-report.html
├── evidence/
│   └── (screenshots from test execution)
├── test-plan.md
├── test-cases.md
├── test-summary.md
├── bug-reports.md
└── README.md
```

## Documentation
- [Test Plan](test-plan.md) — scope, strategy, coverage matrix
- [Test Cases](test-cases.md) — all 18 test cases with assertions
- [Test Summary](test-summary.md) — execution results
- [Findings](bug-reports.md) — observations and notes
