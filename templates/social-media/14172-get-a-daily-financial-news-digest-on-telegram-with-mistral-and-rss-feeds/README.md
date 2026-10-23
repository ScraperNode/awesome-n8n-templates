# 📱 Get a daily financial news digest on Telegram with Mistral and RSS feeds

> ⚡ **377 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Description

Automatically fetch, rank, and summarize the top financial stories from curated RSS feeds each day, then deliver a concise AI-written digest to Telegram and log the run to Google Sheets.

## What This Template Does

- Runs on a daily schedule and reads 8 curated financial RSS feeds.
- Loops through each feed with the native RSS Read node to pull recent articles.
- Tags each article with source name and source tier for ranking.
- Scores and ranks stories by source quality, recency, and finance-related keyword relevance.
- Sends the top stories to NVIDIA NIM using Mistral Large 3 to generate a concise digest.
- Builds a Telegram-ready message with a customizable header and footer.
- Sends the digest to a Telegram personal chat or public channel.
- Logs successful runs to `Digest_Log` and delivery failures to `Error_Log` in Google Sheets.

## Key Benefits

- Free-tier-friendly setup using NVIDIA NIM, Telegram Bot API, and Google Sheets.
- Easy to adapt for other niches by changing RSS feeds, ranking logic, and branding.
- Reduces manual news scanning by producing a concise daily digest automatically.
- Works for both personal use and public Telegram channel delivery.
- Includes logging for both successful runs and delivery failures.

## Features

- 8 pre-configured financial RSS feeds with tier-based scoring.
- Native n8n RSS Read node for feed ingestion.
- NVIDIA NIM integration using Mistral Large 3 via HTTP Header Auth.
- Customizable digest header and footer in a single Code node.
- Google Sheets logging with `Digest_Log` and `Error_Log` tabs.
- Error handling for Telegram delivery failures.

## Requirements

- An n8n instance.
- A NVIDIA NIM API key.
- A Telegram bot token and a chat ID or channel username.
- A Google account with Google Sheets OAuth connected in n8n.

## Target Audience

- Investors and traders who want a curated daily briefing.
- Finance professionals tracking market-moving news.
- Founders and operators monitoring business and macro signals.
- No-code builders creating niche Telegram digest workflows.
- Agencies building white-label news automations.

## Step-by-Step Setup Instructions

- Create a HTTP Header Auth credential for NVIDIA NIM:
  - Header name: `Authorization`
  - Value: `Bearer YOUR_NVIDIA_API_KEY`
- Create a Telegram bot with @BotFather and get your chat ID or channel username.
- Open `RSS Feed Config1` and set:
  - `telegramBotToken`
  - `telegramChatId`
  - `googleSheetId`
  - any RSS feeds you want to add or replace
- Create a Google Sheet with two tabs:
  - `Digest_Log`
  - `Error_Log`
- Connect Google Sheets OAuth in n8n.
- Run the workflow manually once before activating the schedule.
- Confirm one successful run appears in `Digest_Log`.
- Trigger one failure test and confirm a row appears in `Error_Log`.

**Built by Cordexa Technologies**  
https://cordexa.tech  
cordexatech@gmail.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
