# 💬 Debounce and buffer WhatsApp AI replies with Redis and Google Gemini

> ⚡ **15 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow debounces incoming WhatsApp messages, buffers multiple quick-succession texts per sender in Redis, and replies once using a Google Gemini model via an n8n AI Agent, while deduplicating message IDs and preventing parallel replies with a Redis lock.

## How it works
1. Triggers when a new WhatsApp message is received and extracts the sender, message ID, type, text, and a current timestamp.
2. If the message is not text, it sends a WhatsApp reply asking the user to type their message instead.
3. For text messages, it checks Redis for a deduplication key for the WhatsApp message ID and stops if the message was already processed.
4. It appends the text to a per-sender Redis buffer, stores a “last message” timestamp in Redis, then waits 3 seconds to allow additional messages to arrive.
5. After waiting, it re-reads the per-sender “last message” timestamp from Redis and aborts if a newer message arrived during the debounce window.
6. If the message is still the latest, it checks and sets a short-lived per-sender Redis lock, then reads and combines the buffered messages into a single text block and clears the buffer.
7. It sends the combined text to an AI Agent powered by the Google Gemini Chat Model with a structured output parser, sends the generated WhatsApp reply back to the sender, and finally releases the Redis lock.

## Setup
1. Configure WhatsApp Cloud API/OAuth credentials for the WhatsApp Trigger and WhatsApp Send steps, and connect the workflow’s webhook in your WhatsApp app configuration.
2. Add Redis credentials and ensure your Redis instance is reachable, as the workflow uses it for deduplication, buffering, timestamps, and locking.
3. Add Google Gemini (PaLM) API credentials and keep the model name set to `models/gemini-3.1-flash-lite` (or update it to your preferred Gemini chat model).
4. Review and adjust the Redis TTL values (buffer and last message timestamp set to 300 seconds, lock set to 30 seconds) and the debounce wait time (3 seconds) to match your desired “wait before replying” behavior.

## Additional info
"stop whatsapp chatbot from replying multiple times"

"ai bot replies to every single text message"

"how to prevent chatbot from spamming customers"

"whatsapp api sending too many ai replies"

"how to make ai wait before answering whatsapp"

"make chatbot wait for user to finish typing"

"delay whatsapp bot reply until user is done"

"how to group whatsapp messages before ai replies"

"combine multiple whatsapp messages for chatgpt"

"merge user messages before sending to ai"

"n8n make whatsapp wait for multiple messages"

"delay node to group messages n8n"

## 🔗 Nodes Used

Redis, WhatsApp Business Cloud, AI Agent, Structured Output Parser, WhatsApp Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
