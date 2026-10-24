# 🔧 Build a Placetel RAG voice assistant with Google Drive, Supabase and Groq

> ⚡ **23 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow indexes text files from Google Drive into a Supabase vector store using OpenAI embeddings, then answers Placetel webhook questions with a Groq-hosted Llama model using retrieval-augmented generation.

## How it works
1. Runs a daily schedule at 02:00 or starts manually to reindex documents.
2. Lists files in a specified Google Drive folder and iterates through each file.
3. Downloads each file, loads its text content, generates embeddings with OpenAI, and stores the resulting chunks in a Supabase vector table.
4. Receives a POST request from Placetel with a question in `body.chatInput`.
5. Embeds the question with OpenAI, retrieves the top 3 matching chunks from the Supabase vector store, and composes an answer with Groq (Llama 3.1 8B).
6. Returns the generated answer to the webhook caller for use in voice output.

## Setup
1. Add Google Drive OAuth2 credentials and replace `DEINE_ORDNER_ID` in the Drive query with the folder ID you want to index.
2. Set up Supabase (project, database, and `documents` table) and add Supabase credentials, ensuring the `match_documents` query/function is available.
3. Add an OpenAI API key for both embedding steps and keep the same embedding model/settings for indexing and querying.
4. Add a Groq API key and confirm the selected chat model (e.g., `llama-3.1-8b-instant`) is available in your Groq account.
5. Copy the Placetel webhook URL (`/rag-knowledge-webhook`) and configure the calling system to send `POST { "chatInput": "..." }`.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, Schedule Trigger, Question and Answer Chain, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
