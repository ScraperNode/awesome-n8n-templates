# 🎬 Multi platform content generator from YouTube using AI & RSS

> ⚡ **2,131 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Multi Platform Content Generator from YouTube using AI & RSS

This workflow automates content generation by monitoring YouTube channels, extracting transcripts via AI, and creating platform-optimized content for LinkedIn, X/Twitter, Threads, and Instagram. Ideal for creators, marketers, and social media managers aiming to scale content production with minimal effort.


## ✨ Key Features
- **🔔 Automated YouTube Monitoring** via RSS feed
- **🧠 AI-Powered Transcript Extraction** using Supadata API
- **✍️ Multi-Platform Content Generation** with OpenRouter AI
- **🎯 Platform Optimization** based on tone and character limits
- **📬 Telegram Notification** for easy preview
- **📊 Centralized Data Management via Google Sheets**

&gt; 🗂️ All video data, summaries, and generated content are tracked and stored in a single, centralized [Google Sheets template](https://docs.google.com/spreadsheets/d/17OjwIwx7eAwbkT5wtwvpCQU4rjrLH0v7j3fmC2Sc1CY/edit?usp=sharing)  
&gt; This ensures full visibility, easy access, and smooth collaboration across your team.

---

## ⚙️ Workflow Components

### 1. 🧭 Channel Monitoring
- **Schedule Trigger**: Initiates workflow periodically
- **Google Sheets (Read)**: Pulls YouTube channel URLs
- **HTTP Request + HTML Parser**: Extracts channel IDs from URLs
- **RSS Reader**: Fetches latest video metadata

### 2. 🧾 Content Processing
- **Supadata API**: Extracts transcript from YouTube video
- **OpenRouter AI**: Summarizes transcript + generates content per platform
- **Conditional Check**: Prevents duplicate content by checking existing records

### 3. 📤 Multi-Platform Output
- **LinkedIn**: Story-driven format (≤ 1300 characters)
- **X/Twitter**: Short, punchy copy (≤ 280 characters)
- **Threads**: Friendly, conversational
- **Instagram**: Short captions for visual posts

### 4. 🗃️ Data Management
- **Google Sheets (Write)**: Stores video metadata + generated posts
- **Telegram Bot**: Sends content preview
- **ID Tracking**: Avoids reprocessing using video ID

---

## 🔐 Required Credentials
- **Google Sheets OAuth2**
- **Supadata API**
- **OpenRouter API**
- **Telegram Bot Token & Chat ID**

---

## 🎁 Benefits
- **⌛ Save Time**: Automates transcript + content generation
- **🔊 Consistent Tone**: Adjust AI prompts for brand voice
- **📡 Multi-Platform Ready**: One video → multiple formats
- **📂 Centralized Logs via Google Sheets**: Easily track, audit, and collaborate
- **🚀 Scalable**: Handle many channels with ease

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Telegram, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
