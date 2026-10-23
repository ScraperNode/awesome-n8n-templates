# ⚡ Send AI study reports and spaced-repetition reminders via OpenAI, Sheets and Gmail

> ⚡ **8 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This dual-trigger workflow logs daily study sessions from an n8n Form, analyzes them with OpenAI, stores results in Google Sheets, and emails a full coaching report via Gmail; it also runs daily at 7 AM to email each student revision reminders based on spaced-repetition dates.

## How it works
1. Receives a study-session submission through an n8n Form.
2. Validates the submitted fields and calculates spaced-repetition revision dates (Day+1, +3, +7, +14).
3. Sends the session details to OpenAI Chat Completions and parses the returned JSON coaching analysis (score, feedback, plan, and quiz).
4. Reads the existing Google Sheets Daily Log to find any prior sessions for the same student that are due for revision on the submitted date.
5. Builds an HTML email combining the AI report, today’s revision-due items, and the new revision schedule, then appends the new session to Google Sheets.
6. Sends the full daily study report to the student via Gmail.
7. Runs every day at 7 AM, reads all Google Sheets logs, finds revision items due today per student, and emails each student a morning revision reminder via Gmail.

## Setup
1. Add an OpenAI API credential and ensure the Chat Completions request is authorized for the model used in the HTTP request.
2. Add a Google Sheets OAuth2 credential, create a spreadsheet with a “Daily Log” tab and the required headers, and replace `YOUR_STUDY_SHEET_ID` in all Google Sheets nodes.
3. Add a Gmail OAuth2 credential for sending emails in both the daily report and morning reminder steps.
4. Publish the n8n Form and share the form URL with students, then confirm the 7 AM schedule matches your instance timezone before activating the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
