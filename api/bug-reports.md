# Findings — DummyJSON API Tests

> These findings document observations from API testing.
> DummyJSON is a public demo API; no product defects are claimed.

---

## API-FINDING-01: Negative scenarios correctly handled by API
Severity: Info  
Priority: Low  

Observed:
- Invalid login returns 400
- Invalid user ID returns 404
- Protected endpoint without token returns 401

Expected:
- API should reject invalid requests with appropriate error codes

Assessment:
- Behaviour is correct
- Confirms robust error handling and access control

Evidence:
- api/evidence/SS-03-negative-test-pass.png

---

## API-FINDING-02: Environment-driven test design improves clarity
Severity: Info  
Priority: Low  

Observed:
- Base URL, userId, and token managed via environment variables
- Tests remain portable and reusable across environments

Assessment:
- Positive test design practice
- Aligns with real-world API automation standards

Evidence:
- api/evidence/SS-04-env-vars.png
