# 🎬 Create UGC-style Instagram Reels from product URLs with OpenAI, Sisif, and Slack

> ⚡ **56 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Paste a product page URL and get three UGC-style 9:16 video ad variants rendered by Sisif (https://sisif.ai/product-ads/), plus a hook, script and caption. Reviewers pick the winner in Slack, and the approved video is published as an Instagram Reel.

## How it works
1. Receives a product URL from an n8n form trigger or a POST webhook request.
2. Fetches the product page HTML and extracts the title, description, and cleaned page text.
3. Uses OpenAI to generate a UGC-style hook, short script, Instagram caption, and three distinct visual prompts.
4. Sends each prompt to Sisif to generate a 5-second 720×1280 video, polling Sisif for completion up to 40 times.
5. Posts the available video variant links to Slack and waits for a reviewer to choose a variant or reject.
6. If a variant is approved, creates an Instagram Reels media container via the Facebook Graph API, polls until processing is finished, and then publishes the Reel.

## Setup
1. Create a Sisif API key at https://sisif.ai/users/api-keys/ and save it in n8n as an HTTP Bearer Auth credential for the Sisif generate and status-check requests.
2. Add an OpenAI API credential (or replace the chat model) for the ad hook, script and caption generation.
3. Connect Slack OAuth credentials and select the channel where the approval message is posted.
4. Add Facebook Graph API credentials with permissions to publish Reels (including `instagram_basic` and `instagram_content_publish`) for an Instagram Business/Creator account linked to a Facebook Page.
5. Replace `YOUR_IG_USER_ID` in the workflow settings with your Instagram User ID (and adjust the Graph API version if needed), then test by submitting the form or calling the webhook.

## Requirements
- A Sisif API key from https://sisif.ai/users/api-keys/, an OpenAI account, a Slack workspace, and an Instagram Business or Creator account linked to a Facebook Page with Graph API access.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Stop and Error, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
