# 💬 Answer support chat questions from uploaded documents with OpenAI

> ⚡ **22 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow lets you upload PDF/CSV/TXT documents into an in-memory vector store and exposes a header-authenticated webhook that answers support questions using OpenAI chat models, optionally retrieving facts from the uploaded documents while keeping short session-based conversation memory.

## How it works
1. Receives uploaded PDF, CSV, or TXT files via an n8n form and replaces the current in-memory knowledge base with the new content.
2. Splits the uploaded files into chunks, generates embeddings with OpenAI, and stores the vectors in an in-memory vector store.
3. Receives a POST request on a header-authenticated webhook containing a user message and a session_id.
4. Uses an OpenAI-based support agent with a system prompt and 15-message conversation memory to answer directly when possible.
5. When needed, calls a retrieval agent that searches the in-memory vector store for relevant facts and returns only sourced information.
6. Formats the agent’s final output as plain text and returns it in the webhook response.

## Setup
1. Add OpenAI credentials for the embeddings node and both OpenAI chat model nodes.
2. Create an HTTP Header Auth credential for the webhook and configure your chat client to send the same header and secret.
3. Update the support agent system prompt placeholders (company name, website, contact details, hours, services, and locations).
4. Enable the document upload form, open its form URL, and upload your PDFs/CSVs/TXTs to populate the knowledge base.
5. Send POST requests to the webhook path `/support-chat-bot` with a JSON body containing `message` and `session_id`.

## 🔗 Nodes Used

Webhook, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory, Simple Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
