# 💬 Route RAG customer support across WhatsApp and Outlook with Pinecone and OpenRouter

> ⚡ **214 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
A production-ready 3-workflow system that handles customer support across WhatsApp and Email using RAG-powered AI. Automatically routes queries, detects escalation intent, logs handoffs to Google Sheets, alerts your team via Slack, and lets agents resolve cases with a single slash command.

## How it works
1. A form trigger accepts PDF, DOCX, and TXT documents, chunks them with a token splitter, embeds them using Google Gemini, and stores them in your Pinecone vector store to build the AI knowledge base.
2. Incoming messages from WhatsApp Business Cloud API and Microsoft Outlook are each normalized into a unified contact format — capturing channel, contact ID, name, and message text — before merging into a single pipeline.
3. Every message is checked against a Google Sheets handoff tracker. If the contact is currently assigned to a human agent, the message is forwarded directly to Slack without any AI involvement.
4. For active (non-handoff) contacts, the AI Support Agent queries Pinecone via RAG, pulls context from a sliding conversation memory window, and returns a structured JSON output containing a reply and a handoff_requested flag.
5. If the AI detects escalation intent or has no answer, it sets handoff_requested: true — the contact is logged to Google Sheets, AI goes silent for that contact, and a detailed alert is posted to your Slack support channel.
6. Answers are routed back through the originating channel — WhatsApp replies via Business Cloud API, email replies via Microsoft Outlook — keeping every conversation native to its platform.
7. Support agents run /resolve [contact_id] in Slack to close a handoff. The workflow validates the input, updates the Google Sheets row with agent name and timestamp, re-enables AI for that contact, and confirms resolution in the Slack channel.

## Setup
1. Pinecone + Embeddings: Create a Pinecone index and add your Pinecone credential to the "Insert into Vector Store" and "Knowledge Base" nodes. Set your Google Gemini API credential on both Embeddings nodes (one in Workflow 1, one in Workflow 2).
2. WhatsApp: Connect your WhatsApp Business Cloud API credential to the WhatsApp Trigger node. Replace YOUR_WHATSAPP_PHONE_NUMBER_ID in both Send WhatsApp Message nodes.
3. Email: Add your Microsoft Outlook OAuth2 credential to the Outlook Trigger and the Send Email Answer node.
4. Handoff Sheet: Create a Google Sheet with a tab named Handoffs and these column headers exactly: contact_id | channel | contact_name | status | handoff_since | resolved_by | resolved_at. Set your Google Sheets credential and paste your Sheet ID into all four Google Sheets nodes across Workflows 2 and 3.
5. Slack: Create a Slack bot app, add it to your support channel, and set the credential in all three Slack nodes. Update the channel name if yours differs from #support-handoff.
6. AI Model: Add your OpenRouter (or OpenAI) API key to the Chat Model node. Swap the model slug in node settings as needed.
7. Slash Command: Activate Workflow 3 first to generate its production webhook URL. Then in your Slack app settings go to Slash Commands → Create New → set command to /resolve → paste the webhook URL → reinstall app to workspace.
8. Activate order: Workflow 1 (KB ingestion) → Workflow 3 (resolve handler) → Workflow 2 (main support flow).

## Requirements
- n8n (self-hosted or cloud)
- WhatsApp Business Cloud API account (Meta Developer App)
- Microsoft 365 / Outlook account
- Pinecone account
- Google Gemini API key
- OpenRouter or OpenAI API key or Any other LLM
- Google Sheets
- Slack workspace with a custom bot app

## Customization
- Edit the system prompt in the AI Support Agent node to match your brand voice, support scope, and escalation rules
- Swap Google Gemini Embeddings for OpenAI Embeddings — just replace the Embeddings node and ensure your Pinecone index dimensions match
- dd more channels (Telegram, Instagram DM, etc.) by normalizing their payloads into the same contact format and feeding them into the Merge node
- Adjust conversation memory window (default: 8 messages) in the Conversation Memory node
- Trigger the resolve webhook from your CRM or helpdesk instead of Slack if preferred

## Additional info
All three workflows must be active simultaneously for the system to function
Handoff state is persisted in Google Sheets and survives n8n restarts or server reboots
Once a contact enters handoff, the AI is completely silent for that contact — no accidental double-responses
Document metadata (filename, uploader name, timestamp) is stored alongside vectors in Pinecone for full traceability
Default chunk settings: 500 tokens / 100 overlap — tune in the Token Splitter node based on your document style



Contact / Support



🔗 n8n Templates: n8n.io/creators/salmanmehboob
💼 LinkedIn: linkedin.com/in/salman-mehboob-pro
📧 Email: salmanmehboob1947@gmail.com
💬 WhatsApp: +92 306 746 6499

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Microsoft Outlook, WhatsApp Business Cloud, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
