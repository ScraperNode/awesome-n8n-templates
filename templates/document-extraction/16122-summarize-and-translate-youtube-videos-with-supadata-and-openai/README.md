# 🔬 Summarize and translate YouTube videos with SupaData and OpenAI

> ⚡ **53 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow collects a YouTube URL via an n8n form, retrieves the video transcript and metadata using Supadata, then uses OpenAI to generate a summary, key points, and optional translation, and returns a downloadable text file.

## How it works
1. Receives a YouTube URL plus language and translation preferences through an n8n form.
2. Uses Supadata to fetch the video transcript and the video details in parallel.
3. Combines transcript and video metadata, detects the transcript language, and builds an OpenAI prompt based on the selected translation scope.
4. Sends the transcript to OpenAI to produce a summary, key points, and optionally a full translated transcript.
5. Formats the AI output together with the video info and original transcript into a single text document.
6. Converts the formatted text into a downloadable file and returns it as the form response.

## Setup
1. Create and add Supadata API credentials, and ensure the Supadata account can access YouTube transcript and video info for your target videos.
2. Create and add OpenAI API credentials for the chat completion used to summarize and translate.
3. Share the generated n8n form URL with users (or embed it) so they can submit YouTube links and receive the output file.

## 🔗 Nodes Used

OpenAI, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
