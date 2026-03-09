# Test Plan — DummyJSON API

## Objective
Validate the DummyJSON REST API across authentication, user management, product CRUD operations, and protected endpoints using Postman and Newman CLI.

## Scope (In)
- Authentication: valid login, invalid credentials, empty body
- Users: list all, get by ID (valid + invalid), pagination (limit/skip)
- Products: full CRUD (GET, POST, PUT, DELETE), search, sort, schema validation, invalid ID
- Protected endpoints: chained auth flow (login stores token, reuse on /auth/me, test with invalid/missing token)
- Response time performance checks on list endpoints

## Out of Scope
- Load/stress testing
- Security exploitation or penetration testing
- Rate limit testing
- Database-level verification (DummyJSON is a public demo API with simulated responses)

## Test Approach
- Positive tests: verify correct status codes, response structure, data accuracy
- Negative tests: verify proper error codes (400, 401, 404) and error messages
- Schema validation: verify required fields, data types, value ranges
- Chained requests: login stores token in environment variable, subsequent requests use it
- Performance: basic response time assertions on list endpoints
- CRUD coverage: Create, Read, Update, Delete operations on products

## Test Coverage

| Category | Requests | Focus |
|----------|----------|-------|
| A - Auth | 3 | Login flows: valid, invalid creds, empty body |
| B - Users | 4 | List, single user, invalid user, pagination |
| C - Products (CRUD) | 8 | Full CRUD, search, sort, schema validation, invalid ID |
| D - Protected (Chained Auth) | 3 | Token-based access: no token, valid token, fake token |
| **Total** | **18** | **47 assertions** |

## Environment
- API: https://dummyjson.com
- Tooling: Postman v11 + Newman CLI
- Environment file: dummyjson-env.postman_environment.json
- Variables: baseUrl, validUserId, invalidUserId, token (set dynamically on login)
- OS: Windows
- Execution: Local CLI + GitHub Actions CI

## Entry Criteria
- API reachable at https://dummyjson.com
- Collection and environment files configured
- Newman and htmlextra reporter installed

## Exit Criteria
- All 18 requests execute successfully
- All 47 assertions pass
- Newman HTML report generated
- Test summary and findings documented with evidence

## Deliverables
- Postman collection JSON
- Postman environment JSON
- Newman HTML report
- Test cases document
- Test summary report
- Findings/observations document
- Evidence screenshots
