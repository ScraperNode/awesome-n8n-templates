# 📊 AI-powered news monitoring with Linkup, Airtable, and Slack notifications

> ⚡ **1,309 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Automatically searches the web for recent news on any topic using Linkup's AI search, extracts title, summary, date, and URL for each article, saves them as records in Airtable, and sends a Slack notification once the digest is ready for review.

## How it works
1. The **Schedule Trigger** node runs the workflow automatically on a recurring schedule, weekly by default.
2. The **Set news parameters** node defines the topic(s) to monitor (`News topic(s)`) and the freshness window in days (`News from last x days`).
3. The **Query Linkup for news** node sends a POST request to the Linkup API (`https://api.linkup.so/v1/search`) with the topic, a `fromDate` calculated from the freshness window, and a structured output schema requesting title, URL, content summary, and publication date for each article.
4. The **Split out news** node splits the returned `news` array into individual items, one per article.
5. The **Loop Over Items** node processes each article one at a time to stay within API rate limits.
6. For each article, the **Store one news** node creates a new record in an Airtable table with the fields Title, Date, Summary, URL, and a Status of "new".
7. The **Wait** node pauses 2 seconds between each Airtable write to avoid hitting rate limits.
8. Once all articles are processed, the **Aggregate in 1 item** node combines all items into a single item, and the **Notify in Slack** node posts a message to a Slack channel stating how many news articles were found.

## Setup
1. Configure the **Schedule Trigger** node to set the frequency and time you want the workflow to run (default: every 7 days at 17:30).
2. In the **Set news parameters** node, replace the example value of `News topic(s)` with your own keywords (e.g. "decarbonisation, net-zero and corporate sustainability"), and set `News from last x days` to match your schedule frequency.
3. In the **Query Linkup for news** node, add your Linkup API key as an HTTP Bearer Auth credential. Get a free API key at https://www.linkup.so/ (the free plan includes €5 of monthly credits, enough for about 1,000 runs of this workflow).
4. In the **Store one news** node, connect your Airtable account, then select the Base and Table where news should be saved. The table must contain the fields: Title (string), Date (date/time), Summary (string), URL (string), and Status (single select with options "new" and "reviewed").
5. In the **Notify in Slack** node, connect your Slack account and select the channel where you want to receive the completion notification.
6. Activate the workflow to start the automated news monitoring.

## Requirements
- A Linkup account and API key (free tier available at https://www.linkup.so/)
- An Airtable account with a base/table containing the fields Title, Date, Summary, URL, and Status
- A Slack account with access to the channel used for notifications

## Customization
- Swap the Airtable node for a Notion, Google Sheets, or other database node to store news elsewhere
- Replace the Slack node with a Discord, Telegram, or Email node for alerts on a different platform
- Insert an AI node after the Linkup search to perform sentiment analysis, categorize articles, or generate a high-level overview before saving them

## Additional info
Linkup's free plan includes €5 of monthly credits, enough for roughly 1,000 runs of this workflow. Get an API key at https://www.linkup.so/.

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
