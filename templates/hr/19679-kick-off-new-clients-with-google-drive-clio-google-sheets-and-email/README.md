# 👥 Kick off new clients with Google Drive, Clio, Google Sheets, and email

> ⚡ **4 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow triggers when a client is marked as signed to create a Google Drive matter folder structure, send a compliance-checked kickoff email with a Calendly link, create Clio follow-up tasks, and log onboarding to Google Sheets, then runs weekly to email an internal onboarding summary.

## How it works
1. Receives a POST webhook when a client is marked as signed and normalizes the incoming client and matter fields.
2. Creates a top-level matter folder in Google Drive and captures the folder ID and URL (or records the failure without stopping the workflow).
3. Creates a standard set of Google Drive subfolders under the matter folder based on a configurable subfolder list.
4. Builds a kickoff email that includes your Calendly scheduling link and sends it through a compliance guardrail sub-workflow.
5. Sends the kickoff email via SMTP only when the guardrail approves it, otherwise skips sending if the client is opted out.
6. Creates configurable onboarding follow-up tasks in Clio with due dates based on day offsets and appends the onboarding record (including Drive folder status) to a Google Sheets master log.
7. Runs every Monday morning to read the Google Sheets onboarding log, summarize the last N days of onboardings and any Drive folder failures, and emails the weekly summary via SMTP.

## Setup
1. Configure the “When Client Signs” webhook URL in your CRM/PM tool to POST client_name, client_email, matter_id, practice_area, attorney_name, and attorney_email.
2. Add Google API (OAuth2) credentials with Google Drive access and set n8n variables for ONBOARDING_DRIVE_PARENT_FOLDER_ID and (optionally) ONBOARDING_DRIVE_SUBFOLDERS.
3. Add a Google Sheets credential, set ONBOARDING_LOG_SHEET_ID, and ensure a sheet named “Master Onboarding Log” exists with columns matching the appended fields.
4. Add Clio OAuth2 credentials, set CLIO_BASE_URL, and ensure the workflow has permission to create tasks for the target account/matters.
5. Add an SMTP credential for sending emails and set FIRM_FROM_EMAIL, FIRM_EMAIL, FIRM_NAME, and CALENDLY_KICKOFF_EVENT_URL.
6. Create or link a compliance/guardrail workflow and set GUARDRAIL_WORKFLOW_ID to its workflow ID so it can return an approval decision for the kickoff email.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
