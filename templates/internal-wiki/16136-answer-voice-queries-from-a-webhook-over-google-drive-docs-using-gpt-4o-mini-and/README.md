# 📖 Answer voice queries from a webhook over Google Drive docs using GPT-4o-mini and Supabase

> ⚡ **8 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
Placetel AI – RAG Voice Assistant with Google Drive & Supabase

## How it works
1. Runs on a daily schedule at 02:00 or via manual start to reindex documents.
2. Lists files from a specified Google Drive folder and iterates through each file.
3. Downloads each Google Drive file, loads its text content, creates embeddings with OpenAI, and stores the resulting chunks in a Supabase vector table.
4. Receives a question via a POST webhook with a JSON body containing `chatInput`.
5. Generates an answer with GPT-4o-mini by semantically retrieving relevant passages from the Supabase vector store using the same OpenAI embeddings model.
6. Returns the generated, source-cited response to the webhook caller for voice output.

## Setup
1. Add Google Drive OAuth2 credentials and replace `DEINE_ORDNER_ID` in the Drive query with the folder you want to index.
2. Add an OpenAI API credential and ensure the same embeddings model/settings are used for both indexing and querying.
3. Create/configure a Supabase project with a `documents` table and the `match_documents` RPC/query used for vector search, then add your Supabase credentials.
4. Copy the webhook URL from the webhook trigger and configure your calling system to POST `{ "chatInput": "..." }` to it.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, Schedule Trigger, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
