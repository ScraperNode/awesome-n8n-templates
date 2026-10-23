# 🤝 Summarize and action meeting recordings with Whisper, Claude, HubSpot, Gmail, and Slack

> ⚡ **3 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow accepts a meeting recording via webhook, transcribes it with OpenAI Whisper, analyzes the transcript with Anthropic Claude to extract attendees and action items, then updates HubSpot, drafts follow-up emails in Gmail, saves notes to Google Docs, and posts a completion summary to Slack.

## How it works
1. Receives a meeting recording file through an incoming webhook request.
2. Sends the audio to the OpenAI Whisper transcription endpoint and returns the transcript text.
3. Uses Anthropic Claude to analyze the transcript into structured JSON covering attendees, topics, decisions, action items, sentiment, and relationship signals.
4. Uses Anthropic Claude to normalize and prioritize the action items (including ISO-formatted deadlines) and prepares a short meeting summary and next steps for CRM.
5. Updates the target contact in HubSpot and creates a HubSpot task for each extracted action item.
6. Iterates through the extracted attendees, drafts a personalized HTML follow-up email with Anthropic Claude, and creates a Gmail draft addressed to each attendee.
7. Saves the combined meeting data to a Google Docs document and posts a summary message to the configured Slack channel.

## Setup
1. Configure the Webhook trigger to receive a multipart form upload with the audio file in the binary field named "data", then copy the production webhook URL into your recording source.
2. Add an OpenAI API credential for the Whisper HTTP request and ensure the Whisper endpoint URL is correct (or update it in the workflow parameters).
3. Add an Anthropic credential for the Claude chat model used for meeting analysis, action item formatting, and email drafting.
4. Add HubSpot credentials and set the primary contact email (used for the contact update) and confirm your HubSpot account permits creating task engagements.
5. Add Gmail and Google Docs credentials, and set the Slack credential plus the target Slack channel ID in the workflow parameters.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, HubSpot, Gmail, Google Docs

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
