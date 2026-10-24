# 🔬 Analyse tender PDFs with LlamaParse, Gemini, Supabase and WhatsApp chat

> ⚡ **944 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow lets you upload a tender/RFT PDF via an n8n form, extracts key fields into Google Sheets using LlamaParse, and makes the document chat-searchable by embedding section chunks with Google Gemini and storing them in Supabase for WhatsApp-based Q&A with Anthropic/DeepSeek.

## How it works
1. Receives a tender PDF when a user submits the n8n form.
2. Generates a normalized document ID from the uploaded filename and sends the PDF to LlamaParse to parse the full text, split it into predefined tender sections, and extract structured tender metadata.
3. Normalizes the extracted fields, calculates days-until-deadline and a bid score/recommendation, and appends or updates a row in a Google Sheets tender tracker.
4. Combines the parsed full text with the section/page mapping, then carves each section into paragraph-aligned text chunks with page references.
5. Creates an embedding for each chunk using the Google Gemini Embeddings API and inserts the chunk text and vectors into a Supabase table for retrieval.
6. Triggers on an incoming WhatsApp message, embeds the user’s question with Google Gemini, runs a Supabase RPC vector search scoped to a single doc_id, and builds a context payload from the top matches.
7. Sends the context and question to Anthropic (DeepSeek model) to generate a strictly context-grounded answer, formats the reply with cited source sections, and sends the response back on WhatsApp.

## Setup
1. Add LlamaParse API credentials and ensure the LlamaParse Platform nodes have access to your account.
2. Add a Google Sheets OAuth2 credential, then select the target spreadsheet and sheet in the tender tracker node (and ensure columns exist for the extracted fields and scoring outputs).
3. Create a Supabase project with pgvector enabled, create a tender_chunks table that matches the inserted fields (including an embedding vector column), and implement the match_tender_chunks RPC used for vector search.
4. Replace YOUR_GEMINI_API_KEY in both Google Gemini embedding HTTP requests and keep outputDimensionality consistent with your Supabase vector size.
5. Add an Anthropic API credential for the answer-generation node and update the system prompt placeholders (for example, your company name and any policy text).
6. Configure WhatsApp Cloud credentials for the WhatsApp Trigger and Send Message nodes, and replace the hardcoded doc_id in the question extraction step (or extend it to select the correct document dynamically).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Supabase, WhatsApp Business Cloud, n8n Form Trigger, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
