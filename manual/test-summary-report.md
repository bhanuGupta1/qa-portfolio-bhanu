# Test Summary Report — SEEK (Guest User)

## Test Cycle Overview
This test cycle focused on evaluating the **guest (non-authenticated) user experience** on the SEEK public website, with emphasis on:
- Access control clarity
- Usability and navigation
- Authentication gating behaviour
- Accessibility via keyboard navigation

## Test Scope
**In scope**
- Homepage access
- Job search entry points
- Job listing pages (view-only)
- Apply flow (pre-authentication)
- Sign-in and register pages
- “Unlock Job Insights” section
- Keyboard navigation (Tab)

**Out of scope**
- Account creation
- Job application submission
- Authenticated user features
- Security exploitation
- Performance testing

## Test Execution Summary
| Metric | Count |
|------|------|
| Test cases executed | 14 |
| Planned (not executed) test cases | 46 |
| Total findings | 6 |
| High severity | 0 |
| Medium severity | 2 |
| Low severity | 3 |
| Informational | 1 |

## Key Findings
- Job search and apply flows are gated by login without sufficient explanation
- Guest access is inconsistent across site sections
- Accessibility via keyboard navigation is largely positive
- Login gate behaviour appears visually unstable on back/refresh

## Risks Identified
- Potential user drop-off before value is demonstrated
- Confusion during high-intent actions (Apply)
- Perceived UI instability

## Recommendations
- Improve messaging around login requirements
- Provide value previews for gated features
- Maintain consistent access rules across sections
- Stabilize login gate rendering

## Conclusion
The guest experience allows meaningful exploration of job listings but introduces friction at critical decision points. Improving clarity around authentication requirements could significantly reduce abandonment.
