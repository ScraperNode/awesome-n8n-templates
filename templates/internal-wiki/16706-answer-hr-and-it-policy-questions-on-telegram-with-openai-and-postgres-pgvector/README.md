# 📖 Answer HR and IT policy questions on Telegram with OpenAI and Postgres PGVector

> ⚡ **22 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow builds a searchable HR policy knowledge base from a PDF and runs a Telegram helpdesk bot that answers employee questions from that content, handling both text messages and voice notes via OpenAI transcription and retrieval from a Postgres PGVector vector store.

## How it works
1. Manually runs once to download an HR policy PDF over HTTP and extract its text.
2. Splits the extracted policy text into chunks, generates OpenAI embeddings, and inserts the vectors into a Postgres PGVector store.
3. Triggers on new Telegram messages sent to your bot.
4. Routes incoming Telegram updates by type, sending text directly to the assistant, transcribing voice messages with OpenAI, or replying that other formats are unsupported.
5. Uses an OpenAI chat model with Postgres-backed chat memory and a PGVector retrieval tool to answer questions grounded in the stored policy content.
6. Sends the final answer back to the user in Telegram.

## Setup
1. Add an OpenAI API key for embeddings, chat completions, and audio transcription.
2. Set up a Postgres database with the PGVector extension enabled and add the Postgres credentials for both the vector store and chat memory.
3. Create a Telegram bot with BotFather, add the bot token credentials, and enable the Telegram Trigger so it can receive updates.
4. Replace the PDF URL with your own policy/handbook document and run the manual ingestion once to populate the vector store before using the bot.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
