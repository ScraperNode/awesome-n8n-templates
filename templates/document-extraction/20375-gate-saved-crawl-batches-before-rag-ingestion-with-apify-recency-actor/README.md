# 🔬 Gate saved crawl batches before RAG ingestion with Apify Recency Actor

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow manually tests a saved crawl batch for recency by sending document capture metadata to an Apify Actor, then either releases the original documents for downstream ingestion or blocks the entire batch and returns diagnostics.

## How it works
1. Runs when triggered manually in n8n.
2. Creates a synthetic “saved crawl batch” (or your provided batch envelope) containing documents plus capture metadata like `crawl.loadedTime`.
3. Validates the batch schema and builds an Apify Actor input containing only record IDs, observed timestamps, and source references.
4. Calls the Apify “Dataset Recency & Evidence Gate” Actor via the Apify API and retrieves the evaluation report.
5. Verifies the HTTP response and validates the report’s policy settings, record alignment, and aggregate pass/fail decision.
6. If the batch passes, outputs each original document item for ingestion along with the gate record ID; if it fails, blocks ingestion and outputs the report summary and per-record results.

## Setup
1. Create an Apify account, subscribe to/use the “Dataset Recency & Evidence Gate” Actor, and generate an Apify API token.
2. In n8n, add an HTTP Header Auth credential for the Apify request (header `Authorization: Bearer <APIFY_TOKEN>`) and select it in the Apify HTTP request step.
3. Replace the demo batch generator with your real batch envelope values (`as_of`, `max_age_seconds`, `dataset_id`, `offset`, and `items` with `crawl.loadedTime`) and connect your downstream ingestion nodes to the passing output.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
