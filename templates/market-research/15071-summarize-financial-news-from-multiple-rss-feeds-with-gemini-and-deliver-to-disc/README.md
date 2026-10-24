# 📊 Summarize financial news from multiple RSS feeds with Gemini and deliver to Discord

> ⚡ **338 views** · 📊 [Market Research & Insights](../)

## Description

# Multi-Source RSS + Gemini AI → Daily Wealth Brief to Discord

This workflow automatically collects financial news from multiple trusted sources, filters and cleans the data and uses AI (Google Gemini) to generate a concise daily wealth briefing. The final summary is formatted and delivered directly to a Discord channel, ensuring you get actionable financial insights without manual effort.

### Quick Implementation Steps

1. [Import workflow into n8n](https://n8n.partnerlinks.io/om1efg2qgvwi)
2. Replace Manual Trigger with Schedule Trigger (daily recommended)
3. Add Google Gemini API credentials
4. Connect Discord Bot credentials
5. Configure RSS feeds (optional)
6. Activate workflow


## What It Does

This workflow acts as your **automated financial intelligence assistant**. It gathers news from multiple high-quality sources including Yahoo Finance, CoinDesk and the Federal Reserve. Instead of overwhelming you with raw headlines, it intelligently filters and prioritizes only high-impact macroeconomic updates.

After collecting the data, the workflow removes duplicate articles and filters out low-value noise using keyword-based logic. It then selects the top 15 most relevant news items and feeds them into Google Gemini AI.

The AI processes this information and generates a clear, actionable wealth briefing focused on major financial themes like inflation, crypto markets, interest rates and global economic trends. The final output is formatted and delivered to your Discord channel for easy consumption.


## Who’s It For

- Wealth managers and financial advisors
- Crypto traders and investors
- Stock market enthusiasts
- Startup founders tracking macro trends
- Anyone who wants a daily financial summary without information overload


## Requirements to Use This Workflow

- [n8n instance (cloud or self-hosted)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Google Gemini API credentials (Google AI Studio)
- Discord Bot credentials
- Internet access to RSS feeds


## How It Works & Set Up

1. Import Workflow
	- Upload the JSON file into your n8n instance
2. Replace Trigger
	- Replace Manual Trigger with a Schedule Trigger
	- Recommended: Daily at 7–9 AM
3. Configure RSS Nodes
	- Yahoo Finance RSS
	- CoinDesk RSS
	- Federal Reserve RSS
	- (You can modify or add more sources)
4. Set Up Gemini AI
	- Add Google Gemini credentials
	- Ensure model is set to: gemini-flash-latest
5. Configure Discord
	- Connect Discord Bot
	- Select server (guild) and channel
	- Ensure bot has permission to send messages
6. Activate Workflow
	- Turn on workflow
	- Monitor first execution


## Workflow Logic Breakdown

1. Data Collection
	- Fetch news from 3 RSS sources
	- Merge all news into one stream

2. Data Cleaning
	- Remove duplicate titles
	- Filter by keywords (bitcoin, inflation, fed, market, oil)

3. Prioritization
	- Limit to top 15 news items

4. Transformation
	- Convert news into structured text

5. AI Processing
	- Gemini generates:
		- Top 5 insights
		- Simple explanations
		- Actionable advice

6. Delivery
	- Format output for Discord
	- Send message
	- If AI fails → send fallback error message


## How To Customize Nodes

### AI Node (Gemini)

Modify prompt to:

- Add region-specific insights
- Include stock recommendations
- Change tone (technical / beginner)

### Filter Node

Customize keywords:

`const keywords = ["bitcoin", "fed", "inflation", "stock", "market", "oil"];`

**Add:** "gold", "real estate", "rupee", etc.

### RSS Nodes

Add more sources like :

- Bloomberg
- Reuters
- Economic Times

### Limit Node

Change number of news items:

- Default: 15
- Can increase/decrease

### Discord Node

- Change channel or server
- Add mentions (@everyone, roles)


## Add-ons (To extend this workflow)

- Save summaries to Google Sheets or Notion
- Send email or Telegram alerts
- Add sentiment analysis layer
- Store historical briefs for trend tracking
- Add portfolio-specific filtering


## Use Case Examples

1. **Daily Investor Briefing** 

Get a quick snapshot of market conditions every morning

2. **Crypto Market Monitoring**

Track Bitcoin, macro signals and crypto trends

3. **Wealth Advisory Automation**

Send insights to clients automatically

4. **Startup Founder Intelligence**

Stay updated on macroeconomic trends impacting business

5. **Discord Community Engagement**

Share curated financial insights with your community

*And many more variations depending on how you customize filters, sources and delivery channels.*


## Troubleshooting Guide


## Need Help?

If you need help setting up, customizing or extending this workflow, our [n8n automation developers](https://www.weblineindia.com/hire-n8n-developers/) at WeblineIndia are here to support you.

Whether you want to:

- Add advanced AI layers
- Build custom dashboards
- Integrate with your internal systems
- Create enterprise-grade automation

👉 [Reach out to WeblineIndia for expert assistance in building powerful n8n workflows tailored to your business needs](https://www.weblineindia.com/contact-us.html).

## 🔗 Nodes Used

RSS Read, Discord, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
