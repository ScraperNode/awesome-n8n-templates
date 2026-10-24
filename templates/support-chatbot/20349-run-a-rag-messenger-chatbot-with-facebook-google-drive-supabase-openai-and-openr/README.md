# 💬 Run a RAG Messenger chatbot with Facebook, Google Drive, Supabase, OpenAI and OpenRouter

> ⚡ **8 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow powers a Facebook Messenger chatbot that batches incoming user messages, answers with an OpenRouter chat model using RAG retrieval from a Supabase vector store, and keeps the knowledge base synced from PDFs in Google Drive (add, update, and delete).

## How it works
1. Receives Facebook Messenger webhook requests (including the initial webhook verification challenge) and ignores messages sent by the page itself.
2. Extracts the sender, page, and message text, then stores each incoming message in an n8n Data Table keyed by the sender ID.
3. Re-checks the sender’s pending messages until the latest message is at least 10 seconds old, then combines all pending messages into a single prompt.
4. Sends the combined prompt to an AI agent backed by an OpenRouter chat model, using Supabase Vector Store retrieval as a tool and Postgres chat memory for conversation context.
5. Posts the agent’s response back to the user through the Facebook Graph API.
6. Triggers on new PDFs in a specified Google Drive folder, downloads and extracts text, chunks the content, generates OpenAI embeddings, and inserts the vectors into a Supabase `documents` table.
7. Triggers on updated PDFs in a specified Google Drive folder, deletes existing vectors matching the file name, then re-downloads, re-extracts, re-chunks, re-embeds, and re-indexes the updated content in Supabase.
8. Triggers when a file appears in a Google Drive Trash folder, deletes matching vectors from Supabase, and then deletes the file from Google Drive.

## Setup
1. Create a Facebook Page and Meta app, configure the Messenger webhook to point to this workflow’s webhook URL, and add Facebook Graph API credentials with permission to send messages.
2. Connect Google Drive OAuth and set the correct folder IDs for the “new file”, “updated file”, and “trash” triggers.
3. Set up Supabase (with pgvector) and a `documents` table, then add Supabase API credentials used for vector upserts and deletes.
4. Add an OpenAI API key for embeddings and an OpenRouter API key for the chat model used by the AI agent.
5. Provide a Postgres database for chat memory and ensure the n8n Data Table named `conversations` exists for temporary message batching storage.

## 🔗 Nodes Used

Webhook, Google Drive, Facebook Graph API, Google Drive Trigger, Supabase, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
