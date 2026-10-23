# 📖 Build a Google Drive internal knowledge base with OpenAI and Pinecone

> ⚡ **636 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## 📊 Description
Every company has documents sitting in Google Drive that nobody reads. HR policies, sales playbooks, product FAQs, financial guidelines — all written once, never found again. This workflow turns all of those documents into a live, searchable AI knowledge base that any team member can query instantly via a simple API call.
Ask it anything. It finds the right document, pulls the exact relevant section, and answers in plain english — with the source cited so you always know where the answer came from. No hallucinations, no guessing, no manual searching.
Built for founders, ops teams, and automation agencies who want company knowledge to be instantly accessible without building a custom RAG system from scratch.

## What This Workflow Does
📂 Reads all Google Docs from your Knowledge Base folder in Google Drive automatically
✂️ Splits each document into semantic chunks with overlap for better context retrieval
🤖 Converts every chunk into vector embeddings using OpenAI text-embedding-3-small
📌 Stores all embeddings in Pinecone with document metadata for fast semantic search
🌐 Accepts any question via webhook — from Slack, a form, or any internal tool
🔍 Searches Pinecone for the 5 most semantically relevant chunks to the question
🧠 Sends retrieved context to GPT-4o which answers using only what's in your documents
📝 Logs every question, answer, source, and confidence score to Google Sheets
🔄 Every Sunday checks Drive for new or updated documents and re-ingests them automatically
📧 Sends a weekly knowledge base digest showing what's current, new, or updated

## Key Benefits
✅ Zero hallucinations — GPT-4o only answers from your actual documents
✅ Always cites the source document so answers are verifiable
✅ Semantic search finds relevant content even if exact words don't match
✅ Knowledge base stays fresh automatically every Sunday
✅ Every Q&A logged to Google Sheets for full audit trail
✅ Works with any Google Docs — just drop them in the folder and run SW1

## How It Works
The workflow runs across 3 sub-workflows — one for ingestion, one for answering, one for maintenance.
SW1 — Document Ingestion Pipeline (Run manually) You point it at your Google Drive Knowledge Base folder. It downloads every Google Doc as plain text, splits each one into 500-character chunks with 100-character overlap so context is preserved across boundaries. Each chunk gets converted into a 1536-dimension vector embedding using OpenAI's text-embedding-3-small model and stored in Pinecone with the document name as metadata. Every ingested document is logged to your Document Registry sheet with the ingestion date. Run this once when setting up, then SW3 handles updates automatically.
SW2 — Question & Answer Agent (Always active via webhook) Someone sends a POST request with a question and their email. The question gets converted to an embedding using the same model used during ingestion. Pinecone finds the 5 most semantically similar chunks — ranked by cosine similarity score. Chunks scoring below 0.3 are filtered out to avoid irrelevant results. The remaining context gets sent to GPT-4o with strict instructions to only answer from what's provided. If the answer isn't in the knowledge base, it says so clearly instead of making something up. The response includes the answer, source document, confidence level, and whether it was found in the knowledge base. Everything is logged to your Q&A Log sheet.
SW3 — Knowledge Base Manager (Every Sunday 11AM) Pulls your current Drive folder contents and compares every document ID against your Document Registry. New documents get flagged for ingestion. Existing documents get checked — if the file was modified after the last ingestion date, it gets re-ingested automatically. You get a weekly digest email showing what's current, what was updated, and what's new. No manual monitoring needed.

## Features
- Manual ingestion trigger for initial setup
- Google Drive folder monitoring for new and updated docs
- Recursive character text splitting with configurable chunk size and overlap
- OpenAI text-embedding-3-small for high quality 1536-dimension embeddings
- Pinecone vector database for fast cosine similarity search
- Relevance score filtering — only chunks above 0.3 score are used
- GPT-4o grounded answering with strict no-hallucination prompt
- Source citation in every answer
- Confidence scoring — high, medium, or low per response
- Full Q&A audit log in Google Sheets
- Weekly automated document registry sync
- Weekly KB digest email with full status report
- Modular 3-stage architecture — easy to extend with Slack or Teams integration

## Requirements
- OpenAI API key (text-embedding-3-small + GPT-4o access)
- Pinecone account — free tier works (index: dimensions 1536, metric cosine)
- Google Drive OAuth2 connection
- Google Sheets OAuth2 connection
- Gmail OAuth2 connection
- A Google Drive folder with your company documents as Google Docs
- A configured Google Sheet with 2 sheets: Q&A Log and Document Registry

## Setup Steps
- Create a Pinecone account at pinecone.io — free tier is enough
- Create a Pinecone index with dimensions 1536 and metric cosine
- Create a Google Drive folder called "Knowledge Base"
- Add your company documents as Google Docs inside that folder
- Copy the Google Sheet template and grab your Sheet ID
- Add all credentials — Pinecone, OpenAI, Google Drive, Google Sheets, Gmail
- Paste your Knowledge Base folder ID into both Google Drive nodes
- Paste your Sheet ID into all Google Sheets nodes
- Test by sending a POST request to the webhook with a question from your docs

## Target Audience
🧠 Founders who want instant answers from company documents without digging through Drive
📋 Ops and HR teams tired of answering the same internal questions repeatedly
💼 Sales teams who need instant access to product, pricing, and competitor information
🤖 Automation agencies building internal AI tools and knowledge systems for clients

## 🔗 Nodes Used

Google Sheets, Webhook, Google Drive, Gmail, Schedule Trigger, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
