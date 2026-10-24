# 📱 Publish Instagram carousels from Google Sheets using Gemini and GCS

> ⚡ **21 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily, reads a queued carousel request from Google Sheets, uses Google Gemini to generate a concept, caption, and 5–6 slide prompts, creates slide images, uploads them to Google Cloud Storage, and publishes the carousel to Instagram via the Meta Graph API, then logs results and emails you

## How it works
1. Runs every day at 12:00 based on a schedule trigger.
2. Reads rows from Google Sheets where `Pick = 1`, selects the first row not marked Published or Processing, and updates the row status to Processing.
3. Uses Google Gemini to generate a structured carousel concept, an Instagram caption, and a structured set of exactly 5–6 slides.
4. Builds an image prompt per slide, generates a square slide image via the Gemini image API, converts it to a file, and resizes it to 1080×1080.
5. Uploads each slide image to a public Google Cloud Storage bucket and creates an Instagram carousel child container for each image via the Meta Graph API.
6. Polls the Meta Graph API until all child containers reach FINISHED (or stops on timeout/error), then creates and polls the carousel parent container until it finishes.
7. Publishes the carousel to Instagram, updates the originating Google Sheets row with Published status and IDs/URLs, and sends a confirmation email via Gmail.

## Setup
1. Connect Google Sheets OAuth2 and select the spreadsheet and sheet used by all read/update steps, ensuring it includes columns like RowKey, Pick, status, Topic, Audience, Voice, Goal, KeyMessage, and CTA.
2. Add Google Gemini credentials (LangChain Google Gemini node) and configure the HTTP request node to authenticate to the Gemini image API (for example with an API key header).
3. Create a publicly readable Google Cloud Storage bucket, add Google Cloud Storage credentials, and replace the bucket name placeholder so Meta can fetch the uploaded image URLs.
4. Create and connect a Meta (Facebook Graph API) credential for an Instagram Professional Account, and replace the Instagram Professional Account ID placeholders.
5. Connect Gmail OAuth2 and set the notification recipient email address placeholder.
6. Set the workflow timezone and use `Pick = 1` to queue items, with status values updating through Processing to Published.

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Facebook Graph API, Gmail, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
