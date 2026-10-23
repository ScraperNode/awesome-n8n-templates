# 📁 Sync PostgreSQL changes to SharePoint lists via Microsoft Graph with Teams alerts

> ⚡ **17 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow runs every 15 minutes and uses a watermark to incrementally sync recently updated rows from PostgreSQL to a Microsoft SharePoint list via the Microsoft Graph $batch API, posting run summaries and deduplicated error alerts to a  Microsoft Teams channel.

## How it works
1. Runs every 15 minutes on a schedule and loads SharePoint/Teams configuration plus the last successful sync timestamp stored in n8n static data.
2. Queries PostgreSQL for rows updated since the last watermark timestamp and aggregates the results into a single batchable payload.
3. If no rows are returned, advances the watermark to the current run start time and posts a sync summary to Microsoft Teams.
4. If rows exist, chunks them into Graph-compliant $batch requests (max 20 operations per batch) that create items in the target SharePoint list.
5. Sends each batch to the Microsoft Graph $batch endpoint with retries and classifies per-item results into successes, failures, and 429 throttling.
6. Aggregates results across all batches and, when new failures appear, posts a Microsoft Teams alert listing the failed/throttled source IDs while suppressing repeat alerts for previously seen IDs.
7. Updates the stored watermark only when there are zero failures, then posts a Microsoft Teams sync summary with counts and watermark status.

## Setup
1. Add a PostgreSQL credential, then update the SQL query to use your table name and an indexed updated_at timestamptz column.
2. Add a Microsoft Graph OAuth2 credential with permissions to create SharePoint list items, and set your SharePoint site ID and list ID in the workflow configuration values.
3. Edit the field mapping used for SharePoint list item creation so your PostgreSQL columns map to your SharePoint field internal names.
4. Add Microsoft Teams credentials and set the target Team ID and Channel ID for both the sync summary and error alert messages.

## Requirements
- PostgreSQL database with an indexed updated_at timestamptz column on the source table
- Microsoft Graph OAuth2 credential with Sites.ReadWrite.All permission for the target SharePoint site
- Microsoft SharePoint list with field internal names matching the column mapping in the batch payload builder
- Microsoft Teams credential with permission to post to the configured team and channel

## Customization
- Change the polling interval in the Every 15 Minutes Trigger node to run more or less frequently depending on your data update volume.
- Adjust the batchSize value in the Set Configuration Parameters node — the maximum is 20 per Graph API constraint and is enforced in code regardless of what is set here.
- Modify the SQL query in the Query Updated Rows from Postgres node to add filters, joins, or column selections beyond the default updated_at watermark check.
- Extend the batch payload builder in the Construct Graph Batch Payloads node to support upsert logic by adding a dependsOn field to chain an existence-check request before each write.
- Add a dead-letter table in PostgreSQL and exclude persistently failing rows from the query using AND id NOT IN (SELECT id FROM sync_dead_letter) to break infinite retry cycles.

## 🔗 Nodes Used

HTTP Request, Postgres, Microsoft Teams, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
