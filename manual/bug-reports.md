# Findings – SEEK (Guest User Experience)

> These findings focus on usability, access control clarity,
> and accessibility behaviour observed during guest testing.

---

## FINDING-01: Job search is gated by login without explanation
Severity: Medium  
Priority: Medium  

Observed:
- Guest users must sign in to access job search
- Message shown: “Sign in to use SEEK”

Expected:
- Explanation of why login is required
- Clear value proposition for signing in

Impact:
- Increased friction for first-time users
- Possible early abandonment

Evidence:
- evidence/screenshots/SS-02-job-search-login-gate.png

---

## FINDING-02: Inconsistent guest access across site sections
Severity: Low  
Priority: Medium  

Observed:
- People Search and Companies accessible as guest
- Job search and insights gated behind login

Expected:
- Consistent access model or clearer communication

Impact:
- User confusion about site permissions

Evidence:
- evidence/screenshots/SS-03-people-search-guest.png
- evidence/screenshots/SS-02-job-search-login-gate.png

---

## FINDING-03: Login gate briefly disappears on back/refresh
Severity: Low  
Priority: Low  

Observed:
- Login gate briefly disappears on navigation
- Reappears very quickly
- No restricted content accessible during this window

Expected:
- Stable and consistent login gate behaviour

Impact:
- Perceived UI instability

Evidence:
- evidence/screenshots/SS-01-homepage-guest.png

---

## FINDING-04: Keyboard navigation allows deep browsing before authentication
Severity: Info  
Priority: Low  

Observed:
- Using Tab key, user can navigate to job listings
- Job details visible without login
- Restricted actions remain gated

Assessment:
- Positive accessibility behaviour
- No security issue identified

Evidence:
- evidence/screenshots/SS-04-job-page-guest-view.png

---

## FINDING-05: Apply flow redirects to sign-in without explanation
Severity: Medium  
Priority: Medium  

Observed:
- Clicking Apply redirects to sign-in page
- Job title and employer shown
- No explanation why login is required

Expected:
- Message such as “Sign in to apply for this job”

Impact:
- User frustration during high-intent action

Evidence:
- evidence/screenshots/SS-05-apply-redirect-login.png

---

## FINDING-06: “Unlock Job Insights” feature gated without preview
Severity: Low  
Priority: Low  

Observed:
- AI Job Match, Salary Match, Applicant count unavailable to guest
- No preview or explanation of feature value

Expected:
- Brief description or teaser explaining benefit

Impact:
- Reduced incentive to register

Evidence:
- evidence/screenshots/SS-06-job-insights-gated.png

