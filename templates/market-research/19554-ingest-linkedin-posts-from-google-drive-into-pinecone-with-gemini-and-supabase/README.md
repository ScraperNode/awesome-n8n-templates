# 📊 Ingest LinkedIn posts from Google Drive into Pinecone with Gemini and Supabase

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow watches a Google Drive folder for new LinkedIn post screenshots or PDFs, extracts the text (including OCR), uses Groq and Google Gemini to extract reusable writing patterns, embeds the results with Gemini embeddings, stores them in a Pinecone index, and logs processed files in Supabase to avoid duplicates.

## How it works
1. Triggers every minute when a new file is created in a specific Google Drive folder.
2. Checks Supabase for an existing ingestion record matching the Google Drive file ID and stops if the file was already processed.
3. Downloads the file from Google Drive and routes processing based on MIME type (PDF vs JPEG image).
4. Extracts text from PDFs directly, or runs Tesseract OCR on images and uses Groq to clean and reconstruct the OCR text.
5. Sends the normalized text to Google Gemini to extract structured writing patterns (hook type, structure, tone, formatting notes, CTA type, and anti-patterns) as JSON.
6. Converts the extracted pattern fields into chunked documents, creates embeddings with Google Gemini, and upserts them into a Pinecone vector index with metadata.
7. Logs the ingestion details (source file ID, file name, and timestamp) back to Supabase so the file is skipped on future runs.

## Setup
1. Connect credentials for Google Drive, Supabase, Groq, Google Gemini (chat + embeddings), and Pinecone.
2. In Google Drive Trigger, select the folder to watch (for example, a /reference-content folder).
3. Create the Supabase table reference_ingestions (and index) as shown in the template notes, and ensure the Supabase nodes point to that table.
4. In Pinecone, create or select the target index (for example, linkedin-reference-content) with dimensions compatible with Gemini embeddings.
5. Ensure the incoming files are PDFs or JPEGs, since the workflow routes only those MIME types.

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, Supabase, Filter, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
