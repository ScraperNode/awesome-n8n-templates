# 💬 Route WhatsApp support requests with Groq, Google Sheets, Gmail, Telegram and AiSensy

> ⚡ **12 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives incoming WhatsApp messages via an n8n webhook, loads an FAQ knowledge base from Google Sheets, and uses Groq (Llama 3.3) to classify intent and generate a reply. It sends the response through the AiSensy API, logs the conversation to Google Sheets, and alerts via Gmail and Telegram.

## How it works
1. Receives a POST request from AiSensy on a WhatsApp webhook when a customer sends a message.
2. Extracts the customer phone, name, message text, and timestamp, and ignores requests missing required fields.
3. Loads FAQ question-and-answer rows from Google Sheets and sends them with the customer message to Groq (Llama 3.3) to classify intent, detect language and urgency, and draft a reply.
4. Parses and validates the model’s JSON output and formats a safe fallback reply if parsing fails.
5. Sends the generated reply back to the customer using the AiSensy WhatsApp API.
6. Sends a Gmail alert when the intent is COMPLAINT and posts a Telegram alert when the intent is ESCALATE.
7. Appends or updates a conversation log row in Google Sheets and returns a 200 OK webhook response.

## Setup
1. Configure AiSensy to send message events to this workflow’s webhook URL (path: `/whatsapp-support`).
2. Add a Groq API credential in n8n and select it in the Groq LLM node.
3. Create a Google Sheets FAQ knowledge base with `question` and `answer` columns, connect Google Sheets credentials, and select the document and sheet in the “Load Knowledge Base” step.
4. Create a Google Sheets conversation log sheet, connect it in the “Log to Sheets” step, and ensure it has columns for timestamp/phone/name/message/intent/urgency/language/reply.
5. Replace `YOUR_AISENSY_API_KEY`, confirm the `support-reply` template exists in AiSensy with one parameter, and set any campaign/template values as needed.
6. Add Gmail OAuth credentials and set the complaint notification recipient email, and add Telegram bot credentials and replace `YOUR_TELEGRAM_CHAT_ID` for escalation alerts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Gmail, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
