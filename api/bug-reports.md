# Bug Reports / Findings — DummyJSON API Tests

> Note: DummyJSON is a public demo API, so these are documented as testing findings.
> Where failures are caused by my test setup (env values), I label them as "Test Issue" not "Product Bug".

---

## API-FINDING-01: “GET Single User (Valid)” request uses null userId (test setup issue)
Severity: Medium  
Priority: High  

Endpoint:
- GET /users/{{userId}}

Observed:
- Request executed as /users/null
- API returns 400 (Bad Request)
- Tests fail because expected status was 200

Expected:
- userId should be a real numeric id (e.g., 1)
- Endpoint should return 200 with user object

Impact:
- Blocks confidence in “valid single user” coverage
- Misleads results (looks like API is broken when test config is wrong)

Evidence:
- api/evidence/SS-03-failed-test-example.png
- api/evidence/SS-04-env-vars.png

Fix suggestion:
- Set env var `userId=1` (or another valid id)
- Add a guard test: fail early if userId is empty/null

---

## API-FINDING-02: Login “success” scenario returns 400 (credentials/env mismatch)
Severity: Medium  
Priority: High  

Endpoint:
- POST /auth/login

Observed:
- Test expects 200 OK but received 400
- Token assertion fails (token undefined)

Expected:
- With valid credentials, API returns 200 + token

Impact:
- Blocks all auth-dependent tests (protected endpoint)
- Prevents full regression run

Evidence:
- api/evidence/SS-01-postman-run-summary.png

Fix suggestion:
- Verify credentials used in the request body
- Store credentials in environment variables
- Add negative test case for invalid creds (expect 400/401)
