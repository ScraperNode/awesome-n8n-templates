# ⚙️ Clean up archived workflows with the n8n API on a schedule

> ⚡ **3 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs daily and uses the n8n API to find archived workflows older than a retention threshold, optionally deleting unprotected ones in batches while producing a detailed preview or deletion summary.

## How it works
1. Runs every day at 09:00 (workflow timezone) on a schedule.
2. Fetches workflows from the n8n API (optionally scoped to a specific project) and keeps only workflows marked as archived.
3. Validates configuration, then selects deletion candidates based on the retention cutoff date while excluding workflows that include a protected tag.
4. If dry-run mode is enabled or no candidates exist, outputs a preview-style summary with stats and the candidate list.
5. If dry-run mode is disabled, splits candidates into individual items and deletes the workflows via the n8n API using configurable batching.
6. Outputs a final summary including retention settings, candidate details, and deletion success/failure counts.

## Setup
1. Create/select an n8n API credential and assign it to the workflow list and delete actions.
2. In the config values, set your retention period and keep dry_run enabled until you have reviewed the preview output.
3. If you plan to enable live deletion (dry_run = false), set project_id to the target n8n project to avoid validation errors.
4. Set protected_tag to a tag name (for example, "keep") and ensure any workflows you never want deleted are tagged accordingly.
5. Adjust batch_size and batch_interval_ms to match your instance’s API limits and desired deletion pace.

## 🔗 Nodes Used

Stop and Error, n8n, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
