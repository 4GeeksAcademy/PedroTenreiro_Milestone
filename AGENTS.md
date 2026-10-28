# Coding Agent Agreement

## Required Session Start

Before editing files or running mutating commands, read in order:

1. memory-bank/projectbrief.md (business, users, objectives, boundaries).
2. memory-bank/techContext.md (implemented stack and technical constraints).
3. memory-bank/progress.md (current state, evidence, and blockers).
4. BRIEFING.md, then the README.md of each folder involved in the task. For
   website work also read uis/BRIEFING.md and the local plan and README.
5. .agents/rules/repository-boundaries.md for every task. For any change matching
   uis/001-milestone/**, also read .agents/rules/nexova-website.md before editing.

Read all existing folder README.md files before creating any new folder. Do not
re-read unchanged documents during the same session. BRIEFING.md is the company
source of truth, despite stale CONTEXT.md references in the template README.
If required context is missing or contradicts the request, stop and ask. Do not
invent company facts, integrations, credentials, or completed work.

These are mandatory instructions, not executable enforcement hooks. Ensure the
development tool loads this file; if it does not support AGENTS.md, explicitly
attach it at session start. Rule files are loaded through the routing above,
not an assumption that every tool discovers .agents/rules/ automatically.

## Mandatory Delivery Workflow Before Every Commit

1. **Inspect:** read required context, run git status --short, and identify
   pre-existing changes and the affected owning folder. Do not stage user work.
2. **Plan:** state the requirement, a small plan, affected paths, and verifiable
   acceptance criteria. Obtain explicit approval for protected paths or any
   expansion beyond the requested deliverable before making those changes.
3. **Implement:** make the smallest scoped change following the applicable
   rules. Keep configuration in .agents/, not product agents/ or skills/.
4. **Verify:** run the cheapest relevant check immediately after the first
   substantive edit, then the necessary scoped checks. For talent-form changes
   use .agents/skills/talent-registration-check/SKILL.md. Do not write tests
   unless requested or run the full suite repeatedly. Stop after two failed fix
   attempts and report the exact failure, attempts, and suspected cause.
5. **Review and document:** inspect the diff, run git diff --check, check for
   exposed secrets/PII, and update the memory bank with actual outcomes and
   remaining blockers. Inspect untracked deliverable files too, because an
   unstaged git diff alone does not include them. Never claim an unrun check
   passed. Do not commit failing acceptance criteria; report blocked checks and
   request an explicit developer waiver before proceeding.
6. **Commit gate:** report the changed paths and check results. Commit only when
   the developer explicitly requests it, and stage only the intended paths.
   Review git diff --cached and git diff --cached --check before committing.
   Do not create branches, push, deploy, or alter public access without explicit
   authorisation. An implementation request alone is not permission to commit.

## Protected Changes: Explicit Developer Confirmation Required

An explicit request naming the protected change is confirmation for that change
only; otherwise stop before modifying any of these:

- BRIEFING.md, BRIEFING.es.md, uis/BRIEFING.md, and company-choice.md: approved
  company facts and milestone requirements.
- Existing README.md and README.es.md files, agents/_template/**, and
  skills/_template/**: shared repository guidance and templates.
- AGENTS.md and .agents/**: the development agreement itself. This setup ticket
  authorises their initial creation, not unrelated future governance changes.
- packages/shared/** and shared/**: shared types, schemas, and cross-app assets.
- infra/**, deployment/CI configuration (including .github/workflows/**), root
  orchestration files, and dependency manifests/lockfiles anywhere in the repo:
  stack, dependency, and operational changes.
- .env* files, credentials, private keys, production exports, and existing raw
  candidate/client/employee data under data/**: never expose secrets or PII.
  Do not commit real personal data even when a file change is approved.
- uis/001-milestone/assets/tailwind.css: do not hand-edit generated CSS.
  Regeneration is allowed when an approved frontend change requires it, using
  the documented Tailwind command; inspect the resulting diff.
- Any pre-existing developer change, deletion, or untracked file: do not revert,
  delete, rename, or stage it without confirmation. A request to edit an existing
  file permits scoped edits, not removal of unrelated work.

Stop and ask before adding frameworks, backend persistence, authentication,
CV uploads, external-system writes, automated candidate decisions, or new legal
policy text. Never resolve a conflicting business fact by guessing.