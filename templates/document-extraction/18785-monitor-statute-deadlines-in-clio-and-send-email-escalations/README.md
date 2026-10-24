# 🔬 Monitor statute deadlines in Clio and send email escalations

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs daily and weekly to monitor statute-of-limitations tasks in Clio, emailing assignees milestone reminders and sending partner escalations for overdue deadlines, while logging sends to a separate compliance audit workflow.

## How it works
1. Runs every day on a schedule and fetches the firm’s user directory from the Clio API.
2. Retrieves pending tasks from the Clio API, keeps only tasks in the configured statute-of-limitations task type with a due date, and calculates days remaining plus an alert tier (180/90/30 days or overdue) with deduping per task.
3. For tasks that require an alert today, builds an internal email to the assignee (or a fallback address if the assignee is missing/disabled), logs the alert via an external compliance audit workflow, and sends the email via SMTP.
4. For tasks that are overdue, builds a separate partner escalation email and sends it via SMTP on every run until the task is marked complete in Clio.
5. Runs weekly on a separate schedule, fetches users and all pending statute-of-limitations tasks from Clio, calculates days remaining for each, and aggregates them into a single rollup.
6. Builds a weekly firm-wide deadline audit email, logs it via the compliance audit workflow, and sends the rollup via SMTP.

## Setup
1. Add a Clio OAuth2 credential and set the CLIO_BASE_URL variable so the workflow can call the Clio /users.json and /tasks.json endpoints.
2. Create an SMTP email credential and set FIRM_FROM_EMAIL (plus recipient variables like FIRM_EMAIL, and optionally FIRM_PARALEGAL_EMAIL and FIRM_PARTNER_EMAIL) for alert, escalation, and rollup routing.
3. Deploy the compliance logging sub-workflow and set GUARDRAIL_WORKFLOW_ID so daily alerts and weekly rollups are recorded.
4. Set FIRM_SOL_TASK_TYPE (or keep the default “Statute of Limitations”) to match your Clio task type name and adjust the daily/weekly schedule times if needed.

## 🔗 Nodes Used

Send Email, HTTP Request, Execute Sub-workflow, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
