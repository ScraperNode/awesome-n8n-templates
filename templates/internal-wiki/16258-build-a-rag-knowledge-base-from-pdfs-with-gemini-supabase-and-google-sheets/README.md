# 📖 Build a RAG knowledge base from PDFs with Gemini, Supabase and Google Sheets

> ⚡ **190 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick Overview
This workflow ingests educational PDF URLs from Google Sheets, extracts and chunks their text, generates embeddings with Google Gemini, and stores them in a Supabase pgvector table for retrieval, while also exposing a public chat webhook that answers questions using Gemini and the same Supabase knowledge base.

## How it works
1. Runs every hour on a schedule and reads rows from a Google Sheets document, keeping only entries where the status is empty.
2. Processes each queued URL one at a time and routes it based on whether it is a seraj-uae.com page or a direct Google Drive file link.
3. For seraj-uae.com URLs, fetches the HTML page to extract the PDF download link (or embedded Google Drive file ID) and the document title.
4. Downloads the PDF from either the source website via HTTP or from Google Drive, waits briefly, and extracts text from the PDF binary.
5. Cleans and validates the extracted text, then splits it into overlapping chunks and generates embeddings using Google Gemini.
6. Inserts the embedded chunks into a Supabase pgvector table with file/title/source metadata and updates the Google Sheets row to “Embedded” or “Not Text Based PDF” if no text is found.
7. Separately, exposes a public n8n Chat webhook that receives student questions and uses Gemini Flash with Supabase vector retrieval to return answers.

## Setup
1. Create a Supabase project with pgvector enabled, create the seraj_documents table, and add the match_seraj_documents function used for vector search.
2. Add Supabase API credentials in n8n and ensure the table name (seraj_documents) and query function name (match_seraj_documents) match your Supabase setup.
3. Add Google Sheets OAuth2 credentials and update the Google Sheet document ID/sheet reference, ensuring columns include source_url, status, and row_number.
4. Add Google Drive OAuth2 credentials for downloading PDFs hosted in Drive.
5. Add a Google Gemini (PaLM) API credential for embeddings and Gemini Flash, then activate the workflow and copy the public chat webhook URL for your website chat widget.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
