# 💬 Route WhatsApp support requests with Claude, Supabase, HubSpot and Slack

> ⚡ **152 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow turns incoming WhatsApp messages (text, audio, images, and documents) into actionable support interactions by extracting content, detecting sentiment, and using an AI agent with a Supabase knowledge base to route requests to Google Calendar, HubSpot, Slack, Gmail, and back to WhatsApp.

## How it works
1. Receives incoming WhatsApp messages via a WhatsApp webhook trigger.
2. Routes the message by type and converts it into text using OpenAI Whisper for audio, OpenAI GPT-4o Vision for images, or a PDF extractor for documents (or passes text messages through).
3. Loads the sender’s session context from Supabase and runs sentiment/language detection on the extracted text.
4. Uses a LangChain AI agent (Claude) with Supabase vector search (with OpenAI embeddings and Cohere reranking) plus tool access (Google Calendar, HubSpot, Slack, and Gmail) to produce a structured intent, response, and metadata.
5. Logs conversation analytics (intent, sentiment, message type, and response length) to an n8n Data Table.
6. Routes by intent to either create a Google Calendar event, create/update a HubSpot contact, email a document via Gmail (and upload it to Google Drive), create a HubSpot ticket and notify Slack, or escalate to Slack for urgent human follow-up.
7. Saves the updated conversation session back to Supabase and sends the cleaned response text back to the user via WhatsApp.

## Setup
1. Configure WhatsApp Cloud API credentials in n8n and register the workflow’s webhook URL in your WhatsApp app so message updates are delivered.
2. Add credentials for OpenAI (Whisper, GPT-4o Vision, and embeddings), Mistral Cloud (chat model), Cohere (reranker), and Supabase.
3. Create the Supabase tables used by the workflow (at least `sessions` and `knowledge_base`) and ensure the knowledge base is set up for vector retrieval.
4. Add and authorize Google Calendar, HubSpot (Contacts and Tickets), Slack, Gmail, and Google Drive credentials, and set the target Slack channels (e.g. `support` and `urgent`) and calendar.
5. Review and adjust intent values and metadata expectations (e.g. `metadata.datetime`, `metadata.email`, and optional `metadata.fileName`) to match your operational requirements.

## 🔗 Nodes Used

Slack, Google Drive, HubSpot, Google Calendar, Gmail, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
