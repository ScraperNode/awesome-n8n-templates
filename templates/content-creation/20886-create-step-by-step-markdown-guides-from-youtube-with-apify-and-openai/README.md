# 🎬 Create step-by-step Markdown guides from YouTube with Apify and OpenAI

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a public YouTube tutorial link via an n8n form, uses Apify Frameskim to extract timestamped screenshots and transcript segments, then uses OpenAI to turn each segment into a concise step and returns a downloadable Markdown guide.

## How it works
1. Receives a YouTube URL (plus optional start time, end time, and step interval) from an n8n form submission.
2. Calls the Apify Frameskim actor to generate frames at the chosen interval, returning a screenshot, timestamp, and transcript excerpt for each segment.
3. Cleans and numbers the returned frames, keeping only items with an image and transcript text.
4. Uses OpenAI to write a short step title and a single-sentence instruction for each frame based only on that transcript excerpt.
5. Assembles a Markdown document that includes each step’s instruction, screenshot, and a timestamped YouTube link.
6. Converts the Markdown to a guide.md file and returns it to the form completion page as a download.

## Setup
1. Create an Apify API token and add an HTTP Header Auth credential with `Authorization: Bearer <YOUR_APIFY_TOKEN>` for the Apify request.
2. Add your OpenAI API credentials and ensure the selected model ID (default: `gpt-4o-mini`) is available to your account.
3. Review and adjust the defaults in the guide settings (step interval, max frames, caption language, and Apify cost cap) to fit your use case.
4. Open the n8n form and use its hosted URL to submit a public YouTube video (with captions) to generate the guide.

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger, Convert to File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
