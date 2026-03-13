# 🎣 Find qualified leads in Reddit posts with Firecrawl and GPT-4.1-mini

> ⚡ **87 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Reddit Lead Generation Automation (Batch Processing Version)

## Overview
Automatically find potential customers on Reddit who are actively looking for solutions like your product. This workflow analyzes your product website, generates targeted keywords, searches Reddit for relevant conversations, and filters them using AI to give you only the most qualified leads.

## What This Workflow Does

1. **Analyzes Your Product** - Takes your product URL and uses Firecrawl to understand what your product does and who it's for
2. **Generates Smart Keywords** - Uses AI to create 10 targeted keyword phrases based on problems your product solves
3. **Searches Reddit** - Finds 10 recent conversations for each keyword (100 total posts)
4. **Filters with AI** - Scores each conversation 1-10 and keeps only genuine leads (score 7+)
5. **Outputs Clean Report** - Delivers a formatted markdown report with all qualified leads, sorted by relevance

## Perfect For
- Finding your first customers
- Product validation and market research
- Community management and engagement
- B2B/B2C lead generation
- Content creators looking for audience feedback
- Anyone wanting to find relevant Reddit discussions at scale

## How to Use

1. **Set Up Credentials:**
   - Firecrawl API key
   - Reddit OAuth2 API credentials
   - AI provider (Gemini, OpenAI, or Claude)

2. **Activate the Workflow**

3. **Trigger via form triggger node**

4. **Get Results:**
   The workflow returns a complete markdown report with:
   - Total qualified leads found
   - Conversation titles and content
   - Subreddit links
   - Engagement metrics (upvotes, comments)
   - Lead scores and reasoning
   - Direct links to posts

## Key Features

✅ **100% Automated** - No manual keyword research or scrolling through Reddit  
✅ **AI-Powered Filtering** - Only get conversations where people genuinely need your solution  
✅ **Comprehensive Data** - See engagement metrics, post content, and direct links  
✅ **Customizable** - Adjust filtering threshold, keyword count, posts per keyword  
✅ **Time-Saving** - Processes 100 posts in ~2 minutes vs hours of manual work  
✅ **Smart Scoring** - AI explains why each conversation is a good lead  

## Requirements

**APIs/Services:**
- n8n (self-hosted or cloud)
- Firecrawl API (500 free credits/month)
- Reddit Developer Account (free)
- AI provider: Gemini (recommended, generous free tier), OpenAI, or Claude

**Credentials to Set Up:**
1. Firecrawl API Key
2. Reddit OAuth2 API
3. Google Gemini / OpenAI / Anthropic Claude


## Customization Options

**Adjust Search Parameters:**
- Change Reddit search timeframe (month/week/day)
- Modify number of posts per keyword (default: 10)
- Add/remove keywords (default: 10)

**Modify AI Filtering:**
- Adjust score threshold (default: 7+)
- Customize filtering criteria in the prompt
- Change AI model for different quality/cost balance

**Schedule Automation:**
- Add a Schedule Trigger node to run daily/weekly
- Automatically email results
- Store leads in a database

## Tips for Best Results

1. **Start with known products** to test the workflow (e.g., notion.so, slack.com)
2. **Review generated keywords** after first run and adjust the AI prompt if needed
3. **Lower score threshold to 6** if getting too few results
4. **Focus on problem-based keywords** rather than product names
5. **Check multiple subreddits** by analyzing where your leads appear

## Use Cases

**SaaS Founders:** Find people asking for tools in your category  
**Content Creators:** Discover what your audience is discussing  
**Market Researchers:** Validate product ideas and pain points  
**Community Managers:** Monitor brand mentions and competitor discussions  
**Sales Teams:** Generate warm leads from genuine product inquiries  

## Version Information

This is the **batch processing version** - it runs completely within n8n and outputs all results at once. Perfect for:
- Manual trigger workflows
- Scheduled automation
- One-time research projects
- Learning and testing

For a **frontend-integrated version** with progressive loading and real-time updates, check out my [creator profile](https://n8n.io/creators/mjomba/).

---

**Tags:** reddit, lead generation, automation, AI filtering, web scraping, market research, sales automation, keyword research, firecrawl, gemini

## 🔗 Nodes Used

Reddit, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
