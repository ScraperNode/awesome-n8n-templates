# 🔬 Sync and audit template vectors with Ollama embeddings and Qdrant

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to pull recent community workflow templates from the n8n public catalog API, extract full workflow JSON, sanitize and scan it for potential exposed secrets, generate embeddings with Ollama, and upsert the resulting documents into a Qdrant vector collection for local retrieval.

## How it works
1. Runs on a Schedule Trigger every day at 2:00 AM.
2. Fetches the first two pages of templates from the n8n public template catalog search API and splits the returned workflows list into individual items.
3. Retrieves the full template payload for each item from the n8n workflow template API.
4. Builds a text document from the workflow metadata, sticky note content, system messages, and node configuration, sanitizes non-printable characters, and flags templates that match common API key/secret patterns.
5. Deletes any existing Qdrant points whose metadata.template_id matches the templates being processed to prevent duplicate vectors.
6. Generates embeddings with Ollama (nomic-embed-text:latest) and inserts the documents and metadata into the Qdrant n8n_templates collection.

## Setup
1. Create a Qdrant collection named n8n_templates and add Qdrant credentials in n8n, ensuring the workflow can reach your Qdrant instance (the purge step calls http://qdrant:6333).
2. Set up an Ollama instance with the nomic-embed-text:latest model available and add Ollama credentials in n8n.
3. If your Qdrant host/port or collection name differs, update the purge request URL/body and the Qdrant Vector Store collection selection accordingly.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Default Data Loader, Qdrant Vector Store, Embeddings Ollama

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
