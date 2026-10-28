---
name: talent-registration-check
description: "Verify Nexova talent-registration behavior after form, validation, or requirement changes. Use for application.html, validation.js, and pre-delivery talent-form checks."
---

# Talent Registration Check

## Objective

Determine whether Nexova's simulated talent-registration form satisfies the
current website briefing without transmitting or persisting candidate details.
This skill verifies the existing form; it does not add features or commit work.

## Inputs

- Requirement sources: BRIEFING.md, uis/BRIEFING.md, and the three memory-bank
  files. Resolve requirement conflicts with the developer before verification.
- Implementation: uis/001-milestone/application.html, validation.js, local README,
  plan, package.json, and generated assets.
- Requested change or diff and the acceptance criteria affected by it.
- A working local preview URL and an available browser, manual or automated.
  Use the README's preview command if no server exists and tooling is available.
- Synthetic candidate: Alex Example, alex@example.com, +34 612 345 678, Spain,
  5 years, Technology, Advanced, Immediate; consent checked. Leave optional
  LinkedIn/comments blank initially. Never substitute a real candidate.

If the browser, dependencies, or preview are unavailable, record affected checks
as BLOCKED. Do not install tools or change manifests without developer approval.

## Procedure

1. Follow AGENTS.md session-start and protection rules. Read the relevant rule
   files. Identify the changed form behavior and the current requirement copy.
2. From the repository root, run:

   ```sh
   node --check uis/001-milestone/validation.js
   git diff --check
   ```

   Record exit codes. There is no npm test script. Do not create test files.
   If utilities changed, regenerate CSS with the documented Tailwind command
   only within approved scope, then verify the affected styles in the browser.
3. Open the preview's application.html. Inspect console errors, labels, control
   values, and error associations. Capture an initial Network baseline so image
   and font requests are not mistaken for candidate submissions. Inspect browser
   storage before entering synthetic values.
4. Execute the acceptance matrix below. Check invalid cases independently so
   one failing field does not hide another. Verify visible feedback against the
   exact current briefing copy, not a paraphrase invented for this report.
5. Repeat navigation and form feedback at 375px and 1440px viewport widths and
   by keyboard. Record screenshots if browser tooling supports them; otherwise
   give the manual observation and viewport. Do not claim screenshots exist
   unless captured. Do not expose candidate values in committed artifacts.
6. Inspect Network, cookies, localStorage, sessionStorage, IndexedDB, source
   logging, and console output after submit/reset. Candidate values must not be
   transmitted, stored persistently, or logged. A visible success message is
   demonstration confirmation, not evidence of delivery to Nexova.
7. Report PASS, FAIL, or BLOCKED per criterion with evidence, then overall status.
   Overall PASS requires every criterion to pass. If any fails or is blocked,
   report NOT READY and the reason; never silently waive a criterion. Report
   privacy-policy/domain launch blockers separately even if the demo passes.

## Acceptance Matrix

| ID | Action / Input | Verifiable expected result |
| --- | --- | --- |
| A1 | Run both commands above | Both exit 0; syntax alone is not browser sign-off. |
| A2 | Compare form with uis/BRIEFING.md | All eleven fields, labels, choice values, required states, and approved error/success copy match. LinkedIn/comments alone are optional; consent is not preselected. |
| A3 | Submit an empty form | Submission is blocked; required-field feedback appears; first invalid control receives focus; no success state. |
| A4 | Try a one-word/blank name, malformed email, phone without country code | Each invalid value produces its own error. A two-word name with accents/apostrophes and +34 612 345 678 are accepted. |
| A5 | Try experience blank, -1, 51, then 0 and 50 | Blank/out-of-range values fail; both inclusive boundaries pass. |
| A6 | Leave country, sector, English level, availability unset; try an unlisted value through browser tooling | Each missing/unlisted choice fails; every documented option is accepted. If value manipulation cannot be checked, mark that check BLOCKED. |
| A7 | Leave LinkedIn blank, enter https://www.linkedin.com/in/example, then javascript:alert(1) | Blank and HTTP(S) URL pass; non-HTTP(S) URL fails without execution. |
| A8 | Enter 500 then 501 comment characters, bypassing maxlength only for the latter | 500 pass with zero remaining; 501 fail with visible error and accurate remaining count. Optional blank comments pass. |
| A9 | Submit otherwise valid data without consent, then with consent | Unchecked consent blocks success; checked consent permits the demonstration confirmation, whose heading receives focus. |
| A10 | Correct invalid fields, then reset after errors and after success | Real-time errors/aria-invalid clear appropriately. Reset clears values, radio/select state, consent, touched/error/success states, restores 500 remaining, and focuses the first field. |
| A11 | Use keyboard and inspect 375px/1440px layouts | Labels and errors are associated, controls/focus are usable, feedback is perceivable, and no content overlap or horizontal page overflow occurs. |
| A12 | Inspect submit/reset network, storage, console, and source logging | No candidate-value request, email action, persistent storage, or personal-value log; no uncaught application errors. |

## Evidence Format

Return a compact report with the tested revision/change, preview URL, commands
and exit codes, browser/viewports, one status and observation per acceptance ID,
and unresolved blockers. Do not commit evidence files unless requested. Update
memory-bank/progress.md with a concise actual result when the task includes
maintaining project context. This skill never authorises commits, dependencies,
backend integration, legal policy changes, or processing real personal data.