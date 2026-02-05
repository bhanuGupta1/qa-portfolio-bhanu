# Test Summary Report — DummyJSON API

## Execution Overview
- Tooling: Postman Runner + Newman CLI
- Environment: dummyjson-env
- Collection: DummyJSON API Tests (Bhanu)
- Execution type: Automated API regression
- Report: api/newman/newman-report.html

## Results Summary
- Total requests executed: 6
- Total assertions: 14
- Passed: 14
- Failed: 0
- Skipped: 0
- Average response time: ~292 ms

## Observations
- All positive scenarios returned expected 200 responses
- Negative scenarios returned correct error codes (400 / 401 / 404)
- No unexpected failures observed
- API error handling is consistent and predictable

## Negative Testing Note
Several test cases intentionally validate error responses:
- Invalid login → 400
- Invalid user ID → 404
- Protected endpoint without token → 401

These tests are marked PASS because the API behaved as expected.

## Evidence
- Postman runner results: api/evidence/SS-01-postman-run-summary.png
- Newman HTML report: api/evidence/SS-02-newman-report-top.png
- Negative test validation: api/evidence/SS-03-negative-test-pass.png
- Environment config: api/evidence/SS-04-env-vars.png

## Conclusion
The DummyJSON API demonstrates correct behaviour across both
positive and negative scenarios. Automated execution via Newman
confirms regression stability.
