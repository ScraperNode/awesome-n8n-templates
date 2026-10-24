# 🎬 Generate Instagram posts with OpenAI, RSS news, and auto image posting

> ⚡ **1,286 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## What this workflow does

This workflow automatically generates and publishes Instagram content using AI.

It:
- Generates content ideas using AI
- Creates images automatically
- Edits images (resize/format)
- Publishes directly to Instagram

## How it works

1. Trigger starts the workflow (manual or scheduled)
2. AI generates a content idea and prompt
3. Image is generated via API
4. Image is processed and formatted
5. Post is published automatically

## Setup

- Connect your OpenAI (or AI provider) credentials
- Add your image generation API key
- Connect your Instagram account
- (Optional) Connect Google Drive for storage

Setup time: 15–20 minutes

## 🔗 Nodes Used

Edit Image, HTTP Request, RSS Read, Telegram, S3, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
