# 🎣 Send daily building permit leads from Apify to Google Sheets and Gmail

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs every morning to fetch recent building permit leads from the Apify US Building Permits Actor, deduplicates results across executions, appends new permits to Google Sheets, and emails an HTML digest of the newest leads via Gmail.

## How it works
1. Runs daily at 7:00 using a schedule trigger.
2. Defines the target cities, keywords, lookback window, minimum valuation, and digest recipient email.
3. Calls the Apify US Building Permits Actor via HTTP to retrieve recent permits from city open-data sources.
4. Removes permits that were already seen in previous workflow executions based on a city+permit-number key.
5. Appends the new permit records to a Google Sheets tab.
6. Builds an HTML digest of up to 100 new permits sorted by valuation and sends it to the configured recipient via Gmail.

## Setup
1. Create an Apify API token and add an n8n HTTP Header Auth credential (Authorization: Bearer <token>) for the Apify HTTP request.
2. Connect your Google Sheets account, create a spreadsheet with a “Permits” sheet and matching column headers, and replace PASTE_YOUR_SHEET_ID with your sheet ID.
3. Connect your Gmail account and set the digest recipient email in the CONFIG node.
4. Review the cities, keywords, daysBack, minValuation, and maxResultsPerCity values in CONFIG, then test and activate the workflow.

## Requirements
- An Apify account (US Building Permits Actor), Google Sheets and Gmail

## Customization
- Change cities, keywords or minValuation in CONFIG. Swap Gmail for Slack or Telegram for chat alerts. Costs about $1.50 per 1,000 permits on Apify.

## Additional info
Disclosure: the Apify Actor used here was built and is published by the author of this template (EdenWorks). You pay Apify's usage price when it runs and the author earns part of that fee. Apify's free plan credits cover light use.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
