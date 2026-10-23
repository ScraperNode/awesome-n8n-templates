# 📊 Append Webz.io news search results to Google Sheets

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs a Webz.io news search from a manual trigger and appends the returned articles as new rows in Google Sheets with key fields like title, URL, publish date, score, and excerpt.

## How it works
1. Starts when you run the workflow manually.
2. Defines the news search query, result limit, lookback window (days), and target Google Sheet details.
3. Searches Webz.io for matching news articles (with a language filter) and returns one item per article.
4. Appends each article to Google Sheets, writing the query, title, URL, published date, score, and excerpt into columns.

## Setup
1. Install the community node `n8n-nodes-webz-news-search` in your n8n instance.
2. Add a Webz.io News Search API credential using your Webz.io token.
3. Add a Google Sheets OAuth2 credential and ensure you have a spreadsheet and tab to append rows into.
4. Update the Settings values, especially the search query, lookback days, result limit, Google Sheet ID, and sheet/tab name.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
