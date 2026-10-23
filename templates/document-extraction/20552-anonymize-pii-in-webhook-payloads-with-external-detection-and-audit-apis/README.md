# 🔬 Anonymize PII in webhook payloads with external detection and audit APIs

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow accepts a POST request, detects potential PII via an external HTTP API, anonymizes high-risk fields, forwards the anonymized payload to a downstream endpoint, and returns the cleaned data with an audit summary.

## How it works
1. Receives business data in a POST request via an n8n webhook.
2. Validates the request, generates a request ID, and extracts likely PII candidate fields (including one-level nested fields).
3. Waits briefly, then calls an external PII detection HTTP endpoint with the extracted candidates.
4. Interprets the detection response (and falls back to regex heuristics) to assign a PII type and risk score per field.
5. Waits briefly, then anonymizes fields above the risk threshold by hashing, masking, or redacting values based on type.
6. Waits briefly, then posts the anonymized payload and change count to a downstream HTTP endpoint for logging or further processing.
7. Builds an audit record and returns a JSON response to the webhook caller with the anonymized data, audit summary, and an HTTP status indicating success or detection failure.

## Setup
1. Configure the webhook path (default: `/pii-anonymize`) and copy the production webhook URL into the system that will send the incoming requests.
2. Replace the placeholder detection and downstream URLs (currently `https://httpbin.org/post`) with your real PII detection API and audit/logging endpoint.
3. If your detection or downstream endpoints require authentication, add the required headers (for example, an API key or bearer token) to the two HTTP Request steps.
4. Update the anonymization settings in the code (especially `hashSalt`, `piiCandidates`, and `redactWith`) to match your data model and security requirements.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
