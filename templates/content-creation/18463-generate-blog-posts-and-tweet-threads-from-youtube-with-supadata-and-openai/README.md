# 🎬 Generate blog posts and tweet threads from YouTube with Supadata and OpenAI

> ⚡ **40 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a YouTube video URL via an n8n form, fetches the video transcript from Supadata (with async polling for longer videos), and uses OpenAI to generate a standalone blog post and a 5–8 tweet thread from the same transcript.

## How it works
1. Receives a YouTube URL submitted through an n8n form trigger.
2. Requests the transcript from the Supadata Transcript API and continues even if the request returns an error.
3. If Supadata returns an async job ID, waits briefly and polls Supadata until the transcript job completes or fails.
4. Extracts the transcript text (or an error message) and truncates it to 8,000 characters.
5. Sends the transcript to OpenAI to write a 600–900 word blog post with a title, sections, and a closing takeaway.
6. Sends the same transcript to OpenAI to generate a numbered 5–8 tweet thread, keeping each tweet under 280 characters.

## Setup
1. Create a Supadata account and add an HTTP Header Auth credential with header name `x-api-key` set to your Supadata API key, then select it in the Supadata transcript request and polling steps.
2. Add OpenAI credentials and ensure the OpenAI Chat Model node is authenticated.
3. Review and adjust the prompts for the blog post and tweet thread outputs to match your tone, length, and formatting preferences.

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
