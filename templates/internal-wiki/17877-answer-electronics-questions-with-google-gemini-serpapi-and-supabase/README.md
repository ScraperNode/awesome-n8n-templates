# 📖 Answer electronics questions with Google Gemini, SerpAPI, and Supabase

> ⚡ **3 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick Overview
This chat-based workflow uses Google Gemini and a Supabase vector store to answer electronic component questions from indexed PDF datasheets, and when information is missing it searches Google via SerpAPI for a public datasheet PDF, downloads it, indexes it, and answers from the updated knowledge base.

## How it works
1. Receives a chat message and starts a Google Gemini-powered agent with conversation memory.
2. Searches a Supabase vector store of embedded datasheet content to retrieve relevant passages for the user’s question.
3. If the retrieved context is insufficient, uses SerpAPI (Google Search) to find a public PDF datasheet URL.
4. Sends the PDF URL to a separate “Update Database” workflow/tool to trigger ingestion.
5. In the ingestion path, downloads the PDF, extracts text, splits it into chunks, generates Google Gemini embeddings, and inserts the chunks into the Supabase “datasheets” vector table.
6. Re-runs retrieval against Supabase and returns an answer in the chat using only the retrieved datasheet information.

## Setup
1. Add Google Gemini (PaLM) API credentials for both the chat model and the embeddings model.
2. Configure Supabase credentials, create the `datasheets` table, enable the vector extension, and implement the `match_documents` RPC used for retrieval.
3. Add your SerpAPI API key in the SerpAPI HTTP request tool parameters.
4. Publish the workflow and configure the “Update Database” tool to point to the target ingestion workflow ID used to download and index datasheet PDFs.
5. If you use this as a chat assistant, copy the chat trigger webhook URL and connect it to your chat entry point (or use n8n’s built-in chat UI).

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, AI Agent, Simple Memory, Token Splitter, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
