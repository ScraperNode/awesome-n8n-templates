# 💬 Run a RAG support copilot with Claude Sonnet and OpenAI embeddings

> ⚡ **45 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This template ingests internal docs into an in-memory vector knowledge base using OpenAI embeddings, then runs a public support chat powered by Anthropic Claude that answers only from that knowledge and escalates unanswered requests to a Gmail inbox while logging all Q&A to an n8n Data Table.

## How it works
1. Receives knowledge-base entries from an n8n Form trigger with a source title and free-text content.
2. Splits the submitted content into chunks, generates OpenAI embeddings, and stores the vectors in an in-memory vector store keyed as `company_kb`.
3. Exposes a public chat endpoint where customers submit support questions.
4. Uses an Anthropic Claude agent with short-term conversation memory to first search the `company_kb` vector store and respond only using retrieved passages.
5. If the knowledge base does not contain the answer or the user requests a human, the agent sends an escalation email via Gmail with the question and context.
6. Logs each question, the agent’s answer, the session ID, and a timestamp to an n8n Data Table.

## Setup
1. Add credentials for OpenAI (Embeddings) and Anthropic (Claude) and select the correct model in the Claude node.
2. Connect a Gmail OAuth2 credential and set the destination support email address in the escalation email tool.
3. Create or select an n8n Data Table named `support_chat_log` (or update the workflow to use your table).
4. Publish the Form and Chat triggers and share their URLs as needed (use the form internally for ingestion and the chat URL for customers).

## Requirements
- n8n instance with the Data Table feature enabled
- Anthropic API key (Claude) — the agent's reasoning
- OpenAI API key — embeddings for the vector store
- Gmail account connected via OAuth2 — human escalation

## Customization
- Swap the in-memory vector store for Pinecone / Qdrant / Supabase to persist the knowledge base across restarts (production-grade)
- Replace the paste-text form with a file-upload field to ingest PDFs and DOCX
- Add more agent tools: create a ticket in your helpdesk, look up an order, book a call
- Change the escalation channel to Slack, WhatsApp, or a helpdesk instead of email
- Embed the hosted chat on your website, or expose it as a webhook for your own UI

## Additional info
Grounded, not generative-guessing: the agent answers only from your documents and escalates instead of hallucinating — the #1 trust issue buyers have with AI support.
Both flows share the company_kb key, so ingestion and answering stay in sync.
Universal fit: SaaS, e-commerce, clinics, agencies, education, real estate  anyone with an FAQ and an inbox.

## 🔗 Nodes Used

AI Agent, Embeddings OpenAI, Anthropic Chat Model, Simple Memory, Recursive Character Text Splitter, Simple Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
