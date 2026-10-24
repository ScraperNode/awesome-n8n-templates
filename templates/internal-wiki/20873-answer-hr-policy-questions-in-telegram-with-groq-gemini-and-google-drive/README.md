# 📖 Answer HR policy questions in Telegram with Groq, Gemini and Google Drive

> ⚡ **0 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow indexes an HR policy PDF from Google Drive into an in-memory vector store using Google Gemini embeddings, then answers employee questions sent via Telegram using a Groq chat model with retrieval-augmented generation.

## How it works
1. Manually runs to download the HR policy PDF from Google Drive.
2. Splits and loads the PDF content, generates embeddings with Google Gemini, and inserts the chunks into an in-memory vector store.
3. Triggers when a new Telegram message is received by your bot.
4. Uses a Groq chat model with per-chat conversation memory and a vector-store search tool to retrieve relevant HR policy passages and generate a grounded response.
5. Sends the generated answer back to the originating Telegram chat.

## Setup
1. Create a Telegram bot with @BotFather and add your bot token as Telegram credentials in n8n.
2. Add Google Drive OAuth credentials and select the HR policy PDF file to download.
3. Add a Google Gemini API key for embeddings and a Groq API key for the chat model.
4. Run the manual “Load knowledge base” trigger once to index the PDF, and re-run it whenever the document changes or n8n restarts (the in-memory store resets).

## Requirements
- • Telegram bot token (from @BotFather)
- • Google Drive account with your HR policy PDF
- • Google Gemini API key (embeddings)
- • Groq API key (chat model)

## Customization
- • Edit the system message in the “HR Policy Agent” node to change the tone, language or word limit.
- • Replace the PDF with any other document, such as an employee handbook, IT FAQ or product documentation.
- • Swap the Groq model for OpenAI, Anthropic or any other chat model node.
- • Replace the in-memory vector store with Pinecone, Qdrant, Supabase or PGVector for persistent production use.

## Additional info
The in-memory vector store is cleared when n8n restarts. Re-run the “Load knowledge base” trigger after a restart, or switch to a persistent vector store. Use the same embedding model for inserting and retrieving documents.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Drive, AI Agent, Simple Memory, Simple Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
