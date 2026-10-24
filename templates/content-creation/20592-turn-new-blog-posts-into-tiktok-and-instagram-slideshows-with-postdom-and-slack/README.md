# 🎬 Turn new blog posts into TikTok and Instagram slideshows with Postdom and Slack approval

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow checks an RSS feed hourly for new blog posts, turns each post into a branded slideshow with Postdom, asks for approval in Slack, and on approval schedules the slideshow as a TikTok and Instagram post via Postdom.

## How it works
1. Checks your blog’s RSS feed every hour for new items.
2. Builds slideshow text from the post title and opening sentences and generates a caption and idempotency key.
3. Sends the slide content to Postdom to render a branded slideshow and polls Postdom until the render status is ready.
4. Posts the preview links and caption to a Slack channel and waits for an Approve or Decline decision.
5. If approved, fetches your connected Postdom social accounts and builds a scheduled post targeting the selected platforms.
6. Creates the post in Postdom for TikTok and Instagram and sends a confirmation message back to Slack with the posting status.

## Setup
1. Create a Postdom agent key and add it to n8n as an HTTP Header Auth credential (Authorization: Bearer …) used by all Postdom HTTP requests.
2. Connect your Slack credentials and select the channel used for the approval request and the confirmation message.
3. Replace the RSS feed URL in the RSS trigger with your blog feed.
4. In Postdom, connect your TikTok and Instagram accounts so they appear as connected accounts in the Postdom API.
5. Update the workflow settings for platforms, slide size, brand handle, TikTok privacy level, and the publish delay after approval.

## 🔗 Nodes Used

HTTP Request, Slack, RSS Feed Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
