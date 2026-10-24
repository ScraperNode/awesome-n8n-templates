# 🤝 Flag unbilled time and revenue in Clio and send email digests

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow runs daily and weekly schedules to fetch Clio calendar entries, time entries, and open matters, then flags calendar activity without matching time entries, emailing per-attorney daily digests and a firm-wide weekly unbilled-revenue estimate while also logging both emails to an audit sub-workflow.

## How it works
1. Runs every day at 7am (by default) and fetches the prior day’s Clio calendar entries, time entries, and open matters.
2. Compares calendar entries to time entries at the matter level to identify matters with calendar activity but no logged time, estimating hours from start/end times (or a default duration).
3. Groups the unbilled items by each matter’s responsible attorney and builds a per-attorney digest email with itemized matters and total estimated hours.
4. Sends the digest content to a separate audit/guardrail workflow for logging, then emails the digest to each attorney.
5. Runs every Monday at 8am (by default) and fetches the last 7 days of Clio calendar entries, time entries, and open matters.
6. Repeats the unbilled-activity detection for the week, computes a firm-wide estimated dollar impact using a configurable hourly rate, logs the summary via the audit/guardrail workflow, and emails the weekly summary to the firm.

## Setup
1. Add Clio OAuth2 credentials and set the CLIO_BASE_URL variable used by the Clio HTTP requests.
2. Configure an email account for sending and set FIRM_FROM_EMAIL plus the target firm recipient (FIRM_EMAIL) used for fallbacks and the weekly summary.
3. Create or connect an audit/guardrail sub-workflow and set GUARDRAIL_WORKFLOW_ID to its workflow ID.
4. Set DEFAULT_CALENDAR_DURATION_HOURS (for entries without clear start/end times) and DEFAULT_HOURLY_RATE (for the weekly value estimate), and optionally set FIRM_NAME for the weekly email text.
5. Adjust the cron expressions on the daily and weekly schedule triggers to match your firm’s preferred run times.

## 🔗 Nodes Used

Send Email, HTTP Request, Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
