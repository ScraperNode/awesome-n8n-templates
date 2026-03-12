# 📊 Insurance news aggregation keyword analysis & database storage via Supabase

> ⚡ **47 views** · 📊 [Market Research & Insights](../)

## Description

Automatically collect, analyze, and store industry news articles with intelligent filtering and dual-database storage

🎯 What This Workflow Does

This comprehensive news scraping automation monitors multiple industry sources every 6 hours, intelligently extracts relevant content, analyzes it for keyword relevance, and stores high-quality articles in both a content library and knowledge base. Perfect for content marketers, researchers, industry analysts, and anyone building an AI-powered knowledge system.

✨ Key Features

Multi-Source Aggregation: Collects from RSS feeds, Google News, and direct website scraping
Smart Content Extraction: Uses Cheerio to parse HTML and extract clean article content
AI-Ready Keyword Analysis: Automatically identifies and tags industry-specific terms
Intelligent Filtering: Only stores articles meeting your relevance threshold (default: 30%)
Dual Storage System: Saves to both content library (marketing) and knowledge base (AI training)
Rate Limiting: Includes polite delays to respect website resources
Fully Automated: Runs on schedule without manual intervention

🔧 Technical Highlights

Schedule-based trigger (every 6 hours, customizable)
Handles 3 content types: RSS feeds, Google News RSS, and web pages
Limits to top 10 articles per source to manage volume
Tracks 17+ insurance-specific keywords (easily customizable for any industry)
Includes comprehensive error handling and timeout management
Supabase integration (works with any REST API database)

📚 Perfect For

Building AI chatbot knowledge bases
Content marketing research
Competitive intelligence gathering
Industry trend monitoring
News aggregation platforms
SEO content research
Market analysis and reporting

🚀 Setup Requirements

n8n instance (self-hosted or cloud)
Supabase account (free tier works) or any REST API database
Basic understanding of JSON and HTTP requests
All setup instructions included in sticky notes within the workflow!

📦 What's Included

Complete workflow JSON (ready to import)
8 detailed sticky notes with beginner-friendly explanations
Setup guide with step-by-step instructions
Customization tips for different industries
Example sources for insurance industry (easily adaptable)

🎨 Customization Options

Modify schedule interval (hourly, daily, weekly)
Add your own RSS feeds and websites
Adjust relevance threshold
Customize keyword lists for your industry
Change article limits per source
Modify storage destinations

⚠️ Important Notes

Remember to update Supabase credentials before running
Test with a single source before deploying all sources
Respect website terms of service and robots.txt
Consider API rate limits for your sources
The workflow includes rate limiting to be respectful to websites

🏷️ Tags
content-scraping rss-feeds web-scraping automation knowledge-base supabase cheerio news-aggregation content-marketing ai-training-data

Version: 2.0
Last Updated: January 2025
Difficulty: Intermediate
Estimated Setup Time: 30 minutes

## 🔗 Nodes Used

Function, HTTP Request, RSS Read, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
