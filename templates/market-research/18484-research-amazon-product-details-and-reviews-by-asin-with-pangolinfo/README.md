# 📊 Research Amazon product details and reviews by ASIN with Pangolinfo

> ⚡ **10 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs manually to fetch Amazon product details and recent buyer reviews for a given ASIN using Pangolinfo, then merges both responses into a single structured output for analysis or downstream storage.

## How it works
1. Starts when you click Test workflow in n8n.
2. Sets the target ASIN, Amazon marketplace site, ZIP code, review page count, star filter, and sort order.
3. Requests the current Amazon product details from Pangolinfo’s Amazon Scraper API.
4. Requests recent Amazon reviews for the same ASIN from Pangolinfo using the configured review filters.
5. Merges the product and review responses into one combined item for downstream use.

## Setup
1. Use a self-hosted n8n instance and install the community node package `n8n-nodes-pangolinfo`.
2. Create and add a Pangolinfo API credential in n8n and select it in both Pangolinfo steps.
3. Update the ASIN, site/marketplace, ZIP code, and review settings in the Configure Research step before running the workflow.

## Requirements
- Self-hosted n8n with community nodes enabled; n8n-nodes-pangolinfo; and a Pangolinfo API key.

## Customization
- Replace the manual trigger with a schedule, change the ASIN and review filters in Configure Research, or connect the merged output to Sheets, a database, alerts, or an AI analysis step.

## Additional info
This workflow uses a community node and is compatible with self-hosted n8n only. Learn more about the [Pangolinfo Amazon Scraper API](https://www.pangolinfo.com/amazon-scraper-api/) and read the [Amazon API documentation](https://docs.pangolinfo.com/en-api-reference/amazonApi/amazonScrapeAPI). Get an API key at [Pangolinfo Console](https://tool.pangolinfo.com/).

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
