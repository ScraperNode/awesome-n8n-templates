# 📱 Schedule Instagram posts at optimal times with Rubinyun

> ⚡ **5 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow uses Rubinyun via HTTP requests to pick an optimal posting time based on your Instagram account’s engagement history, then queues an Instagram post (image by default) to be published at that scheduled time.

## How it works
1. Runs when you manually execute the workflow.
2. Calls the Rubinyun API to calculate the best upcoming time slot to post (based on your account’s historical performance and current queue).
3. Sends the post details (type, image URL, caption, and the suggested scheduled time) to Rubinyun to add the post to the publishing queue.

## Setup
1. Create a Rubinyun account at chrononyte.com/projects/rubinyun, connect your Instagram Business or Creator account (linked to a Facebook Page), and copy your Rubinyun API key and secret.
2. In n8n, create an HTTP Header Auth credential with header name `Authorization` and value `Key YOUR_KEY:YOUR_SECRET`, and select it in both Rubinyun HTTP Request steps.
3. Update the post fields in the scheduling request (at minimum `image_url`, `caption`, and optionally `type` and `channel`) to match what you want to publish.

## Requirements
- An Instagram Business or Creator account linked to a Facebook Page.

## Customization
- Set type to carousel, reel or story instead of image, pass channel to publish on a second Instagram profile, or enable the optional upload node when you have a file and no public URL for it.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
