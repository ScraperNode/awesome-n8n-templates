# 📱 Repurpose Instagram videos to YouTube with Claude and Google Sheets tracking

> ⚡ **285 views** · 📱 [Social Media & Email Marketing](../)

## Description

## How It Works
This workflow automates cross-platform content distribution from Instagram to YouTube with intelligent AI enhancement. Designed for content creators, social media managers, and digital marketers who need to maximize their content reach across platforms efficiently. The template solves the challenge of manual video repurposing by automating the entire process from content retrieval to optimized publishing. It retrieves Instagram videos on schedule, generates engaging metadata using dual AI models (Anthropic Claude for creative titles/descriptions), uploads to YouTube, logs performance metrics to Google Sheets, and sends WhatsApp notifications upon completion. The workflow intelligently routes tasks between AI providers: Claude's language capabilities create compelling and platform-optimized content. This dual-model approach delivers superior results compared to single-AI solutions, combining creativity with precision for maximum engagement.

## Setup Steps
1. Configure Instagram credentials 
2. Add Anthropic API key for Claude model in AI nodes
3. Connect YouTube account and configure upload settings
4. Link Google Sheets with target spreadsheet ID for logging
5. Add WhatsApp Business API credentials

## Prerequisites
Instagram Business/Creator account with API access

## Use Cases
Social media agencies managing multiple client accounts

## Customization
Modify AI prompts for brand-specific tone, adjust scheduling frequency

## Benefits
Saves 2-3 hours daily on manual uploads, ensures consistent posting schedules

## 🔗 Nodes Used

Google Sheets, HTTP Request, YouTube, WhatsApp Business Cloud, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
