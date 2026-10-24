# 📊 Monitor brand news and send AI-prioritized digests with Gemini, Sheets, Slack and Gmail

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs on a schedule to monitor Google News RSS for multiple brand keywords, deduplicates results against a Google Sheets log, analyzes articles with Google Gemini, and sends an important-news digest to Slack and Gmail.

## How it works
1. Runs on a schedule and loads the existing news log from Google Sheets to use as a deduplication reference.
2. Builds Google News RSS search URLs for each configured keyword and fetches the RSS feeds over HTTP.
3. Parses RSS XML into structured article items (title, description, URL, source, published date) and drops items missing key fields.
4. Removes duplicates by comparing each article’s URL and a generated hash against the existing Google Sheets log.
5. Sends each remaining article to Google Gemini to generate a JSON analysis including summary, sentiment, importance, score, and reason, then merges the AI results back into the article data.
6. Filters for important items (High/Medium importance or score above the threshold), appends them to Google Sheets, and compiles a plaintext digest.
7. Posts the digest to a Slack channel and emails the same digest via Gmail.

## Setup
1. Connect your Google Sheets credentials and update the spreadsheet and sheet to match your news log columns (keyword, title, description, url, source, publishedAt, summary, sentiment, importance, score, hash, processedAt).
2. Add a Google Gemini (PaLM) API credential and ensure the selected Gemini model is available in your account.
3. Add Slack credentials and select the channel where the digest should be posted.
4. Add Gmail credentials and set the recipient address used to receive the digest.
5. Update the keyword list (and any locale settings) used to generate the Google News RSS search URLs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
