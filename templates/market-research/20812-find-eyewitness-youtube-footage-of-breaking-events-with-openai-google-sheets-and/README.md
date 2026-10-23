# 📊 Find eyewitness YouTube footage of breaking events with OpenAI, Google Sheets and Telegram

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Help your newsroom be first to credible eyewitness footage. During a breaking event, this automation keeps watch on YouTube and sends editors only the clips worth checking, earliest upload first, so they can contact the original creator and verify faster.

## How it works
1. Receives an editor’s form submission to open an event window with one or more YouTube search queries and a monitoring duration.
2. Appends the event window to the Google Sheets “Events” tab and posts an “event opened” message to Telegram.
3. Runs every 15 minutes, reads the “Events” and “Footage Log” tabs from Google Sheets, and plans searches for each active event while respecting credit and paging limits.
4. Queries YouTube through the RecentReborn search API (optionally paging), stops early when daily quota is low, and collects new video results not already logged.
5. Scores and categorizes new videos using keyword rules and (optionally) an OpenAI chat model to label titles as eyewitness, news reupload, commentary, or unrelated and to flag likely copies.
6. Appends all new videos to the Google Sheets “Footage Log” tab, updates counters and closes expired or deactivated events in the “Events” tab.
7. Sends a Telegram digest with new eyewitness candidates and problems for the run, and posts a wrap-up summary when an event window closes.

## Setup
1. Create a Google Sheet with tabs named “Events” and “Footage Log” and matching column headers expected by the workflow.
2. Add credentials for Google Sheets OAuth2, Telegram (bot token), and HTTP Header Auth for the RecentReborn API (Authorization: Bearer …).
3. Add an OpenAI API credential if you keep AI labeling enabled (set useAi to false in the config to run rules-only).
4. In the configuration values, set sheetUrl to your Google Sheet URL and telegramChatId to the chat that should receive digests and alerts.
5. Activate the workflow and use the form URL (path: /eyewitness-event-window) to start an event window and begin monitoring.

## Requirements
- A RecentReborn API account (app.recentreborn.com) with an API key

## Additional info
Visit https://recentreborn.com/developers for more tutorials and templates.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
