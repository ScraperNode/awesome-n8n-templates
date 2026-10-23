# 🔬 Generate downloadable YouTube transcripts with Supadata

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a YouTube video URL via an n8n form, fetches the transcript from Supadata’s YouTube Transcript API, formats it into plain text, and returns it as a downloadable .txt file.

## How it works
1. Presents an n8n form where the user submits a YouTube video URL.
2. Calls the Supadata YouTube Transcript API with the submitted URL to retrieve the transcript text.
3. Extracts the video ID from the URL, validates that transcript content exists, and formats a transcript header plus the full text.
4. Converts the formatted transcript into a .txt file with a filename based on the video ID.
5. Responds with the generated text file so the user can download the transcript.

## Setup
1. Create a Supadata account, generate an API key, and replace the hardcoded `x-api-key` header value in the Supadata request.
2. Ensure the n8n Form Trigger is reachable (configure your public n8n URL if needed) and use the form URL to access the workflow.
3. Confirm the submitted link is a valid YouTube URL (including Shorts) that has transcripts available, otherwise the workflow returns an error.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Convert to File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
