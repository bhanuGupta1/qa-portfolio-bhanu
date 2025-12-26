# Manual Test Cases — SEEK

## A) Search (15)

**TC-001** Search “software tester” → results show  
**TC-002** Search “IT support” → results show  
**TC-003** Search nonsense “asdjkhqweu” → no-results message  
**TC-004** Search empty → validation or sensible default  
**TC-005** Search spaces only → trimmed input handled  
**TC-006** Search with special chars “@@@###” → handled gracefully  
**TC-007** Search with emoji “tester 😊” → handled gracefully  
**TC-008** Search with very long text (200 chars) → UI not broken  
**TC-009** Search with leading/trailing spaces “  tester  ” → trimmed  
**TC-010** Search case sensitivity “Tester” vs “tester” → consistent  
**TC-011** Search with common typo “tseter” → sensible results or no-results guidance  
**TC-012** Search in another tab then return → state retained  
**TC-013** Use browser back after search → returns correctly  
**TC-014** Refresh search results page → behaviour consistent  
**TC-015** Open search in new window → works

## B) Location filters (10)

**TC-016** Apply location “Christchurch” → results update  
**TC-017** Change location from Christchurch to Auckland → updates  
**TC-018** Clear location filter → resets  
**TC-019** Apply location + keyword together → correct combined results  
**TC-020** Select nearby region (Canterbury) if available → correct  
**TC-021** Apply location then refresh → filter persists or resets clearly  
**TC-022** Apply location then open job and back → state retained  
**TC-023** Apply location then sort results → both still applied  
**TC-024** Apply invalid/rare location text input (if field allows typing) → handled  
**TC-025** Multiple filters don’t cause empty UI or glitches

## C) Work type / salary / classification filters (10)

**TC-026** Apply work type Full-time → results update  
**TC-027** Switch Full-time → Part-time → updates  
**TC-028** Apply salary range filter (if exists) → results update  
**TC-029** Clear salary filter → resets  
**TC-030** Apply classification (IT) → results update  
**TC-031** Apply multiple filters (location + work type + classification) → correct  
**TC-032** Remove one filter while others remain → correct  
**TC-033** Filters reflect correctly in UI “chips/tags”  
**TC-034** Filters persist after navigating to job and back  
**TC-035** Filters don’t duplicate or bug out after repeated changes

## D) Sorting + pagination (6)

**TC-036** Sort by newest (if available) → order changes  
**TC-037** Sort by relevance → sensible order  
**TC-038** Sort + apply filter → both respected  
**TC-039** Go to next page → works  
**TC-040** Return to previous page → works  
**TC-041** Pagination retains filters

## E) Job listing page (8)

**TC-042** Open job listing → details load fully  
**TC-043** Job title, company, location visible and not clipped  
**TC-044** Open listing in new tab → works  
**TC-045** Use browser back → returns to results  
**TC-046** Scroll job description → no weird jumps  
**TC-047** Click company profile (if exists) → loads  
**TC-048** Copy/share link → opens same listing  
**TC-049** Save/bookmark job (if feature exists) → state shown clearly

## F) Apply flow (public-safe) (4)

**TC-050** Click Apply → navigates correctly (login/signup if required)  
**TC-051** Apply button not broken on multiple jobs  
**TC-052** Cancel/back from apply → returns safely  
**TC-053** If login required, user sees clear messaging

## G) Usability + accessibility (7) — OVERACHIEVER

**TC-054** Keyboard tab order works on search + filters  
**TC-055** Focus indicator visible (you can see where you are)  
**TC-056** Buttons and links are reachable via keyboard  
**TC-057** Resize window (mobile-ish) → layout doesn’t overlap  
**TC-058** Text remains readable at 110% zoom  
**TC-059** Error messages are actionable (tell user what to do)  
**TC-060** No-results page gives useful suggestions

