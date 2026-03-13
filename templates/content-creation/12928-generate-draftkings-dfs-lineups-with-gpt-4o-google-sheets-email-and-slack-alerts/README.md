# 🎬 Generate DraftKings DFS lineups with GPT-4o, Google Sheets, email and Slack alerts

> ⚡ **6 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Who’s it For
This template is perfect for daily fantasy sports (DFS) enthusiasts, sports analysts, and content creators who want automated, AI-optimized lineups for DraftKings contests. Works for multiple sports including NFL, NBA, MLB, NHL, and esports like LOL and CS.

## How It Works / What It Does
The workflow uses the DraftKings API Actor to scrape real-time contest and player data. It calculates player value based on projected points and salary, and then uses AI to generate optimized DFS lineups. Generated lineups are logged to Google Sheets, emailed to subscribers with AI-personalized messaging, and internal teams are notified via Slack. Filters allow skipping contests that are too expensive, almost full, or starting too soon.

## How to Set Up
1. Configure DraftKings API Actor: select sport, maxContests, includePlayerData.
2. Google Sheets: enter Sheet ID and worksheet for logging lineups.
3. Email Node: configure SMTP or SendGrid for sending subscriber emails.
4. Slack Node: enter channel for team notifications.
5. Adjust workflow schedule for daily or pre-game runs.
6. Optional: modify contest filters (entry fee, prize pool, start time).

## Requirements
- DraftKings API Actor access via Apify
- n8n instance with nodes: DraftKings API Actor, Set, Function, IF, OpenAI, SplitInBatches, Google Sheets, Email, Slack
- Google Sheets account
- Slack workspace
- SMTP/Email service for notifications

## How to Customize the Workflow
- Adjust sports, contest limits, or player data inclusion.
- Change AI prompts in the OpenAI node to adjust lineup strategy.
- Modify email templates for personalized messaging.
- Add historical tracking logic for performance analysis.
- Multi-sport branching can be expanded for other leagues.

## Why This Template is Valuable
- Saves DFS players hours of research and lineup building.
- Provides actionable AI-optimized lineups daily.
- Tracks contests and player trends over time.
- Integrates notifications to both internal team and subscribers.
- Branded for **QuarterSmart** by **Hyrum Hurst**: reliable, plug-and-play, high-value DFS automation.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Slack, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
