# ⚒️ Backfill historical API data into Postgres with resumable checkpointed batches

> ⚡ **0 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow runs on demand (manual or webhook) to backfill historical data from an HTTP API into Postgres in resumable batches, persisting a checkpoint and progress stats so repeated runs can continue from the last saved position.

## How it works
1. Starts via Manual Trigger or Webhook Trigger to begin or resume a backfill run.
2. Creates a Postgres backfill_progress table (if needed) and loads the backfill configuration and current checkpoint used to page through history.
3. Checks whether the job is already marked as completed and, if so, skips processing and returns a completion summary.
4. Requests the next batch of records from the source HTTP API using the current checkpoint, end date, and batch limit.
5. Normalizes the API response into mapped fields, determines the next checkpoint value, and proceeds only if the batch contains records.
6. Upserts the batch into the target Postgres table, then saves the updated checkpoint and cumulative progress counters to backfill_progress.
7. Loops with a short wait between batches until the per-run batch limit is reached or no more data is available, then finalizes and outputs a summary (optionally responding via webhook).

## Setup
1. Create a Postgres credential in n8n and ensure the target table exists (for example, orders_history) with the unique key used for upserts.
2. Update the configuration in the “Code - Load Config & Checkpoint” step with your API base URL, authorization header/token, date range or cursor strategy, field mappings, and target table/unique key.
3. If you want to start the workflow externally, enable the Webhook Trigger and copy the webhook URL into the source system that should initiate the backfill.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
