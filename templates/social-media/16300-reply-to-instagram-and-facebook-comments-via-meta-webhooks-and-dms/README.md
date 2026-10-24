# 📱 Reply to Instagram and Facebook comments via Meta webhooks and DMs

> ⚡ **932 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow receives Meta webhooks for Instagram and Facebook Page comments, verifies the webhook subscription handshake, and then posts an optional public reply and/or sends a private DM to the commenter via the Meta Graph API.

## How it works
1. Receives an incoming webhook request from Meta for either verification (hub.challenge) or comment events.
2. Validates Meta’s subscription request by checking hub.mode and hub.verify_token, and returns the hub.challenge when verification is requested.
3. Acknowledges comment event deliveries with a 200 OK response so Meta considers the webhook successfully received.
4. Parses the webhook payload to extract new Instagram comments or Facebook Page feed comments, skipping self-comments and optionally filtering by a configured keyword.
5. Builds Meta Graph API requests for a public comment reply and a private reply DM based on your configured messages.
6. Sends the public reply and/or DM using HTTP requests to the Instagram Graph API or Facebook Graph API with your access token.

## Setup
1. Create a Meta app, enable Webhooks, and ensure you have the required permissions for Instagram (instagram_business_basic, instagram_business_manage_comments, instagram_business_manage_messages) and/or Facebook Pages (pages_manage_engagement, pages_read_engagement, pages_messaging).
2. In the Configuration (EDIT ME) step, set your access_token, choose a verify_token, and optionally set keyword, comment_reply, dm_message, and the Graph api_version.
3. Copy the Production webhook URL from the Webhook (Meta) trigger into the Meta Webhooks configuration, set the same verify_token, and subscribe to Instagram comments and/or Facebook Page feed comment events.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
