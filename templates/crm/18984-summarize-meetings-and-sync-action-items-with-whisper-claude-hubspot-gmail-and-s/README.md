# 🤝 Summarize meetings and sync action items with Whisper, Claude, HubSpot, Gmail and Slack

> ⚡ **3 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow accepts a meeting recording upload, transcribes it with OpenAI Whisper, analyzes it with Anthropic Claude to extract insights and action items, syncs updates to HubSpot, drafts follow-up emails via Gmail, saves notes to Google Docs, and posts summaries and alerts to Slack.

## How it works
1. Receives a meeting recording via a webhook endpoint.
2. Sends the uploaded audio to OpenAI Whisper to generate a transcript.
3. Uses Anthropic Claude to extract attendees, topics, decisions, action items, sentiment, and relationship signals from the transcript and then reformats action items with deadlines and priority.
4. Searches HubSpot contacts by attendee email, updates a HubSpot contact with a meeting summary/next steps, and creates HubSpot tasks for each action item.
5. Generates key insights and calculates meeting metrics and a meeting score, routing by sentiment to either run deeper sentiment analysis (negative) or create a HubSpot deal (positive).
6. Drafts personalized follow-up emails per attendee with Anthropic Claude and creates Gmail drafts for each recipient.
7. Saves the meeting notes to Google Docs and posts a Slack summary, sending an additional Slack alert if high-priority action items are detected.

## Setup
1. Configure the webhook URL (POST `/meeting-upload`) in your meeting recorder or upload source so it sends the audio file as binary data.
2. Add credentials for OpenAI (Whisper), Anthropic (Claude), HubSpot, Gmail, Google Docs/Google Drive, and Slack.
3. Replace the placeholders in the workflow configuration and nodes (HubSpot primary contact email, Slack channel ID, and the Google Drive folder ID for meeting notes).
4. If you use the HubSpot Contacts Search HTTP request, set up an HTTP Header Auth credential with a HubSpot private app token (e.g., `Authorization: Bearer <token>`).

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, HubSpot, Gmail, Google Docs

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
