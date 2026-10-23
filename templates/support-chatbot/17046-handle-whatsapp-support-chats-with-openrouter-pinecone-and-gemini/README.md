# 💬 Handle WhatsApp support chats with OpenRouter, Pinecone, and Gemini

> ⚡ **7,336 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This template implements a WhatsApp support suite that logs inbound events to a dashboard API, routes conversations through an OpenRouter-powered AI agent with Pinecone RAG and memory, exposes a webhook for human outbound replies, and provides a webhook to summarize recent chats for handoff.

## How it works
1. Triggers on WhatsApp Cloud API events and routes status updates (sent/delivered/read) to a dashboard API endpoint for storage.
2. For inbound messages, looks up the contact in the dashboard API and normalizes the message into a consistent schema (sender, type, timestamp, and best-effort content).
3. If the message contains media (image/video/audio/document), fetches the WhatsApp media URL, downloads the file, uploads it to the dashboard’s media endpoint, and attaches the resulting media URL and MIME type.
4. Stores inbound messages and reactions in the dashboard API, then checks via the cases endpoint whether the sender already has an open case.
5. If the inbound message is text and no open case is found, queries Pinecone as a tool (using Google Gemini embeddings), uses an OpenRouter chat model with conversation memory to draft a reply or create a new case via the dashboard API, and sends the reply back on WhatsApp.
6. If no open case is found and the message is not text, sends a static WhatsApp reply asking the user to type their question and logs that outbound message to the dashboard API.
7. Exposes an outbound webhook the dashboard can call to send text or media messages via WhatsApp, logs the sent message to the dashboard API, and returns an OK response with the WhatsApp message ID.
8. Exposes a summarize webhook that fetches the most recent messages for a phone number from the dashboard API, generates a concise handoff summary with an OpenRouter model, and returns the summary as JSON.

## Setup
1. Configure WhatsApp Cloud API access by adding WhatsApp credentials for the trigger and send/media nodes and set the correct Phone Number ID (currently hardcoded as 1183690101495838).
2. Provide the dashboard API base URL and a Bearer token for all HTTP Request and HTTP Request Tool nodes that call endpoints under /api (contacts, messages, status, cases, media).
3. Add an OpenRouter API credential for both the AI agent and the summarizer model nodes.
4. Set up Pinecone (API credential, index name company-knowledge-base, and namespace company-kb) and add Google Gemini embeddings credentials used by the Knowledge Base tool.
5. Deploy and copy the production URLs for the outbound-send (ps-outbound-send) and summarizer (ps-summarize) webhooks into your dashboard or calling system so it can trigger outbound messages and request summaries.

## Requirements
- A WhatsApp Business Cloud API app with a verified phone number and webhook configured
- A backend REST API exposing /api endpoints for contacts, messages, status, cases, and media (e.g. the open-source Chat Flow dashboard: https://github.com/salmannn4321/chat-flow)
- A Pinecone account with an index created for your knowledge base
- An OpenRouter API key (or any other chat-model provider)
- A Google Gemini API key for generating embeddings

## Customization
- Swap the OpenRouter chat model node for OpenAI, Anthropic, or any other LangChain-supported provider
- Edit the AI agent's system prompt, tone, and the keywords that trigger a handoff to a human
- Replace Pinecone with another n8n-supported vector store if you already use one
- Add or remove supported media types in the media-type router
- Change the static fallback reply text, or the condition that triggers it
- Adjust how many recent messages the summarizer pulls, or restyle its output format

## Additional info
Built for the open-source Chat Flow WhatsApp support dashboard, available at https://github.com/salmannn4321/chat-flow. The repo includes the full Supabase schema (SUPABASE_SCHEMA.md) these endpoints expect.
This template combines what were three separate workflows — the AI agent/RAG receiver, an outbound-send webhook, and a chat-summarizer webhook — into one flow. Split them back into separate workflows if you'd rather trigger sending/summarizing independently from your own system.
Remember to replace the hardcoded WhatsApp Phone Number ID, the Pinecone index/namespace names, and all placeholder API URLs with your own before activating.

Contact:
Email: salmanmehboob1947@gmail.com
Linkedin: https://www.linkedin.com/in/salman-mehboob-pro/

## 🔗 Nodes Used

HTTP Request, Webhook, WhatsApp Business Cloud, AI Agent, Basic LLM Chain, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
