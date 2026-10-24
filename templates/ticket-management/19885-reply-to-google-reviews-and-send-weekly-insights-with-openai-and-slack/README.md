# 🎫 Reply to Google reviews and send weekly insights with OpenAI and Slack

> ⚡ **55 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors new Google Business Profile reviews, uses OpenAI to draft replies and tag a single root-cause category, routes complaint replies to Slack for approval, logs every review to Google Sheets, and emails a weekly Gmail report summarizing the fixable issue that cost the most stars.

## How it works
1. Polls Google Business Profile hourly for new reviews and ignores any reviews that already have an owner reply.
2. Normalizes each review into consistent fields (ID, author name, date, star rating number, and review text).
3. Uses OpenAI to generate a short draft reply plus sentiment, a single root-cause tag, optional staff name, and a brief complaint summary.
4. Logs the enriched review (including fixable flag and reply status) to a Google Sheets review log.
5. Automatically posts the reply back to Google Business Profile for 4–5 star reviews tagged as having no complaint, and sends all other drafted replies to Slack for approve/decline.
6. Posts the approved reply to Google Business Profile when the owner approves it in Slack.
7. Every Monday at 9 AM, reads the last 7 days of the Google Sheets log, calculates stars lost (5 minus rating) by fixable root-cause tag, uses OpenAI to write a short HTML insight, and emails it to the owner via Gmail.

## Setup
1. Connect credentials for Google Business Profile (OAuth2), OpenAI (API key), Google Sheets (OAuth2), Slack (OAuth2), and Gmail (OAuth2).
2. Select your Google Business Profile account and location in both the review trigger and the node that posts replies.
3. Create a Google Sheet with the required headers (review_id, review_name, review_date, reviewer, star_rating, review_text, sentiment, root_cause, staff_mentioned, fixable, complaint_summary, draft_reply, reply_status) and select its document and sheet in both Google Sheets nodes.
4. Update the OpenAI system prompt placeholders (for your business name and contact email), choose the Slack channel for approvals, and set the owner’s email address in the Gmail node.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, OpenAI, Google Business Profile

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
