# 💬 Triage Japanese freelance gig emails with Gmail, Gemini, Sheets, Drive, and Calendar

> ⚡ **1,190 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow monitors Gmail for Japanese side-gig inquiries, flags risky wording, and uses Google Gemini to extract details and score each request. It logs every opportunity to Google Sheets, then drafts an accept/clarify/decline reply and, for accepted work, creates a Drive folder, Docs templates, and a Calendar block.

## How it works
1. Triggers every minute when a new Gmail message matching the configured Japanese inquiry search query arrives.
2. Cleans and normalizes the email content, detects the likely source platform, and checks the subject/body for Japanese red-flag keywords to produce an initial risk score.
3. Sends the normalized email plus freelancer settings to Google Gemini to extract structured project details, scores, red flags, and Japanese draft replies.
4. Combines Gemini’s scores with keyword-based risk signals to decide accept/hold/decline, calculates a recommended minimum price from your hourly rate and minimum fee, and generates a project ID and safe project title.
5. Appends the opportunity (scores, decision, red flags, and draft text) to a Google Sheets tracking spreadsheet.
6. Routes by decision to create a Gmail draft for clarification questions (hold) or a polite refusal (decline), without sending anything automatically.
7. For accepted requests, creates a Google Drive project folder, generates three Google Docs (scope lock, delivery checklist, and portfolio memo), creates a tentative Google Calendar work block, drafts an acceptance reply in Gmail, and updates the Google Sheet row with the generated links and event ID.

## Setup
1. Connect credentials for Gmail, Google Gemini, Google Sheets, Google Drive, Google Docs, and Google Calendar.
2. Update the freelancer settings to set your Google Sheets spreadsheet ID, sheet name, calendar ID, timezone, hourly rate, minimum project fee, and optional parent Drive folder ID.
3. Ensure your Google Sheet has columns matching the fields this workflow writes (for example message_id, decision, risk_score, reply_draft, and the various *_url fields) so append/update works correctly.
4. Adjust the Gmail trigger search query and the Japanese red-flag keyword list to match the types of inquiries you want to triage.

## Requirements
- A Gmail account, Google Gemini API access, Google Sheets, Google Drive, Google Docs, and Google Calendar credentials are required. You also need a Google Sheet with the expected column headers before running the workflow.

## Customization
- You can customize the spreadsheet ID, sheet name, calendar ID, hourly rate, minimum project fee, preferred skills, preferred categories, parent Drive folder, Gmail search query, Japanese red-flag keywords, scoring logic, and draft reply wording.

## Additional info
This workflow only creates Gmail drafts. It does not automatically send replies or accept projects. Review all generated drafts, scores, and documents before using them with real clients.

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Calendar, Gmail, Google Docs, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
