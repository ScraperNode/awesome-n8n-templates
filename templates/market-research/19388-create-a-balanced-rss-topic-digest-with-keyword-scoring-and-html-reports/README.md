# 📊 Create a balanced RSS topic digest with keyword scoring and HTML reports

> ⚡ **7 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs manually or every morning to read three configurable RSS feeds, filter and deduplicate recent articles, score headlines against your keywords with a freshness boost, and generate a downloadable HTML digest that includes a balanced shortlist plus source health details.

## How it works
1. Runs either on a manual trigger or daily at 08:00 (Europe/Warsaw).
2. Reads three RSS/Atom feeds and labels each item with its source, keeping failures and empty feeds for reporting.
3. Combines all feed results, validates links and publication dates, strips common tracking parameters, and keeps only articles within the configured lookback window.
4. Deduplicates stories within the current run by normalized URL and title.
5. Scores each headline against your comma-separated topics (and optional excluded words), adds a freshness bonus, and filters out items below the minimum score.
6. Selects a balanced shortlist by applying a per-publisher cap and an overall story limit.
7. Builds an HTML report with ranked links, scoring reasons, and feed health/warnings, then outputs it as a downloadable HTML file.

## Setup
1. Update the three RSS feed URLs, topic keywords, lookback window, and limits in the “Choose topics and limits” step.
2. If you use the scheduled run, confirm the timezone and adjust the cron schedule as needed.
3. Run the workflow manually once and download the HTML from the final step’s binary output, and enable saving successful executions if you want to retrieve scheduled reports later.

## 🔗 Nodes Used

RSS Read, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
