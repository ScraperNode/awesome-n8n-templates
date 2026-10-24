# 📱 Create daily Google Trends image posts for Instagram, TikTok, and Facebook with OpenAI and PostWire

> ⚡ **14 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every morning, reads Google Trends RSS for a chosen country, uses OpenAI to select an on-brand trend and generate captions and an image prompt, creates an image with GPT Image, publishes to Instagram, TikTok, and Facebook via PostWire, and logs results to Google Sheets with Gmail alerts on failures.

## How it works
1. Runs every day at 8:00 on a schedule.
2. Reads the Google Trends RSS feed for your selected country, removes trends already used in previous executions, and keeps the top 10.
3. Sends the trend list plus your brand details to OpenAI to either reject all trends or return a JSON plan with the chosen trend, angle, image prompt, and per-network captions.
4. If a relevant trend is found, requests an upload slot from PostWire, generates a 1024×1024 image with OpenAI GPT Image, uploads it to PostWire, and finalizes it to get a public media URL.
5. Publishes the image post to Instagram, TikTok, and Facebook through PostWire with per-platform captions and an idempotency key based on date and trend.
6. Appends a row to Google Sheets with the trend, angle, status, and post links, and sends a Gmail email with fixes when any platform fails.

## Setup
1. Create a PostWire account, connect your social profiles, and add an HTTP Header Auth credential in n8n with `Authorization: Bearer <your PostWire API key>` for the PostWire HTTP requests.
2. Add OpenAI credentials for both the text model and the GPT Image model used to generate captions and images.
3. Update the brand, niche, country code, and target networks in the brand settings step to match your business.
4. Add a Google Sheets OAuth credential, select the target spreadsheet and sheet in both logging steps, and ensure it has columns for date, trend, angle, status, links, and note.
5. Add a Gmail credential and replace the recipient address in the email step so you receive publishing failure details.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
