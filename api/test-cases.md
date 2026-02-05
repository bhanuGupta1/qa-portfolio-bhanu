# Test Cases — DummyJSON API (Executed)

## A) Auth

**API-TC-01: Login (valid) returns token**
- Steps: Send POST login with valid credentials (from env)
- Expected: 200 OK, token returned
- Evidence: api/evidence/SS-01-postman-run-summary.png

**API-TC-02: Login (invalid) returns error**
- Steps: Send POST login with invalid credentials
- Expected: 400/401 with clear error message

## B) Users

**API-TC-03: GET all users**
- Steps: GET /users
- Expected: 200 OK, users array exists

**API-TC-04: GET single user (valid id)**
- Steps: GET /users/{id}
- Expected: 200 OK, correct user object

**API-TC-05: GET single user (invalid id)**
- Steps: GET /users/999999
- Expected: 404 Not Found

## C) Products

**API-TC-06: GET products**
- Steps: GET /products
- Expected: 200 OK, products array exists

**API-TC-07: Product schema contains required fields**
- Steps: Validate fields like id/title/price exist on first item
- Expected: Field presence checks pass

## D) Protected endpoint behaviour

**API-TC-08: GET protected endpoint without token**
- Steps: GET protected route without Authorization header
- Expected: 401 Unauthorized

**API-TC-09: GET protected endpoint with token**
- Steps: GET protected route with Authorization header from env token
- Expected: 200 OK and valid response
