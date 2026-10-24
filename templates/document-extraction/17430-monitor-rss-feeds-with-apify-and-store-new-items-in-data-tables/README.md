# 🔬 Monitor RSS feeds with Apify and store new items in data tables

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs hourly to execute an Apify RSS monitoring Task, retrieves the run’s dataset items, normalizes them into a stable delivery key, and upserts new or updated feed entries into an n8n Data Table for idempotent storage and run status reporting.

## How it works
1. Runs every hour on a schedule.
2. Starts an Apify Actor Task for RSS monitoring and waits for the run to finish.
3. Checks whether the finished Apify run provides a default dataset ID and, if present, fetches up to 200 dataset items from Apify.
4. Normalizes each dataset item into a consistent schema, generating a URL-encoded delivery key from feedUrl and itemKey and creating diagnostic records for malformed rows.
5. Upserts each normalized record into the n8n Data Table (monitor-deliveries) using deliveryKey as the unique match to avoid duplicates across runs.
6. Outputs a run summary including counts of persisted items and throws an error if the Apify run did not finish with SUCCEEDED.

## Setup
1. Install the community node @apify/n8n-nodes-apify (0.6.10 or later) and add an Apify API credential in n8n.
2. Create and configure an Apify RSS monitoring Task, set it to onlyNew: true, and keep maxItemsPerRun at 200 or less, then paste the Task ID into the workflow.
3. Create an n8n Data Table named monitor-deliveries with columns matching the upsert mapping (including deliveryKey as the matching/unique field).

## Requirements
- Self-hosted n8n with @apify/n8n-nodes-apify 0.6.10 or later, an Apify account with a saved RSS monitoring Task, and an n8n Data Table named monitor-deliveries.

## Customization
- Adjust the hourly schedule; change feed sources, keyword or regex filters, exclusions, and maxItemsPerRun in the saved Apify Task; or map additional dataset fields into the Data Table.

## Additional info
The export is credential-free and uses PASTEYOURTASKID as its only Task placeholder. The supporting public package is available at https://github.com/Telemark-Digital/apify-monitoring-workflows/tree/main/rss-keyword-monitor.

## 🔗 Nodes Used

Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
