# 📊 Send a weekly Plausible analytics digest to Telegram chat

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs every Monday (or manually) to query Plausible Analytics for top pages, new referrers, and potential content decay, then formats a weekly digest and sends it to a Telegram chat.

## How it works
1. Runs every Monday at 8:00 AM or starts on demand via a manual trigger.
2. Sets the Plausible site ID, Plausible base URL, and the target Telegram chat ID.
3. Queries the Plausible API for the last 7 days’ top pages and prepares a top-5 list by visitors.
4. Queries Plausible for referrers for the last 7 days and the previous week, then identifies referrers that appear this week but not last week.
5. Queries Plausible for per-page visitors for the last 7 days and for a week 4 weeks ago, then flags pages with significant traffic drops.
6. Combines the insights into a Markdown message and sends the digest to Telegram.

## Setup
1. Add a Plausible API key as an HTTP Bearer Auth credential and ensure the workflow points to your Plausible instance URL.
2. Update the workflow variables with your Plausible `site_id`, `plausible_url`, and the destination `telegram_chat_id`.
3. Add Telegram credentials and ensure the bot can post to the target chat (start a chat with the bot or add it to the group).
4. Adjust the schedule trigger timing if you want the digest to run at a different day or time.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
