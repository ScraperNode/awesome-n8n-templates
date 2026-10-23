# 📊 Monitor EU TED tenders with Apify and store notices in n8n Data Tables

> ⚡ **52 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily (or manually) to execute an Apify TED monitoring Task, fetch its results dataset, normalize each EU tender notice record, and upsert the records into an n8n Data Table for deduplicated storage and reporting.

## How it works
1. Runs on a daily schedule at 06:00 (or starts manually for testing).
2. Executes an Apify Actor Task for TED monitoring and waits for the run to finish.
3. If the Apify run provides a default dataset, retrieves up to 1,000 dataset items from Apify.
4. Cleans and normalizes each dataset row, generating a stable delivery key (for example, based on the TED publication number) and keeping the full raw payload as JSON.
5. Upserts each record into an n8n Data Table using the delivery key to avoid duplicates when the same notice is seen again.
6. Outputs a run summary including tender counts and fails the workflow if the Apify run did not succeed or no dataset was available.

## Setup
1. Install the community node package `@apify/n8n-nodes-apify` (0.6.10 or later) in your n8n instance.
2. Create an Apify API token credential in n8n and set the TED monitoring Actor Task ID in the workflow configuration.
3. Create an n8n Data Table named `monitor-deliveries` with the columns used by the upsert step (including a unique `deliveryKey` match column).
4. Configure your saved Apify Task inputs/filters (CPV, country, keywords, notice type, etc.) and keep `maxNewPerRun` at 999 or less so the non-paginated fetch (limit 1,000 including a summary row) does not truncate results.
5. Adjust the schedule time if needed and run the workflow twice to validate idempotent upserts before activating it.

## Requirements
- Self-hosted n8n with @apify/n8n-nodes-apify 0.6.10 or later, an Apify account with a saved TED Tender Monitor Task, and an n8n Data Table named monitor-deliveries.

## Customization
- Change CPV codes, countries, keywords, notice types, value thresholds, schedule, or downstream mappings while retaining stable tender keys and null-safe payload handling.

## Additional info
Credential-free export. Supporting package: https://github.com/Telemark-Digital/apify-monitoring-workflows/tree/main/ted-tender-monitor.

## 🔗 Nodes Used

Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
