# 💬 Reply to Facebook comments using RAG with Google Drive, Supabase, OpenAI and Postgres

> ⚡ **8 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow creates a Facebook Messenger chatbot that answers questions using a Supabase vector knowledge base built from PDFs in Google Drive, using OpenRouter for chat responses, OpenAI embeddings for search, and Postgres for conversation memory while keeping the index synced on file create, update, and delete events.

## How it works
1. Receives Facebook Messenger webhook requests for verification challenges and echoes the `hub_challenge` back to Meta.
2. Receives incoming Messenger messages, extracts the sender/page IDs and message text, and ignores messages sent by the page to itself.
3. Uses a LangChain AI Agent with Postgres chat memory to embed the user query with OpenAI and retrieve relevant passages from a Supabase vector store.
4. Generates a grounded answer with an OpenRouter chat model and sends the reply back to the user via the Facebook Graph API.
5. Triggers when a new file is created in a specified Google Drive folder, downloads the PDF, extracts text, chunks it, generates OpenAI embeddings, and inserts the vectors into Supabase.
6. Triggers when a file is updated in a specified Google Drive folder, deletes matching vectors in Supabase, then re-downloads, re-extracts, re-chunks, re-embeds, and re-indexes the updated document.
7. Triggers when a file appears in a designated Drive “Trash” folder, deletes matching vectors from Supabase, and permanently deletes the file from Google Drive.

## Setup
1. Create a Supabase project with a `documents` table suitable for vector search (pgvector enabled) and add Supabase credentials (project URL and service key) in n8n.
2. Add OpenAI credentials for embeddings and ensure the embedding model matches your Supabase vector dimensions.
3. Add an OpenRouter API credential (or swap in another n8n-supported chat model) and connect it to the agent.
4. Add Postgres credentials and ensure the database is reachable for storing chat sessions keyed by the Messenger sender ID.
5. Connect Google Drive OAuth credentials and update each Google Drive trigger to watch the correct folders for new, updated, and “Trash” files.
6. Add Facebook Graph API credentials (Page access token), configure the webhook URL and verification token in your Meta Developer App, and confirm the workflow uses the correct Page ID and sender ID when sending replies.

## 🔗 Nodes Used

Webhook, Google Drive, Facebook Graph API, Google Drive Trigger, Supabase, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
