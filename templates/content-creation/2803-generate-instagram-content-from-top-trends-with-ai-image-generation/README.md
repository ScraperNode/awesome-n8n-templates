# 🎬 Generate Instagram content from top trends with AI image generation

> ⚡ **86,502 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

# How it works

This automated workflow discovers trending Instagram posts and creates similar AI-generated content. Here's the high-level process:

## 1. Content Discovery & Analysis
- Scrapes trending posts from specific hashtags
- Analyzes visual elements using AI
- Filters out videos and duplicates

## 2. AI Content Generation
- Creates unique images based on trending content
- Generates engaging captions with relevant hashtags
- Maintains brand consistency while being original

## 3. Automated Publishing
- Posts content directly to Instagram
- Monitors publication status
- Sends notifications via Telegram

# Set up steps

Setting up this workflow takes approximately 15-20 minutes:

## 1. API Configuration (7-10 minutes)
- Instagram Business Account setup
- Telegram Bot creation
- API key generation (OpenAI, Replicate, Rapid Api)

## 2. Database Setup (3-5 minutes)
- Create required database table
- Configure PostgreSQL credentials

## 3. Workflow Configuration (5-7 minutes)
- Set scheduling preferences
- Configure notification settings
- Test connection and permissions

*Detailed technical specifications and configurations are available in sticky notes within the workflow.*

## 🔗 Nodes Used

HTTP Request, Postgres, Telegram, Facebook Graph API, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
