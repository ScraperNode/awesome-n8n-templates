# 🔬 Summarize Zoom meeting recordings in Notion with Smallest.ai and Gemini

> ⚡ **31 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow receives Zoom recording webhooks, downloads the meeting recording, transcribes it with Smallest.ai, summarizes it with a Google Gemini-powered AI Agent, and saves the summary and action items as a new page in a Notion database.

## How it works
1. Receives a POST webhook from Zoom and checks whether the event is Zoom’s endpoint URL validation challenge.
2. For URL validation events, computes the Zoom CRC HMAC SHA-256 token and responds with the plain and encrypted tokens to verify the endpoint.
3. For recording events, immediately acknowledges Zoom with a 200 OK response, then extracts the meeting topic, metadata, and an audio recording download URL from the webhook payload.
4. Downloads the recording file from Zoom using the provided download token for authorization.
5. Sends the downloaded audio to Smallest.ai to generate a full transcription.
6. Uses a LangChain AI Agent with Google Gemini to produce a short meeting summary and a list of action items from the transcript.
7. Creates a new page in a Notion database using the meeting topic as the title and the generated summary as the page content.

## Setup
1. Create and configure a Zoom Event Notifications webhook (for a recording-completed event) and point it to this workflow’s webhook URL.
2. Replace the HMAC secret in the CRC step with your Zoom webhook verification secret/token.
3. Add your Smallest.ai credentials to the transcription node.
4. Add your Google Gemini credentials/connection to the chat model used by the AI Agent.
5. Connect your Notion account and select/update the target database ID where meeting summary pages should be created.

## 🔗 Nodes Used

HTTP Request, Webhook, Notion, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
