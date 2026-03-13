# 🎬 Create a daily AI & automation content digest from YouTube, Reddit, X and Perplexity with OpenAI and Airtable

> ⚡ **1,752 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

What It Does

  This workflow automates the creation of a daily AI and automation content digest by aggregating trending content from four sources: YouTube (n8n-related videos with AI-generated transcript summaries), Reddit (rising posts from r/n8n), X/Twitter (tweets about n8n, AI automation, AI agents, and Claude via Apify scraping), and Perplexity AI (top 3 trending AI news stories). The collected data is analyzed using OpenAI models to extract key insights, stored in Airtable for archival, and then compiled into a beautifully formatted HTML email report that includes TL;DR highlights, content summaries, trending topics, and AI-generated content ideas—delivered straight to your inbox via Gmail.

  ---
  Setup Guide

  Prerequisites

  You will need accounts and API credentials for the following services:
  ┌──────────────────┬───────────────────────────────────────────────┐
  │     Service      │                    Purpose                    │
  ├──────────────────┼───────────────────────────────────────────────┤
  │ YouTube Data API │ Fetch video metadata and search results       │
  ├──────────────────┼───────────────────────────────────────────────┤
  │ Apify            │ Scrape YouTube transcripts and X/Twitter data │
  ├──────────────────┼───────────────────────────────────────────────┤
  │ Reddit API       │ Pull trending posts from subreddits           │
  ├──────────────────┼───────────────────────────────────────────────┤
  │ Perplexity AI    │ Get real-time AI news summaries               │
  ├──────────────────┼───────────────────────────────────────────────┤
  │ OpenAI           │ Content analysis and summarization            │
  ├──────────────────┼───────────────────────────────────────────────┤
  │ OpenRouter       │ Report generation (GPT-4.1)                   │
  ├──────────────────┼───────────────────────────────────────────────┤
  │ Airtable         │ Store collected content                       │
  ├──────────────────┼───────────────────────────────────────────────┤
  │ Gmail            │ Send the daily report                         │
  └──────────────────┴───────────────────────────────────────────────┘
  Step-by-Step Setup

  1. Import the workflow into your n8n instance
  2. Configure YouTube credentials:
    - Set up YouTube OAuth2 credentials
    - Replace YOURAPIKEY in the "Get Video Data" HTTP Request node with your YouTube Data API key
  3. Configure Apify credentials:
    - In the "Get Transcripts" and "Scrape X" HTTP Request nodes, replace YOURAPIKEY in the Authorization header with your Apify API token
  4. Configure Reddit credentials:
    - Set up Reddit OAuth2 credentials (see note below)
  5. Configure AI service credentials:
    - Add your Perplexity API credentials
    - Add your OpenAI API credentials
    - Add your OpenRouter API credentials
  6. Configure Airtable:
    - Create a base called "AI Content Hub" with three tables: YouTube Videos, Reddit Posts, and Tweets
    - Update the Airtable nodes with your base and table IDs
  7. Configure Gmail:
    - Set up Gmail OAuth2 credentials
    - Replace YOUREMAIL in the Gmail node with your recipient email address
  8. Customize search terms (optional):
    - Modify the YouTube search query in "Get Videos" node
    - Adjust the subreddit in "n8n Trending" node
    - Update Twitter search terms in "Scrape X" node

  Important Note: Reddit API Access

  The Reddit node requires OAuth2 authentication. If you do not already have a Reddit developer account, you will need to submit a request for API access:

  1. Go to https://www.reddit.com/prefs/apps
  2. Click "create another app..." at the bottom
  3. Select "script" as the application type
  4. Fill in the required fields (name, redirect URI as http://localhost)
  5. Important: Reddit now requires additional approval for API access. Visit https://www.reddit.com/wiki/api to review their API terms and submit an access request if prompted
  6. Once approved, use your client ID and client secret to configure the Reddit OAuth2 credentials in n8n

  API approval can take 1-3 business days depending on your use case.

  ---
  Recommended Schedule

  Set up a Schedule Trigger to run this workflow daily (e.g., 7:00 AM) for a fresh content digest each morning.

## 🔗 Nodes Used

Airtable, HTTP Request, Gmail, YouTube, Reddit, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
