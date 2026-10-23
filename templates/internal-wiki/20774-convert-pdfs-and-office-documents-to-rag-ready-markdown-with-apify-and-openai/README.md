# 📖 Convert PDFs and Office documents to RAG-ready Markdown with Apify and OpenAI

> ⚡ **17 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
Paste document links into a form, convert them into Markdown chunks with page numbers using the Apify Document to Markdown Actor, store them with OpenAI embeddings, and chat with an AI agent that answers only from your files and cites the title and page.

## How it works
1. Add documents is a form where you paste links to PDF, DOCX, PPTX, XLSX, HTML, EPUB or image files, one per line.
2. Configure turns the pasted text into a list of URLs and sets the chunk size and overlap.
3. Convert to Markdown runs the Apify Document to Markdown Actor. It keeps headings and tables (also borderless PDF tables), reads scanned pages with OCR and returns heading-aware chunks with page numbers.
4. One item per chunk keeps each chunk's text with its source URL, title, page and heading. Files that fail are logged and skipped.
5. Store chunks embeds each chunk with OpenAI and saves it in the Simple Vector Store with that metadata.
6. Chat with your documents opens a chat. The AI agent searches the same store with a retrieval tool, remembers the last 10 messages, answers only from the passages it finds and cites them as (title, p. N).

## Setup
1. Create a free Apify account and copy your API token (Apify Console > Settings > API & Integrations).
2. In Convert to Markdown, create an HTTP Header Auth credential: name `Authorization`, value `Bearer YOUR_APIFY_TOKEN`.
3. Add your OpenAI credential to Embeddings for storing, Embeddings for search and OpenAI chat model.
4. Click Execute workflow to open the form, paste a few file links and submit.
5. When the run finishes, click Open chat and ask a question about your documents.

## Requirements
- An Apify account: $2 per 1,000 pages, $5 per 1,000 OCR pages.
- An OpenAI API key. Embeddings cost a few cents per 1,000 pages; the chat uses gpt-4.1-mini.
- Files reachable by URL: public links or pre-signed S3, GCS, Drive or Dropbox download links.

## Customization
- The Simple Vector Store lives in n8n's memory and is cleared on restart. For production, swap both vector store nodes for Pinecone, Qdrant, Supabase or Postgres (PGVector) with the same embeddings.
- Feed files from Google Drive, Dropbox or S3 with pre-signed links instead of the form.
- Change the chunk size in Configure. Keep chunk size plus overlap under 1,000 characters, or the loader splits the chunks again.

## 🔗 Nodes Used

HTTP Request, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory, Simple Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
