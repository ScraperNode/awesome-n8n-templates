# 👥 Onboard new hires with Google Workspace, Google Calendar, Google Sheets, and Clio

> ⚡ **2 views** · 👥 [HR & Recruitment](../)

## Description

## Quick Overview
This workflow starts when a new-hire form is submitted, creates a Google Workspace user, sends a compliance-checked welcome email via SMTP, schedules onboarding sessions in Google Calendar, pulls training matters from Google Sheets to create Clio tasks, and emails HR a kickoff summary.

## How it works
1. Receives a POST webhook when HR submits a new-hire intake form.
2. Parses the submission, generates a firm email address and temporary password, and attempts to create the user in Google Workspace Admin SDK.
3. Builds a welcome email with SOP links, runs it through a separate compliance/guardrail workflow, and sends it via SMTP only when approved.
4. Creates a list of training sessions based on the start date and schedules them as Google Calendar events for the new hire.
5. Reads a “Training Matters” list from Google Sheets, selects a configured number of relevant matters, and creates corresponding onboarding tasks in Clio.
6. Sends an internal onboarding kickoff summary email to HR with the account provisioning status and what actions were triggered.

## Setup
1. Configure your HR form system to POST to the workflow’s webhook URL at `/webhook/new-hire-intake`.
2. Add a Google API credential with Admin SDK (Directory API) access and domain-wide delegation, and set the `FIRM_EMAIL_DOMAIN` variable used to build the new hire’s email address.
3. Add a Google Calendar OAuth2 credential and confirm which calendar receives the training events.
4. Add Google Sheets credentials and set `TRAINING_MATTERS_SHEET_ID` to the spreadsheet containing the “Training Matters” sheet.
5. Add a Clio OAuth2 credential and set `CLIO_BASE_URL` to your Clio domain.
6. Add SMTP credentials and set email variables such as `FIRM_FROM_EMAIL`, `HR_NOTIFICATION_EMAIL` (or `FIRM_EMAIL`), `FIRM_NAME`, `FIRM_SOP_LINKS`, `TRAINING_SESSIONS`, `TRAINING_MATTER_COUNT`, and `GUARDRAIL_WORKFLOW_ID`.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Execute Sub-workflow

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
