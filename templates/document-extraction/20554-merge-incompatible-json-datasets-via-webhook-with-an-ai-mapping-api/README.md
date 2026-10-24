# 🔬 Merge incompatible JSON datasets via webhook with an AI mapping API

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow accepts two JSON datasets via webhook, profiles their schemas, calls an external AI mapping API to infer field correspondences, then transforms and merges the records into a unified dataset while returning mapping confidence scores and an audit report.

## How it works
1. Receives a POST request on a webhook containing Dataset A, Dataset B, and optional mapping hints or a target schema.
2. Validates the input payload and profiles both datasets by extracting field types and sample rows.
3. Sends the schema profiles and samples to an external AI mapping API over HTTP to request suggested source-to-target field mappings.
4. Normalizes the AI response into a clean mapping list with confidence scores, falling back to heuristic field-name matching when the API response is missing or unusable.
5. Generates a set of transformation rules from the mappings and applies them to reshape Dataset A into the target field structure.
6. Merges the transformed Dataset A rows with the original Dataset B rows and compiles a mapping report including statistics and low-confidence mappings.
7. Returns a JSON response to the caller containing the merged dataset, mapping report, and request metadata.

## Setup
1. Configure the webhook endpoint path as needed and copy the production webhook URL into the system that will POST datasetA and datasetB.
2. Replace the AI mapping API URL (currently set to https://httpbin.org/post) with your real mapping/LLM endpoint and adjust timeout and confidence thresholds in the configuration code if needed.
3. Ensure the calling application sends a JSON body with non-empty datasetA and datasetB arrays (and optionally hints, targetSchema, and requestId).

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
