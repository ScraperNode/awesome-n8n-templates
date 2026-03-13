# 📊 Monitor NASA asteroid threats with AI fact-check and multi-channel alerts

> ⚡ **75 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Who Is This For?

This workflow is designed for space enthusiasts, science educators, journalists, fact-checkers, and researchers who want to stay informed about near-Earth asteroid threats while filtering out media sensationalism. It's also valuable for anyone studying how different regions cover space-related news.

## What It Does

This workflow creates an automated planetary defense monitoring system that:

- Scans NASA's Near Earth Object database for potentially hazardous asteroids over a 7-day window
- Searches news coverage across three regions (US, Japan, EU) to compare media reporting
- Uses AI (GPT-4o-mini) to fact-check news claims against official NASA data
- Detects misinformation and measures media sensationalism levels
- Generates visual charts comparing actual threat levels vs media panic
- Sends alerts through multiple channels (Slack, Discord, Email)
- Logs all alerts to Google Sheets for historical analysis

## How It Works

1. **Trigger**: Runs daily at 9 AM or on-demand via webhook
2. **NASA Data Fetch**: Retrieves 7-day asteroid forecast from NASA NeoWs API
3. **Threat Analysis**: Identifies potentially hazardous asteroids and assigns alert levels (LOW/MEDIUM/HIGH)
4. **News Search**: Searches news in US, Japan, and EU using Apify's Google Search Scraper
5. **AI Fact-Check**: GPT-4o-mini compares news claims against NASA data, detecting misinformation
6. **Visualization**: Generates gauge charts for threat level and media panic, plus regional comparison bar chart
7. **Multi-Channel Alerts**: Sends formatted reports to Slack, Discord, Email, and logs to Google Sheets

## Set Up Steps

Estimated time: 15-20 minutes

1. **NASA API** (Required): Get your free API key at [api.nasa.gov](https://api.nasa.gov/)
2. **Apify** (Required): Create account and connect via OAuth
3. **OpenAI** (Required): Add your API key from [platform.openai.com](https://platform.openai.com/)
4. **Notification Channels** (Choose at least one):
   - Slack: Create OAuth app and connect
   - Discord: Create webhook URL
   - Email: Configure SMTP settings
5. **Google Sheets** (Optional): Create a sheet for logging with columns: Date, Alert Level, Hazardous Count, Threat Score, Media Panic Score, Misinformation Detected, Top Asteroid, Most Accurate Region

## Requirements

- NASA API key (free)
- Apify account (free tier available)
- OpenAI API key (paid)
- At least one notification channel configured
- n8n version 1.0+

## How to Customize

- **Change scan frequency**: Modify the Schedule Trigger node
- **Add more regions**: Edit the "Configure Regional Search" code node
- **Adjust alert thresholds**: Modify lunar distance threshold (currently 10) in "Analyze Asteroid Threats"
- **Disable channels**: Simply remove connections to notification nodes you don't need
- **Customize messages**: Edit the "Format Multi-Channel Messages" node

## 🔗 Nodes Used

Send Email, Google Sheets, Slack, Webhook, Discord, NASA

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
