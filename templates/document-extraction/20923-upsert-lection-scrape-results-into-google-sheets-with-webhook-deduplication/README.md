# 🔬 Upsert Lection scrape results into Google Sheets with webhook deduplication

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives Lection scheduled-scrape webhook events and writes the returned dataset records into Google Sheets, deduplicating by a chosen unique column using an upsert operation.

## How it works
1. Receives a POST webhook from Lection for a scheduled scrape delivery.
2. Verifies the request by comparing the `x-lection-secret` header against a configured shared secret and returns 401 if it does not match.
3. Checks that the event is `scheduled_scrape.completed` and that the dataset contains at least one row, otherwise returns a JSON response indicating nothing was written.
4. Splits the incoming `body.dataset.records` array into individual items.
5. Upserts each record into Google Sheets using “append or update” based on the configured matching (unique) column.
6. Aggregates the write results and responds to Lection with a JSON payload including how many rows were written.

## Setup
1. Create a Google Sheet with a header row whose column names exactly match the field names in Lection’s `dataset.records`.
2. Add a Google Sheets OAuth2 credential in n8n and set the target Spreadsheet ID and sheet name in the Google Sheets node.
3. Set the matching (unique) column used for deduplication in the Google Sheets node’s matching columns setting.
4. Configure the expected webhook secret in the workflow (or remove the secret check) and set the same secret in Lection’s webhook delivery settings.
5. Copy the workflow’s production webhook URL and configure it as the Webhook delivery channel for your Lection scheduled scrape, ensuring the webhook path matches your setup.

## Requirements
- A Lection account on a paid plan (webhook delivery is paid-only), with a scheduled scrape that has a stable unique column

## Additional info
Activate the workflow and use its production webhook URL, not the test URL. Test sends from Lection are acknowledged but never written, so use Run now in Lection to check the mapping. Sheet column names are case-sensitive. If you pick the n8n destination in Lection, which has no secret field, delete the Secret matches? node.

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
