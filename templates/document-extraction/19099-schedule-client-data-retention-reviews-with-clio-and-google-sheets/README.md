# 🔬 Schedule client data retention reviews with Clio and Google Sheets

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow schedules and tracks client-matter retention reviews from Clio in a Google Sheets ledger, sends escalating retention reminder emails, and records attorney decisions (confirm deletion authorization, extend, or legal hold) via a webhook link.

## How it works
1. Runs daily and pulls the firm user directory and all Closed matters from the Clio API.
2. Computes a retention deadline per matter based on practice area, deduplicates already-scheduled matters, and appends new retention rows to a Google Sheets “Retention” ledger.
3. Runs daily and reads the Google Sheets retention ledger, keeping only entries still marked as scheduled.
4. Calculates escalation tiers (90/30/7 days before, plus overdue) and builds a color-coded retention reminder email with one-click Confirm/Extend/Hold links.
5. Logs each reminder to a separate compliance-audit workflow and sends the email via SMTP to the responsible attorney (or a fallback firm email).
6. Receives webhook clicks from the email links, validates the request, updates the matching Google Sheets ledger row with the decision (and a new deadline for extensions), and returns an HTML confirmation or error page.

## Setup
1. Create a Clio OAuth2 credential, set the CLIO_BASE_URL variable, and ensure the workflow can read users and matters from Clio.
2. Create a Google Sheets OAuth2 credential, set RETENTION_LEDGER_SHEET_ID, and create a “Retention” sheet with the required column headers (including status, last_action, and last_action_at).
3. Add an SMTP email credential and set FIRM_FROM_EMAIL, FIRM_NAME, and FIRM_EMAIL variables for reminder delivery and fallback routing.
4. Activate the workflow, copy the webhook Production URL from the retention-decision webhook, and save it as RETENTION_DECISION_WEBHOOK_URL.
5. Set GUARDRAIL_WORKFLOW_ID to your compliance audit workflow (or update/remove the audit logging step) and adjust DEFAULT_RETENTION_YEARS and the practice-area retention map as needed.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
