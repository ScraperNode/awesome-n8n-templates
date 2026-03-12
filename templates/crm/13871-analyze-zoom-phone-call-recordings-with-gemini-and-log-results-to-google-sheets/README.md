# 🤝 Analyze Zoom phone call recordings with Gemini and log results to Google Sheets

> ⚡ **7 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Analyze Zoom phone call recordings with Gemini AI and log to Google Sheets

## Who is this for

Sales managers and team leads who use Zoom Phone for outbound calls and want automated performance tracking without manually reviewing every recording.

## What this workflow does

1. A schedule trigger runs periodically and fetches recent phone recordings from the Zoom Phone API
2. Each recording is split out and processed one by one through a loop
3. The audio file is downloaded from Zoom, then sent in parallel to:
   - **Google Drive** for backup storage
   - **Google Gemini API** for AI-powered call analysis
4. Gemini evaluates how far the call progressed (contact reached, needs identified, meeting proposed, or appointment booked) and returns specific coaching advice
5. The analysis results are merged with the Google Drive link and caller metadata
6. Everything is appended as a new row in a Google Sheets tracking document

## How to set up

1. **Zoom credentials** — Create a Server-to-Server OAuth app in the Zoom Marketplace with `phone:read` and `recording:read` scopes. Add the credentials in n8n as "Zoom OAuth2 API"
2. **Google Gemini API** — Get an API key from Google AI Studio and add it as "Google PaLM API" credentials in n8n
3. **Google Drive** — Connect your Google Drive OAuth2 account and set the target folder ID in the "Upload to Google Drive" node
4. **Google Sheets** — Connect Google Sheets OAuth2 and set your spreadsheet ID in the "Log to Google Sheets" node. Create columns: Caller, Date, Number, Direction, Stage, Advice, DriveURL

## Requirements

- Zoom Phone plan with call recording enabled
- Google Cloud account with Gemini API access
- Google Workspace (Drive + Sheets)
- n8n instance (cloud or self-hosted)

## How to customize

- **Schedule frequency**: Adjust the interval in the Schedule Trigger node — default runs every hour
- **Analysis prompt**: Edit the prompt text in the "Analyze Call with Gemini" node to match your scoring criteria or industry terminology
- **Spreadsheet columns**: Add extra fields in the "Format Results" node if you want to track additional metadata like call duration or team name

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
