# 📊 Track competitor pricing changes with Google Sheets, OpenAI, and Gmail

> ⚡ **44 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily, checks competitor webpages listed in Google Sheets, compares the latest page text to the previous snapshot using OpenAI, stores the updated snapshot in Google Sheets, and emails a consolidated HTML change report via Gmail.

## How it works
1. Runs every day at 9:00 AM on a schedule.
2. Reads the list of competitor sites (Site ID, Site Name, URL) from a Google Sheets tab.
3. Fetches each competitor URL and extracts the visible page text from the HTML body.
4. Looks up the previous saved snapshot for the same Site ID in a Google Sheets “Snapshots” tab.
5. Uses OpenAI (gpt-4o-mini) to compare previous vs current text and summarize pricing, plan, and campaign changes or return “No changes detected”.
6. Saves the current page text and fetch timestamp back to Google Sheets (append or update by Competitor Site ID) and formats each result into an HTML table row.
7. Aggregates all rows into a single HTML table and sends the daily report email through Gmail.

## Setup
1. Create a Google Sheets file with a “Monitored Sites” tab (Site ID, Site Name, URL) and a “Snapshots” tab (Competitor Site ID, Last Fetched At, Page Text).
2. Add Google Sheets OAuth credentials and set your spreadsheet ID and tab names in the Config values.
3. Add an OpenAI API credential and ensure the model setting (gpt-4o-mini) is available in your account.
4. Add a Gmail OAuth2 credential and set the recipient email address in the Config values.
5. Update the schedule trigger if you want a time other than 9:00 AM.

## 🔗 Nodes Used

Google Sheets, HTTP Request, HTML Extract, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
