# 🎬 Repurpose blog articles into review-ready social packs with Telegram, gpt-6-luna and Google Sheets

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

## Description

Blog posts that turn into social packs a human still signs off on. This workflow takes article links from Telegram, blocks duplicate work with a stable content key, quality-checks the LinkedIn, X, newsletter, hook, and pull-quote copy, and queues every pack for review before the hourly sender delivers it.

*Last updated: September 2026.*

## Quick Overview
This workflow turns Telegram article links into quality-checked social packs, prevents duplicate work with a stable content key, queues every new pack for human review, and supports scheduled delivery plus a weekly Telegram digest. It uses gpt-6-luna, Google Sheets, and Telegram to make repurposing auditable instead of a one-off AI response.

## How it works
1. Receives an article URL in Telegram, normalizes it by removing tracking parameters and fragments, and creates a stable content_key.
2. Searches the Google Sheets Packs tab for that key. Duplicate requests receive the previous status and timestamp instead of generating another pack.
3. Fetches the article and retries once after 60 seconds for 408, 429, and 5xx errors. Other failures are logged to the Errors tab and reported in Telegram.
4. Generates LinkedIn, X, newsletter, hook, and pull-quote copy with gpt-6-luna, then safely parses and checks all required fields and channel limits. Failed quality checks get one AI repair pass before being logged as failed.
5. Appends valid packs to the Packs tab with pending_review status, a scheduled time, and reviewer notes, then sends a Telegram review preview.
6. Runs hourly to deliver approved packs whose scheduled_at time is due, then marks them delivered with delivered_at.
7. Runs every Sunday to combine Packs and Errors data, calculate weekly pack, failure, approval, delivery, per-day, and per-channel metrics, and send an AI-written Telegram digest.

## Setup
1. Create a Telegram bot, add its credentials to the Telegram trigger and all Telegram action nodes, and replace REPLACE_WITH_YOUR_CHAT_ID in Alert Digest Telegram.
2. Add OpenAI credentials for the three gpt-6-luna model nodes.
3. Create one Google Sheet and replace REPLACE_WITH_YOUR_SHEET_ID in every Google Sheets node. Add Packs columns: content_key, article_url, chat_id, hook, pull_quote, linkedin_post, x_post_1, x_post_2, x_post_3, newsletter_blurb, packed_at, status, scheduled_at, reviewer_notes, delivered_at. Add Errors columns: article_url, reason, logged_at.
4. Review new rows in Packs by changing status to approved and adjusting scheduled_at before the hourly queue runs. Keep submitted URLs publicly accessible.

### Quick Answers
**How are duplicate links handled?**
The URL is normalized to remove tracking parameters and fragments, then turned into a stable content_key. If that key is already in the Packs tab, the previous status and timestamp come back instead of another pack being generated.

**What happens if the article fetch fails?**
It retries once after 60 seconds for 408, 429, and 5xx errors. Other failures are logged to the Errors tab and reported in Telegram.

**What if the AI copy misses a channel limit?**
Every generated field is parsed and checked against the required fields and channel limits, and a failed quality check gets one AI repair pass before being logged as failed.

**How does a pack get published?**
Valid packs land in the Packs tab as pending_review with a scheduled time and reviewer notes. An hourly run delivers approved packs whose scheduled_at is due and marks them delivered.

**Is there a weekly report?**
Every Sunday the Packs and Errors data is combined into weekly pack, failure, approval, delivery, per-day, and per-channel metrics and sent as an AI-written Telegram digest.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
