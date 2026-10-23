# 🎫 Respond to Google reviews and send weekly digests with DeepSeek, Sheets, Discord and Gmail

> ⚡ **19 views** · 🎫 [Ticket Management & Triage](../)

## Description

Never let a review sit unanswered. This workflow takes customer reviews from a webhook, has AI draft a reply, logs everything to Sheets, and alerts your team. Negative reviews get routed to the owner for approval, and Mondays bring a weekly digest of it all.

*Last updated: September 2026.*

## Quick Overview
This workflow receives customer reviews via webhook, uses DeepSeek (via OpenAI) to draft reply text, logs everything to Google Sheets, and notifies your team in Discord and Gmail; it also generates and sends a weekly review digest on a schedule.

## How it works
1. Receives a review payload via an HTTP POST webhook and normalizes fields like business name, reviewer, rating, and review text.
2. Validates that required fields are present and the rating is between 1 and 5, then alerts Discord and emails a Gmail notice if the payload is invalid.
3. Sends the review data to DeepSeek (via OpenAI) to generate a JSON response containing sentiment, a 2–4 sentence draft reply, and a human-review flag.
4. Parses the AI output and appends the review plus the draft response and metadata to a Google Sheets “Reviews” log.
5. Posts the review and draft response to Discord, and if the review is negative (rating ≤ 2 or negative sentiment) also emails the draft to the owner in Gmail for approval.
6. Runs every Monday, reads the Google Sheets log, computes weekly stats, and posts an “all clear” message to Discord if there are no reviews.
7. If there are reviews, uses DeepSeek (via OpenAI) to write a short weekly digest, then emails it via Gmail and posts it to Discord.

## Setup
1. Configure the source system (for example, Google Business Profile export, a form, or another integration) to send review data to the workflow’s webhook URL.
2. Add an OpenAI API credential (used to call the DeepSeek model) for both the response-drafting and weekly-digest steps.
3. Connect Google Sheets OAuth credentials and update the spreadsheet document ID and ensure a sheet named “Reviews” exists with the expected columns.
4. Connect a Discord bot credential and set the target server (guild) and channel IDs for the review alerts and weekly digest posts.
5. Connect Gmail OAuth2 credentials and update the recipient email addresses used for invalid review notices, negative-review approvals, and the weekly digest.

### Quick Answers
**What happens with bad reviews?**  
Rating 2 or below (or negative sentiment) routes the draft to the owner by email for approval first.  
**Is there a weekly summary?**  
Yes. Every Monday: stats plus an AI-written digest, or an all-clear message when empty.  
**What if the payload is broken?**  
Discord gets an alert and Gmail sends a notice so it can be fixed.  

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Webhook, Discord, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
