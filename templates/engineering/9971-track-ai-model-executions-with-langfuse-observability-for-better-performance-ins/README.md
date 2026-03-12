# ⚒️ Track AI model executions with LangFuse observability for better performance insights

> ⚡ **139 views** · ⚒️ [Engineering](../)

## Description

## About this template
This template is to demonstrate how to  trace the observations per execution ID in Langfuse via ingestion API.

## Good to know
* Endpoint: `https://cloud.langfuse.com/api/public/ingestion`
* Auth is a `Generic Credential Type` with a `Basic Auth`: `username` = `you_public_key`, `password` = `your_secret_key`.

## How it works
* **Trigger**: the workflow is executed by another workflow after an AI run finishes (input parameter `execution_id`).

* **Remove duplicates**
Ensures we only process each `execution_id` once (optional but recommended).

* **Wait to get execution data**
Delay (60-80 secs) so totals and per-step metrics are available.

* **Get execution**
Fetches workflow metadata and token totals.

* **Code: structure execution data**
Normalizes your run into an array of `perModelRuns` with model, tokens, latency, and text previews.

* **Split Out** → **Loop Over Items**
Iterates each run step.

* **Code: prepare JSON for Langfuse**
  Builds a batch with:
    * trace-create (stable id trace-&lt;executionId&gt;, grouped into session-&lt;workflowId&gt;) 
    * generation-create (model, input/output, usage, timings from latency)


* **HTTP Request to Langfuse**
Posts the batch. Optional short Wait between sends.

## Requirements
1. Langfuse Cloud project and API keys
2. n8n instance with the HTTP node

## Customizing
1. Add span-create and set `parentObservationId` on the generation to nest under spans.
2. Add scores or feedback later via score-create.
3. Replace `sessionId` strategy (per workflow, per user, etc.). If some steps don’t produce tokens, compute and set usage yourself before sending.

## 🔗 Nodes Used

HTTP Request, n8n, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
