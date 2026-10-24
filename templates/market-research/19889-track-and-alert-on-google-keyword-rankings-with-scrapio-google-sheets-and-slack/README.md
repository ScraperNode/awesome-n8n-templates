# 📊 Track and alert on Google keyword rankings with Scrapio, Google Sheets, and Slack

> ⚡ **26 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow tracks daily Google search positions for a list of keyword/domain pairs using Scrapio, logs the results to Google Sheets with position change metrics, and sends Slack alerts for sharp ranking drops plus a weekly Slack digest summarizing gains and losses.

## How it works
1. Runs every day on a schedule and loads the configured keyword/domain pairs to track.
2. Reads the full ranking history from Google Sheets and attaches it to each keyword/domain pair for comparison.
3. Uses Scrapio to run a Google search for each keyword and locates the tracked domain’s current position in the results.
4. Calculates the previous position, position change, and whether the domain dropped out or fell by 3+ places.
5. Appends each day’s ranking snapshot to Google Sheets and posts a Slack alert when a significant drop is detected.
6. Runs every week on a schedule, reads the ranking log from Google Sheets, filters to the last 7 days, and posts a Slack digest with totals plus biggest gain and biggest drop.

## Setup
1. Add a Scrapio API credential and ensure the Scrapio Search operation is available in your n8n instance.
2. Create or select a Google Sheet for the ranking log, add Google Sheets credentials, and set the document ID and sheet name for all Google Sheets steps.
3. Ensure the sheet has columns that match the appended fields: checked_at, keyword, domain, position, url_found, previous_position, and position_change.
4. Add Slack credentials and set the channel IDs for the rank-drop alert and weekly digest messages.
5. Update the keyword/domain pairs in the workflow to the terms and domains you want to track, and adjust the 3+ position drop threshold if needed.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
