# ⚡ Save, search, and summarize Telegram links with Google Sheets and Supabase

> ⚡ **25 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow turns a Telegram bot into a “second brain” link library by saving shared URLs to Google Sheets, generating titles/summaries/categories with Google Gemini, and indexing full-page content in Supabase (pgvector) for semantic search.

## How it works
1. Triggers when a new Telegram message arrives, supports /clear to delete the per-chat memory, and sends a short usage guide if the message has no text.
2. Uses a Google Gemini chat agent with memory to decide whether the message contains URLs to save or a question to answer from the library.
3. For each URL, calls a protected n8n webhook that normalizes the URL, fetches page text via Jina Reader (r.jina.ai), and stops with a “not saved” response if the page is unreadable.
4. Looks up the normalized URL in a Google Sheets “Links” tab to avoid duplicates, then uses an LLM to generate a concise title, summary, and an existing-or-new category.
5. Upserts the card into Google Sheets (tracking notes, timestamps, and times saved), deletes any older Supabase vectors for that card, and re-embeds and inserts the latest page content into Supabase for RAG search.
6. For questions, searches either Google Sheets for structured library data or Supabase vectors for semantic content matches, then replies in Telegram with the results.

## Setup
1. Create and connect credentials for Telegram Bot API, Google Sheets OAuth2, Google Gemini (PaLM) API, Supabase, and one HTTP Header Auth credential shared by both the save-link webhook and the agent’s save_link tool.
2. Create a Supabase project and run the provided SQL to create the pgvector-enabled documents table and match_documents function with 3072 dimensions (to match Gemini embeddings).
3. Run the one-time setup to create the “Second Brain - Link Library” Google Sheets spreadsheet, then paste the new Spreadsheet ID into all nodes that reference the document (Find This Link, Read All Cards, Save to Library, and search_library).
4. Update the save_link tool URL to your n8n instance domain (https://YOUR-DOMAIN/webhook/second-brain-save-link) and ensure the webhook authentication header name/value match on both sides.

## Requirements
- Telegram Bot: A Telegram bot token to receive messages and reply.
- Google Sheets: A Google Sheets OAuth2 credential — the library and source of truth for saved cards.
- AI Model & Embeddings: An AI chat model plus Google Gemini embeddings (or your own equivalent).
- Supabase: A Supabase project for vector storage (free tier is fine).
- Jina Reader: r.jina.ai for reading page content — free, no API key required (works better with an API key).

## Customization
- Swap Storage: Replace Google Sheets with Notion or any wiki — storage is isolated inside the Save Link path, so you change only those nodes while the agent and tools stay untouched.
- Add Doorways: Feed the same agent from email, Slack, or voice by adding another trigger, with each caller passing its own source.
- Tune the Pipeline: Adjust the Librarian prompt (summary style, category rules), the model nodes (any OpenAI-compatible router), or the RAG settings (chunk size, topK).

## Additional info
Send the same link twice and the card is updated rather than duplicated; if a page can't be read, nothing is filed and the bot asks you to retry.

### Need help?
If you're facing any issues using this workflow, [join the community discussion on the n8n forum](https://community.n8n.io/t/second-brain-on-telegram-save-and-search-your-links-google-sheets-supabase-rag/304330).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Telegram Trigger, Supabase

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
