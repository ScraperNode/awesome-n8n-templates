# 🎬 Repurpose YouTube videos into multichannel content with Gemini and Google Sheets

> ⚡ **108 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow takes a YouTube video URL, fetches its transcript via RapidAPI, uses Google Gemini to generate multiple repurposed content assets, stores everything in Google Sheets, and automatically publishes the LinkedIn post while logging posted/failed status and any errors.

## How it works
1. Starts when a user submits a YouTube video URL through an n8n form.
2. Requests the video transcript from the youtube-transcript3 RapidAPI endpoint and normalizes it into a single clean text block.
3. Sends the transcript to Google Gemini to generate a JSON bundle containing a title, summary, blog article, LinkedIn post, X (Twitter) thread, newsletter, content ideas, hooks, and CTA suggestions.
4. Parses and validates the Gemini response into consistent fields for downstream use.
5. Appends the transcript and all generated content to Google Sheets (Sheet1) as a content database row.
6. Publishes the generated LinkedIn post to your LinkedIn profile and updates the same Google Sheets row as Posted or Failed.
7. Logs any errors from transcript fetching, AI generation/parsing, Google Sheets, or LinkedIn publishing to a Google Sheets “Errors” tab.

## Setup
1. Create a RapidAPI subscription for youtube-transcript3 and replace the x-rapidapi-key value with your RapidAPI key.
2. Add Google Gemini (PaLM) API credentials in n8n and connect them to the Google Gemini Chat Model node.
3. Create a Google Sheets spreadsheet with “Sheet1” and an “Errors” sheet using the exact headers shown in the workflow notes, then set your Google Sheet ID in all Google Sheets nodes.
4. Add Google Sheets OAuth2 credentials in n8n with access to that spreadsheet.
5. Add LinkedIn OAuth2 credentials in n8n and confirm the workflow is permitted to post to the target LinkedIn account.

## Requirements
- I need an AI-powered content workflow that takes a YouTube URL, pulls the transcript automatically, and generates multiple content assets (blog, LinkedIn post, X thread, newsletter, hooks, CTAs) in one run.
- It should log all outputs into a Google Sheet as a structured content database and optionally auto-post to LinkedIn while tracking Posted/Failed status with error logs.

## Customization
- I want the system to be customizable for different niches and tones, so I can tweak prompts or add extra output formats without changing the overall workflow logic.
- It should also let me plug in my own API keys and credentials inside n8n, without hardcoding any secrets in the workflow JSON.

## Additional info
This is built as an n8n workflow that starts from a form (YouTube URL input), calls a transcript API, uses a Gemini model node, and writes to Google Sheets plus LinkedIn.

I’m comfortable editing nodes, expressions, and environment variables myself, so a clean template without bound credentials is actually preferred.

## 🔗 Nodes Used

Google Sheets, HTTP Request, LinkedIn, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
