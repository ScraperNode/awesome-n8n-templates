# 💬 Answer support FAQs with Google Gemini, Supabase, Google Sheets and WhatsApp

> ⚡ **58 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow ingests FAQs from Google Sheets into a Supabase vector table using Google Gemini embeddings, then serves a webhook-based support chatbot that answers only from that FAQ knowledge base and escalates unanswered questions to a human via UltraMsg WhatsApp.

## How it works
1. Runs manually to pull FAQ rows (Question/Answer) from a Google Sheets spreadsheet.
2. Formats each row into a single text document (for example, `Q: … A: …`), generates embeddings with Google Gemini, and inserts the documents into a Supabase vector store table.
3. Receives incoming chat messages via a POST webhook that includes `message` and `sessionId`.
4. Uses a Google Gemini chat model with session-based memory to query the Supabase vector store for the most relevant FAQ matches and generates a reply strictly from the retrieved content.
5. If the agent output indicates escalation to a human, sends the full message content to UltraMsg via an HTTP request to alert a WhatsApp number.
6. Returns a JSON response to the webhook caller with either the FAQ-based answer or a confirmation that a human agent has been notified.

## Setup
1. Add credentials for Google Gemini (PaLM) API, Supabase, and Google Sheets OAuth2.
2. In Supabase, create or select the vector table used for the knowledge base (configured as “FAQs Data Table”).
3. Update the Google Sheets document and sheet selection to point to your FAQ spreadsheet with `Question` and `Answer` columns.
4. Configure the UltraMsg endpoint details (instance URL), token, destination WhatsApp number, and message body to match your WhatsApp routing.
5. Copy the webhook URL from n8n and configure your chat frontend or integration to POST `message` and `sessionId` to it.
6. Execute the manual FAQ ingestion flow at least once to populate Supabase before sending live chat traffic.

## Requirements
- ✅ n8n account (free)
- ✅ Google Sheets (free)
- ✅ Supabase account (free)
- ✅ UltraMsg WhatsApp API (free trial)
- ✅ Google Gemini AI (FREE from AI Studio!)
- ✅ Netlify for hosting widget (free)
- 💡 Google Gemini API is completely FREE
- from aistudio.google.com — no credit card
- needed to get started!
- For long term heavy usage, Gemini paid
- plans start from just $0.00015 per query —
- practically FREE!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, AI Agent, Simple Memory, Supabase Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
