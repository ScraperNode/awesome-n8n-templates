# ⚙️ Set default error workflows across all workflows via the n8n API

> ⚡ **18 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs nightly (or on demand) and uses the n8n public API to scan all workflows, then sets a shared default error workflow for eligible ones while preserving existing settings and skipping excluded, archived, or already-configured workflows.

## How it works
1. Runs every night at 01:00 or when you manually execute the workflow.
2. Calls the n8n REST API to fetch all workflows, following cursor-based pagination to cover every page.
3. Filters the list to workflows that are not archived, are not tagged with the configured exclusion tag, are not the error workflow itself, and (optionally) have no error workflow set yet.
4. Iterates through the remaining workflows in batches.
5. Updates each workflow via the n8n REST API to set `settings.errorWorkflow` to the configured workflow ID while keeping the existing name, nodes, connections, and other settings intact.
6. Waits briefly between updates to throttle requests and then finishes after all workflows are processed.

## Setup
1. Create an n8n API key and add it as an HTTP Header Auth credential (for example using the X-N8N-API-KEY header), then select that credential in both HTTP Request nodes.
2. In the Configuration step, set `n8n_base_url` to your instance URL and `error_workflow_id` to the ID of the workflow you want as the default error handler.
3. Adjust `only_fill_empty` and `exclusion_tag` to control whether existing error handlers are overwritten and which workflows are skipped.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
