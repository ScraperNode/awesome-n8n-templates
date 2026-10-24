# 📊 Analyze competitor YouTube thumbnails with OpenAI and hand off approved concepts to ThumbCanvas

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow serves a web form to collect a YouTube video brief, validates the input, generates three distinct thumbnail prompt directions, and returns a review page with deep links that open each direction pre-filled in ThumbCanvas.

## How it works
1. Receives a GET request via an n8n webhook and serves an HTML thumbnail-brief form in the browser.
2. Receives the submitted brief via a POST webhook and normalizes fields, enforces length limits, and validates the optional YouTube URL and thumbnail text.
3. Returns an HTTP 400 error page with correction messages if the brief fails validation.
4. Builds three distinct creative directions (Curiosity gap, High stakes, and Before and after) and generates URL-encoded ThumbCanvas deep links with the prompt and selected aspect ratio (and optional YouTube URL).
5. Responds with an HTML direction pack page that shows each direction’s rationale and prompt and provides a button to open it in ThumbCanvas.

## Setup
1. Activate the workflow to generate the production webhook URLs.
2. Open the GET webhook URL for `/webhook/thumbcanvas-brief` in your browser to access the form.
3. Ensure your n8n instance is reachable over HTTPS if you plan to pass and open HTTPS YouTube links in the handoff.
4. (Optional) Sign in to [ThumbCanvas](https://thumbcanvas.com/create-thumbs) to use its create page according to your plan and limits.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, OpenAI, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
