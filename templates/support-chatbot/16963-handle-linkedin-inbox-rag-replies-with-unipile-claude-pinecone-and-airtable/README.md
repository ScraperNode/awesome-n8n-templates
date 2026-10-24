# 💬 Handle LinkedIn inbox RAG replies with Unipile, Claude, Pinecone, and Airtable

> ⚡ **992 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Automatically ingest your knowledge base, monitor your LinkedIn company page inbox, and reply to leads and customers with AI-drafted, source-grounded answers. Classifies every message, checks for spam, drafts replies using Claude and Pinecone RAG, and lets you auto-send or review each reply in Airtable.

## How it works
1. A Google Drive trigger watches a folder for new or updated documents, downloading each file automatically as it's added.
2. Each document is split into chunks, embedded, and upserted into a Pinecone vector index, building a searchable company knowledge base.
3. A webhook receives every new LinkedIn message sent to your company page via Unipile, filtering out messages you sent yourself.
4. The last few messages in the conversation are fetched and formatted into a chronological transcript for context.
5. An AI agent classifies the message's intent (lead, support, partnership, recruiting, spam, or other) using shared conversation memory.
6. A second AI agent drafts a reply, searching the Pinecone knowledge base for relevant facts before answering, and saves the draft to Airtable.
7. Depending on a configurable auto-send toggle, the reply is sent immediately via Unipile, or held in Airtable until a human approves it — which triggers a third workflow to send it.

## Setup
1. Connect your Unipile account (LinkedIn company page messaging) and note your DSN/API host for the HTTP Request nodes.
2. Connect Pinecone and create an index sized to match your embedding model's output dimensions (this template uses Google Gemini embeddings).
3. Connect Google Drive and choose the folder that holds your knowledge-base source documents.
4. Connect Airtable and create a base with four tables — Drafts, Spam, KB Log, and Errors (see the sticky notes for exact field names).
5. Connect an LLM provider for the classification and reply-generation agents (this template uses Claude via OpenRouter, but any tool-calling-capable model works).
6. In Unipile's dashboard, create a webhook (event: messaging) pointing at Workflow 2's production URL. In Airtable, add a "Run a script" automation on the Drafts table (trigger: status = approved) that posts to Workflow 3's webhook.

## Requirements
- A Unipile account with a connected LinkedIn company page
- A Pinecone account and index
- A Google Drive account with a folder for source documents
- An Airtable account — note: a paid plan (Plus/Pro/Enterprise) is needed, since Workflow 3's approval trigger relies on Airtable's "Run a script" automation action
- An LLM provider credential for Claude (or another tool-calling-capable model) — this template uses OpenRouter

## Customization
- Toggle the autoSend field on Workflow 2's Config node to send replies automatically instead of requiring human approval in Airtable
- Swap the embedding model or Pinecone index freely, as long as ingestion and retrieval use the same model and dimensions
- Edit the system prompts on "Classify Message" and "Generate RAG Reply" to match your company's tone, categories, or knowledge domains

## Additional info
This is 3 separate workflows meant to run together: a knowledge-base ingestion pipeline, an inbox monitor + RAG reply bot, and a human-approval send workflow
Free-tier LLM models may not reliably support tool-calling or structured JSON output — a paid model is recommended for production use

Contact:
Email: salmanmehboob1947@gmail.com
Linkedin: https://www.linkedin.com/in/salman-mehboob-pro/

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Google Drive, Google Drive Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
