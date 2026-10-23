# ⚙️ Triage and retry failed workflow executions with Anthropic, Jira and OpenTelemetry

> ⚡ **34 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow triggers on n8n execution errors, uses Anthropic (Claude) to classify the failure as transient or logic, and then either retries the failed execution via the n8n API with exponential backoff or creates a Jira issue, while also sending incident telemetry to an OpenTelemetry collector.

## How it works
1. Triggers automatically when an n8n workflow execution errors.
2. Extracts key telemetry like workflow name, failing node, error message/stack, execution URL, and any detected HTTP status code.
3. Sends the error context to Anthropic (Claude) to return structured JSON with a category, confidence, and remediation guidance.
4. Combines the AI diagnostics with telemetry and tracks a per-incident retry counter (up to three attempts) to decide if the failure is eligible for automated retry.
5. If the error is transient with sufficient confidence and retry budget remains, waits using exponential backoff and calls the n8n API to retry the failed execution, then records the retry outcome.
6. If the error is not retry-eligible (or the retry budget is exhausted), creates a Jira issue with the diagnostics, execution link, and failure details.
7. Posts an OpenTelemetry trace span to your collector capturing the error classification and whether a retry was attempted or queued.

## Setup
1. Add an Anthropic credential and select the Claude model to use for classification.
2. Add a Jira credential, set your Jira project key, and choose a valid issue type for the incident tickets.
3. Add an n8n API credential and set N8N_API_BASE_URL (or update the default URL) so the workflow can call your n8n instance’s /api/v1/executions/{id}/retry endpoint.
4. Set OTEL_COLLECTOR_HTTP_ENDPOINT (or update the default URL) to point at an OpenTelemetry collector that accepts traces over HTTP.
5. Ensure your n8n instance allows API retries and that the credential has permission to retry executions.

## Requirements
- Anthropic API credential
- n8n API key with execute permissions on a patched instance (2.26.2+)
- Jira Cloud credential with create-issue access on your target project
- An OTLP-compatible collector endpoint (Grafana, OpenObserve, Honeycomb, or similar)

## Customization
- Adjust the confidence threshold and MAX_RETRIES value in the Code node to match your risk tolerance for automatic retries
- Swap the Jira nodes for a different incident platform if you use PagerDuty or Linear instead
- Edit the classification prompt to add categories beyond transient and logic if your error taxonomy needs more granularity
- Change the backoff formula in the Calculate Backoff node if 30 seconds to 8 minutes doesn't fit your workloads

## Additional info
This workflow does not include a way to monitor its own failures, since n8n only allows one Error Trigger per workflow. For visibility into this orchestrator's own failures, such as the Jira call going down, build a small separate watchdog workflow with its own Error Trigger and point this workflow's Error Workflow setting at it.

## 🔗 Nodes Used

HTTP Request, Jira Software, Basic LLM Chain, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
