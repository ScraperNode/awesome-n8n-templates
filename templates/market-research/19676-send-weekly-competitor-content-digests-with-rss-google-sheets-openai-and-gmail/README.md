# 📊 Send weekly competitor content digests with RSS, Google Sheets, OpenAI and Gmail

> ⚡ **31 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every Monday, pulls the latest posts from up to three competitor RSS feeds, logs the titles to Google Sheets, uses OpenAI to generate a weekly competitive analysis (trends, gaps, and opportunities), and emails the digest via Gmail.

## How it works
1. Runs on a schedule every Monday at 8am.
2. Builds a list of up to three competitors from your configured RSS URLs and skips any competitors with blank or placeholder feeds.
3. Fetches each competitor’s RSS XML feed and extracts up to five recent post titles.
4. Appends each competitor’s weekly post titles and post count as a new row in a Google Sheets tab.
5. After the last competitor is logged, reads back this week’s rows from Google Sheets and formats them into a single input for analysis.
6. Sends the compiled competitor publishing list to OpenAI to produce a structured digest with highlights, trending topics, content gaps, and an urgent content opportunity.
7. Formats the digest into a plain-text email and sends it to the configured recipient via Gmail.

## Setup
1. Add credentials for OpenAI, Google Sheets (OAuth2), and Gmail (OAuth2), and ensure the Google Sheets API and Gmail API are enabled in your Google Cloud project.
2. Create or choose a Google Sheet, add a tab named “Competitor Content”, and add headers: Week, Competitor, Post 1 Title, Post 2 Title, Post 3 Title, Post 4 Title, Post 5 Title, Post Count, Logged At.
3. In the configuration step, set competitor names and RSS URLs (leave the third URL blank to skip), your niche, recipient email, sender name, and the target Google Sheet ID and tab name.
4. (Optional) Adjust the cron schedule if you want the digest to run on a different day or frequency.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
