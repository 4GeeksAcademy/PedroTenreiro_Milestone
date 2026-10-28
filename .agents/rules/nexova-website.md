---
description: "Rules for Nexova's static public website and simulated talent-registration form."
globs: "uis/001-milestone/**"
---

# Nexova Website

**Scope:** File-pattern based: uis/001-milestone/**. AGENTS.md explicitly requires
loading this file for that path, including tools that ignore the globs metadata.

- Read uis/BRIEFING.md and the local README and plan. Keep semantic HTML,
  vanilla JavaScript, and Tailwind v4 utilities; no application framework or
  handwritten CSS rules. Generate styles with the documented CLI, not manual
  edits to assets/tailwind.css.
- Preserve English UI text, supplied Nexova service descriptions, contact
  details, field options, schema.org Organization facts, and confirmed historical
  wording. Do not replace business copy with invented marketing claims.
- Keep the eleven-field talent form aligned with the brief: name, email, phone,
  country, experience, sector, English level, availability, LinkedIn, comments,
  and data-policy consent. LinkedIn and comments are optional; the rest required.
- Validate experience inclusively from 0 to 50, comments up to 500 characters,
  supplied choice allowlists, and explicit consent. Preserve real-time feedback,
  accessible error associations, first-error/success focus, and full reset.
- Submission is a local demonstration only. Never introduce candidate-value
  transmission, email delivery, console logging, or persistent browser storage.
- Preserve keyboard navigation, visible focus, labels, responsive layouts, and
  metadata. Do not claim accessibility certification without evidence.
- Keep privacy-policy approval and the production domain as explicit launch
  blockers. Temporary preview URLs are not production canonicals.
- For form-related changes, execute the talent-registration-check skill and
  report actual evidence. Syntax checks alone do not prove browser behavior.