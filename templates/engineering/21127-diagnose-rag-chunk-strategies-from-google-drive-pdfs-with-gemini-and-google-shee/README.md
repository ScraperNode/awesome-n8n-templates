# ⚒️ Diagnose RAG chunk strategies from Google Drive PDFs with Gemini and Google Sheets

> ⚡ **0 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
Benchmark three RAG chunking strategies on your own PDFs: fixed-size, semantic, and parent-document chunking with free Gemini models, a strict LLM judge, and an emailed comparison report.

## How it works
1. Drop your PDFs into a Google Drive folder and run the diagnostics.
2. Three arms chunk your documents three ways in parallel: fixed-size recursive chunking with overlap (the baseline), semantic chunking that cuts where meaning shifts using Gemini embeddings, and parent-document chunking that pairs small precise child chunks with their parent context.
3. Every chunk is embedded with Gemini's free embedding model.
4. Your test questions run against each strategy: each question is embedded, the top matches are found with cosine similarity (hand-rolled in plain Code, fully transparent), and Gemini generates an answer from the retrieved context.
5. A strict LLM judge scores groundedness (are claims supported by the context?) and recall (do expected keywords appear?).
6. Scores merge into a comparison sheet, the winning strategy is crowned by combined score, and you get an emailed report with per-question detail.

## Setup
1. Get a free Gemini API key from aistudio.google.com (free tier: 1,500 requests/day, no credit card).
2. Put your PDFs in a Google Drive folder. Paste the folder ID, API key, and your email into the Workflow Configuration node.
3. Replace the four sample questions in the Test Question Set node with questions your users actually ask, plus keywords a good answer must contain.
4. Connect Google Drive, Google Sheets, and Gmail. Run with the manual trigger.
5. Review the comparison sheet and the emailed report to crown the winning chunking strategy for your documents.

## Requirements
- A free Gemini API key, Google Drive, Google Sheets, and Gmail. That is the entire stack: zero paid services. Works on n8n Cloud and self-hosted.

## Customization
- Add a fourth chunking arm, increase topK, swap the judge rubric weights, point the ingest at a different source (Notion, Confluence, web pages), or promote the winning strategy into a production RAG with Qdrant, Supabase, or Pinecone.

## Additional info
Built for AI engineers, automation builders, founders shipping AI features, and teams evaluating whether RAG will work for their documents. If you have ever argued about chunk sizes in a meeting, this settles it with data.

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Google Drive Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
