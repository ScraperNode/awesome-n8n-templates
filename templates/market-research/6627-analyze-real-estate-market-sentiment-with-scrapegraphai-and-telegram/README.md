# 📊 Analyze real estate market sentiment with ScrapeGraphAI and Telegram

> ⚡ **866 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# How it works

This workflow automatically analyzes real estate market sentiment by scraping investment forums and news sources, then provides AI-powered market predictions and investment recommendations.

## Key Steps

1. **Scheduled Trigger** - Runs on a cron schedule to regularly monitor market sentiment.
2. **Multi-Source Scraping** - Uses ScrapeGraphAI to extract discussions from BiggerPockets forums and real estate news articles.
3. **Sentiment Analysis** - JavaScript nodes analyze text content for bullish/bearish keywords and calculate sentiment scores.
4. **Market Prediction** - Generates investment recommendations (buy/sell/hold) based on sentiment analysis with confidence levels.
5. **Timing Optimization** - Provides optimal timing recommendations considering seasonal factors and market urgency.
6. **Investment Advisor Alerts** - Formats comprehensive reports with actionable investment advice.
7. **Telegram Notifications** - Sends formatted alerts directly to your Telegram channel for instant access.

## Set up steps

**Setup time: 10-15 minutes**

1. **Configure ScrapeGraphAI credentials** - Add your ScrapeGraphAI API key for web scraping.
2. **Set up Telegram bot** - Create a bot via @BotFather and add your bot token and chat ID.
3. **Customize data sources** - Update the URLs to target specific real estate forums or news sources.
4. **Adjust schedule frequency** - Modify the cron expression based on how often you want sentiment updates.
5. **Test sentiment analysis** - Run manually first to ensure the analysis logic works for your market.
6. **Configure alert preferences** - Customize the alert formatting and priority levels as needed.

## Technologies Used

- **ScrapeGraphAI** - For extracting structured data from real estate forums and news sites
- **JavaScript Code Nodes** - For sentiment analysis, market prediction, and timing optimization
- **Schedule Trigger** - For automated execution using cron expressions
- **Telegram Integration** - For instant mobile notifications and team alerts
- **JSON Data Processing** - For structured sentiment analysis and market intelligence

## 🔗 Nodes Used

Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
