# 📊 Track monthly trending topics with Exploding Topics and n8n Data Tables

> ⚡ **166 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs monthly to fetch trending topics from the Exploding Topics API, formats key fields like keyword, categories, growth, and URL, and upserts the results into an n8n Data Table so repeated runs update existing topics instead of creating duplicates.

## How it works
1. Runs once per month on a schedule trigger.
2. Sets the Exploding Topics API request parameters such as API key, category, timeframe, sort order, and result limit.
3. Calls the Exploding Topics `/topics` endpoint via HTTP to retrieve the latest trending topics.
4. Parses the API response and formats each trend into a normalized row with keyword, description, categories, search volume, 12-month growth, date added, and a topic URL.
5. Upserts each formatted trend into an n8n Data Table, matching existing rows by the `path` field to avoid duplicates.

## Setup
1. Get an Exploding Topics Pro API key and replace `YOUR_EXPLODING_TOPICS_API_KEY` in the API parameters.
2. Review and adjust the API parameters (type, categories, sort, timeframe, limit) to match the trends you want to track.
3. Select or create the target n8n Data Table and ensure its columns align with the stored fields (keyword, path, description, categories, search_volume, growth_12m, trend_url, date_added).

## Requirements
- Exploding Topics Pro API key
- n8n Data Table with columns: keyword, path, description, categories, search_volume, growth_12m, trend_url, date_added

## Customization
- Change the category, trend type, timeframe, sort order, and result limit in the Configure API Parameters node.
- Adjust the monthly schedule trigger to run weekly, daily, or at a custom interval.

## Additional info
This workflow uses YOUR_EXPLODING_TOPICS_API_KEY as a placeholder. Replace it with your own Exploding Topics Pro API key before running the workflow. The workflow uses the topic path as the unique match key when upserting rows, so repeated runs update existing topics instead of creating duplicates.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
