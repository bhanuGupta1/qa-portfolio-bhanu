# Test Cases – SEEK (Executed)

> These test cases document scenarios that were executed as a guest user.
> Testing scope was adjusted after discovering authentication gating on job search
> and apply flows.

---

## Phase 1 – Guest Access & Authentication Gating

## TC-01: Access homepage as guest
Steps:
1. Open seek.co.nz in incognito mode

Expected:
- Homepage loads successfully
- Navigation menu visible

---

## TC-02: Attempt job search without login
Steps:
1. Click “Job search” from navigation

Expected:
- User is prompted to sign in

---

## TC-03: Review sign-in gate messaging
Steps:
1. Observe message shown when job search is accessed

Expected:
- Message explains why login is required
- Message communicates benefit of signing in

---

## TC-04: Access People Search without login
Steps:
1. Click “People search” from navigation

Expected:
- Page loads without authentication

---

## TC-05: Access Companies section without login
Steps:
1. Click “Companies” from navigation

Expected:
- Company browsing available as guest

---

## TC-06: Indirect navigation to job content
Steps:
1. Navigate People Search
2. Click into related job information

Expected:
- Login gate appears before restricted content

---

## TC-07: Login gate behaviour on back/refresh
Steps:
1. Trigger login gate
2. Use browser Back and Refresh

Expected:
- Login gate remains consistently enforced
- No bypass of restricted content

---

## Phase 2 – Job Page Behaviour (Guest via Keyboard Navigation)

> These test cases were added after observing that job pages
> can be accessed via keyboard navigation (Tab),
> while actions and insights remain gated by authentication.

---

## TC-08: Access job listing via keyboard navigation
Steps:
1. Use Tab key to navigate navigation elements
2. Reach and open a job listing

Expected:
- Job listing page opens successfully
- No authentication bypass occurs

---

## TC-09: Verify job details visibility as guest
Steps:
1. Open a job listing without logging in

Expected:
- Job title visible
- Company name visible
- Location visible
- Job description readable

---

## TC-10: Verify restricted sections on job page
Steps:
1. Scroll job listing page
2. Observe “Unlock job insights” section

Expected:
- AI Job Match, Salary Match, Applicant count gated
- Clear indication login is required

---

## TC-11: Apply action enforcement
Steps:
1. Click “Apply” on job listing

Expected:
- Redirect to sign-in page
- Job title and employer shown
- No application submission without login

---

## TC-12: Apply flow messaging clarity
Steps:
1. Observe messaging on sign-in page after clicking Apply

Expected:
- Explanation that login is required to apply

---

## TC-13: Keyboard accessibility on sign-in page
Steps:
1. Use Tab key on sign-in page

Expected:
- Logical focus order
- Focus visible on all interactive elements

---

## TC-14: Registration page required fields clarity
Steps:
1. Navigate to Register page
2. Observe form without submitting

Expected:
- Required fields clearly marked
- Instructions visible without error trigger
