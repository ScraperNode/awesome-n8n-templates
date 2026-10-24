# 📱 Generate trending X, Facebook, and Threads posts with Apify, Gemini, and Buffer

> ⚡ **263 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 🚀 Overview

This workflow automatically discovers trending topics, generates engaging social media content using AI, and publishes posts to X (Twitter) and Facebook via Buffer.

It combines trend monitoring + AI content generation + automated publishing into one seamless pipeline, helping creators and marketers stay consistent and relevant without manual effort.

## 🎯 Who is this for
- Content creators & social media managers
- Agencies managing multiple accounts
- Developers building AI-powered automation systems
- Anyone who wants to post consistently on trending topics


## ⚙️ What this workflow does
1. Fetches trending topics (e.g., from X or external sources)
2. Filters and formats relevant trends
3. Uses Google Gemini to generate:
4. X (Twitter) tweets
5. Facebook posts
6. Thread posts
6. Formats content for each platform
7. Publishes posts automatically via Buffer API

## ✨ Key Features
- Fully automated content pipeline
- Multi-platform posting (X + Facebook + Thread)
- AI-generated threads + captions
- Easily customizable prompts and filters
- Scalable for multiple niches or accounts

## 🔧 Setup Instructions
1. Credentials required
- Google Gemini API key
- Apify API key
- Buffer API access token

2. Configuration steps
- Add your API credentials to the respective nodes
- Customize the prompt templates for your niche
- Define your preferred trend source or keywords
- Set posting frequency (via Cron or trigger node)

3. Optional customization
- Add moderation/approval step before posting
- Filter trends by region, hashtags, or keywords
- Adjust tone (professional, funny, viral, etc.) and language

## 🧠 How it works (high-level)

The workflow monitors trending data, processes it into structured input, and feeds it into AI models to generate platform-specific content. The output is then formatted and sent to Buffer for scheduled or immediate publishing.

## ⚠️ Notes & Limitations
- AI-generated content may require review for accuracy
- Rate limits may apply depending on APIs used
- Ensure Buffer supports your connected accounts
- Trending data source reliability may vary

---
## 👋 Need help or want to customize this workflow?

📺 Contact: [Fiverr](https://www.fiverr.com/sampdiablog/)
📩 Consultation: [Book Appointment](https://calendly.com/oghenekaroafigo/meeting)

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Google Gemini, Data table, MCP Client

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
