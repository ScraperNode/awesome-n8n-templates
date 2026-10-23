# 🎣 Route law firm client intakes with Claude and Google Sheets

> ⚡ **32 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow hosts an n8n intake form for a law firm, sends each submission to Anthropic Claude for classification and qualification, logs the result to Google Sheets, emails the intake team for qualified matters via Gmail, and returns a neutral confirmation page to the submitter.

## How it works
1. Receives a client intake submission through an n8n hosted form.
2. Normalizes the submission into consistent fields (contact details, matter type, incident date, and narrative).
3. Sends the normalized intake to Anthropic Claude to classify practice area, assess urgency and time sensitivity, flag conflict-check needs, and decide whether the matter is qualified.
4. Parses Claude’s JSON response and merges the analysis back into the intake record.
5. If the matter is qualified, sends an HTML alert email via Gmail to the intake team and appends the intake details to the “Qualified Intakes” tab in Google Sheets.
6. If the matter is not qualified, appends the submission and decline reason to the “Declined Intakes” tab in Google Sheets.
7. Returns a confirmation message to the submitter stating the intake was received and that no attorney-client relationship has been formed.

## Setup
1. Create an Anthropic HTTP Header Auth credential (header name `x-api-key`) and attach it to the Claude HTTP request.
2. Connect a Gmail account and replace the placeholder recipient email address in the intake alert step.
3. Connect Google Sheets credentials, create a spreadsheet with “Qualified Intakes” and “Declined Intakes” tabs, and replace `REPLACE_WITH_YOUR_SHEET_ID` in both append steps.
4. Review and adjust the form fields (practice areas, questions, and disclaimers) and the Claude prompt rules to match your firm’s intake criteria.
5. Activate the workflow and share the hosted form URL where clients submit intake requests.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
