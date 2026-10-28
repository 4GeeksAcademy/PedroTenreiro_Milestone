---
description: "Always-active ownership, context, and data-safety rules for Nexova development."
---

# Repository Boundaries

**Scope:** Always active. AGENTS.md requires this file for every task; this scope
is an explicit routing contract, not tool-specific automatic discovery.

- Start with both business and technical memory-bank context and BRIEFING.md.
  Use the mandatory delivery and approval gates in AGENTS.md.
- Read folder README guidance before working there; read all existing folder
  READMEs before creating a new folder. Put UIs in uis/, the central API in
  services/, data work in data/, and cross-cutting decisions in docs/.
- .agents/ configures coding tools. agents/, skills/, and mcps/ implement company
  product capabilities; do not place development governance there.
- Reuse packages/ for versionable libraries, shared/ for small loose shared
  assets, and agents/tools/ for reusable product-agent tools. Do not duplicate
  contracts or split a proposed FastAPI backend into microservices by default.
- Nexova handles candidate, employee, and client information. Use synthetic
  records in checks and examples; do not log personal values, commit real CVs,
  or send them to external models/tools. Never fabricate consent or policy text.
- Keep business targets separate from measured outcomes: 24-hour support SLA,
  40% chatbot resolution, and explainable CV ranking are requirements, not proof
  of delivered performance. Do not silently automate consequential HR decisions.
- Do not add a package, integration, or deployment assumption without approval.
  Report missing tooling or conflicting company facts rather than inventing
  commands or silently changing the agreed stack.