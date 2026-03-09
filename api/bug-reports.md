# Findings — DummyJSON API Tests

> These findings document observations from API testing.
> DummyJSON is a public demo API; no product defects are claimed.

---

## API-FINDING-01: Negative scenarios correctly handled by API
Severity: Info
Priority: Low

Observed:
- Invalid login returns 400
- Empty body login returns 400
- Invalid user ID returns 404
- Invalid product ID returns 404
- Protected endpoint without token returns 401
- Protected endpoint with fake token returns 401

Expected:
- API should reject invalid requests with appropriate error codes

Assessment:
- Behaviour is correct across all negative test cases
- Confirms robust error handling, input validation, and access control

Evidence:
- api/evidence/ (screenshots after test execution)

---

## API-FINDING-02: Environment-driven test design improves portability
Severity: Info
Priority: Low

Observed:
- Base URL, userId, and token managed via environment variables
- Token is set dynamically during login and reused in chained requests
- Tests remain portable and reusable across environments

Assessment:
- Positive test design practice
- Aligns with real-world API automation standards

Evidence:
- api/evidence/ (environment config screenshot)

---

## API-FINDING-03: CRUD operations return simulated responses
Severity: Info
Priority: Low

Observed:
- POST /products/add returns 201 with a new ID but does not persist to database
- PUT /products/1 returns updated data but original product is unchanged on next GET
- DELETE /products/1 returns isDeleted: true but product still exists on next GET

Expected:
- DummyJSON is a mock API designed for testing practice. Simulated CRUD responses are by design.

Assessment:
- Not a defect. DummyJSON documents this behaviour.
- Tests validate the response structure and status codes correctly regardless of persistence.

---

## API-FINDING-04: Chained auth flow works end-to-end
Severity: Info
Priority: Low

Observed:
- Login (TC-01) stores accessToken in environment
- GET /auth/me with stored token (TC-17) returns correct user data
- Username in response matches the credentials used to log in

Assessment:
- Token chaining works as expected
- Demonstrates real-world auth testing pattern (login -> store token -> use on protected routes)
