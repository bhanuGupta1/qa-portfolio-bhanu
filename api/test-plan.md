# Test Plan — DummyJSON API (Postman + Newman)

## Objective
Validate core API behaviour using automated checks in Postman, and produce an execution report via Newman.

## Scope (In)
- Authentication endpoint behaviour (token retrieval / error handling)
- Users endpoints (list + single user)
- Products endpoints (list + data validation)
- Protected endpoint behaviour (auth required)

## Out of Scope
- Load/performance stress testing
- Security exploitation
- Rate limit testing
- Data mutation on production-like systems (only if API supports it safely)

## Test Approach
- Request-level checks:
  - Status code correctness
  - Response structure validation (required fields)
  - Basic data sanity checks (types / presence)
  - Negative tests (invalid IDs / missing auth)

## Environment
- Tooling: Postman + Newman
- OS: Windows
- Execution: Local CLI + HTML report

## Entry Criteria
- API reachable
- Collection + environment configured
- Newman installed

## Exit Criteria
- Newman report generated
- Test summary written
- At least 2 bug reports/findings documented with evidence screenshots
