# 💬 Handle WhatsApp HVAC reception with Gemini, Claude, and Meta WhatsApp API

> ⚡ **60 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow acts as a WhatsApp AI receptionist: it receives text, voice notes, and photos via WhatsApp Cloud API, transcribes audio and describes images through OpenRouter, then uses Anthropic Claude with PostgreSQL chat memory to reply, splitting long answers into up to three WhatsApp messages.

## How it works
1. Triggers when a new WhatsApp message is received.
2. Routes the inbound message by type, passing text through, transcribing voice notes via OpenRouter (Gemini), and describing photos via OpenRouter (Claude) while preserving any image caption.
3. Stores the resulting normalized text plus the business phone number in an n8n Data Table inbox.
4. Waits briefly to allow the customer to send multiple rapid messages, then checks whether this run is the newest message for that phone number.
5. If it is the newest, collects all saved lines for that phone number, clears them from the Data Table, and marks the WhatsApp message as read while showing a typing indicator.
6. Sends the merged message to a LangChain agent powered by Anthropic Claude with PostgreSQL chat memory and optional SerpAPI web search and calculator tools.
7. Splits the agent’s reply into up to three short messages and sends them back to the customer via the WhatsApp Cloud API.

## Setup
1. Connect WhatsApp Cloud API credentials (Facebook Graph API header auth) and configure the WhatsApp webhook URL from the trigger in your Meta app.
2. Create an n8n Data Table named “whatsapp inbox” with `phone` (string) and `text` (string) columns, or update the workflow to use your own Data Table ID.
3. Add an OpenRouter API key (HTTP Header Auth) for the transcription and image-description requests.
4. Add Anthropic credentials for the Claude chat model used by the agent.
5. Provide a PostgreSQL connection (for example via Supabase) and ensure the `whatsapp_chat_history` table exists for chat memory storage.
6. (Optional) Add SerpAPI credentials if you want the agent to use web search, and confirm your WhatsApp phone_number_id is available in incoming webhook metadata for sending replies.

## Additional info
i need the title to change to this: AI WhatsApp receptionist with Claude: It read text, voice notes & photos, with memory.

and who is it for section to be this:
Who's it for

Service businesses, agencies and support teams who get customer questions on WhatsApp Business and want an AI receptionist that handles more than plain text. The prompt ships with a demo HVAC company, but the flow works for any business that answers questions and takes bookings over chat.

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, Filter, AI Agent, Anthropic Chat Model, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
