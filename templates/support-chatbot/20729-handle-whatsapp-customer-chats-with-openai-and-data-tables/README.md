# 💬 Handle WhatsApp customer chats with OpenAI and Data Tables

> ⚡ **42 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow creates Data Tables for message logging and FAQ, then runs a WhatsApp Cloud API assistant that can read text, voice notes, images, and PDFs, uses OpenAI to respond with conversation memory, and alerts via Telegram when failures occur.

## How it works
1. Runs when a new WhatsApp Cloud API message is received, ignoring delivery/read status updates.
2. Normalizes the webhook payload into one item per customer message, skips old or unsupported message types, deduplicates by message ID using n8n Data Tables, and logs the raw message.
3. If the message contains audio, an image, or a document, it fetches the WhatsApp media URL, downloads the file, and uses OpenAI and PDF text extraction to convert it into readable text (or records an explanation if the file is unsupported or too large).
4. Saves the cleaned message content to the messages Data Table and waits briefly to buffer multiple rapid-fire messages from the same customer.
5. Loads the customer’s recent conversation history from the messages Data Table, marks the latest messages as answered, and builds a prompt that includes both history and the new combined customer input.
6. Uses an OpenAI chat model agent with a Data Tables “Business FAQ” tool to generate a WhatsApp-style reply grounded in your FAQ and business info.
7. Formats and splits the reply to fit WhatsApp limits, sends it back via the WhatsApp Cloud API, stores the assistant response in the messages Data Table, and on errors sends a fallback WhatsApp reply and a Telegram alert.

## Setup
1. Configure WhatsApp Cloud API credentials in n8n (permanent Meta system user token recommended) and activate the WhatsApp Trigger webhook in your Meta app.
2. Add an OpenAI API key credential for both the chat model and media handling (transcription and image analysis).
3. Run the manual setup trigger once to create the `whatsapp_agent_messages` and `whatsapp_agent_faq` n8n Data Tables, then populate the FAQ table with your question/answer rows.
4. Add a Telegram bot credential (optional) and set your `telegramChatId`, then update the Configuration values (business name/info, buffer time, memory length, and file limits) to match your environment.

## Requirements
- Meta WhatsApp Cloud API app with a phone number (WhatsApp Trigger credential: app ID and app secret)
- WhatsApp API credential with a permanent System User access token
- OpenAI API key (gpt-5.4-mini for replies, gpt-4.1-mini for images, Whisper for voice notes)
- n8n version with Data Tables (the setup trigger creates both tables)
- Optional: Telegram bot and chat ID for error alerts

## Customization
- Write your business details in Configuration and add your questions and answers to the whatsapp_agent_faq Data Table
- Change bufferSeconds to wait longer or shorter for follow-up messages before replying
- Change memoryMessages to give the agent more or less conversation history
- Change maxFileSizeMB and maxDocumentCharacters to control which files are read
- Swap the OpenAI chat model for Gemini, Claude or any other chat model
- Add tools to the agent, such as calendar booking, order lookup or a CRM
- Replace the Telegram alert with Slack, Gmail or Microsoft Teams

## Additional info
This workflow runs entirely on the WhatsApp Cloud API, OpenAI and n8n Data Tables, with no Redis, Postgres or vector database. Delivery and read receipts are filtered out in the trigger, so they never start an execution. Repeated webhooks are skipped by message ID, and messages older than 15 minutes after downtime are ignored. A burst of messages gets one combined reply, because only the run with the newest message answers. Media is downloaded right away, before WhatsApp links expire. Files that are too large or not supported are explained to the customer instead of causing an error. Conversation memory is stored per phone number, so it survives restarts and works in queue mode. The phone number ID is read from each incoming message, so nothing is hardcoded. If the AI or the WhatsApp send fails, the customer gets a fallback message and the owner gets a Telegram alert.

## 🔗 Nodes Used

HTTP Request, Telegram, WhatsApp Business Cloud, AI Agent, OpenAI Chat Model, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
