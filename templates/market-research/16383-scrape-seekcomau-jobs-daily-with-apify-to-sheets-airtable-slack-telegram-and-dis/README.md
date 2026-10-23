# 📊 Scrape SEEK.com.au jobs daily with Apify to Sheets, Airtable, Slack, Telegram and Discord

> ⚡ **29 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs a SEEK.com.au job search via Apify on a daily schedule or on-demand form submission, deduplicates new listings, and routes results to Google Sheets, Airtable, a webhook endpoint, and digest notifications to Slack, Telegram, Discord, and Gmail.

## How it works
1. Runs daily at 7 AM or starts when you submit the built-in n8n form with your SEEK search parameters.
2. Sends the search criteria to the Apify “unfenced-group/seek-com-au-scraper” actor and retrieves the job results.
3. Normalises each job into consistent fields (including an annualised salary estimate) and removes duplicates within the run and across previous executions.
4. Aggregates all newly found jobs and formats a single digest message for Slack, Telegram, Discord, and email.
5. Sends the digest to the enabled channels (Slack, Telegram, Discord webhook, and/or Gmail) based on the destination values you provided.
6. Splits the new jobs back into individual items and, if enabled, appends/updates rows in Google Sheets, creates records in Airtable, and/or POSTs each job to your webhook URL.
7. If the scraper returns no data and a notify URL is set, POSTs a “seek_no_results” alert to that endpoint.

## Setup
1. Add an Apify credential with an API token and ensure the workflow can run the “unfenced-group/seek-com-au-scraper” actor.
2. For scheduled runs, edit the “Scheduled Defaults” values (search query, location, days back, max results) and set any destination fields you want to use (leave as YOUR_XXX or blank to skip).
3. If using Google Sheets, add a Google Sheets OAuth2 credential, set your spreadsheet ID and tab name, and ensure there is a URL column for matching updates.
4. If using Airtable, add an Airtable personal access token, set the base/table IDs, and create fields that match the mapped column names (Title, Company, Location, URL, Salary Annual, etc.).
5. If using Slack, Gmail, or Telegram, add the respective OAuth/bot credentials and set the Slack channel name, recipient email address, and Telegram chat ID.
6. If using webhooks (generic webhook, Discord, or failure notifications), paste the target webhook URLs into webhookUrl, discordWebhookUrl, and/or notifyUrl.

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Slack, Telegram, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
