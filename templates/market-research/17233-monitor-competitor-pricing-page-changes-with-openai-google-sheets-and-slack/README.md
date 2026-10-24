# 📊 Monitor competitor pricing page changes with OpenAI, Google Sheets and Slack

> ⚡ **19 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow checks competitor pricing pages each morning, compares the latest visible text to the previous snapshot stored in Google Sheets, and uses OpenAI to summarize meaningful changes before posting an alert to a Slack channel.

## How it works
1. Runs every day at 08:00 on a schedule.
2. Reads your configured list of competitor page URLs and processes each URL individually.
3. Fetches each page’s HTML, extracts the visible body text, and trims it to a snapshot for comparison.
4. Looks up the previous snapshot for the same URL in Google Sheets.
5. If a previous snapshot exists and the content differs, OpenAI generates a 1–3 bullet summary of meaningful changes based on your watch criteria.
6. Posts the change summary to Slack and then appends or updates the URL’s latest snapshot and “Last Checked” timestamp in Google Sheets.
7. If no previous snapshot exists or no change is detected, it skips the Slack alert and only saves the current snapshot to Google Sheets.

## Setup
1. Add credentials for Google Sheets, Slack, and OpenAI (Chat) and select the target Slack channel.
2. Create or choose a Google Sheet with columns named URL, Content, and Last Checked, and set the Spreadsheet ID and sheet name in both Google Sheets steps.
3. Update the URL list and “watchFor” text in the settings step to match the competitor pages and changes you care about.
4. Adjust the schedule time (and frequency if needed) to control how often the pages are checked.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
