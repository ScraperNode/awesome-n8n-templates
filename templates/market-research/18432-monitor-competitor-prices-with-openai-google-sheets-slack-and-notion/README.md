# 📊 Monitor competitor prices with OpenAI, Google Sheets, Slack, and Notion

> ⚡ **31 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to read competitor product URLs from Google Sheets, fetch each page, use OpenAI to extract price and stock status, and send Slack alerts and Notion logs for significant price drops while updating the latest prices back in Google Sheets.

## How it works
1. Runs every day on a schedule.
2. Loads configuration values and pulls all competitor rows (including product name, URL, and last known price) from Google Sheets.
3. Fetches each competitor product page URL with retries and, if the request fails, posts an error alert to Slack and continues to the next item.
4. Cleans the fetched HTML into plain text and sends it to OpenAI to extract a price, stock status, and a confidence level.
5. Routes low-confidence extractions to a Slack “manual check” alert, otherwise compares the extracted price to the last known price to detect drops beyond the configured threshold.
6. For significant drops, posts a Slack alert and creates a Notion database entry, then writes the latest checked time and new last-known price back to Google Sheets.
7. After all rows are processed, posts a daily Slack summary with counts of checked items, detected drops, fetch errors, and low-confidence extractions.

## Setup
1. Connect credentials for Google Sheets, OpenAI, Slack, and Notion.
2. Create a Google Sheet with columns such as productName, competitorUrl, ourPrice, lastKnownPrice, and checkedAt, and set the sheet/document ID and sheet tab in the Google Sheets steps.
3. Update the Config step values for slackAlertChannelId, slackErrorChannelId, notionDatabaseId, googleSheetId, and priceDropThresholdPercent.
4. Ensure the HTTP request step is set to continue on error (so failed fetches route to Slack error alerts instead of stopping the run).
5. Create or choose a Notion database with properties matching the fields being written (for example New Price, Change %, and Competitor URL).

## Requirements
- Google Sheet with columns: productName, competitorUrl, ourPrice, lastKnownPrice, checkedAt
- Google Sheets OAuth2 credential
- OpenAI API key
- Slack workspace with two channels (one for price alerts, one for errors/review)
- Notion database for logging price drops

## Customization
- Adjust the price drop threshold percentage in the Config node
- Change the schedule frequency (default: daily)
- Extend the AI prompt to extract additional fields like promotional badges or shipping cost
- Swap Notion for Airtable if preferred

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Notion, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
