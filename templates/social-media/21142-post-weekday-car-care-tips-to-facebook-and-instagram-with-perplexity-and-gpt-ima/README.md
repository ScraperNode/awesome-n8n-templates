# 📱 Post weekday car care tips to Facebook and Instagram with Perplexity and GPT Image

> ⚡ **0 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every weekday morning to research a locally relevant car care tip with Perplexity, generate a square image with OpenAI GPT Image, and publish the post to Facebook and Instagram via PostWire, while logging outcomes and sources to Google Sheets and emailing you if anything fails.

## How it works
1. Runs every weekday at 9:00 on a schedule trigger.
2. Reads previously posted tips from Google Sheets and compiles a list of past topics to avoid repeats.
3. Uses Perplexity to research one season- and city-relevant car care tip, returning a topic, verified facts, an image prompt, and platform-specific captions with citations.
4. Stops if the generated topic is empty or already exists in the Google Sheets log.
5. Uses OpenAI GPT Image to generate a 1024×1024 image and publishes the image with the Facebook and Instagram captions through PostWire.
6. Appends a “posted” row to Google Sheets when all platforms succeed, or logs partial/failure details and sends a Gmail alert with what to fix.

## Setup
1. Create and connect a PostWire account (with Facebook Page and Instagram connected) and add your PostWire API credentials in n8n.
2. Add Perplexity credentials and an OpenAI credential with access to GPT Image generation.
3. Set up a Google Sheet with columns for date, topic, status, links, sources, and note, then select the correct document and sheet in the Google Sheets nodes.
4. Connect a Gmail account in n8n and set the recipient email plus your shop details (shop name, city, services, and offer) in the workflow’s settings fields.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, OpenAI, Perplexity

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
