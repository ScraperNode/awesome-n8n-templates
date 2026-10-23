# 💬 Run an English website chatbot with OpenAI GPT-5 and Qdrant

> ⚡ **5 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow exposes a secured webhook that powers an English website chatbot, using OpenAI for intent detection and responses and Qdrant (with optional Cohere reranking) to retrieve relevant website content and return structured JSON search results.

## How it works
1. Receives a POST request on a header-authenticated webhook and normalizes the incoming payload into a chat message and session ID.
2. Uses OpenAI to classify the message intent (smalltalk, search, or reject) and routes the request accordingly.
3. For rejected or out-of-scope requests, returns a fixed safety message as JSON.
4. For smalltalk, uses OpenAI to generate a short English reply and formats it into a simple JSON text response.
5. For knowledge queries, searches a Qdrant vector collection (optionally reranked by Cohere) and compiles the top unique sources into a concise context with titles, URLs, and snippets.
6. Uses an OpenAI-powered agent with a strict JSON schema to produce up to five relevant results (and an optional follow-up question), then parses and cleans the output.
7. Returns the final JSON payload to the original webhook caller.

## Setup
1. Configure the Webhook header authentication credential and deploy/copy the webhook URL into your website or chat client.
2. Add an OpenAI API credential for the intent classifier, smalltalk generator, and answer generation model.
3. Set up a Qdrant instance, create/populate the target collection (for example, `website_knowledge` with URL/title metadata), and add Qdrant API credentials.
4. (Optional) Add a Cohere API credential if you want reranking enabled for Qdrant search results.
5. Review the response JSON shape expected by your frontend (text vs. search_results) and adjust prompts/schema if needed.

## 🔗 Nodes Used

Webhook, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Structured Output Parser, Qdrant Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
