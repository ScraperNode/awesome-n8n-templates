# 📖 Answer document questions via webhook with Anthropic Claude

> ⚡ **0 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick Overview
This workflow exposes a webhook for document Q&A by chunking pasted docs, retrieving the most relevant sections via keyword scoring, and sending the selected excerpts to Anthropic Claude to generate a grounded, cited answer returned as JSON.

## How it works
1. Receives a POST webhook request containing a JSON question.
2. Splits the embedded documents into sections by `##` headings and extracts the question text from the request.
3. Scores all sections by keyword overlap with the question and keeps the top-matching excerpts.
4. Sends the question plus the retrieved excerpts to the Anthropic Messages API (Claude) with instructions to answer only from the provided text and cite each claim.
5. Extracts the returned answer, adds the selected source section names, and responds to the webhook caller with `{ answer, sources }`.

## Setup
1. Paste your own documents into the `DOCS` array in the “Load and Chunk Docs” code step, using `##` headings to define citeable sections.
2. Create an Anthropic API key and configure the HTTP Header Auth credential for the Claude request (x-api-key) with `anthropic-version: 2023-06-01`.
3. Activate the workflow, copy the production webhook URL for `/ask-your-docs`, and POST a body like `{ "question": "..." }` from your app or API client.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
