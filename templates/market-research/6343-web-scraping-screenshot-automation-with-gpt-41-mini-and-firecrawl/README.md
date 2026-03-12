# 📊 Web scraping & screenshot automation with GPT 4.1 mini and Firecrawl

> ⚡ **1,742 views** · 📊 [Market Research & Insights](../)

## Description

## 🔍 Overview

This template uses Firecrawl’s `/search` API to perform AI-powered web scraping and screenshots — no code required. Just type natural language prompts, and an AI Agent will convert them into precise Firecrawl queries.

## ⚙️ Setup

1. Get your Firecrawl API Key from [https://firecrawl.dev](https://firecrawl.dev)
2. Add it to n8n using `HTTP Header Auth`:
   - Key: `Authorization`
   - Value: `Bearer YOUR_API_KEY`

## 🚀 What It Does

- Turns natural language into smart search queries
- Scrapes web data and captures full-page screenshots
- Returns titles, links, content, and images

## 💡 Example

Input:
&gt; Find AI automation pages on YouTube (exclude Shorts)

Result:
```json
{
  "query": "intitle:AI automation site:youtube.com -shorts",
  "limit": 5
}

## 🔗 Nodes Used

HTTP Request, AI Agent, Chat Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
