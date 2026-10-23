# 🔬 Verify contract extraction and flag hallucinated fields with Judgment API

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs manually to verify extracted contract terms against the original contract text using Judgment, then routes any suspicious or conflicting fields to a review queue while treating the remaining fields as confirmed.

## How it works
1. Runs when you click “Test workflow” and creates two sample contract extractions from the same source text (one accurate and one with fabricated values).
2. Combines both extraction records into a single stream so they are evaluated side by side.
3. Sends each record to Judgment to evaluate, per field, whether the extracted value is missing from the source text and whether the source states a different value.
4. Reshapes the evaluation output into per-field check results including the field name, check type, extracted value, risk score, and a “confirmed” vs “needs review” verdict.
5. Adds a human-readable explanation for any “needs review” result and routes it to a review queue; otherwise it routes the field as confirmed.

## Setup
1. Install the community node `n8n-nodes-judgment` (Settings → Community Nodes) in a self-hosted n8n instance.
2. Create a Judgment API credential (and set the provider Base URL if needed) and select it in the Judgment evaluation step.
3. Replace the sample “source_text” and extracted fields with your own extraction output, keeping a `source_text` field plus one field per extracted value.
4. Update the Judgment questions to include two checks per field (not-in-source and wrong-value) for every field you want verified.
5. Adjust the risk threshold used to mark results as “needs review” (currently 0.5) to match your tolerance for false positives vs missed fabrications.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
