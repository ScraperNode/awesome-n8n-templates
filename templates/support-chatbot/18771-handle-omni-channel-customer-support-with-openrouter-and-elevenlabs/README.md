# 💬 Handle omni-channel customer support with OpenRouter and ElevenLabs

> ⚡ **7 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow provides an AI customer support assistant for both text chat and voice messages, using OpenRouter for responses, ElevenLabs for speech-to-text and text-to-speech, n8n Data Tables for conversation logging, and SMTP email for human handoff when escalation is required.

## How it works
1. Triggers when a customer sends a text message via the n8n Chat Trigger or posts a voice request to a webhook endpoint.
2. For voice requests, sends the uploaded audio to ElevenLabs Speech-to-Text and normalizes both text and voice inputs into a shared format with a session ID.
3. Sends the customer message plus your company info, FAQs, and business rules to an AI agent powered by an OpenRouter chat model with short-term conversation memory.
4. Checks the AI output for an escalation marker and, if present, replaces the reply with a predefined handoff message and flags the conversation as needing a human.
5. Logs the customer message, AI reply, session ID, timestamp, and handoff flag to an n8n Data Table.
6. If human handoff is needed and enabled, emails the support address via SMTP with the conversation details, then prepares the final customer reply.
7. Returns the reply to the customer as text, or (for voice requests) converts it to audio with ElevenLabs Text-to-Speech when voice output is enabled and responds with an MP3.

## Setup
1. Add an OpenRouter API credential and select an appropriate chat model in the OpenRouter chat model node.
2. Add an ElevenLabs API credential, set your ElevenLabs Voice ID in the workflow configuration, and (if using voice) configure your client to POST audio as multipart form-data with the binary field named "audio" to the voice webhook URL.
3. Add an SMTP credential and set the support email address in the workflow configuration so the handoff email has a valid to/from address.
4. Create an n8n Data Table (for example, "ai_support_logs") with the required columns and select it in the conversation logging step.
5. Update the company name, description, services, business hours, FAQs, and toggles for human handoff and voice output in the workflow configuration before activating.

## Requirements
- OpenRouter API account and API key
- ElevenLabs API account and API key
- SMTP email account for human handoff notifications
- n8n Data Table for conversation logs

## Customization
- Replace demo company information with your business details
- Customize FAQs, services, business hours, and support email
- Select your preferred OpenRouter AI model
- Configure ElevenLabs Voice ID and enable/disable voice or human handoff features

## Additional info
This workflow is designed as a reusable AI customer support template. Before production use, replace all demo company information and placeholder values, configure the required credentials, select the conversation logging Data Table, and test both text and voice paths. Voice support and automated human handoff can be enabled or disabled based on your use case.

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, AI Agent, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
