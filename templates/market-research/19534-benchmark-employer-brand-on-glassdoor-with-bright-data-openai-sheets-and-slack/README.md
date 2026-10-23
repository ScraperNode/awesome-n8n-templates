# 📊 Benchmark employer brand on Glassdoor with Bright Data, OpenAI, Sheets and Slack

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs monthly (or on demand) to crawl Glassdoor reviews via Bright Data for your company and competitors, aligns the review date windows, benchmarks ratings across Glassdoor dimensions, uses OpenAI to summarize recurring “cons” for your weakest area, logs results to Google Sheets, and posts a scorecard to Slack.

## How it works
1. Runs on a schedule at 9:00 (or manually) and loads your company and competitor Glassdoor review URLs plus runtime settings.
2. Triggers a separate Bright Data Glassdoor dataset crawl for each company URL and polls Bright Data until all snapshots are ready or the maximum poll count is reached.
3. Downloads each company’s reviews from Bright Data, filters out crawl errors, and normalizes fields like employee type (current vs former) and rating dimensions.
4. Aligns all companies to the same comparable date window, calculates per-dimension averages only across reviews that answered each sub-rating, and identifies the dimension where your company trails the best competitor by the largest gap.
5. Sends the “cons” text from your company’s reviews for that weakest dimension to OpenAI to produce a short plain-language theme summary.
6. Builds a Slack scorecard message and a per-company, per-dimension table of metrics, appends the rows to Google Sheets, and posts the scorecard to the configured Slack channel.
7. If the workflow can’t produce a valid comparison or the run fails, it posts a failure/diagnostic message to Slack.

## Setup
1. Create a Bright Data Header Auth credential named `Authorization` with the value `Bearer YOUR_BRIGHT_DATA_KEY` and select it for the Bright Data HTTP requests.
2. Add an OpenAI credential/connection for the Chat model used to summarize review “cons”.
3. Add Google Sheets OAuth credentials and replace the spreadsheet URL/ID (and ensure the target sheet name exists, e.g. “Employer brand”) for the append step.
4. Add Slack credentials, set the target channel in the Settings values, and set the error-alert channel (default is `#alerts`) for failure notifications.
5. Update the Settings values with your Glassdoor “Reviews” URLs (ensure the employer ID after `-E` is correct), plus optional polling and lookback parameters.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
