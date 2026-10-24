# ⚒️ Monitor RAG answer quality daily with OpenAI, data tables and Telegram

> ⚡ **2 views** · ⚒️ [Engineering](../)

## Description

## Quick Overview
This workflow runs daily to evaluate a RAG-style support bot using OpenAI for embeddings, answer generation, and judging, stores run metrics in n8n Data Tables, and sends a Telegram alert when retrieval accuracy or answer quality drops.

## How it works
1. Runs on a daily schedule (or manually) and sets monitoring thresholds like top-K retrieval size, minimum quality scores, and allowed pass-rate drop.
2. Loads sample help center articles, generates OpenAI embeddings, and indexes the documents into an in-memory vector store.
3. Iterates through a golden test set of questions, retrieves relevant context from the vector store, and generates an answer with an OpenAI chat model that must stay grounded in the retrieved text.
4. Uses a second OpenAI chat model as a judge to score groundedness, correctness, and whether the bot properly abstains on out-of-scope questions.
5. Aggregates results into run-level metrics (pass rate, retrieval hit rate, average scores, abstention rate, and failing cases).
6. Saves the run summary to an n8n Data Table, compares it to the previous run, and sends a Telegram message if the status is marked as degraded.

## Setup
1. Add an OpenAI credential for the embeddings nodes and both OpenAI chat models used for answering and judging.
2. Create or select a Telegram credential and set your Telegram chat ID in the monitor settings (or remove the Telegram alert step).
3. Ensure n8n Data Tables are available in your instance and keep the table name `rag_quality_runs` or update it consistently across the workflow.
4. (Optional) Replace the sample documents and golden test set with your own content, keeping `expectedSource` aligned with the document `source` metadata.

## 🔗 Nodes Used

Telegram, Schedule Trigger, Basic LLM Chain, Embeddings OpenAI, OpenAI Chat Model, Simple Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
