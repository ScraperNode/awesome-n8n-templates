# 🎬 Generate SEO landing page content with GPT-4, Reddit, YouTube and Google Sheets

> ⚡ **256 views** · 🎬 [Content Creation & Video](../)

## Description

## How It Works
This workflow automates SEO content creation by aggregating multi-source research and generating optimized articles. Designed for content marketers, SEO specialists, and digital agencies, it solves the time-consuming challenge of researching trending topics and crafting search-optimized content at scale. The system pulls discussions from Reddit, videos from YouTube, and industry news via APIs, then combines this data into comprehensive insights. An AI agent analyzes aggregated research, performs Google Search SEO analysis, consults Wikipedia for accuracy, and generates structured, SEO-optimized HTML content. The final output saves automatically to Google Sheets for easy management and publishing workflows.

## Setup Steps
1. Configure Reddit, YouTube, and industry news API credentials in fetch nodes
2. Add OpenAI API key for GPT-4 agent and Google API key for search analysis
3. Connect Google Sheets with write permissions for content storage

## Prerequisites
Reddit API access, YouTube Data API key, industry news API

## Use Cases
Blog content automation, competitive content analysis, trending topic research

## Customization
Modify research sources, adjust AI prompts for brand voice, customize SEO parameters

## Benefits
10x faster content production, multi-platform research coverage

## 🔗 Nodes Used

Google Sheets, HTTP Request, YouTube, Reddit, Markdown, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
