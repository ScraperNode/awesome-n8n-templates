# 🤝 Set up new legal matters with Clio, Google Drive, and email alerts

> ⚡ **9 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow runs hourly to detect newly opened matters in Clio, create and organize a corresponding Google Drive folder structure, copy and merge Google Docs templates, create matter tasks and calendar deadlines in Clio, log the setup via an n8n sub-workflow, and notify staff by email.

## How it works
1. Runs every hour on a schedule and fetches all open matters from the Clio API.
2. Deduplicates matters using n8n workflow static data so only newly seen matter IDs are processed.
3. For each new matter, searches Google Drive for an existing matter folder under a configured parent folder and creates the root folder if it does not exist.
4. Creates a standard set of subfolders in the matter’s Google Drive folder and stores the folder link for reporting.
5. Looks up practice-area-specific configuration, copies the configured Google Docs templates into the matter folder, and replaces merge tags using the Google Docs API.
6. Creates a practice-area-specific task checklist in Clio with due dates calculated from the matter open date.
7. Calculates intake deadlines (calendar-day or business-day offsets) and creates all-day Clio calendar entries for each configured deadline rule.
8. Builds a setup summary, logs it by executing a separate “guardrail” workflow, and sends a styled HTML email to staff with links to the Drive folder and generated documents.

## Setup
1. Add a Clio OAuth2 credential and set the CLIO_BASE_URL variable to your Clio domain so the workflow can read matters and create tasks and calendar entries.
2. Add a Google Drive OAuth2 credential with Drive and Google Docs API access, and set GENERATED_DOCS_FOLDER_ID to the parent Google Drive folder where matter folders should be created.
3. Configure practice-area mappings for document templates, task lists, and deadline rules, and set the required template document ID variables (for example TEMPLATE_MATTER_CHECKLIST_DOC_ID and TEMPLATE_CASE_PLAN_DOC_ID).
4. Create an SMTP email credential and set FIRM_FROM_EMAIL plus FIRM_STAFF_EMAIL (or FIRM_EMAIL) so staff receive the completion summary.
5. Set GUARDRAIL_WORKFLOW_ID to the ID of the logging/compliance sub-workflow that records the summary to your audit destination.
6. Review the schedule trigger cron expression and adjust the polling frequency to match how quickly you want new matters to be set up.

## 🔗 Nodes Used

Send Email, HTTP Request, Google Drive, Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
