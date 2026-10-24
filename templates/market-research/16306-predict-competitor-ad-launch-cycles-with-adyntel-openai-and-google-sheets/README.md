# 📊 Predict competitor ad launch cycles with Adyntel, OpenAI, and Google Sheets

> ⚡ **13 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This scheduled workflow reads pending competitors from Google Sheets, pulls their recent ads from Meta, Google, and LinkedIn via Adyntel, uses OpenAI to predict launch timing and seasonality, and appends the resulting timeline and predictions to a launch calendar sheet.

## How it works
1. Runs on a schedule and loads competitors from Google Sheets where the status is set to Pending.
2. Processes each competitor one at a time and searches their ads on Meta, Google Ads, and LinkedIn using Adyntel based on the competitor domain.
3. Combines the ad results from all platforms into a single dataset.
4. Extracts a normalized timeline (titles, start/end dates, active status) and generates a compact summary of the competitor’s ad history.
5. Sends the summary to OpenAI to identify peak season, describe the launch pattern, and predict the next major campaign launch date.
6. Parses the AI output, expands it into per-ad rows with durations and seasons, and appends the rows to the Google Sheets launch_calendar tab.
7. Updates the competitor’s status to Done in Google Sheets and continues with the next pending competitor.

## Setup
1. Add Google Sheets OAuth credentials and point the workflow to your spreadsheet and the competitors (input) and launch_calendar (output) tabs.
2. Create an Adyntel API credential and ensure each competitor row includes a domain value that Adyntel can query.
3. Add an OpenAI API key (Chat Model) and keep or adjust the analysis prompt and model selection as needed.
4. In the competitors sheet, include columns for competitor_name, domain, status, and row_number, and set status to Pending for rows you want processed.
5. Set the schedule interval in the trigger to your desired cadence and run a test with a small competitor list before enabling the workflow.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
