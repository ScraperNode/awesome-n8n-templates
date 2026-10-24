# 📖 Run a Telegram knowledge base bot with OpenRouter, OpenAI, Supabase and Redis

> ⚡ **3 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow runs a Telegram private knowledge-base bot with admin-approved access, answering text or voice questions using an OpenRouter chat model grounded in a Supabase vector knowledge base, and includes a manual Google Docs (Google Drive) to Supabase sync to keep the knowledge base up to date.

## How it works
1. Triggers on incoming Telegram messages and callback queries.
2. Normalizes the Telegram update, routing admin button callbacks to access-decision handling and private user messages to access checking.
3. For admin callbacks from the configured control chat, stores the approved/denied/blocked status in Redis and notifies both the admin and the target user in Telegram.
4. For user messages, reads the user’s access status from Redis and either replies with pending/denied/blocked messages or creates a new pending request, stores it in Redis, and sends an approval request to the admin control chat with inline buttons.
5. For approved users, routes /start and /help to a Telegram help reply, rejects unsupported input, and processes voice messages by downloading the Telegram file and transcribing it with OpenAI.
6. Sends the final question to a LangChain agent using an OpenRouter chat model with Redis chat memory and a Supabase vector-store retrieval tool to generate a grounded Russian answer.
7. Splits long answers into Telegram-safe chunks and sends the response back to the user in Telegram.
8. When manually triggered, lists Google Docs in a specified Google Drive folder, loads and splits each document, generates OpenAI embeddings, and inserts the vectors and metadata into the Supabase documents table.

## Setup
1. Create a Telegram bot, add Telegram credentials in n8n, and replace `REPLACE_WITH_CONTROL_CHAT_ID` with your admin/control chat ID in the normalization step.
2. Set up Redis credentials for storing access decisions/requests and for Redis chat memory used by the assistant.
3. Configure OpenRouter credentials for the chat model and OpenAI credentials for audio transcription and embeddings.
4. Set up Supabase credentials, create the `documents` table and `match_documents` function expected by the Supabase vector store, and confirm metadata fields are supported.
5. Add Google Drive and Google Docs OAuth credentials and replace `REPLACE_WITH_GOOGLE_DRIVE_FOLDER_ID` with the folder containing your knowledge-base Google Docs.
6. Run the manual knowledge sync once to build the initial index, then test the admin approval flow before activating the Telegram bot trigger.

## Requirements
- n8n with AI and LangChain nodes
- A Telegram bot and a private administrator group
- Redis for access control and conversation memory
- A Supabase project with PostgreSQL and the pgvector extension
- OpenRouter and OpenAI API keys
- Google Drive and Google Docs OAuth credentials
- A public HTTPS address for the n8n instance

## Customization
- Replace the OpenRouter model with another supported model.
- Change the system prompt, response language, and fallback behavior.
- Customize Telegram messages, buttons, and access rules.
- Adjust document chunk size, overlap, vector search limits, memory length, and Redis expiration time.
- Extend the knowledge import branch to support PDF, DOCX, websites, Notion, or other sources.

## Additional info
The workflow JSON is sanitized and does not contain API keys, passwords, credential values, personal Telegram IDs, private URLs, or execution data.
Google Docs synchronization is manual and append-only by default. Re-running it can create duplicate document chunks unless existing records are cleared or an upsert strategy is added.
A Telegram bot can use only one active webhook or Telegram Trigger at a time.
Redis conversation memory expires automatically after seven days by default.

## 🔗 Nodes Used

Redis, Telegram, Telegram Trigger, Google Drive, Google Docs, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
