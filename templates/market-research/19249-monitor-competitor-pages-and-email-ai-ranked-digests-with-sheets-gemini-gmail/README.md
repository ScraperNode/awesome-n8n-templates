# 📊 Monitor competitor pages and email AI-ranked digests with Sheets, Gemini, Gmail

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to fetch competitor web pages listed in Google Sheets, detects meaningful content changes using a text fingerprint, scores and summarizes changes with Google Gemini, and emails a ranked HTML digest via Gmail only when changes meet your significance threshold.

## How it works
1. Runs once per day on a schedule and loads the digest recipient, significance threshold, and diff size limits.
2. Reads the list of tracked URLs and their last saved snapshots from a Google Sheets tab.
3. Fetches each page’s HTML one at a time, converts it into normalized readable text, and generates a hash to detect changes while tolerating noisy markup differences.
4. Skips AI analysis for unchanged pages, and for changed pages computes an added/removed line diff capped to the configured maximum.
5. Sends the diff to Google Gemini to score significance (0–5) and generate a category, headline, summary, and “why it matters,” then merges the verdict back into the page record.
6. Updates Google Sheets with the latest hash, snapshot text, and last-checked timestamp for every page.
7. Aggregates the results, builds a sorted HTML email digest for changes at or above the threshold, and sends it via Gmail (or sends nothing if no notable changes are found).

## Setup
1. Create a Google Sheet with a tab named “Pages” and columns: url, name, last_hash, last_snapshot, last_checked, then paste in the competitor URLs you want to monitor.
2. Add Google Sheets OAuth credentials and select your spreadsheet and the “Pages” tab in both the read and write Google Sheets steps.
3. Add a Google Gemini (PaLM) API credential for the change-scoring step.
4. Add a Gmail OAuth2 credential and set the recipient email address and thresholds in the monitoring configuration values.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
