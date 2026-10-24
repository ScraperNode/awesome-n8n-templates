# 🎫 Draft grounded Gmail support replies from a Notion KB with Groq and Cohere

> ⚡ **36 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow ingests published Notion knowledge base articles into an in-memory vector store using Cohere embeddings, then monitors a support Gmail inbox and uses Groq to draft grounded reply emails based only on retrieved KB sources, saving the result as a Gmail draft for review.

## How it works
1. Manually runs an ingestion flow that pulls all pages from a Notion database and keeps only articles marked as Published.
2. Fetches each article’s Notion page blocks, assembles them into a single document, splits the text into chunks, and embeds the chunks with Cohere.
3. Clears and loads the resulting embeddings and metadata into an in-memory vector store for retrieval.
4. Triggers when an unread Gmail message arrives matching the support inbox query and normalizes the subject, body, sender, and thread details.
5. Uses Groq to classify the email as a support question, noise, or already resolved, and continues only for real support questions.
6. Embeds the question with Cohere, retrieves and reranks the most relevant KB chunks, and stops if the best match does not meet the configured relevance threshold.
7. Uses Groq to draft a reply using only the retrieved sources and, if an answer is produced, saves a Gmail draft reply that includes a list of the referenced KB articles.

## Setup
1. Add credentials for Notion, Gmail, Groq, and Cohere in n8n.
2. Replace the Notion database ID in the Notion “Get KB Articles” step and ensure your database has fields that map to a status value of “Published” and article title/content.
3. Update the Gmail trigger query (for example, the target support address) and ensure the workflow has permission to create drafts in the mailbox.
4. Run the ingestion trigger once to build the in-memory vector store, and re-run it after n8n restarts or whenever your KB changes.

## 🔗 Nodes Used

Gmail, Notion, Gmail Trigger, Basic LLM Chain, Embeddings Cohere, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
