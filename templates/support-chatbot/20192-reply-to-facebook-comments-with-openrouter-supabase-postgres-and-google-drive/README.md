# 💬 Reply to Facebook comments with OpenRouter, Supabase, Postgres and Google Drive

> ⚡ **50 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow auto-replies to Facebook Page comments using an OpenRouter-powered AI Agent with Postgres chat memory and a Supabase vector knowledge base, while keeping that knowledge base synced from PDFs in Google Drive (new, updated, and deleted files).

## How it works
1. Receives Meta webhook requests and returns the `hub.challenge` value to complete Facebook webhook verification when required.
2. Extracts the incoming Facebook comment details, ignores non-comment events, and skips comments authored by the Page itself to prevent reply loops.
3. Fetches the original Facebook post message via the Facebook Graph API to provide context for the reply.
4. Uses an AI Agent backed by an OpenRouter chat model, Postgres chat memory (per post and user), and a Supabase vector-store retrieval tool to draft a concise response.
5. Posts the AI-generated text back to Facebook as a reply to the specific comment via the Facebook Graph API.
6. Monitors Google Drive folders for PDF creations, updates, and “trash” events, then extracts text, generates OpenAI embeddings, and inserts or deletes matching vectors in Supabase to keep the knowledge base in sync.

## Setup
1. Create and connect Facebook Graph API credentials, subscribe your Facebook App/Page to the webhook, and configure Meta to call this workflow’s webhook URL.
2. Add an OpenRouter API credential and select the model you want the AI Agent to use.
3. Add Postgres credentials and ensure the database is reachable for storing chat history sessions.
4. Add Supabase credentials, create a `documents` table for vector storage, and ensure the vector store configuration matches your embeddings.
5. Add Google Drive OAuth credentials and update the folder IDs to the Drive folders you want to watch for new PDFs, updated PDFs, and trashed files.

## 🔗 Nodes Used

Webhook, Google Drive, Facebook Graph API, Google Drive Trigger, Supabase, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
