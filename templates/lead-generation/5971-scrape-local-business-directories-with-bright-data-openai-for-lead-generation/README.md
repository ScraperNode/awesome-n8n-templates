# 🎣 Scrape local business directories with Bright Data & OpenAI for lead generation

> ⚡ **1,700 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically scrapes local business directories (Yelp, Yellow Pages, Google Maps, etc.) to build a structured database of prospects. Stop copying listings by hand—get fresh leads delivered straight to Google Sheets.

## Overview

Using Bright Data, the automation fetches business names, contact details, ratings, and categories for a given city or ZIP code. OpenAI cleans and normalizes the data, while duplicate detection ensures each business appears only once. The result is emailed as a CSV and stored in Sheets for easy filtering.

## Tools Used

- **n8n** – Workflow orchestration
- **Bright Data** – Handles large-scale directory scraping
- **OpenAI** – Performs entity cleanup and deduplication
- **Google Sheets** – Houses the resulting lead list
- **Gmail** – Sends the CSV file to your inbox

## How to Install

1. **Import the Workflow**: Load the `.json` into n8n.
2. **Configure Bright Data**: Add your credentials.
3. **Set Up OpenAI**: Enter your API key.
4. **Connect Google Sheets & Gmail**: Authorize both integrations.
5. **Customize Locations & Categories**: Adjust parameters in the Start node.

## Use Cases

- **Local Lead Generation**: Build outreach lists for agencies or SaaS.
- **Market Research**: Analyze density of businesses in a region.
- **Franchise Expansion**: Identify potential partners within a territory.
- **Startup Sales**: Discover SMBs that match your ICP.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #webscraping #localbusiness #brightdata #leadgeneration #n8nworkflow #nocode #businessdirectories #openai

## 🔗 Nodes Used

Gmail, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
