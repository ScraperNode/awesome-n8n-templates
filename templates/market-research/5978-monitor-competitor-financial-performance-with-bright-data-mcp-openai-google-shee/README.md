# 📊 Monitor competitor financial performance with Bright Data MCP, OpenAI & Google Sheets

> ⚡ **606 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically monitors publicly available competitor financial data—funding rounds, earnings, and SEC filings—and alerts your team to significant changes. Gain an edge by reacting to financial moves faster.

## Overview

Using Bright Data, the automation scrapes Crunchbase, press releases, and SEC Edgar filings. OpenAI extracts key figures (revenue, funding amount, valuation) and assesses the potential impact. Highlights are posted to Slack and stored in Airtable for long-term tracking.

## Tools Used

- **n8n** – Drives the automation
- **Bright Data** – Scrapes financial disclosure sites
- **OpenAI** – Extracts numbers and generates insights
- **Slack** – Sends real-time alerts
- **Airtable** – Maintains a financial timeline database

## How to Install

1. **Import the Workflow** into n8n.
2. **Configure Bright Data** credentials.
3. **Set Up OpenAI** API key.
4. **Authorize Slack & Airtable**.
5. **Customize Competitor List & Thresholds** in the Set node.

## Use Cases

- **Competitive Intelligence**: Track rivals’ financial health.
- **Investor Relations**: Benchmark against peers.
- **Strategic Planning**: Identify acquisition targets.
- **Sales Enablement**: Time outreach after funding events.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #financialmonitoring #competitoranalysis #brightdata #openai #secfilings #fundingrounds #n8nworkflow #nocode

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
