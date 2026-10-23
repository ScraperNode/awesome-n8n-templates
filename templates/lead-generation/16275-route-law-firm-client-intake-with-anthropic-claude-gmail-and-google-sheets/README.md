# 🎣 Route law firm client intake with Anthropic Claude, Gmail and Google Sheets

> ⚡ **80 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow hosts an n8n intake form, sends submissions to Anthropic Claude for practice-area classification and qualification, then routes results to Gmail and Google Sheets before returning a confirmation message to the submitter.

## How it works
1. Receives a client intake submission through an n8n hosted form.
2. Normalizes the submitted fields (contact details, matter type, incident date, description, and preferences) into a consistent structure.
3. Sends the normalized intake to Anthropic Claude and requests a strict JSON assessment including practice area, summary, qualification, urgency, time sensitivity, and conflict-check flags.
4. Parses Claude’s JSON response, merges it back into the intake record, and defaults to a manual-review outcome if the response is malformed.
5. If the intake is qualified, sends an HTML alert email via Gmail and appends the intake details to a “Qualified Intakes” tab in Google Sheets.
6. If the intake is not qualified, appends the record and decline reason to a “Declined Intakes” tab in Google Sheets.
7. Returns a neutral on-screen confirmation message to the submitter after processing completes.

## Setup
1. Create an Anthropic API key and add an HTTP Header Auth credential that sends it as the `x-api-key` header for the Anthropic Messages API request.
2. Connect a Gmail account and replace the `sendTo` address in the intake alert email with your intake team recipient.
3. Connect Google Sheets credentials, create a spreadsheet with “Qualified Intakes” and “Declined Intakes” tabs, and replace `REPLACE_WITH_YOUR_SHEET_ID` in both Google Sheets append steps.
4. Review and customize the intake form fields (matter types and questions) to match your firm’s practice areas.
5. Tune the Claude prompt rules (qualification, urgency, and conflict flagging) to your firm’s intake policy before activating and sharing the form URL.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
