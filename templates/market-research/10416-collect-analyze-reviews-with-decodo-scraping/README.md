# 📊 Collect & analyze reviews with Decodo scraping

> ⚡ **193 views** · 📊 [Market Research & Insights](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Automated Review Intelligence System

Transform customer feedback into actionable intelligence with this Automated Review Intelligence System!  
This workflow collects reviews from platforms like Trustpilot using advanced web scraping, analyzes sentiment and patterns with AI, and generates comprehensive business intelligence reports. Perfect for customer experience teams monitoring brand reputation and customer satisfaction across review platforms.

## What This Template Does
1. Triggers manually to start review collection from specified sources.  
2. Validates URL format to ensure proper review source configuration.  
3. Uses AI agent with Decodo scraper to extract review data from platforms.  
4. Parses and structures review data (ratings, comments, dates, locations).  
5. Enriches review data with metadata and quality metrics.  
6. Stores all review data in Google Sheets for historical tracking.  
7. Reads aggregated reviews for comprehensive analysis.  
8. Generates AI-powered summaries and key insights from review patterns.  
9. Sends email reports with actionable business intelligence.  
10. Provides error alerts for processing issues and invalid URLs.  

## Key Benefits
- Automated collection of customer reviews from multiple platforms  
- AI-powered sentiment analysis and pattern recognition  
- Historical tracking of review trends and customer satisfaction  
- Actionable business intelligence from customer feedback  
- Real-time alerting for review processing issues  
- Centralized review database for team visibility  

## Features
- Manual trigger for on-demand review intelligence  
- URL validation and error handling  
- AI-powered review collection and analysis  
- Decodo web scraping for reliable data extraction  
- Structured data parsing for consistent formatting  
- Google Sheets integration for data centralization  
- Automated summary generation with key insights  
- Email reporting for stakeholder communication  
- Multi-platform review source support  
- Historical trend analysis capabilities  

## Requirements
- Decodo API credentials for web scraping  
- OpenAI API credentials for AI analysis  
- Google Sheets OAuth2 credentials with edit access  
- Gmail OAuth2 credentials for email reports  
- Environment variables for configuration settings  
- Review source URLs (Trustpilot, etc.)  

## Target Audience
- Customer experience and success teams  
- Product management and development teams  
- Marketing and brand reputation managers  
- Business intelligence and analytics teams  
- Customer support operations teams  
- E-commerce and retail businesses  

## Step-by-Step Setup Instructions
1. Connect Decodo API credentials for review scraping functionality  
2. Set up OpenAI credentials for AI analysis and summary generation  
3. Configure Google Sheets with required review data headers  
4. Add Gmail credentials for report delivery and error notifications  
5. Set your target review source URLs (Trustpilot, etc.)  
6. Test with sample review pages to verify data extraction  
7. Customize summary reports for your business intelligence needs  
8. Define alert recipients for error notifications and reports  
9. Run manually to generate your first review intelligence report  


**Pro Tip:** Get a free Web Scraping API subscription - https://decodo.com/scraping/web

This workflow ensures you stay informed about customer sentiment with automated review collection, intelligent analysis, and actionable business insights!

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
