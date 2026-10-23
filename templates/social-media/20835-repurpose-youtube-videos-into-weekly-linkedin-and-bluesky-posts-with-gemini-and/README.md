# 📱 Repurpose YouTube videos into weekly LinkedIn and Bluesky posts with Gemini and PostWire

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow collects a YouTube link via an n8n form, uses Google Gemini to extract a summary and daily takeaways from the video, then uses PostWire to generate and schedule a week of LinkedIn and Bluesky posts, logging results to Google Sheets and emailing the plan via Gmail.

## How it works
1. Receives a submission from an n8n form with a YouTube URL, optional posting angle, and the number of days to generate.
2. Extracts the YouTube video ID from the submitted URL and stops if the URL is not a valid YouTube link.
3. Calls the Google Gemini API with the YouTube video URL to return a JSON brief containing a title, short summary, a takeaway for each day, and an optional direct quote.
4. Sends the brief to PostWire to generate platform-specific posts in your brand voice and schedule one post per day to LinkedIn and Bluesky.
5. If scheduling succeeds, writes one row per queued post into Google Sheets and emails you the full weekly schedule with a link to the PostWire queue.
6. If Gemini cannot extract takeaways or PostWire fails to schedule, logs the failure to Google Sheets and emails you the error details and what to fix.

## Setup
1. Create a PostWire account, connect your LinkedIn and Bluesky profiles, install the PostWire community node in n8n, and add a PostWire API credential.
2. Add a Google Gemini (Google PaLM) API credential for the Gemini HTTP request.
3. Connect a Gmail account in n8n for sending the plan/failure emails, and update the recipient email plus the “brand voice” and posting hour values.
4. Create a Google Sheet with columns date, video, title, goes_out, status, post, link, and note, then select the target document and sheet in both Google Sheets nodes.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Filter, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
