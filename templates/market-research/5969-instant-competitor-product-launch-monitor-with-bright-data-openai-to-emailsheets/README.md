# 📊 Instant competitor product launch monitor with Bright Data & OpenAI to email/sheets

> ⚡ **554 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically monitors competitor product launches across news sites, press releases, and social channels. It saves you hours of manual tracking and ensures your team is instantly alerted when a rival announces something new.

## Overview

The automation regularly scrapes predefined sources for mentions of your competitors combined with launch-related keywords. Bright Data provides reliable scraping, while OpenAI analyzes each article to extract key details (product name, features, launch date, pricing). Summaries are pushed to Slack and logged in Google Sheets so your marketing and product teams can react quickly.

## Tools Used

- **n8n** – Orchestrates the entire workflow
- **Bright Data** – Scrapes news, blogs, and social posts without blocks
- **OpenAI** – Extracts and summarizes launch information
- **Slack** – Sends real-time alerts to a chosen channel
- **Google Sheets** – Creates a searchable launch database

## How to Install

1. **Import the Workflow**: Upload the provided `.json` to your n8n instance.
2. **Configure Bright Data**: Add your Bright Data credentials in the MCP Client node.
3. **Set Up OpenAI**: Enter your OpenAI API key.
4. **Connect Slack & Google Sheets**: Authorize both services and choose the target channel / spreadsheet.
5. **Customize Sources**: Edit the list of competitor domains and launch keywords in the initial Set node.

## Use Cases

- **Product Marketing**: Track rival announcements to refine positioning.
- **Sales Enablement**: Equip reps with up-to-date competitive intel.
- **Competitive Intelligence**: Maintain a historical log of launches for trend analysis.
- **Investor Relations**: Stay informed of market movements that affect valuation.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #competitiveintelligence #productlaunch #brightdata #webscraping #openai #slackalerts #n8nworkflow #nocode #marketintel

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
