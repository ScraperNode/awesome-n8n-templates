# 🔬 Route meeting action items to Slack using Gmail, OpenAI, and Google Sheets

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow watches a Gmail label for new meeting transcript emails, extracts the transcript, uses OpenAI to generate a summary and action items, routes urgent items to the right Slack channel, and logs the meeting and action items to Google Sheets.

## How it works
1. Triggers every minute when an unread email arrives in Gmail with the label `Transcripts`.
2. Applies your configured Google Sheets and Slack settings, then extracts meeting metadata and transcript text from the email body.
3. Reads the existing meeting log from Google Sheets and skips processing if the email matches a previously logged message ID or meeting hash.
4. Sends the transcript to OpenAI to produce a JSON analysis including summary, decisions, risks, and structured action items.
5. Parses and normalizes the action items, then routes the result as urgent, standard, or FYI based on priority and due date threshold.
6. Posts a formatted message to the appropriate Slack channel when action items exist, otherwise marks the run as FYI.
7. Appends the meeting record to the `Meetings` sheet and writes each extracted action item as a separate row in the `ActionItems` sheet.

## Setup
1. Connect credentials for Gmail OAuth2, Google Sheets OAuth2, OpenAI, and Slack OAuth2.
2. Create a Google Sheets spreadsheet with two tabs named `Meetings` and `ActionItems` (or update the sheet names in the settings code).
3. Update the settings in the workflow code with your Google Sheet ID, Slack channel names/IDs, and the urgent due-date threshold in hours.
4. Create and apply a Gmail label named `Transcripts` (or update the Gmail trigger query) and ensure transcript emails land there as unread.

## Requirements
- n8n Cloud or self-hosted n8n instance (v1.50+)
- Gmail account with OAuth2 credentials configured in n8n
- Google Sheets account with OAuth2 credentials configured in n8n
- OpenAI API key configured in n8n
- Slack workspace with OAuth2 credentials configured in n8n
- A Google Sheet with Meetings and ActionItems tabs

## Customization
- Change the Gmail label filter on When Email with Transcript Arrives
- Edit Slack channel names and URGENT_HOURS_THRESHOLD in Setup Meeting Configuration
- Tune email parsing patterns in Extract Email Transcript for your transcript tool
- Adjust routing rules in Parse Analysis Results
- Modify the AI prompt or model in OpenAI Meeting Analysis

## Additional info
This template targets the "meeting transcript to action items" use case: AI-powered extraction with duplicate protection, priority routing, and a two-tab audit log. Works with transcript emails from Otter.ai, Fireflies, Zoom, Google Meet, and similar tools. Unlike a basic email forwarder, it assigns owners, detects urgency, and creates a searchable task tracker in Google Sheets. FYI-only meetings are logged without Slack noise.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
