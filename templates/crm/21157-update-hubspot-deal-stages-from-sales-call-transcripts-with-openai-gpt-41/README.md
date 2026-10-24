# 🤝 Update HubSpot deal stages from sales call transcripts with OpenAI GPT-4.1

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives sales call transcripts via a webhook, uses OpenAI to extract a structured call report and suggested deal stage, and updates the latest open deal in HubSpot with AI-generated fields and notes while returning clear HTTP errors for invalid requests.

## How it works
1. Receives a POST webhook request containing at least a contact email and call transcript.
2. Validates the payload and immediately returns a 400 response if required fields are missing or the transcript is too short.
3. Searches HubSpot for a contact matching the email and returns a 404 response if no contact is found.
4. Retrieves the contact’s associated deals from HubSpot, selects the most recently updated open deal (or the most recently updated deal if all are closed), and returns a 404 response if no deal exists.
5. Sends the deal context and transcript to OpenAI Chat Completions to generate a JSON report including summary, next steps, objections, buying signals, sentiment, and a suggested stage with confidence.
6. Applies guard rails so the deal stage only moves forward, only above the configured confidence threshold, and never to Closed Won or Closed Lost.
7. Updates the HubSpot deal properties, logs an HTML note on both the deal and contact, and returns a 200 response with the fields saved and whether the stage moved.

## Setup
1. Create a HubSpot private app, grant CRM scopes for contacts, deals, and notes (read/write as needed), and add the token as a HubSpot App Token credential used by all HubSpot HTTP Request nodes.
2. Add an OpenAI API credential for the OpenAI Chat Completions request.
3. Create the HubSpot deal properties used by the workflow (ai_call_summary, ai_next_steps, ai_objections, ai_buying_signals, ai_call_sentiment, ai_suggested_stage, ai_stage_confidence, ai_last_call_at).
4. Update the Config values for your OpenAI model, minimum stage confidence, and your HubSpot pipeline deal stage IDs in the correct order.
5. Copy the webhook URL from the trigger and configure your calling/transcription system to POST contact_email and transcript (optionally rep, source, recorded_at, and duration_seconds).

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
