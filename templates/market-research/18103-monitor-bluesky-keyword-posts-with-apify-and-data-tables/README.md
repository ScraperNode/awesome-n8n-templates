# 📊 Monitor Bluesky keyword posts with Apify and data tables

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs an Apify Bluesky monitoring Task on a schedule, fetches the resulting dataset of matched posts, normalizes each record, and upserts it into an n8n Data Table to prevent duplicates across runs.

## How it works
1. Runs manually or on an hourly schedule.
2. Starts an Apify Actor Task for Bluesky monitoring and waits for the run to finish.
3. If the run returns a default dataset ID, retrieves up to 100 dataset items from Apify.
4. Normalizes each dataset row into a consistent Bluesky post schema and creates diagnostic records for malformed rows missing required identifiers.
5. If records exist, upserts each record into the n8n Data Table using a stable delivery key so reruns update existing rows instead of inserting duplicates.
6. Outputs a run summary and throws an error if the Apify run did not finish with a SUCCEEDED status.

## Setup
1. Install the community node package `@apify/n8n-nodes-apify` (version 0.6.10 or later) in your n8n instance.
2. Add an Apify API credential in n8n and set the Apify Task ID to your saved Bluesky monitoring Task.
3. Configure the Apify Task to produce a default dataset and keep its per-run result cap at 100 or fewer items.
4. Create an n8n Data Table named `monitor-deliveries` with columns: deliveryKey, product, sourceId, sourceUrl, title, observedAt, runId, runStatus, datasetId, and payloadJson.
5. Enable the Schedule Trigger and adjust the interval as needed.

## Requirements
- Self-hosted n8n, @apify/n8n-nodes-apify 0.6.10 or later, an Apify account with a saved Bluesky monitoring Task, and an n8n Data Table named monitor-deliveries.

## Customization
- Change keywords, handles, mentions, hashtags, language filters, maximum posts, schedule, or downstream mappings while preserving the stable post delivery key.

## Additional info
The export is credential-free and uses PASTEYOURTASKID as its only Task placeholder. Supporting package: https://github.com/Telemark-Digital/apify-monitoring-workflows/tree/main/bluesky-keyword-mention-alerts.

## 🔗 Nodes Used

Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
