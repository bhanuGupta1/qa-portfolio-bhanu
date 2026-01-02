## Revision History
- Initial plan assumed guest job search access
- Scope updated after identifying sign-in gating on job search and apply flows


# Test Plan – SEEK (Guest User & Sign-in Gated Flows)

## Objective
To evaluate the usability, access control behaviour, and consistency of SEEK when accessed as a non-authenticated (guest) user.

The focus is on:
- Sign-in gating behaviour
- Guest navigation experience
- Job page visibility
- Apply flow authentication requirements
- Accessibility via keyboard navigation

## Scope
In scope:
- Homepage access
- Job search access as guest
- Job listing pages (view-only)
- Sign-in and register pages
- Apply flow (pre-authentication)
- “Unlock job insights” feature visibility
- Keyboard accessibility (Tab navigation)

Out of scope:
- Account creation
- Job application submission
- Security exploitation or bypass attempts
- Performance or load testing

## Test Environment
- Browser: Chrome (Desktop)
- Mode: Incognito
- OS: Windows
- User state: Not logged in

## Entry Criteria
- SEEK homepage accessible
- Internet connection available

## Exit Criteria
- Guest access behaviour validated
- Authentication gates identified
- Findings documented with evidence

## Risks Identified
- Confusion caused by inconsistent guest access
- Lack of explanation for login requirement
- Potential drop-off before job value is demonstrated
- Perceived UI instability due to login gate flicker
