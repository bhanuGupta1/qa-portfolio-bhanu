# API Test Summary Report — DummyJSON

## Overview
This test cycle validates core DummyJSON API endpoints using Postman and Newman.
Both positive and negative scenarios were executed to verify correct API behaviour.

## Test Scope
Endpoints covered:
- Authentication (login – negative)
- Users (list, valid ID, invalid ID)
- Products (list)
- Protected endpoint (no token)

## Execution Details
- Tooling: Postman + Newman
- Environment: dummyjson-env
- Iterations: 1
- Total Requests: 6
- Total Assertions: 14

## Results Summary
- Passed Tests: 14
- Failed Tests: 0
- Skipped Tests: 0
- Average Response Time: ~292 ms

## Key Validation Areas
- Correct HTTP status codes (200, 400, 401, 404)
- Error handling for invalid inputs
- Authentication enforcement
- Response structure validation

## Notes on Negative Testing
Several scenarios intentionally validate error responses:
- Invalid login returns 400
- Invalid user ID returns 404
- Protected endpoint without token returns 401

These tests are expected to "fail" at the API level but are marked as PASS
because the system behaves correctly.

## Conclusion
The API behaves as expected across both valid and invalid scenarios.
Negative testing confirms robust error handling and access control.
