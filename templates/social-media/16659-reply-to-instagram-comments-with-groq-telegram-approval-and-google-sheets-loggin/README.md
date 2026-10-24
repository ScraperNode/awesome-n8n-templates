# 📱 Reply to Instagram comments with Groq, Telegram approval, and Google Sheets logging

> ⚡ **155 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow monitors new Instagram comments, generates a draft reply with Groq (OpenAI-compatible chat completions), sends it to Telegram for YES/NO approval, and logs the decision in Google Sheets before optionally posting the approved reply back to Instagram.

## How it works
1. Runs every 10 minutes, reads existing comment IDs from Google Sheets, then fetches your 10 most recent Instagram media items and their comments via the Instagram Graph API.
2. Filters out comments made by your own Instagram account and limits processing to recent comments.
3. Skips any comment already logged in Google Sheets, and sends new comments (with the post caption as context) to Groq to generate a short draft reply.
4. Sends the draft reply to a Telegram chat for approval and appends a “pending_review” row to Google Sheets with the Telegram message ID for tracking.
5. Runs every 3 minutes, polls the Telegram Bot API for new updates, and keeps an offset so only new messages are processed.
6. For Telegram messages that are replies to an approval request, matches the replied-to message ID to the pending row in Google Sheets and routes the decision.
7. If the reviewer replies YES, posts the draft as an Instagram comment reply and marks the row approved in Google Sheets; if NO, marks the row rejected without posting to Instagram.

## Setup
1. Create an Instagram Graph API access token with permissions to read media/comments and post comment replies, and make sure the workflow’s Instagram HTTP requests receive the correct access_token value.
2. Provide a Groq API key as an n8n environment variable named token (used in the Authorization header) or update the request to use your preferred LLM provider and credential method.
3. Set up a Telegram bot, replace YOUR_BOT_TOKEN in the getUpdates URL, and update the target Telegram chat ID in the approval message step.
4. Connect Google Sheets credentials and update the spreadsheet/document ID and sheet/tab so it contains columns for comment_id, telegram_message_id, status, created_at, and resolved_at.
5. Update the “Exclude Self Comments” filter to match your Instagram username (and optionally your account ID) so the workflow doesn’t respond to your own comments.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
