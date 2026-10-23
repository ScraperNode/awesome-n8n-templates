# 🔬 Manage Gemini File Search RAG stores and documents with n8n forms

> ⚡ **7 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow creates and manages Gemini File Search RAG stores via an Agents tool, and ingests documents through an n8n Form that uploads files to Google’s Generative Language API for indexing.

## How it works
1. Receives tool calls from an n8n Chat Agent with fields like action, storeName, documentName, query, and force.
2. Normalizes the tool input and routes the request to the correct operation (list, create, get, query, list documents, delete document, or delete store).
3. Calls the Google Generative Language API to list stores, create a new fileSearchStore, fetch store status, or run a Gemini grounded query against a selected store.
4. Lists documents in a store or deletes a specific document using its documentName when requested.
5. Deletes an entire store only when force is explicitly set, otherwise returns a force-required error message.
6. Separately, an n8n Form trigger accepts file uploads and either creates a new store or targets an existing store, then uploads and imports each file into the Gemini File Search store for indexing.
7. Displays a completion page with the store ID (storeName) to use in the Agents tool for querying and ongoing management.

## Setup
1. Add Google Gemini (Google PaLM / Generative Language API) credentials in n8n with access to the File Search and Gemini models endpoints.
2. Publish the workflow form and use its public URL to ingest documents, pasting an existing fileSearchStores/... ID when adding to an existing store.
3. Add this workflow as a Tool in your n8n Agent, and ensure the agent sends separate fields (action, displayName, storeName, documentName, query, force) rather than embedding JSON in query.
4. Update any environment-specific values such as pageSize limits or the Gemini model name (gemini-2.5-flash) if your project uses different defaults.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
