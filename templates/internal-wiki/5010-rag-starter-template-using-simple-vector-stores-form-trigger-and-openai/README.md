# 📖 RAG Starter Template using Simple Vector Stores, Form trigger and OpenAI

> ⚡ **93,496 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This template quickly shows how to use RAG in n8n.

## Who is this for?
This template is for everyone who wants to start giving knowledge to their Agents through RAG.

## Requirements
Have a PDF with custom knowledge that you want to provide to your agent.

## Setup
No setup required. Just hit `Execute Workflow`, upload your knowledge document and then start chatting.

## How to customize this to your needs
1. Add custom instructions to your Agent by changing the prompts in it.
2. Add a different way to load in knowledge to your vector store, e.g. by looking at some Google Drive files or loading knowledge from a table.
2. Exchange the `Simple Vector Store` nodes with your own vector store tools ready for production.
3. Add a more sophisticated way to rank files found in the vector store.

For more information read our [docs on RAG in n8n](https://docs.n8n.io/advanced-ai/rag-in-n8n/).

## 🔗 Nodes Used

AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Vector Store, n8n Form Trigger, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
