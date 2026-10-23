# 🔬 Sync Replicated support bundles into Snowflake on a schedule

> ⚡ **8 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Replicated Support Bundles → Snowflake

Syncs all **Replicated support bundles** from your vendor account into a Snowflake table on a daily schedule. Useful for tracking support bundle activity, correlating bundles with customer health, and building operational dashboards.

## How it works

1. A **Schedule Trigger** fires daily
2. The **Replicated Vendor API** (`/vendor/v3/supportbundles`) is called to fetch all support bundles
3. The `bundles` array is split and each record is mapped to a flat structure with typed fields
4. The Snowflake destination table is **truncated** (full refresh), then all records are bulk-inserted

## Setup

1. **Create the table** — run the `[CREATE] REPLICATED_SUPPORTBUNDLES` node manually once before activating. Adjust the database/schema to match your Snowflake environment
2. Add your **Replicated API Token** as an HTTP Header Auth credential (`Authorization` header)
3. Connect your **Snowflake** credential
4. Activate the workflow

## Notes

- This is a **full replace** on every run, not an upsert — suitable as long as your total bundle count stays manageable
- Fields synced: `id`, `name`, `uploadedAt`, `collectedAt`, `source`, `customerId`, `instanceId`, `size`, `viewed`

## 🔗 Nodes Used

HTTP Request, Snowflake, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
