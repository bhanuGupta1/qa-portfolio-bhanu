# ReqRes API Testing Pack (Postman + Newman)

This folder contains my API testing practice using the public ReqRes API.

## What I tested
- Positive + negative scenarios (200 / 201 / 204 / 400 / 404)
- Basic authentication flow (login token stored in environment)
- Data validation (required keys + types)
- Simple contract-style checks (required fields per user)
- Performance sanity check (response time assertion)

## How to run (Postman)
1. Import the collection from: `collection/`
2. Import the environment from: `env/`
3. Select environment: `reqres-env`
4. Run the full collection

## How to run (Newman)
From the repo root:

```bash
newman run api/reqres/collection/reqres-api-tests.postman_collection.json \
  -e api/reqres/env/reqres.postman_environment.json \
  -r cli,htmlextra \
  --reporter-htmlextra-export api/reqres/reports/newman-report.html
