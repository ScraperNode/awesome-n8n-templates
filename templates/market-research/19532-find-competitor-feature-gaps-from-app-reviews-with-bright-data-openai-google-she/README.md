# 📊 Find competitor feature gaps from app reviews with Bright Data, OpenAI, Google Sheets and Slack

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly (or manually) to crawl competitor app reviews from Google Play and the Apple App Store via Bright Data, uses OpenAI to name requested features, compares them to your existing feature list, logs quotes to Google Sheets, and posts a roadmap vs positioning scorecard to Slack.

## How it works
1. Runs every Monday morning (or on manual start) and loads your competitor app URLs, your feature list, and crawl/report limits.
2. Triggers Bright Data dataset crawls for Google Play and/or the Apple App Store, then polls Bright Data until each crawl is ready (or a max poll limit is reached).
3. Downloads the review snapshots from Bright Data, normalizes Google Play vs App Store fields, trims reviews to a configurable date window, and caps the number of reviews per app.
4. Scans the reviews for request-shaped phrases to extract the most relevant “asks” and builds a numbered brief of request sentences.
5. Uses OpenAI to label each ask as a short feature name and matches those names against your feature list to classify each as a roadmap gap or a positioning issue.
6. Builds a Slack scorecard summarizing the top gaps and already-shipped requests, appends one Google Sheets row per quote, and posts either the scorecard or a “no requests found” message to Slack.
7. If the workflow run fails, posts the error message to a dedicated Slack alerts channel.

## Setup
1. Create a Bright Data API token and add an HTTP Header Auth credential named "Authorization" with the value "Bearer YOUR_BRIGHT_DATA_KEY".
2. Add OpenAI credentials for the Chat model used to name features.
3. Add Google Sheets OAuth credentials and replace the target spreadsheet URL/ID and sheet name used to append rows.
4. Add Slack credentials and set the target channel in Settings for the scorecard, plus update the separate alerts channel used for failure notifications.
5. In the Settings step, paste your competitor Google Play and App Store URLs, list the features you already ship, and adjust limits like reviews per app, days back, and max asks/polls.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
