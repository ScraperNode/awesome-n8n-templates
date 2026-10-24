# 💬 Build a website RAG support chatbot with Firecrawl, Pinecone, and Gemini

> ⚡ **7 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This template indexes a website into Pinecone using Firecrawl, Google Gemini embeddings, and basic HTML cleaning, then exposes a public n8n chat webhook where a Gemini-powered agent answers customer questions by retrieving relevant website chunks from Pinecone.

## How it works
1. Starts an ingestion run when you manually execute the workflow.
2. Looks up the Pinecone index host and clears all vectors in the configured Pinecone namespace to avoid duplicate content.
3. Uses Firecrawl to map the target website and returns up to 100 discovered page URLs.
4. Filters, deduplicates, and normalizes the URLs, then processes them one at a time with a short delay to reduce request bursts.
5. Fetches each page over HTTP, strips HTML/scripts/styles into plain text, and skips pages with too little usable content.
6. Splits remaining text into overlapping chunks, creates Google Gemini embeddings, and stores the vectors with URL metadata in Pinecone.
7. When a chat message is received via webhook, a Gemini agent retrieves the most relevant chunks from Pinecone, uses short windowed memory for context, and returns the final answer.

## Setup
1. Add credentials for Firecrawl, Pinecone, and Google Gemini (PaLM/Gemini) and ensure the same Gemini embedding model is used for both ingestion and retrieval.
2. Create a Pinecone index with a vector dimension that matches your chosen Gemini embedding model, then set YOUR_PINECONE_INDEX and YOUR_PINECONE_NAMESPACE in all Pinecone-related nodes.
3. Replace https://example.com/ with the website root URL you want to crawl, and adjust the Firecrawl URL limit, blocked keyword list, chunking, and delay settings as needed.
4. Review the namespace deletion step carefully and use a dedicated namespace, because each ingestion run deletes all vectors in that namespace before re-indexing.
5. Copy the public chat webhook URL from the chat trigger and embed/configure it in your site or chat client after ingestion completes and retrieval answers look correct.

## 🔗 Nodes Used

HTTP Request, AI Agent, Simple Memory, n8n Form Trigger, Pinecone Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
