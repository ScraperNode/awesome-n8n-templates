# 🤝 Analyze sales territory performance with Bright Data MCP & GPT-4o

> ⚡ **610 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automatically analyzes sales territory performance, comparing revenue, win rates, and activity across regions. Remove the guesswork from territory planning and drive balanced growth.

## Overview

On a weekly schedule, the workflow pulls CRM data for each territory, merges it with demographic and market size info scraped via Bright Data, and feeds everything into OpenAI for performance benchmarking. Outliers—both high and low performers—are highlighted in a Google Data Studio dashboard and summarized in a Slack message.

## Tools Used

- **n8n** – Orchestrates data collection and analysis
- **CRM API** – Source of sales metrics by territory
- **Bright Data** – Scrapes external market indicators (population, GDP, etc.)
- **OpenAI** – Normalizes and benchmarks territories
- **Google Sheets / Data Studio** – Stores and visualizes results
- **Slack** – Sends the weekly summary

## How to Install

1. **Import the Workflow** into n8n.
2. **Connect Your CRM** API credentials.
3. **Configure Bright Data** credentials.
4. **Set Up OpenAI** API key.
5. **Authorize Google services & Slack**.
6. **Customize Territory Definitions** in the Set node.

## Use Cases

- **Sales Leadership**: Rebalance territories based on potential.
- **Revenue Operations**: Identify underserved regions.
- **Financial Planning**: Allocate resources where ROI is highest.
- **Incentive Design**: Reward reps fairly based on potential.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #territorymanagement #salesanalytics #brightdata #openai #n8nworkflow #nocode #revenueops

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
