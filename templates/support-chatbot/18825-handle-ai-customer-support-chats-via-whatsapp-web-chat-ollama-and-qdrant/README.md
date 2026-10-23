# 💬 Handle AI customer support chats via WhatsApp, web chat, Ollama, and Qdrant

> ⚡ **234 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow provides AI-powered customer support for WhatsApp and an n8n web chat, using Ollama for responses, Redis for deduplication and conversation memory, Qdrant for RAG knowledge retrieval, and Google Sheets for product/property lookups plus lead and ticket creation.

## How it works
1. Triggers when a new message arrives from either the n8n Web Chat webhook or the WhatsApp Business Cloud webhook.
2. For WhatsApp messages, filters to real incoming text messages and uses Redis to deduplicate by message ID before continuing.
3. Normalizes both channels into a shared format, applies your business configuration, and checks Redis to see whether the conversation has been seen before.
4. If the incoming message is only a greeting, sends a short welcome tailored for new vs returning conversations and marks the conversation as seen in Redis.
5. Otherwise, uses an Ollama-powered AI agent with Redis chat memory and optional Qdrant retrieval to answer, and can read Products/Properties or append Leads/Tickets in Google Sheets when appropriate.
6. Marks the conversation as seen and returns the reply to the original channel by sending a WhatsApp message or responding to the web chat.

## Setup
1. Connect credentials for WhatsApp Business Cloud (trigger and send), Redis, Ollama, Qdrant, and Google Sheets.
2. In the business configuration step, set your company details, default language, Google Sheet ID, and WhatsApp phone number ID.
3. Create and populate a Google Sheets workbook with the required tabs (Products, Properties, Leads, Tickets) and ensure the column names match the workflow’s mappings.
4. Create a Qdrant collection named `customer_support_demo` (or update the workflow to your name) using the vector dimension produced by your Ollama embedding model.
5. Deploy and run the Ollama models specified (chat: `qwen3:8b`, embeddings: `nomic-embed-text-v2-moe:latest`) or update the workflow to models available in your environment.
6. Copy the WhatsApp and Web Chat webhook URLs from n8n and configure them in Meta WhatsApp and your web chat entry point as needed.

## Requirements
- Self-hosted or cloud n8n instance with AI Agent support
- WhatsApp Business Cloud account for WhatsApp messaging
- Redis instance for conversation memory and message deduplication
- Ollama with qwen3:8b or another compatible chat model
- Qdrant vector database for knowledge retrieval
- Ollama nomic-embed-text-v2-moe or another compatible embedding model
- Google account with Google Sheets OAuth2 access

## Customization
- Change company name, industry, default language and service menu in the Business Config node
- Replace the Google Sheet ID with your own spreadsheet
- Change the WhatsApp Phone Number ID to your Meta WhatsApp Business number
- Replace qwen3:8b with another compatible Ollama model
- Change the Qdrant collection name and embedding model if required
- Customize Products, Properties, Leads and Tickets sheets for your business
- Modify the greeting and support-agent instructions to match your brand tone

## Additional info
This template is designed as a white-label customer-support automation starting point. It supports WhatsApp and n8n Web Chat, conversation memory, RAG knowledge retrieval, public business-data lookups, lead capture, and support-ticket/human-handoff requests. The workflow uses Ollama by default so it can run with locally hosted models. Populate the configured Qdrant collection with your own approved business knowledge before testing RAG responses. Protected customer-specific lookups such as private order, account, shipment, application, financial, medical, or other sensitive records are intentionally not included because those flows should use verified identity/OTP before exposing private information.

## 🔗 Nodes Used

Redis, WhatsApp Business Cloud, AI Agent, Ollama Chat Model, Redis Chat Memory, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
