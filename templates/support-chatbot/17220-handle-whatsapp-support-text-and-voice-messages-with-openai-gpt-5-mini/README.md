# 💬 Handle WhatsApp support text and voice messages with OpenAI GPT-5 Mini

> ⚡ **111 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow responds to incoming WhatsApp Business messages, handling both text and voice notes by transcribing audio with OpenAI and replying with an OpenAI chat agent that uses per-contact conversation memory and answers only from the business information you provide.

## How it works
1. Triggers when a new WhatsApp message is received.
2. Routes the incoming message by type, sending text messages directly to the support flow, audio messages to a voice-transcription flow, and other message types to a fallback reply.
3. For voice notes, retrieves the WhatsApp media URL, downloads the audio file, and transcribes it to text with OpenAI.
4. Sends the customer’s text (original or transcribed) to an OpenAI chat agent configured to answer only using your provided business information.
5. Stores and reuses a per-contact conversation history keyed by the sender’s WhatsApp number to maintain context across messages.
6. Sends the agent’s response back to the customer as a WhatsApp text message.

## Setup
1. Connect WhatsApp Business Cloud credentials for both receiving messages (trigger) and sending replies, and ensure your WhatsApp webhook is configured to point to the trigger URL.
2. Add OpenAI credentials for audio transcription and chat completion.
3. In “Your Settings (EDIT ME)”, fill in your business name and allowed business information, set your WhatsApp phone number ID, and set the human handoff email address.

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
