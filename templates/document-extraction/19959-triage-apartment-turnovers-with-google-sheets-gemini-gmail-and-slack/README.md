# 🔬 Triage apartment turnovers with Google Sheets, Gemini, Gmail and Slack

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Youtube Link: https://youtu.be/l5ElbsX1-zs

This workflow collects apartment turnover condition reports via an n8n form, looks up unit context in Google Sheets, uses Google Gemini to generate a prioritized maintenance job with an SLA, writes the job back to Google Sheets, and notifies the assigned technician via Gmail and Slack.

## How it works
1. Receives a turnover condition report from an n8n Form submission (Unit ID and Condition Report).
2. Normalizes the submission data and fetches the unit profile and prior turnover history from Google Sheets.
3. Sends the submission, unit profile, and history to Google Gemini to classify priority, select a trade, and return structured tasks, estimates, and risk flags.
4. Generates a unique job ID and calculates an SLA due date based on the priority level.
5. Appends the new turnover job record to a Google Sheets “turnover jobs” sheet and looks up an on-call technician from a Google Sheets “technicians details” sheet by trade.
6. Emails the technician the job details via Gmail and posts the assignment summary to a Slack channel, then appends an “Assigned” status update back into Google Sheets.

## Setup
1. Create or connect a Google Sheets spreadsheet with the required tabs/columns for units, turnover jobs, and technician details, and update the document and sheet references if you use different IDs or names.
2. Add Google Sheets service account credentials (Google API) with access to the spreadsheet.
3. Add a Google Gemini (Google PaLM) API credential and ensure the workflow is configured to use the gemini-3.1-flash-lite model.
4. Add Gmail OAuth2 credentials and update the recipient email address and email template content as needed.
5. Add Slack credentials and select the target channel for maintenance notifications.
6. Publish the form and share the generated form URL with the team submitting turnover reports.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, AI Agent, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
