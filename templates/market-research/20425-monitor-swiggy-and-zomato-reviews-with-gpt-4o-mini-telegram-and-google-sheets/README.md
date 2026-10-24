# 📊 Monitor Swiggy and Zomato reviews with GPT-4o-mini, Telegram, and Google Sheets

> ⚡ **24 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow monitors Swiggy and Zomato reviews via an HTTP feed polled every 30 minutes or a webhook, uses OpenAI to analyze sentiment and draft replies, logs results to Google Sheets, and sends Telegram/Gmail alerts for critical reviews plus a weekly dish-level sentiment report.

## How it works
1. Triggers every 30 minutes to fetch reviews from an HTTP endpoint or receives pushed reviews via a webhook.
2. Normalizes incoming Swiggy/Zomato payloads into a consistent review format with IDs, ratings, text, dates, and ordered items.
3. Loads previously logged review IDs and your menu from Google Sheets, then filters out duplicates and attaches the menu list for dish matching.
4. Sends each new review and menu context to OpenAI (gpt-4o-mini) to classify sentiment/urgency, extract dish mentions and issues, and generate a suggested public reply and internal action.
5. Writes one row per review to the Google Sheets “Reviews Log” tab and one row per dish mention to the “Dish Mentions” tab.
6. Sends critical reviews (low rating or high urgency) to Telegram and escalates them via Gmail, while non-critical reviews are posted to Telegram as ready-to-paste reply drafts.
7. Every Monday at 9 AM, reads the last two weeks from Google Sheets, aggregates week-over-week platform and dish sentiment, uses OpenAI to write insights, emails the full HTML report via Gmail, posts a Telegram summary, and archives the report to the “Weekly Reports” tab.

## Setup
1. Create a Google Sheets file with tabs named “Reviews Log”, “Dish Mentions”, and “Weekly Reports”, and a separate menu sheet (for example “Menu”) that includes a dish name column (for example `dish_name`).
2. Add credentials in n8n for Google Sheets, Gmail, Telegram (bot token), OpenAI, and (if using the poller) HTTP Header Auth for your review-feed endpoint.
3. Update the configuration values in “Set Monitor Config” and “Set Report Config” (sheet IDs, menu sheet ID, Telegram chat ID, escalation/owner email addresses, brand voice, and thresholds).
4. If using the webhook intake, copy the webhook URL from “Receive Reviews via Webhook” and configure your review source to POST reviews to `/restaurant-reviews`.
5. Replace `https://YOUR-REVIEW-FEED.example.com/reviews?since=last_30_min` with your real review-feed URL if using the scheduled poll.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
