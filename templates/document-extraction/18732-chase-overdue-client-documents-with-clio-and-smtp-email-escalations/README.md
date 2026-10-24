# 🔬 Chase overdue client documents with Clio and SMTP email escalations

> ⚡ **8 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs daily and uses the Clio API to find overdue “Document Request” tasks, then sends tiered reminder emails to clients via SMTP after passing them through a compliance approval sub-workflow, and escalates urgent items to internal staff.

## How it works
1. Runs every day at 8:00 AM (server timezone) on a schedule.
2. Fetches firm users, open matters (including client email addresses), and all pending tasks from the Clio API.
3. Keeps only tasks of the configured “Document Request” task type that have a due date, then calculates days overdue and assigns a reminder tier (1–2 days, 7–8 days, or 14–15 days overdue).
4. Filters to tasks that are due for a reminder today and have a resolvable client email address, or cleanly skips the run when none qualify.
5. Builds a tier-appropriate client reminder email (plain text and HTML), runs it through the compliance/opt-out guardrail sub-workflow, and sends it via SMTP only if approved.
6. For tasks in the urgent tier, builds and sends a separate internal escalation email to the responsible staff member (or a configured fallback address) via SMTP.

## Setup
1. Add a Clio OAuth2 API credential and set the CLIO_BASE_URL variable to your Clio instance base URL.
2. Set n8n variables for firm identity and sending addresses (at minimum FIRM_NAME, FIRM_EMAIL, and FIRM_FROM_EMAIL, plus optional FIRM_CLIENT_PORTAL_URL and FIRM_PARALEGAL_EMAIL).
3. Create an SMTP credential in n8n and update the sender/from fields as needed for your mail server.
4. Import and configure the compliance/opt-out guardrail workflow and set its ID in the GUARDRAIL_WORKFLOW_ID variable.
5. If your firm uses a different Clio task type name for document chasing, set FIRM_DOCUMENT_REQUEST_TASK_TYPE to match it (default is “Document Request”).

## 🔗 Nodes Used

Send Email, HTTP Request, Execute Sub-workflow, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
