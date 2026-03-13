# 📊 Automate Singapore COE price analysis & purchase timing with GLM-4.5 AI predictions

> ⚡ **209 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Introduction
Automates Singapore COE price tracking, predicts trends using AI, and recommends optimal car purchase timing. Scrapes LTA data biweekly, analyzes historical trends, forecasts next 6 bidding rounds, and sends alerts when buying windows appear—saving time and identifying cost-saving opportunities.

## How it Works
Biweekly trigger scrapes LTA COE data → processes historical trends → AI predicts 6-month prices → compares current vs forecast → generates buy/wait recommendations → alerts sent via Gmail or Telegram.

## Setup Steps
1. Add NVIDIA/OpenAI API credentials in n8n
2. Connect Google Sheets for data storage
3. Authenticate Gmail/Telegram for notifications
4. Schedule trigger for Wednesdays 8PM SGT
5. Configure alert thresholds in conditional nodes

## Workflow
Schedule Trigger → HTTP Request (Scrape LTA) → Data Processing → Google Sheets (Store) → AI Prediction → Analysis Engine → Conditional Logic → Gmail/Telegram Notification

## Workflow Steps
1. Scraping: Extract COE prices from OneMotoring
2. Processing: Calculate moving averages, volatility, seasonal trends
3. Storage: Save to Google Sheets with timestamps
4. Prediction: AI forecasts next 6 bidding rounds
5. Analysis: Compare current vs predicted prices, generate recommendation
6. Notification: Alerts via email/Telegram

## Prerequisites
NVIDIA/OpenAI API key, Google account (Sheets), Gmail/Telegram for notifications, basic COE category knowledge

## Use Cases
First-time buyers monitoring price dips, fleet managers timing bulk purchases

## Customization
Add economic indicators, integrate car loan calculators, track parallel imported car prices

## Benefits
Saves hours of manual monitoring, captures 10–15% price dips, provides data-driven purchase timing (potential $5K–$15K savings)

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Telegram, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
