# 📈 Send commodity investment briefings from CNBC RSS with Gemini and Slack

> ⚡ **53 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow pulls commodity-related headlines from the CNBC RSS feed, filters and ranks the most relevant items, uses Google Gemini to generate an actionable commodity investment briefing, and posts the briefing to a Slack channel with error notifications if the RSS fetch or AI step fails.

## How it works
1. Runs manually and reads the latest items from the CNBC News RSS feed.
2. Extracts the key fields (title, link, description, date) and removes duplicate articles by title.
3. Filters for commodity and macro keywords (for example oil, crude, gold, inflation), excludes blacklisted terms, and assigns a relevance score to each remaining item.
4. Sorts the news by score, keeps the top three articles, and combines them into a single text block for analysis.
5. Sends the combined news to Google Gemini to generate a daily briefing with key drivers, market impact, investor actions, and supporting commodity price/trend data.
6. Formats the Gemini output and posts it to a selected Slack channel, or sends a Slack alert if the RSS feed fetch or Gemini request errors.

## Setup
1. Add a Google Gemini (Google PaLM) API credential and select the model you want to use.
2. Add a Slack OAuth credential and choose the channel where the briefing and error alerts should be posted.
3. Confirm the CNBC RSS feed URL is correct and customize the keyword/blacklist lists and scoring logic to match the commodities you track.
4. Replace the manual trigger with a Schedule trigger if you want the briefing to run automatically (for example daily each morning).

## 🔗 Nodes Used

RSS Read, Slack, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
