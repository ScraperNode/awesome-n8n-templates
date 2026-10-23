# 🎣 Screen affiliate applications and draft outreach with rules-based scoring

> ⚡ **9 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This demo workflow screens affiliate/ambassador applications against editable rules, deduplicates applicants by email, and generates either a personalized outreach draft for qualified candidates or a reason-coded owner alert, then compiles a single owner digest summary.

## How it works
1. Runs when you click “Test workflow” to start a demo batch of sample affiliate applications.
2. Validates each application, normalizes and deduplicates by email, sanity-checks self-reported metrics, and calculates a deterministic fit score from an editable rules block.
3. Routes qualified applicants to generate a personalized outreach email draft.
4. Routes non-qualified or invalid applications to create a reason-coded owner alert message.
5. Combines both branches and produces a single owner digest that summarizes how many applicants qualified and lists alerts and outreach-ready candidates.

## Setup
1. Review and edit the RULES block (accepted platforms and thresholds) in the validation/scoring step to match your affiliate program criteria.
2. Replace the demo intake with your real source (for example a webhook from Tally/Typeform or an n8n Form Trigger) while keeping the same fields (name, email, platform, handle, followers, engagement_rate, posts, niche).
3. Optionally add delivery steps after the outreach draft and owner digest (for example Gmail/Email or Slack) and map the generated draft and digest text to your chosen destination.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
