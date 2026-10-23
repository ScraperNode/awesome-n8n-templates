# ⚙️ Probe AISIX model aliases and generate health reports for SRE teams

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick Overview
This workflow runs on demand to list model aliases from an AISIX AI Gateway and sends a small OpenAI-compatible Chat Completions probe to each alias, then returns a consolidated health report that flags rate limits, auth errors, policy blocks, and other unhealthy responses.

## How it works
1. Runs when triggered manually.
2. Sets the AISIX gateway base URL, probe prompt, and a maximum number of model aliases to test.
3. Calls the AISIX `/v1/models` endpoint to fetch the model aliases visible to the configured caller API key.
4. Builds a capped queue of aliases to probe, or returns an attention result if model discovery fails or no aliases are available.
5. Sends one non-streaming Chat Completions request to AISIX `/v1/chat/completions` for each alias.
6. Classifies each probe response as healthy, rate limited, policy blocked, auth failed, or unhealthy and captures latency plus relevant response headers.
7. Aggregates results into an overall health report and outputs it on either a healthy or attention path.

## Setup
1. Create an n8n HTTP Header Auth credential that sets `Authorization: Bearer <your AISIX caller API key>` and select it in both AISIX HTTP Request steps.
2. Update `aisix_base_url`, `probe_prompt`, and `max_models` in the configuration step to match your AISIX gateway and desired probe behavior.
3. Ensure your AISIX instance supports OpenAI-compatible `/v1/models` and `/v1/chat/completions` endpoints and that the caller key can list and call at least one model alias.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
