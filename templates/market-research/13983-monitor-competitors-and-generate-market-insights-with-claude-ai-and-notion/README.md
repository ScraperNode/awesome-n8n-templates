# 📊 Monitor competitors and generate market insights with Claude AI and Notion

> ⚡ **218 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Research competitors and generate market insights with Claude AI and Notion

## Who is this for

SaaS product managers, startup founders, and marketing teams who need to stay informed about competitor movements without manual monitoring. Perfect for teams who want to automate competitive intelligence gathering and respond quickly to market changes.

## How it works

The workflow runs weekly, automatically scraping competitor websites and pricing pages using HTTP requests. A code node extracts key content and creates content hashes to detect changes from previous scans. When changes are detected, Claude AI analyzes the updates and provides strategic insights about pricing shifts, feature launches, or messaging changes.

All competitor data and AI analysis are automatically saved to a Notion database for historical tracking. Important changes trigger immediate Slack notifications with actionable insights. At the end of each week, a comprehensive report summarizing all competitor activity is generated and emailed to your team.

## How to set up

Configure competitor URLs in the Set node by adding websites, pricing pages, and feature pages you want to monitor. Set up API credentials for Claude AI, Notion, Slack, and Gmail. Create a Notion database with properties for competitor name, URL, content hash, AI analysis, and scan date. Define environment variables for your Notion database ID, Slack channel, and team email list.

## Requirements

- Anthropic Claude API key for competitive analysis
- Notion workspace with API access for data storage
- Slack workspace for urgent alerts
- Gmail account for weekly reporting
- Basic HTML/CSS knowledge helpful for customizing content extraction

## How to customize

Adjust the schedule trigger frequency, modify urgent notification keywords in the priority evaluation code, or customize the Claude AI analysis prompt to focus on specific competitive aspects like pricing, features, or market positioning.

## 🔗 Nodes Used

HTTP Request, Slack, Gmail, Notion, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
