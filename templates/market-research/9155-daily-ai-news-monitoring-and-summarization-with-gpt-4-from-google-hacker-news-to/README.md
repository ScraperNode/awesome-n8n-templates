# 📊 Daily AI news monitoring and summarization with GPT-4 from Google & Hacker News to Telegram

> ⚡ **1,511 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

📰 What This Workflow Does

This intelligent news monitoring system automatically:

• **RSS Feed Aggregation**: Pulls the latest headlines from Google News RSS feeds and Hacker News
• **AI Content Filtering**: Identifies and prioritizes AI-related news from the past 24 hours
• **Smart Summarization**: Uses OpenAI to create concise, informative summaries of top stories
• **Telegram Delivery**: Sends formatted news digests directly to your Telegram channel
• **Scheduled Execution**: Runs automatically every morning at 8:00 AM (configurable)

🎯 Key Features

✅ **Multi-Source News**: Combines Google News and Hacker News for comprehensive coverage
✅ **AI-Powered Filtering**: Automatically identifies relevant AI and technology news
✅ **Intelligent Summarization**: OpenAI generates clear, concise summaries with key insights
✅ **Telegram Integration**: Instant delivery to your preferred chat or channel
✅ **Daily Automation**: Scheduled to run every morning for fresh news updates
✅ **Customizable Timing**: Easy to adjust schedule for different time zones

🔧 How It Works

1. **Scheduled Trigger**: Workflow activates daily at 8:00 AM (or your preferred time)
2. **RSS Feed Reading**: Fetches latest articles from Google News and Hacker News feeds
3. **Content Filtering**: Identifies AI-related stories from the past 24 hours
4. **AI Summarization**: OpenAI processes and summarizes the most important stories
5. **Telegram Delivery**: Sends formatted news digest to your Telegram channel

📋 Setup Requirements

• **OpenAI API Key**: For AI-powered news summarization
• **Telegram Bot**: Create via @BotFather and get bot token + chat ID
• **RSS Feed Access**: Google News and Hacker News RSS feeds (public)

⚙️ Configuration Steps

1. **Set Up Telegram Bot**:
   - Message @BotFather on Telegram
   - Create new bot with /newbot command
   - Save bot token and chat ID

2. **Configure OpenAI**:
   - Add OpenAI API credentials in n8n
   - Ensure access to GPT models for summarization

3. **Update RSS Feeds**:
   - Verify Google News RSS feed URLs
   - Confirm Hacker News feed accessibility

4. **Schedule Timing**:
   - Adjust Schedule Trigger for your time zone
   - Default: 8:00 AM daily (modify as needed)

5. **Test & Deploy**:
   - Run test execution to verify all connections
   - Activate workflow for daily automation

🎨 Customization Options

**Time Zone Adjustment**: Modify Schedule Trigger for different regions
**News Sources**: Add additional RSS feeds for broader coverage
**Filtering Criteria**: Adjust AI prompts to focus on specific topics
**Summary Length**: Customize OpenAI prompts for different detail levels
**Delivery Format**: Modify Telegram message formatting and structure

💡 Use Cases

• **AI Professionals**: Stay updated on latest AI developments and industry news
• **Tech Teams**: Monitor technology trends and competitor announcements
• **Researchers**: Track academic and industry research developments
• **Content Creators**: Source material for AI-focused content and newsletters
• **Business Leaders**: Stay informed about AI market trends and opportunities

## 🔗 Nodes Used

RSS Read, Telegram, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
