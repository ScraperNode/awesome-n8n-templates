# 📊 Monitor RSS feeds and send new items to Slack and Google Sheets with Apify

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs hourly to monitor RSS/Atom feeds (or auto-discovered website feeds) via Apify, logging newly found items and feed errors to Google Sheets and posting a single digest message to a Slack channel.

## How it works
1. Runs every hour on a schedule.
2. Loads the list of feed or website URLs plus optional include/exclude keywords and a state name used to track already-seen items.
3. Uses the Apify actor “RSS Feed Monitor: New Items + Full-Text Markdown” to fetch only new feed items since the last run and return any feed-read errors.
4. Normalizes results into one record per new item or per feed error with consistent fields like title, link, timestamps, and summary.
5. Appends all new item and error records to a Google Sheets tab to maintain a historical log.
6. Builds a single Slack digest summarizing up to 15 new items and listing any feeds that failed.
7. Posts the digest message to the selected Slack channel.

## Setup
1. Create an Apify account, add your Apify API token as an n8n Apify credential, and ensure the workflow can run the actor `pewterdesk~rss-feed-monitor-full-text`.
2. Update the feed/site URLs, optional include/exclude keyword arrays, and the `stateName` value so each monitor has its own memory.
3. Connect Google Sheets OAuth credentials, paste your spreadsheet URL/ID into the Google Sheets node, and create a sheet tab named `Feed log`.
4. Connect Slack OAuth credentials and set the target channel (or remove the Slack steps if you only want Google Sheets logging).

## Requirements
- Apify account (free) and API token
- A Google Sheet with a tab named Feed log
- A Slack channel (or delete the Slack node)

## Customization
- Want the backlog on the first run? Change firstRunMode to 'return_all' in the Apify node
- Filter by topic: fill includeKeywords / excludeKeywords (whole-word, case-insensitive)
- Need full article text for an AI summary step? Add fetchFullText: true to the Apify node and read contentMarkdown from the results
- Swap Slack for email, Discord or Teams

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
