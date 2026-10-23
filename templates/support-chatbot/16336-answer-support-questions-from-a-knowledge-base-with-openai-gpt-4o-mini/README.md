# 💬 Answer support questions from a knowledge base with OpenAI GPT-4o-mini

> ⚡ **39 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow powers a support chat experience that uses an OpenAI RAG agent with in-memory vector search to answer questions from a knowledge base, and includes a manual ingestion flow that fetches an external FAQ document, splits it into chunks, embeds it with OpenAI, and stores it for retrieval.

## How it works
1. Triggers when a new chat message is received.
2. Uses an OpenAI chat model with conversation memory to generate a support reply while following the system support guidelines.
3. Creates OpenAI embeddings for the user’s query and searches an in-memory vector knowledge base for the top matching snippets.
4. Uses the retrieved knowledge base content as a tool to ground the final answer and returns the response to the chat.
5. When run manually, fetches FAQ content from a specified URL via HTTP.
6. Splits the fetched text into chunks, converts it into documents, generates OpenAI embeddings, and inserts the vectors into the in-memory knowledge base for future queries.

## Setup
1. Add OpenAI credentials for both chat completions (GPT-4o-mini) and embeddings.
2. Update the source URL in the HTTP Request step (currently https://example.com/help-center/faq.txt) to point to your real FAQ/knowledge base content.
3. Run the manual ingestion flow once to populate the in-memory knowledge base before testing the chat trigger.

## 🔗 Nodes Used

HTTP Request, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
