# 🔧 Power Placetel voice answers from OneDrive docs with OpenAI and Groq

> ⚡ **7 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow indexes text files from Microsoft OneDrive into a Supabase vector store using OpenAI embeddings, then answers incoming webhook questions with a Groq LLM using retrieval-augmented generation (RAG) and returns the response to the caller.

## How it works
1. Runs on a daily schedule at 02:00 or starts manually to re-index documents.
2. Lists files in a specified OneDrive folder via the Microsoft Graph API and iterates through each file.
3. Downloads each OneDrive file, loads its text content, generates OpenAI embeddings, and stores the resulting chunks in a Supabase vector store table.
4. Receives a POST request on a webhook containing a question in `body.chatInput`.
5. Creates an embedding for the question, retrieves the top matching chunks from Supabase, and uses Groq (Llama 3.1) to generate a structured answer based on the retrieved context.
6. Returns the generated answer as the webhook response.

## Setup
1. Create a Microsoft OneDrive OAuth2 credential and update the Microsoft Graph folder path in the OneDrive listing request URL.
2. Add an OpenAI API key for embeddings and ensure the same embeddings model is used for both indexing and querying.
3. Set up Supabase credentials and a `documents` table (with the configured `match_documents` query/function) for the Supabase vector store.
4. Add a Groq API key and confirm the Groq model selection and prompt content match your voice-assistant use case.
5. Copy the webhook URL and configure the calling system to send POST requests with a JSON body like `{ "chatInput": "..." }`.

## 🔗 Nodes Used

HTTP Request, Webhook, Microsoft OneDrive, Schedule Trigger, Question and Answer Chain, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
