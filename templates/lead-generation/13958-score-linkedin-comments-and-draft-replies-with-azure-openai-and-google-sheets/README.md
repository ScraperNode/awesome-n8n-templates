# 🎣 Score LinkedIn comments and draft replies with Azure OpenAI and Google Sheets

> ⚡ **533 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 📊 Description
Automate LinkedIn comment monitoring and turn conversations into qualified sales opportunities using AI 🤖. This intelligent agent continuously scans LinkedIn posts mentioning your brand, analyzes every comment for buyer intent and sentiment, and drafts context-aware replies automatically. High-intent leads are scored and organized in Google Sheets, while your media team receives structured email reports 📧 for fast action. Perfect for brands that want real-time social listening, lead intelligence, and AI-powered engagement without manual monitoring.

## What This Template Does
⏰ Triggers every 15 minutes to monitor LinkedIn brand mentions automatically.
🔍 Searches LinkedIn posts via SerpAPI based on your defined keywords.
💬 Fetches all post comments using ConnectSafely LinkedIn API.
🧠 Uses an AI Intent Detection Agent (Azure OpenAI) to score buyer intent and sentiment.
📊 Saves structured lead data (intent score + label) into Google Sheets.
✍️ Generates AI-powered reply drafts tailored to comment sentiment.
📧 Sends a formatted email report to your media team for approval and publishing.

## Key Benefits
✅ Fully automated LinkedIn comment monitoring
✅ AI-powered buyer intent detection and scoring
✅ Zero manual scraping or tracking required
✅ Context-aware reply generation for higher engagement
✅ Centralized lead tracking inside Google Sheets
✅ Real-time reporting for faster sales follow-ups

## Features
- Cron-based automated social listening
- LinkedIn post discovery via SerpAPI
- Comment extraction using ConnectSafely
- AI sentiment & intent classification (Azure OpenAI GPT-4o-mini)
- Automated reply drafting agent
- Google Sheets logging & workflow triggers
- Gmail-based HTML reporting system
- Multi-stage automation architecture (Scrape → Analyze → Reply → Report)

## Requirements
- SerpAPI API key
- ConnectSafely LinkedIn API credentials
- Azure OpenAI API credentials
- Google Sheets OAuth2 connection
- Gmail OAuth2 connection
- A configured Google Sheet for storing comments and leads

## Target Audience
🎯 B2B founders building authority on LinkedIn
📈 Social media & growth teams managing brand engagement
💼 Sales teams looking for warm inbound intent signals
🤖 Automation agencies building AI-powered social listening systems

## 🔗 Nodes Used

Cron, Google Sheets, Gmail, Google Sheets Trigger, AI Agent, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
