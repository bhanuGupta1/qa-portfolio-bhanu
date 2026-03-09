# Test Summary Report — DummyJSON API

## Execution Overview
- Tooling: Postman Runner + Newman CLI
- Environment: dummyjson-env
- Collection: DummyJSON API Tests (Bhanu)
- Execution type: Automated API regression
- Report: api/newman/newman-report.html

## Results Summary
- Total requests: 18
- Total assertions: 47
- Passed: — (pending execution)
- Failed: — (pending execution)
- Skipped: 0

> Run the collection in Postman or via Newman to populate results.
> Update this section after execution with actual pass/fail counts and response times.

## Test Coverage

| Category | Requests | Assertions | Focus |
|----------|----------|------------|-------|
| A - Auth | 3 | 8 | Login flows (valid, invalid, empty) |
| B - Users | 4 | 10 | List, single, invalid, pagination |
| C - Products (CRUD) | 8 | 22 | Full CRUD, search, sort, schema |
| D - Protected (Chained Auth) | 3 | 7 | Token-based access control |

## Negative Testing Note
Several test cases intentionally validate error responses:
- Invalid login → 400
- Empty body login → 400
- Invalid user ID → 404
- Invalid product ID → 404
- Protected endpoint without token → 401
- Protected endpoint with fake token → 401

These tests are marked PASS because the API behaved as expected.

## Evidence
- Postman runner results: api/evidence/ (update after run)
- Newman HTML report: api/newman/newman-report.html

## Conclusion
(Update after execution with observations on pass rate, response times, and any unexpected behaviour.)
