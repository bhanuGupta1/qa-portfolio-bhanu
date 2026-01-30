# API Testing – DummyJSON (Postman + Newman)

## Goal
Practice API testing skills used in Junior QA roles:
- validating status codes and response bodies
- negative testing (invalid auth, invalid ids)
- basic performance checks (response time)
- generating an automated Newman HTML report

## Tools
- Postman (collection + environment)
- Newman CLI + HTML report (htmlextra)

## What’s covered
- Auth: login negative test (invalid credentials)
- Users: list users, get user (valid), get user (invalid → 404)
- Products: list products
- Protected endpoint: /auth/me without token → 401

## How to run (Newman)
1) Install:
   npm i -g newman newman-reporter-htmlextra

2) Run:
   newman run "api/postman/DummyJSON-API-Tests-Bhanu.postman_collection.json" -e "api/postman/dummyjson-env.postman_environment.json" -r cli,htmlextra --reporter-htmlextra-export "api/newman/newman-report.html"

## Output
- api/newman/newman-report.html
