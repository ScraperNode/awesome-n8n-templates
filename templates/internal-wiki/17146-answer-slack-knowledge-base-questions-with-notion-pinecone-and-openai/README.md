# 📖 Answer Slack knowledge base questions with Notion, Pinecone, and OpenAI

> ⚡ **26 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow syncs an internal Notion knowledge base to Pinecone on a daily schedule, then runs a Slack bot that answers questions in a specific channel using Pinecone retrieval and an OpenAI chat model, replying in a thread with citations back to the source Notion pages.

## How it works
1. Runs on a daily schedule to sync your Notion knowledge base into a Pinecone vector index.
2. Fetches all pages from a specified Notion database and then pulls each page’s full block content (including nested blocks).
3. Combines each page’s blocks into a single document and attaches metadata such as the Notion title, URL, and last edited time.
4. Splits each document into overlapping text chunks, generates OpenAI embeddings, and inserts them into Pinecone while clearing and rebuilding the target namespace.
5. Triggers when a new message is posted in the configured Slack channel and ignores bot/system messages to prevent reply loops.
6. Uses an OpenAI-powered agent that always queries Pinecone for relevant chunks (including source metadata) and generates an answer in the user’s language.
7. Posts the response back to Slack as a threaded reply, including cited Notion sources.

## Setup
1. Create a Notion internal integration, connect its token as credentials in n8n, share your knowledge base database with the integration and set the Notion database ID in the Notion database query.
2. Create a Pinecone index (name: `knowledge-base-interna`, dimension: 1536, metric: cosine), add Pinecone API credentials, and ensure the workflow namespace (`kb-digitalcube`) matches your desired target.
3. Add an OpenAI API key for both embedding generation and the chat model, and keep the embedding model consistent between ingestion and query.
4. Create a Slack app with `channels:history` and `chat:write` scopes, enable Event Subscriptions to point to the workflow’s Slack trigger webhook URL, invite the bot to your channel, and set the Slack channel ID and Slack credentials in the Slack nodes.
5. Replace all `REPLACE` credential placeholders, run the ingestion branch once to build the Pinecone namespace, and then activate the workflow.

## Requirements
- Notion account with your documentation in a database (content in page bodies, database shared with your integration)
- Pinecone account (free Starter tier works) with a 1536-dimension cosine index
- OpenAI API key
- Slack workspace where you can create apps
- n8n instance reachable from the internet so Slack can deliver events (n8n Cloud, or self-hosted behind a tunnel)

## Customization
- Swap Pinecone for Qdrant or Supabase/pgvector by replacing the two vector store nodes
- Add Google Drive or PDF sources by duplicating the ingestion branch into the same index — the bot branch needs no changes
- Tune chunk size (1,000/200 worked best for us), topK (5 is the sweet spot) or the sync schedule
- Edit the agent's system prompt, but keep the rule that forbids answering from memory and requires citing sources — it's what makes the bot trustworthy

## 🔗 Nodes Used

Slack, Notion, Schedule Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
