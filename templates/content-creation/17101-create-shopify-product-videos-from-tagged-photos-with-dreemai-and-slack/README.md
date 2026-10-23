# 🎬 Create Shopify product videos from tagged photos with Dreem.ai and Slack

> ⚡ **97 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns a product photo into a short product video with Dreem AI. Tag a product dreem-video in Shopify and the finished clip arrives in Slack for approval, then lands in the product's media.



## How it works
1. The workflow fires when a product update carries the tag dreem-video. The tag is swapped immediately so the workflow cannot re-trigger itself.
2. The Dreem node animates the product's newest image into a 5-10 second video. Use an on-model photo for best results.
3. Dreem renders in the background (up to 20 minutes) and calls the workflow back.
4. The video link posts to Slack with Upload / Skip buttons. No click within 12 hours counts as Skip - nothing reaches the store without a yes.
5. Posts the finished video link to Slack and sends an approval message with buttons to either upload the video to Shopify or skip.
6. If approved, downloads the video file, creates a staged Shopify upload via the Shopify Admin GraphQL API, uploads the video to the staged target, and attaches it to the product’s media.
7. If rendering times out or does not complete, posts a timeout message to Slack and stops without uploading anything to Shopify.

## Setup
1. Add a Shopify Admin access token credential with `read_products` and `write_products` permissions and select it for the Shopify trigger and product update steps.
2. Add a Dreem.ai API key credential and choose the prompt and duration settings you want for video generation.
3. Add a Slack OAuth2 credential, set the target channel for both Slack messages, and ensure approvers can interact with message buttons.
4. Replace `https://YOUR-STORE.myshopify.com` with your actual Shopify domain in both Shopify GraphQL HTTP requests.
5. Tag a product with `dreem-video` and ensure the newest product image is the one you want to use as the video’s first frame.

## Requirements
- Dreem account + API key, Shopify store with Admin API access, Slack (required, for the approval step)

## Customization
- Change the motion prompt, duration, and dimensions (9:16 for Reels/TikTok) on the Dreem node, or rename the trigger tag.

## 🔗 Nodes Used

HTTP Request, Slack, Shopify Trigger, Shopify

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
