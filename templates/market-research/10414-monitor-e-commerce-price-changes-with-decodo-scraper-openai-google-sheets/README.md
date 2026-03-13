# 📊 Monitor e-commerce price changes with Decodo Scraper, OpenAI & Google Sheets

> ⚡ **395 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

Stay ahead of market changes with this Automated Price Intelligence System!  
This workflow monitors e-commerce product prices 3x daily using advanced web scraping and AI analysis, tracking price changes, comparing against strategic thresholds, and sending intelligent alerts for competitive pricing opportunities. Perfect for e-commerce teams, retailers, and pricing strategists maintaining market competitiveness.

## What This Template Does
1. Triggers 3x daily (9 AM, 3 PM, 9 PM) for continuous price monitoring.  
2. Configures global settings for products, thresholds, and alert recipients.  
3. Parses product targets and maps price thresholds by category (premium/default/budget).  
4. Uses Decodo scraper to extract real-time pricing data from e-commerce sites.  
5. Analyzes product pages with AI to extract structured price information.  
6. Logs all price data to Google Sheets for historical tracking and trend analysis.  
7. Evaluates prices against thresholds with AI-powered strategic recommendations.  
8. Classifies alerts as CRITICAL or STANDARD based on price drop severity.  
9. Sends targeted email alerts with strategic action recommendations.  

## Key Benefits
- Continuous price monitoring across multiple e-commerce platforms  
- AI-powered strategic recommendations for pricing decisions  
- Historical price tracking for trend analysis and forecasting  
- Multi-tier alert system for critical vs. standard price changes  
- Automated competitive intelligence without manual monitoring  
- Configurable thresholds for different product categories  

## Features
- Triple-daily scheduling for comprehensive market coverage  
- Multi-product monitoring with individual threshold configuration  
- AI-powered price extraction and data structuring  
- Real-time web scraping with Decodo integration  
- Strategic alert classification (CRITICAL/STANDARD)  
- Automated email notifications with actionable insights  
- Google Sheets integration for data centralization  
- Batch processing for efficient multi-product handling  
- Quality assurance with auto-fixing output parsing  

## Requirements
- Decodo API credentials for web scraping  
- OpenAI API credentials for AI analysis  
- Google Sheets OAuth2 credentials with edit access  
- Gmail OAuth2 credentials for email alerts  
- Environment variables for configuration settings  
- Product URLs with internal tracking IDs  

## Target Audience
- E-commerce and retail pricing teams  
- Competitive intelligence analysts  
- Pricing strategy and revenue optimization teams  
- E-commerce marketing and sales teams  
- Retail operations and category managers  
- Digital agency e-commerce specialists  

## Step-by-Step Setup Instructions
1. Connect Decodo API credentials for reliable web scraping  
2. Set up OpenAI credentials for AI price analysis and strategy recommendations  
3. Configure Google Sheets for price history tracking and logging  
4. Add Gmail credentials for critical and standard alert notifications  
5. Define your product URLs with internal IDs and threshold types  
6. Set price thresholds for premium, default, and budget categories  
7. Configure alert recipients for different notification levels  
8. Test with sample product URLs to verify data extraction and alerting  
9. Activate for automated triple-daily price intelligence monitoring  


**Pro Tip:** Get a free Web Scraping API subscription - https://decodo.com/scraping/web

This workflow ensures you never miss a pricing opportunity with automated monitoring, intelligent analysis, and strategic alerting!

## 🔗 Nodes Used

Function, Google Sheets, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
