# 📊 Reprice tour packages dynamically with Claude, Google Sheets and Slack

> ⚡ **35 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on a schedule to fetch live tour-package demand signals and competitor prices via HTTP APIs, calculates repricing recommendations, uses Anthropic Claude to finalize capped and rounded price changes, then logs each update to Google Sheets and notifies a Slack channel.

## How it works
1. Runs on a scheduled trigger to poll your booking/demand API and your competitor pricing API in parallel.
2. Merges both API responses and calculates per-package demand score, seasonality/urgency, competitor positioning, and a recommended price adjustment.
3. Splits the results into one item per package and filters to only those needing a repricing change of 3% or more.
4. Sends each candidate package to Anthropic Claude (claude-sonnet-4) to apply rounding, enforce a 15% per-cycle cap, and return a final price with confidence and reasoning.
5. Parses the AI’s JSON output (falling back to the calculated recommendation if parsing fails) and formats an audit row with pricing and scoring details.
6. Appends the repricing row to a Google Sheets PriceUpdates tab via the Google Sheets API and posts a summary alert to Slack.

## Setup
1. Provide API access for your booking/demand endpoint and competitor pricing endpoint, and replace the placeholder URLs and Bearer tokens in both HTTP requests.
2. Add an Anthropic API credential and ensure the model setting uses your preferred Claude model (default: claude-sonnet-4-20250514).
3. Connect Google Sheets via OAuth2, replace YOUR_SHEET_ID, and ensure a PriceUpdates sheet exists with the expected columns.
4. Add Slack credentials and set YOUR_SLACK_CHANNEL_ID to the channel that should receive repricing alerts.
5. Adjust the schedule interval and, if needed, tune the 3% repricing threshold and scoring logic in the JavaScript calculation step.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Filter, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
