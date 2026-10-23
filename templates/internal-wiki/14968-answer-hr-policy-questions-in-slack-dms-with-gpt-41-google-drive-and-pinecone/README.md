# 📖 Answer HR policy questions in Slack DMs with GPT-4.1, Google Drive and Pinecone

> ⚡ **44 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This template gives your HR or operations team an AI-powered Slack bot that answers employee questions about internal policies — directly in DM, available to everyone in the workspace, with no per-user setup required.

Employees simply send a direct message to the bot. It searches your Google Drive HR documents using RAG (Retrieval-Augmented Generation) via Pinecone, and replies in the same thread using GPT-4.1 — based strictly on your documents, not general knowledge.

**Who this is for**
HR, operations, and IT teams who want to reduce repetitive policy questions (leave, expenses, remote work, etc.) without building a custom chatbot from scratch.

**What's included**
This template contains two workflows on a single canvas:

1. **HR Document Indexer** — Runs daily at 3:00 AM. Indexes all documents in a specified Google Drive folder into Pinecone automatically.
2. **HR QA Bot** — Listens for Slack DMs workspace-wide. Filters out bot messages to prevent infinite loops, retrieves relevant document chunks, generates an answer, and replies in-thread.

A built-in RAG quality evaluator automatically scores every response (faithfulness & answer relevancy) and logs results to Google Sheets for continuous quality monitoring.

**Key features**
- Works for the entire Slack workspace with a single setup — no per-user configuration
- Strictly document-grounded answers — the bot will not hallucinate outside your documents
- Infinite loop prevention via bot_id filtering
- Automatic daily re-indexing with duplicate prevention (namespace clear before upsert)
- Built-in answer quality logging to Google Sheets

**Prerequisites**
- Google Drive folder with HR documents (txt, pdf, docx)
- Pinecone account (index: dimension 1536, metric cosine)
- OpenAI API key
- Slack App with DM permissions (setup guide included in the workflow)
- Google Sheets (copy link provided in the workflow)

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Schedule Trigger, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
