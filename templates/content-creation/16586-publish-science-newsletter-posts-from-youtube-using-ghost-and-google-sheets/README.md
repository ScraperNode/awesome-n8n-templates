# 🎬 Publish science newsletter posts from YouTube using Ghost and Google Sheets

> ⚡ **57 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns science keywords from Google Sheets into researched Ghost newsletter posts by discovering and screening YouTube videos with Apify, validating claims using Brave Search, storing sources in Qdrant with Cohere embeddings, drafting content with LLMs, and publishing via a custom Ghost HTTP endpoint.

## How it works
1. Runs either manually to qualify “FAIR GAME” keywords from Google Sheets or on a schedule to start the automated publishing pipeline.
2. Uses Brave Search with an LLM agent to research each keyword’s current context and writes a structured relevance, domain, and angle assessment back to the Keywords sheet.
3. On schedule, randomly selects an eligible keyword, uses Apify’s YouTube Scraper to fetch recent videos with English transcripts, and appends normalized candidates to the Candidate Videos sheet.
4. Scores each candidate’s virality from views, engagement, channel size, and publish age, marks rows as VIRAL or NOT VIRAL, and archives NOT VIRAL items to an Archive sheet.
5. Reviews VIRAL candidates with an editorial LLM agent to select exactly one evidence-worthy video (or reject all), updates statuses and reasoning in Google Sheets, and archives rejected videos.
6. For the selected video, discovers 5–8 supplementary sources via Brave Search, extracts readable text with Jina AI, embeds and upserts source chunks into Qdrant, and drafts a Ghost block-based article using the transcript plus Qdrant retrieval.
7. Queues the draft in a Blog Outputs sheet as PENDING, searches Brave Image results for each image placeholder, uses an LLM agent to pick acceptable images (or a fallback), patches the blocks, and publishes the final post and newsletter through the Ghost publisher HTTP endpoint.

## Setup
1. Create one Google Sheets spreadsheet with tabs for Keywords, Candidate Videos, Blog Outputs, and Archive, and ensure the header names match the workflow’s expected columns.
2. Add Google Sheets credentials and set up a Global Constants credential (n8n-nodes-globals) with your Sheet ID, tab names, n8n base URL, Qdrant base URL, GhostPublisherURL, BlogName (Qdrant collection), and a licensed FallbackImageURL.
3. Add credentials for Brave Search, Apify, Qdrant (REST and/or node), Cohere (embed endpoint), Jina AI, Redis (for agent memory), and at least one configured chat model provider used by the agents (OpenAI, Anthropic, and/or Mistral).
4. Deploy or configure the custom Ghost publishing/bridge endpoint referenced by GhostPublisherURL to accept the JSON payload (title, excerpt, status, visibility, feature_image, content, seo, newsletter).
5. Activate the workflow so the internal webhooks are reachable, and test safely by switching Ghost publishing to draft and disabling newsletter.send before enabling live delivery.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Schedule Trigger, AI Agent, Embeddings Cohere

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
