# 🎣 Generate AI sales pitches from website URLs with GPT-4o and Google Sheets

> ⚡ **195 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Overview

This n8n workflow converts a simple list of website URLs in Google Sheets into a concise, consultative Context + AI pitch for each organization. It scrapes real page content (markdown preferred), feeds it to OpenAI with tight prompts to avoid fluff, and writes the result back to the same sheet row. You can run it on demand or schedule it, and it’s resume-safe—rows with existing messages are skipped. The net effect: faster, higher-quality prospect research and consistent outbound messaging without leaving your sheet.

## How it works

- Reads rows from Google Sheets with headers Website and Personalized Message.
- Skips rows where Personalized Message already has content.
- Scrapes each URL to get clean page content (prefer markdown from a scraper like Firecrawl).
- Calls OpenAI with strict System/User prompts to produce Context + Pitch grounded in the site.
- Writes the generated message back to the same row (upsert by Website).
- (Optional) Adds a short delay between rows to respect rate limits.

## Setup:

- Sheet: Create headers Website, Personalized Message (row 1).
- Credentials: Add Google Sheets OAuth2 and OpenAI in n8n.
- Read node (Sheets): Select your doc/tab → Get All.
- Scrape step: Use Firecrawl → Scrape (markdown), or fallback to HTTP Request → HTML extract.
- OpenAI node: Model like gpt-4o-mini; paste your System/User prompts; enable Simplify Output if available.
- Write node (Sheets): Append or Update → Column to match on = Website; map
- Website → original URL
- Personalized Message → OpenAI output ({{$json.content}}
- (Optional) Add a Wait node (500–2000 ms) for throttling and stability.

## 🔗 Nodes Used

Google Sheets, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
