# 📖 Answer restaurant voice queries with ElevenLabs, OpenAI, Qdrant, and Google Drive

> ⚡ **44 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow rebuilds a Qdrant-based knowledge base from Google Drive documents and then answers ElevenLabs voice-assistant questions using an OpenAI-powered RAG agent with conversation memory, returning the response via webhook.

## How it works
1. Runs manually to (re)build the knowledge base by creating a Qdrant collection and clearing its existing points.
2. Lists files in a specified Google Drive folder and downloads each document, converting Google Docs to plain text.
3. Splits each document into token-based chunks, loads them as LangChain documents, and generates OpenAI embeddings.
4. Inserts the embedded chunks into the Qdrant collection to create a searchable vector index.
5. Receives an ElevenLabs webhook POST request containing a spoken question in `body.question`.
6. Uses an OpenAI chat model agent with windowed conversation memory and a Qdrant-backed vector search tool to retrieve relevant context and generate an answer.
7. Returns the generated answer to ElevenLabs as the webhook response.

## Setup
1. Configure Qdrant by replacing `QDRANTURL` and `COLLECTION` in the HTTP requests and Qdrant vector store nodes, and add an HTTP header auth credential for your Qdrant API key.
2. Connect Google Drive credentials and set the source folder ID/name in the Google Drive “Get folder” configuration.
3. Add OpenAI credentials for the embeddings nodes and chat model nodes used by the agent and retrieval tool.
4. Copy the production webhook URL from the ElevenLabs listener endpoint (`test_voice_message_elevenlabs`) into your ElevenLabs Conversational AI tool configuration.
5. Run the manual reindex once (and whenever documents change) before enabling the webhook-based Q&A flow.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
