# 📊 Generate SaaS product ideas from market gaps with OpenAI and Bright Data

> ⚡ **1,608 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically analyzes online data sources to uncover unmet customer needs and product opportunities. Instead of spending days on manual research, you receive an AI-driven report of market gaps directly in your inbox.

## Overview

The automation aggregates product reviews, forum discussions, and competitor feature lists via Bright Data scraping. OpenAI then clusters complaints and feature requests to highlight where demand is high but supply is low. A summary table is generated in Google Sheets and a concise report is emailed to stakeholders.

## Tools Used

- **n8n** – Automates the entire pipeline
- **Bright Data** – Scrapes review sites and competitor pages reliably
- **OpenAI** – Performs NLP clustering and gap analysis
- **Google Sheets** – Stores structured opportunity data
- **Gmail** – Delivers the weekly insight report

## How to Install

1. **Import the Workflow**: Add the `.json` to your n8n instance.
2. **Configure Bright Data**: Insert your credentials in the MCP Client node.
3. **Set Up OpenAI**: Provide your OpenAI API key.
4. **Connect Google Sheets & Gmail**: Authorize both services.
5. **Customize Keywords & Sources**: Edit the Set node to focus on your industry and competitors.

## Use Cases

- **Product Management**: Prioritize roadmap features that address true pain points.
- **Startup Ideation**: Validate gaps before building an MVP.
- **Competitive Strategy**: Identify areas where rivals are weak.
- **Investor Research**: Spot underserved niches for portfolio companies.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #marketanalysis #productmanagement #brightdata #openai #marketgaps #n8nworkflow #nocode #competitiveanalysis

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
