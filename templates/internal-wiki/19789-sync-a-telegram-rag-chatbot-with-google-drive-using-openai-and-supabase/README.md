# 📖 Sync a Telegram RAG chatbot with Google Drive using OpenAI and Supabase

> ⚡ **50 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow runs a Telegram RAG chatbot that answers questions using PDFs synced from Google Drive into a Supabase vector store, automatically re-indexing when files are added or updated and removing knowledge when files are moved to a trash folder.

## How it works
1. Triggers when a user sends a Telegram message and passes the text to a LangChain AI Agent.
2. The agent uses an OpenRouter chat model, Postgres chat memory, and a Supabase vector store tool (with OpenAI embeddings) to retrieve relevant context and generate an answer.
3. Sends the generated response back to the user in Telegram.
4. Triggers when a new file is created in a watched Google Drive folder, downloads the PDF, extracts its text, chunks it, generates OpenAI embeddings, and inserts the vectors into a Supabase table.
5. Triggers when a file is updated in another watched Google Drive folder, deletes existing Supabase vectors that match the file name, then re-downloads the PDF, re-extracts/chunks it, embeds it with OpenAI, and re-inserts it into Supabase.
6. Triggers when a file appears in a designated Google Drive “trash” folder, deletes matching vectors from Supabase and deletes the file from Google Drive.

## Setup
1. Create a Telegram bot and add a Telegram credential in n8n.
2. Add credentials for Google Drive OAuth2, Supabase, OpenRouter, OpenAI (for embeddings), and Postgres (for chat memory).
3. In Supabase, create the `documents` table configured for vector search (pgvector) and match the table name in the Supabase vector store nodes.
4. Update the Google Drive trigger nodes to point at your source folder(s) (new files, updated files, and trash) and ensure the workflow has permission to download and delete files.
5. If you rely on file-name matching for deletes, ensure your chunk metadata includes `fileName` consistently so updates and removals target the correct vectors.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Drive, Google Drive Trigger, Supabase, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
