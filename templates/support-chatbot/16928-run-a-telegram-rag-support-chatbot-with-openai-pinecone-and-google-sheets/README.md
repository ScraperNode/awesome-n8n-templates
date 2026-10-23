# 💬 Run a Telegram RAG support chatbot with OpenAI, Pinecone, and Google Sheets

> ⚡ **75 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow turns a Telegram bot into a multi-modal support chatbot that accepts text, voice, images, and PDFs, converts them to text, retrieves relevant knowledge from Pinecone using OpenAI embeddings, generates a grounded answer with OpenAI Chat Completions, and logs each conversation to Google Sheets.

## How it works
1. Triggers when a new message is received by your Telegram bot.
2. Detects whether the message is text, a voice note, a photo, a PDF document, or an admin-only /ingest command, and extracts the needed user and file identifiers.
3. For voice, image, and PDF inputs, downloads the file from Telegram and converts it into text using OpenAI Whisper, OpenAI Vision, or PDF text extraction.
4. Builds a single query text from the normalized input and creates an embedding with the OpenAI Embeddings API.
5. Queries Pinecone for the top 3 most relevant knowledge base chunks and assembles them into a context block.
6. Sends the query and retrieved context to the OpenAI Chat Completions API to generate an answer constrained to the provided knowledge.
7. Sends the reply back to the user in Telegram and appends a conversation log row (including session ID and chunk count) to Google Sheets.

## Setup
1. Create a Telegram bot with BotFather, add a Telegram credential in n8n, and replace YOUR_TELEGRAM_BOT_TOKEN in the Telegram file download URLs.
2. Add an OpenAI API credential for Whisper transcription, image analysis (gpt-4o-mini), embeddings (text-embedding-ada-002), and chat completions.
3. Create a Pinecone index (1536 dimensions, cosine) and update YOUR_PINECONE_API_KEY and YOUR_PINECONE_INDEX_HOST (and ensure the namespace support-kb exists and is populated).
4. Create a Google Sheet with a Conversations tab and the required headers, add Google Sheets OAuth credentials, and set YOUR_CONVERSATION_LOG_SHEET_ID.
5. Replace YOUR_TELEGRAM_ADMIN_USER_ID to control who can use the /ingest command acknowledgment.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
