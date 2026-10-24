# 🎬 Score daily viral YouTube Shorts ideas using Reddit, RSS, and DeepSeek AI

> ⚡ **869 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI Virality Scoring Engine: Channel Intelligence Extraction & Trend Harvesting

This workflow demonstrates how to combine **trend harvesting**, **channel intelligence**, and **AI scoring** to select the best daily content ideas for short-form videos (YouTube Shorts / TikTok).

It is designed for creators who want data-driven content ideas instead of guessing what to post.

---

## 🧠 What This Workflow Does

Every day, the workflow:

1. Collects trending topics from multiple **RSS news feeds** and **Reddit hot posts**
2. Merges and cleans the trend data
3. Loads stored **YouTube channel profile** and **past video performance stats**
4. Uses AI to score each trend against what historically performs best on the channel
5. Selects the **Top 3 video ideas** with the highest viral potential
6. Outputs structured ideas ready to be turned into short videos

This is **not** a simple RSS → AI workflow.  
The AI makes decisions based on **your channel’s historical performance patterns**.

---

## 📊 Why This Is Different

Most trend workflows only summarize news.

This workflow:
- Learns what your audience likes
- Understands your niche and title patterns
- Compares trends against past high-performing videos
- Produces ideas aligned with your proven content style

---

## 🧩 Main Sections

### 1) Channel Intelligence (Data Store)
Stores:
- Channel description and keywords
- Past video titles and performance metrics
- Send this dataset to AI for pattern extraction.

This data is later used by AI for scoring relevance.

### 2) Trend Harvesting
- 30+ RSS feeds
- 50 Reddit hot posts
- Merged into a single trend stream

### 3) AI Virality Scoring
AI evaluates each trend using:
- Channel niche
- Title patterns
- Audience interest signals
- Past performance data

### 4) Daily Top 3 Selector
Returns the three best content ideas for short-form video creation.

---

## 🤖 AI Role

The AI does not summarize content.  
It acts as a **content strategist** trained on your channel history.

---

## 🛠 Requirements

You will need:
- OpenAI (or compatible) credentials
- RSS feeds of your choice
- Reddit node configured
- A Data Store node to save channel stats

---

## 🎯 Use Cases

- YouTube Shorts idea generation
- TikTok content planning
- Faceless AI video channels
- Data-driven content strategy
- Creator automation workflows

---

## ✅ What You Get

A repeatable system that turns daily internet trends into **channel-specific viral video ideas**.

## 🔗 Nodes Used

HTTP Request, RSS Read, Telegram, YouTube, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
