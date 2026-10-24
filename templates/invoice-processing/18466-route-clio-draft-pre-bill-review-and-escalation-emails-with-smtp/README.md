# 🧾 Route Clio draft pre-bill review and escalation emails with SMTP

> ⚡ **0 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow pulls draft pre-bills from Clio, sends monthly grouped review emails to responsible attorneys, and runs daily checks to nudge or escalate stale drafts via email while logging each internal notification to a separate audit workflow.

## How it works
1. Runs on a monthly schedule and fetches all draft pre-bills from the Clio bills API.
2. Groups the draft pre-bills by each matter’s responsible attorney and skips processing if no drafts are found.
3. Builds and sends one internal review email per attorney listing their draft pre-bills with a link to Clio, and logs the routing event by calling a separate guardrail/audit workflow.
4. Runs daily on a schedule and fetches the current list of draft pre-bills from Clio.
5. Calculates how long each pre-bill has been in draft and selects only those hitting reminder, urgent, or overdue thresholds.
6. Sends grouped reminder/urgent emails to attorneys for due items and sends grouped escalation emails to the managing partner for overdue items, logging each notification through the guardrail/audit workflow.

## Setup
1. Add a Clio OAuth2 credential, set the CLIO_BASE_URL variable, and ensure your Clio app has access to the bills endpoint.
2. Add an SMTP email credential and set the sender/recipient variables used in messages (at minimum FIRM_FROM_EMAIL and FIRM_PARTNER_EMAIL).
3. Set n8n Variables for firm context and thresholds as needed (for example FIRM_NAME, FIRM_CLIO_BILLING_URL, FIRM_PREBILL_REMINDER_DAYS, FIRM_PREBILL_URGENT_DAYS, FIRM_PREBILL_ESCALATE_DAYS, and FIRM_PREBILL_ESCALATE_REPEAT_DAYS).
4. Configure and deploy the guardrail/audit sub-workflow referenced by GUARDRAIL_WORKFLOW_ID so logging calls succeed.

## 🔗 Nodes Used

Send Email, HTTP Request, Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
