# ⚡ Send daily case-priority email digests from Clio to firm attorneys

> ⚡ **1 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow runs daily at 7am to pull open tasks, upcoming calendar entries, and firm users from Clio, then groups items by attorney and emails each attorney a personalized priorities digest, while logging each send event via an internal guardrail workflow.

## How it works
1. Runs every day at 7am on a schedule trigger.
2. Fetches pending tasks, upcoming calendar entries within a configurable follow-up window, and the firm’s user directory from the Clio API.
3. Filters and sorts tasks by due date and filters and sorts calendar entries by start time.
4. Merges tasks and calendar entries, then groups them by attorney email into overdue priorities, this-week follow-ups, and upcoming deadlines.
5. If there are any grouped items, creates one styled HTML email per attorney and includes both HTML and plain-text versions.
6. Logs each email send by calling a separate n8n workflow, then sends the digest to each attorney via SMTP.

## Setup
1. Add a Clio OAuth2 credential in n8n and set the CLIO_BASE_URL variable to match your Clio API environment.
2. Set n8n variables for FIRM_DIGEST_FOLLOWUP_DAYS (window size), FIRM_NAME, and FIRM_FROM_EMAIL (sender address used in the email content).
3. Create an SMTP credential for the email account used to send the digests and set the “from” address to an allowed sender for that mailbox.
4. Set the GUARDRAIL_WORKFLOW_ID variable to the ID of the logging/guardrail workflow you want to execute, or update the workflow-call step to point to your own logger.

## 🔗 Nodes Used

Send Email, HTTP Request, Execute Sub-workflow, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
