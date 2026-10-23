# 🎬 Create local content draft ideas from RSS feeds to Google Sheets

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
A small, free n8n workflow that gives a local-service business a daily sheet of content ideas for its Google Business Profile and social posts — pulled from industry feeds you choose.

## How it works
1. Once a day (default 8:00am), the workflow runs on a schedule.
2. Reads an RSS feed you pick — a supplier blog, an industry association feed, or local news.
3. Turns each new item into a draft row: date, headline, source, link, and a suggested angle written for a local-service business.
4. Saves the drafts to a Google Sheet called 'Content Drafts'. Drafts are starting points, not finished posts — you write 2–3 sentences in your own words.

## Setup
1. Setup takes about 5 minutes: import the workflow into n8n and create a Google Sheet called 'Content Drafts'.
2. Add the headers Date | Headline | Source | Link | Suggested Angle | Status to the sheet.
3. Connect your Google account in the Sheets node, select the 'Content Drafts' spreadsheet, and replace the RSS feed URL with one relevant to your trade.

## Requirements
- n8n (free self-hosted or n8n Cloud) and a Google account for Sheets. No API keys, no paid services.

## 🔗 Nodes Used

Google Sheets, RSS Read, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
