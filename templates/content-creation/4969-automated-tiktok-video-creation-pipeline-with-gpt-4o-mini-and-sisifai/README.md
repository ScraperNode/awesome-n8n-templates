# 🎬 Automated TikTok video creation pipeline with GPT-4o-mini and Sisif.ai

> ⚡ **15,444 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Description

This workflow creates an automated video content pipeline that generates creative TikTok-style videos using AI. It combines OpenAI's GPT-4o-mini for idea generation with Sisif.ai's text-to-video AI technology to produce engaging short-form content automatically.

**Perfect for:** Content creators, social media managers, marketing teams, and anyone who wants to maintain a consistent flow of AI-generated video content without manual intervention.

## Prerequisites

- **Sisif.ai Account**: Sign up at [sisif.ai](https://sisif.ai) and get your API token from [sisif.ai/api/](https://sisif.ai/api/)
- **OpenAI Account**: Get your API key from OpenAI platform
- **n8n Instance**: Self-hosted or cloud instance

## How it Works

The workflow operates on a scheduled cycle, generating fresh video content every 6 hours:

1. **🤖 AI Idea Generation**: OpenAI's GPT-4o-mini acts as a creative video strategist, generating unique, trend-aware video concepts optimized for TikTok and social media
2. **🎬 Video Creation**: Sisif.ai transforms each creative prompt into a high-quality 5-second video in 540x960 resolution
3. **⏱️ Smart Monitoring**: The workflow intelligently monitors video generation progress, waiting for completion before proceeding
4. **📊 Data Processing**: Final video data is structured and prepared for further use or storage

## Key Features

### ⚡ Fully Automated
- Runs every 6 hours without manual intervention
- Generates 4 unique videos daily (28 videos per week)
- Self-monitoring with automatic retry logic

### 🎯 Optimized for Social Media
- TikTok-perfect 540x960 resolution
- 5-second duration for maximum engagement
- Trend-aware content generation
- Action-packed, visual storytelling

### 🔧 Smart Architecture
- Simple HTTP requests for reliable operation
- Bearer token authentication for secure API access
- Automatic status checking and waiting logic
- Error handling and retry mechanisms

## 🔗 Nodes Used

Function, HTTP Request, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
