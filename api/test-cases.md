# Test Cases — DummyJSON API

> Note: Negative test cases PASS when the API returns the expected error response.

---

## A) Auth

**API-TC-01: Login with valid credentials**
- Endpoint: POST /auth/login
- Body: `{ "username": "emilys", "password": "emilyspass" }`
- Assertions:
  - Status 200
  - Response contains `accessToken` (string, not empty)
  - Token stored in environment variable
  - Response contains `username`, `email`, `firstName`
- Expected: 200 OK, token returned and stored for chained requests

**API-TC-02: Login with invalid credentials (negative)**
- Endpoint: POST /auth/login
- Body: `{ "username": "invalid_user_123", "password": "wrong_password" }`
- Assertions:
  - Status 400
  - Response contains `message` field
- Expected: 400 Bad Request with error message

**API-TC-03: Login with empty body (negative)**
- Endpoint: POST /auth/login
- Body: `{}`
- Assertions:
  - Status 400
  - Response contains `message` field
- Expected: 400 Bad Request with error message

---

## B) Users

**API-TC-04: GET all users**
- Endpoint: GET /users
- Assertions:
  - Status 200
  - Response contains `users` array
  - Response time < 1200ms
- Expected: 200 OK with users array

**API-TC-05: GET single user (valid ID)**
- Endpoint: GET /users/{{validUserId}}
- Assertions:
  - Status 200
  - Response contains `id` and `email`
  - Returned `id` matches requested `validUserId`
- Expected: 200 OK with correct user object

**API-TC-06: GET single user (invalid ID - negative)**
- Endpoint: GET /users/{{invalidUserId}}
- Assertions:
  - Status 404
- Expected: 404 Not Found

**API-TC-07: GET users with pagination (limit and skip)**
- Endpoint: GET /users?limit=5&skip=10
- Assertions:
  - Status 200
  - Returned users count equals 5 (matches limit)
  - `skip` value in response equals 10
- Expected: 200 OK with paginated results

---

## C) Products (CRUD)

**API-TC-08: GET all products**
- Endpoint: GET /products
- Assertions:
  - Status 200
  - Response contains `products` array
  - First product has `title` and `price`
- Expected: 200 OK with products array

**API-TC-09: GET single product - schema validation**
- Endpoint: GET /products/1
- Assertions:
  - Status 200
  - Product has required fields: id, title, description, price, category, brand, rating
  - Price is a positive number (> 0)
  - Rating is between 0 and 5
- Expected: 200 OK with valid product schema

**API-TC-10: POST add product (create)**
- Endpoint: POST /products/add
- Body: `{ "title": "Test Product by Bhanu", "description": "A test product created for API testing", "price": 49.99, "category": "testing" }`
- Assertions:
  - Status 201
  - Response contains `id` (new product ID)
  - Response reflects submitted title, price, category
- Expected: 201 Created with echoed product data

**API-TC-11: PUT update product**
- Endpoint: PUT /products/1
- Body: `{ "title": "Updated Product Title", "price": 99.99 }`
- Assertions:
  - Status 200
  - Updated `title` and `price` reflected in response
  - Product `id` is preserved (still 1)
- Expected: 200 OK with updated fields

**API-TC-12: DELETE product**
- Endpoint: DELETE /products/1
- Assertions:
  - Status 200
  - Response contains `id` and `title` of deleted product
  - `isDeleted` flag is true
- Expected: 200 OK with deletion confirmation

**API-TC-13: GET search products**
- Endpoint: GET /products/search?q=phone
- Assertions:
  - Status 200
  - Response contains `products` array
  - Search results are not empty
- Expected: 200 OK with matching products

**API-TC-14: GET products sorted by price**
- Endpoint: GET /products?sortBy=price&order=asc&limit=5
- Assertions:
  - Status 200
  - Products are sorted by price in ascending order (each price >= previous)
- Expected: 200 OK with correctly sorted results

**API-TC-15: GET product with invalid ID (negative)**
- Endpoint: GET /products/99999
- Assertions:
  - Status 404
- Expected: 404 Not Found

---

## D) Protected Endpoint (Chained Auth)

> These tests depend on API-TC-01 running first to store the token.

**API-TC-16: GET /auth/me without token (negative)**
- Endpoint: GET /auth/me (no Authorization header)
- Assertions:
  - Status 401
  - Response contains `message` field
- Expected: 401 Unauthorized

**API-TC-17: GET /auth/me with valid token**
- Endpoint: GET /auth/me (Authorization: Bearer {{token}})
- Assertions:
  - Status 200
  - Response contains `id`, `username`, `email`
  - `username` matches "emilys" (the logged-in user)
- Expected: 200 OK with authenticated user data

**API-TC-18: GET /auth/me with invalid token (negative)**
- Endpoint: GET /auth/me (Authorization: Bearer fake_expired_token_12345)
- Assertions:
  - Status 401
  - Response contains `message` field
- Expected: 401 Unauthorized

---

## Summary

| Category | Test Cases | Assertions |
|----------|-----------|------------|
| A - Auth | TC-01 to TC-03 | 8 |
| B - Users | TC-04 to TC-07 | 10 |
| C - Products (CRUD) | TC-08 to TC-15 | 22 |
| D - Protected (Chained Auth) | TC-16 to TC-18 | 7 |
| **Total** | **18** | **47** |
