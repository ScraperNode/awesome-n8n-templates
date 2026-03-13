# 📊 Find TikTok video questions from keywords using Dumpling AI + GPT-4

> ⚡ **290 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## Who’s it for

This template is perfect for content creators, social media strategists, and marketing teams who want to uncover trending questions directly from real TikTok audiences. If you spend hours scrolling through videos to find content ideas or audience pain points, this workflow automates the entire research process and delivers clean, ready-to-use insights in minutes.

---

## What it does

The workflow takes a **keyword**, searches TikTok for matching creator profiles, retrieves their latest videos, extracts viewer comments, and uses **GPT-4** to identify the most frequently asked questions. These questions can be used to inspire new content, shape engagement strategies, or create FAQ-style videos that directly address what your audience is curious about.

Here’s what happens step by step:  
1. Accepts a keyword from a form trigger  
2. Uses **Dumpling AI** to search TikTok for relevant profiles  
3. Fetches the most recent videos from each profile  
4. Extracts and cleans comments using a Python script  
5. Sends cleaned comments to **GPT-4** to find recurring audience questions  
6. Saves the top questions and video links into a Data Table for easy review

---

## How it works

1. **Form Trigger**: Collects the keyword input from the user  
2. **Dumpling AI**: Searches TikTok to find relevant creators based on the keyword  
3. **Video Retrieval**: Gets recent videos from the discovered profiles  
4. **Comments Extraction**: Gathers and cleans all video comments using Python  
5. **GPT-4**: Analyzes the cleaned text to extract top audience questions  
6. **Data Table**: Stores the results for easy access and content planning

---

## Requirements

- ✅ **Dumpling AI API key** stored as credentials  
- ✅ **OpenAI GPT-4 credentials**  
- ✅ **Python** node enabled in n8n  
- ✅ A Data Table in n8n to store questions and related video details

---

## How to customize

- Adjust the GPT prompt to refine the tone or format of the extracted questions  
- Add filters to target specific types of TikTok profiles or content niches  
- Integrate the output with your content calendar or idea tracking tool  
- Set up scheduled runs to build a constantly updating library of audience questions  
- Extend the workflow to analyze TikTok hashtags or trends alongside comments

---

&gt; This workflow turns TikTok keyword searches into structured audience insights, helping you quickly discover real questions your audience is asking—perfect for fueling content strategies, campaigns, and engagement.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, OpenAI, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
