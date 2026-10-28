# Nexova Project Brief

## Source of Truth

Use [the company briefing](../BRIEFING.md) for company facts and
[the website briefing](../uis/BRIEFING.md) for the current marketing deliverable.
The root README is a template guide: its references to CONTEXT.md do not replace
BRIEFING.md. Do not recreate the deleted CONTEXT files as competing sources.

## Business and Problem

Nexova Solutions is a human resources consulting and talent acquisition firm,
founded in 2011, with headquarters in Valencia and an expansion office in Miami.
It has 120 employees, approximately USD 8 million annual revenue, and serves
mid-sized technology, retail, and financial-services companies. Its three
business lines are executive/mid-management headhunting, customer-support
outsourcing, and corporate soft-skills and leadership training.

Manual CV screening, email-based candidate communication, disconnected systems,
and spreadsheet administration limit growth. Clients lack recruitment visibility;
training is sold from a quarterly PDF; support resolves incidents in 48 hours
against a 24-hour SLA. Department heads spend 4-8 hours preparing weekly reports
that reach CEO Laura Mendoza with stale data.

## Objectives and Users

- Marketing, led by Carmen Ruiz: accessible corporate website, SEO/GEO and
  schema.org metadata, then assisted content production and conversion metrics.
- Selection, led by Javier Almeida (40 consultants): explainable CV scoring,
  candidate RAG search, status portal, and automated candidate communication.
- Training, led by Elena Vargas (12 people): searchable catalogue, enrolment,
  progress tracking, and personalised recommendations.
- Support, led by Roberto Diaz (30 agents): searchable knowledge base, workload
  visibility, sentiment alerts, and a RAG chatbot targeting 40% query resolution
  without human intervention. This is a target, not a demonstrated result.
- Sales (18 people): consistent HubSpot use, follow-up sequences, inactivity
  alerts, pipeline visibility, and personalised proposal assistance.
- Internal HR, led by Patricia Solis: onboarding, policy assistance, and HR KPIs.
- Technology, led by Sergio Molina (6 people): connected data pipelines,
  telemetry, centralised logging, and architecture assistance.
- Executive leadership: real-time cross-department KPIs, automatic weekly reports,
  threshold alerts, and natural-language queries.

## Current Delivery Boundary

The current implementation is the English corporate website and talent
registration demonstration in uis/001-milestone/. It presents Nexova's three
business lines and validates candidate details locally. It does not submit
candidates to an ATS, send email, or persist applications. The wider objectives
above remain roadmap items, not implemented services.

Candidate and employee records are sensitive. Use synthetic data for development;
do not upload real CVs, expose personal information, or fabricate legal consent.
Rankings must be explainable and must not silently become autonomous hiring
decisions. Changes introducing real processing require developer approval.

## Unresolved Business Facts

BRIEFING.md names Megan Clarke in the Sales overview but Marcos Ibanez in its
department section. Ask the developer before using a Sales manager's identity in
a deliverable. The company briefing's historical experience wording must not be
silently recalculated; the website plan explicitly preserves its supplied copy.