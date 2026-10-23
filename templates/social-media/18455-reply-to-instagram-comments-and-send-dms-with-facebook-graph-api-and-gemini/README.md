# 📱 Reply to Instagram comments and send DMs with Facebook Graph API and Gemini

> ⚡ **196 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives Instagram webhook events, generates public comment replies and optional follow-up DMs using Google Gemini, posts replies via the Facebook Graph API, and logs activity to Slack and Google Sheets.

## How it works
1. Receives a webhook request from Meta and returns the verification challenge when Meta validates the subscription.
2. Acknowledges incoming events and ignores events created by your own Instagram account to prevent reply loops.
3. For comment events, fetches the related Instagram media caption via the Facebook Graph API and uses Google Gemini to draft a one-line public reply (or `no_answer`) based on the comment and post context.
4. If a reply is needed, waits a random 3–5 minutes, posts the public reply back to the original comment via the Facebook Graph API, then notifies a Slack channel and updates a “last run” timestamp in Google Sheets.
5. If the generated public reply contains the keyword “DM”, uses Google Gemini to draft a private DM and sends it via the Facebook Graph API, then logs the DM content to Slack.
6. For story mention events, sends a notification to a dedicated Slack channel.

## Setup
1. Create a Meta webhook subscription for Instagram, copy the n8n webhook URL into Meta, and set the webhook path and verification token values in the workflow to match your Meta configuration.
2. Add a Facebook/Instagram Graph API credential with permissions to read media, reply to comments, and send messages, and set your Facebook Page ID where required.
3. Add Google Gemini credentials for both AI steps and customize the brand/product placeholders in the system prompts (brand name, tone, forbidden words, product catalog, links, delivery rules, and your own Instagram username).
4. Add Slack credentials and set the target channels (for example `#ai-kommentare` and `#mentions`).
5. Add Google Sheets credentials, set your spreadsheet ID/sheet tab, and ensure the sheet has matching columns for `Id` and `Letzter_Run`.

## Requirements
- Meta/Facebook Business account with an Instagram Professional (Business or Creator) account linked to a Facebook Page.
- A Meta app with Instagram webhooks enabled and a long-lived access token holding instagram_basic, instagram_manage_comments, instagram_manage_messages and pages_show_list permissions.
- Facebook Graph API credential in n8n (the workflow calls Graph API v23.0).
- Google Gemini (PaLM) API credential for both AI Agent nodes.
- Slack credential (bot token) with chat:write and access to the target channels. (this is optional)
- Google Sheets OAuth2 credential and a sheet containing the columns Id and Letzter_Run.(this is optional)
- An n8n instance reachable over a public HTTPS URL, since Meta must be able to call the webhook (localhost or n8n test URLs will not work).

## Customization
- Replace every placeholder in the system prompts: brand name, region, tone of voice, allowed emojis, forbidden words, product catalog with prices, delivery areas, FAQ facts and UTM parameters.
- Change the trigger keyword: the workflow uses the word DM inside the public reply as the signal to start the DM branch — use any other keyword by editing the prompt and the IF node.
- Adjust the human-like delay in the Wait node (currently a random 3–5 minutes) or remove it for instant replies.
- Swap Slack for another notification channel (email, Telegram, Discord) or remove the logging nodes entirely if you do not need an audit trail.
- Replace Google Sheets with Airtable, Postgres or NocoDB, or drop the node if you do not need a "last run" heartbeat.
- Extend the Story-mention branch to send an automatic thank-you DM instead of only posting a Slack notification.
- Switch the Gemini model, or replace it with OpenAI/Anthropic chat model nodes without changing the rest of the logic.
- Tighten or loosen the no_answer rules in the prompt to control how often the bot stays silent.

## Additional info
Placeholders to replace before activating: DEIN-WEBHOOK-PFAD-1 (webhook path), DEIN_VERIFY_TOKEN (Code node), DEIN_ACCOUNT_USERNAME (loop protection IF node), DEINE_FACEBOOK_PAGE_ID (DM node), DEINE_GOOGLE_SHEET_ID (Google Sheets node) and the Slack channels #ai-kommentare / #mentions.
The webhook uses two methods: GET returns the hub.challenge for Meta's subscription verification, POST receives the actual events and immediately answers with OK so Meta does not retry.
Loop protection: comments coming from your own Instagram username are filtered out, so the bot never replies to itself.
The AI prompts are written in German but instruct the model to always answer in the language of the incoming comment — the bot works multilingual out of the box.
Meta allows only one private reply per comment, and it must be sent within 7 days of the comment; the DM node uses recipient.comment_id for exactly that.
The Wait node relies on n8n resuming executions, so keep execution data saving enabled on your instance.
Both AI Agents use a memory buffer keyed by the commenter's Instagram user ID, so repeated comments from the same person stay in context.
Start with the workflow inactive and test with a real comment on a test post before going live — AI replies are posted publicly without manual approval.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Facebook Graph API, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
