# 📱 Schedule YouTube Shorts to Pinterest with Apify, Gemini, and an OpenAI model

> ⚡ **30 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives YouTube Shorts webhook events, downloads the video via Apify, uses Google Gemini and an OpenAI-compatible chat model to generate Pinterest SEO metadata and choose a board, then schedules a Pinterest video pin through Zernio (Late) for publishing.

## How it works
1. Receives a webhook request for YouTube PubSubHubBub verification and responds with the provided hub challenge.
2. Receives a POST webhook event for a new YouTube video and extracts the title, video ID, channel ID, and video URL from the feed payload.
3. Uses Apify to fetch and process the YouTube Short and returns a downloadable MP4 URL.
4. Sends the video to the Google Generative Language (Gemini) API to generate an analysis used for Pinterest-focused metadata.
5. Uses a LangChain LLM chain (with structured output validation) to produce a Pinterest-ready title, description, hashtags, and a board selection from a fixed list.
6. Maps the selected board name to a Pinterest board ID and schedules the video post to Pinterest via the Zernio (Late) API.

## Setup
1. Create the YouTube webhook/PubSubHubbub subscription and configure it to call this workflow’s webhook URL at the `manga-monarch-webhook` path for both verification and POST notifications.
2. Add Apify API credentials and ensure the configured actor (UUhJDfKJT2SsXdclR) is available in your Apify account.
3. Add Google Palm/Gemini API credentials for the Google Generative Language request and the Gemini chat model.
4. Add an OpenAI-compatible API credential for the chat model used by the LangChain step.
5. Add Zernio (Late) API credentials and replace the hardcoded Pinterest `accountId` and board ID mapping values with your own Pinterest account and board IDs.

## 🔗 Nodes Used

HTTP Request, Webhook, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
