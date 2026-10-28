# Technical Context

## Evidence and Current Stack

Read BRIEFING.md for business requirements and uis/BRIEFING.md plus
uis/001-milestone/plan.md for the current frontend constraints. Nearby folder
READMEs define ownership; template examples are not implemented capabilities.

- uis/001-milestone/ contains index.html, application.html, validation.js,
  tailwind.input.css, and assets/. The application uses semantic HTML, vanilla
  JavaScript, and Tailwind CSS v4, with no application framework or handwritten
  CSS rules. Tailwind input is its import; generated output is assets/tailwind.css.
- The local package.json declares tailwindcss, @tailwindcss/cli, and serve as
  development dependencies. It has no npm scripts; do not invent npm test or
  npm run build commands. No root workspace runner is configured.
- validation.js implements field validation, touched states, a comments counter,
  error focus, success focus, and reset. Submission is prevented and simulated.
- packages/shared/package.json provides the @repo/shared-types package scaffold;
  it does not establish a working monorepo build or a connected backend.
- FastAPI is the services/ folder's recommended future backend, not an already
  running service. Prefer one API with domain routers before microservices.
- HubSpot, legacy Zendesk, Google Workspace, and the home-built ATS are Nexova's
  existing business systems. This repository does not establish integrations
  with them, centralised telemetry, production databases, or deployed AI agents.

## Ownership

| Location | Responsibility |
| --- | --- |
| uis/ | Human-facing applications |
| services/ | Central company API and justified separate workers |
| data/ | Source data, transformations, processed artifacts, evaluation sets |
| agents/ and agents/tools/ | Product agents and reusable tool integrations |
| skills/ | Product capabilities, not this ticket's coding-agent configuration |
| mcps/ | MCP integrations |
| workflows/ | Cross-system automation and orchestration |
| packages/ | Versionable reusable libraries and contracts |
| shared/ | Small shared schemas, templates, and assets |
| infra/, scripts/, internal/ | Infrastructure, helper scripts, internal tools |
| docs/ | Cross-cutting architecture and decisions |
| memory-bank/ | Persistent project context |
| .agents/ | Coding-agent rules and reusable development skills |

Do not create a directory merely because a template README mentions it. Read
existing folder READMEs before adding folders and avoid duplicate ownership.

## Focused Commands

Run from the repository root unless stated otherwise:

```sh
node --check uis/001-milestone/validation.js
git diff --check
```

With dependencies installed, from uis/001-milestone/:

```sh
npx @tailwindcss/cli -i ./tailwind.input.css -o ./assets/tailwind.css --minify
npx serve . --listen tcp://0.0.0.0:3000
```

Follow the local README for installation. Use a free alternate port if occupied.
The CSS command generates an artifact; it is not a behavior test. The server
must run for browser checks. A historical Codespaces URL is not evidence that a
preview is currently running or public. Do not install tools or change dependency
versions silently; report missing prerequisites. No automated test suite is
established by these commands.

## Constraints and Decisions

- Preserve English UI copy, supplied field options, accessible labels, keyboard
  operation, and error/success focus. Use synthetic candidates only.
- Keep the form demonstration local: no network submission, email, cookies,
  browser storage, or logs containing candidate values.
- Approved privacy-policy text/URL and production domain are launch blockers.
  Do not invent policy content, production canonicals, or claims of compliance.
- Keep the current frontend stack; backend, authentication, CV uploads, and
  persistent storage need explicit scope approval.
- The website plan preserves the supplied experience claim and 2025 copyright.
  Do not silently substitute dates based on the current calendar.
- Change shared contracts, dependency manifests, infrastructure, integrations,
  or generated assets only under the approval protocol in AGENTS.md.