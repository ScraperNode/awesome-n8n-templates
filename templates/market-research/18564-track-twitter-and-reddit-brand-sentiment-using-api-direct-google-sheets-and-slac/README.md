# 📊 Track Twitter and Reddit brand sentiment using API Direct, Google Sheets and Slack

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs every morning to search Twitter/X and Reddit for your brand name via API Direct, includes AI sentiment and dominant emotion on each mention, and appends the results as new rows in a Google Sheets mentions log.

## How it works
1. Runs every morning on a schedule trigger.
2. Sets the brand keyword to search for.
3. Searches Twitter/X posts via API Direct for the newest matches and requests sentiment analysis.
4. Searches Reddit posts via API Direct for the newest matches and requests sentiment analysis.
5. Combines the Twitter/X and Reddit results into a single stream.
6. Formats each mention into the columns needed for a spreadsheet row, including polarity and dominant emotion.
7. Appends each formatted mention as a new row in a Google Sheets document.

## Setup
1. Add an API Direct credential (API key) and select it in both the Twitter/X and Reddit search steps.
2. Update the brand value in the brand settings step to the keyword(s) you want to track.
3. Connect your Google Sheets OAuth credentials and select the target spreadsheet and sheet.
4. Create a Google Sheet with the header row: date, source, author, text, url, sentiment, emotion.

## Requirements
- An API Direct API key (new accounts include free credit)
- A Google account for Google Sheets

## Customization
- Use boolean search syntax for precision, e.g. "acme app" -hiring (see apidirect.io/docs/boolean-search)
- Add more platforms (TikTok, YouTube, news) by duplicating a search node and picking a different operation
- Filter on sentiment polarity = negative and pipe to Slack for instant crisis alerts

## Additional info
API Direct is a verified community node, available on n8n Cloud and self-hosted n8n — search "API Direct" in the nodes panel to install. One API key covers Twitter/X, Reddit, TikTok, Instagram, YouTube, Facebook, Threads, Truth Social, Google News/Maps/web search (58 operations), pay-as-you-go from $0.002/request.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
