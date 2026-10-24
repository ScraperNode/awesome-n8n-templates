# ⚙️ Diagnose failed workflows with a local Ollama model and send triage reports to Discord

> ⚡ **1 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow captures failed n8n executions, fetches the execution and workflow details via the n8n API, redacts sensitive data, sends the failure context to a local Ollama chat model for diagnosis, and posts a formatted triage message to Discord while deduplicating repeat failures.

## How it works
1. Triggers when a workflow errors, when called by another workflow’s error handler, or when run manually with sample failure IDs.
2. Normalizes the failure payload and applies runtime settings such as Ollama URL, model name, editor URL, and deduplication window.
3. Skips excluded workflow IDs to prevent alert loops, then uses the n8n API to fetch the failed execution (if available) and the workflow definition.
4. Builds a compact context for analysis, including the failing node definition and an upstream input sample, while redacting secrets and personal data.
5. Checks a n8n Data Table for recent matching fingerprints and skips diagnosing failures already handled within the configured deduplication period.
6. Sends the redacted context to Ollama’s /api/chat endpoint for a schema-constrained JSON diagnosis. A Code node then checks the model’s own labels before formatting the message: a proposed fix without an exact value, or one that rewrites code, is downgraded to ‘needs a human’, and confidence is capped when context is thin. The model never writes the delivered message.
7. Posts the diagnosis to Discord via a webhook and records the fingerprint and metadata to the Data Table for future deduplication.
8. Read-only by design: it explains and suggests fixes, and never changes the failing workflow.

## Setup
1. Add an n8n API credential and ensure your n8n instance URL is reachable so the workflow can read executions and workflow definitions.
2. Install and run Ollama on a host reachable from n8n, pull your chosen model (for example `qwen3:8b`), and set `ollama_url` and `model` in the configuration values.
3. Create a n8n Data Table (for example `triage_history`) with columns for `fingerprint`, `workflow_id`, `workflow_name`, `failed_node`, `error_message`, `execution_id`, `fix_type`, and `diagnosed_at`, then select it in both Data Table steps.
4. Add a Discord webhook credential and set the target webhook for posting the triage message.
5. Set `n8n_editor_url` to your editor base URL and optionally populate `excluded_workflow_ids` to exclude your error handler workflow and any other workflows you don’t want diagnosed.
6. Edit Sample Failures with a real failed execution ID from your Executions list, then run Test with Sample Failures.
7. Set this workflow as the Error workflow of the workflows you want covered, or call it from your error handler (companion template: Send workflow failure alerts to Discord and log them in data tables).

## Requirements
- n8n with API access and Data Tables
- Ollama with a model that supports JSON-schema structured output (tested with Qwen 3 models)
- A Discord server where you can create a webhook

## Customization
- Point ollama_url at any Ollama host, or swap Diagnose Failure for another chat API that supports structured output.
- Tune dedup_hours and max_context_chars in Build Config.
- Replace Discord with Slack, Telegram or email.
- Extend the redaction patterns in Redact and Build Context for your own secret formats.

## Additional info
Only sees runs that fail: an expression that reads a missing field returns empty and the run succeeds, so add data checks for those. Nodes referenced with $(): Skip Excluded Workflows, Get Failed Execution, Redact and Build Context, Skip Repeat Failures, Format Diagnosis. Don’t rename them without updating the references.

## 🔗 Nodes Used

HTTP Request, Discord, n8n, Execute Workflow Trigger, Filter, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
