# 📊 Monitor competitor Trustpilot and G2 reviews with OpenAI and Slack

> ⚡ **38 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs weekly, reads competitor review profile URLs from Google Sheets, scrapes each page with ScrapeUnblocker, summarizes reviews from the last 7 days using OpenAI, and posts a digest to a Slack channel.

## How it works
1. Runs on a weekly schedule.
2. Reads competitor profile URLs from a Google Sheets tab and iterates through them one by one.
3. Scrapes each competitor’s review page HTML using ScrapeUnblocker.
4. Extracts review details from the page’s JSON-LD (SoftwareApplication schema) and calculates total and average ratings.
5. Filters the extracted reviews to only those published in the last 7 days and recalculates the weekly counts and average rating.
6. If there are reviews in the last 7 days, sends them to OpenAI to generate a concise competitive-intelligence summary.
7. Posts the weekly review digest (company, rating, review count, and AI summary) to a specified Slack channel, then continues to the next competitor.

## Setup
1. Add Google Sheets credentials and update the spreadsheet ID, tab name (for example, “Competitors”), and ensure a “Profile URL” column contains the competitor review page links.
2. Add ScrapeUnblocker credentials to allow the workflow to fetch and scrape the review pages.
3. Add an OpenAI credential and confirm the model selection used for the review summary.
4. Add Slack credentials and set the target channel ID where the weekly digest should be posted.
5. Adjust the schedule timing and the 7-day lookback window in the review filter logic if you want a different monitoring cadence.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
