# 📊 Track regional sentiment from social media with Bright Data & OpenAI

> ⚡ **529 views** · 📊 [Market Research & Insights](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically tracks regional sentiment across social media and news outlets, giving you a real-time pulse on how people in a specific area feel about your brand or topic.

## Overview

The automation queries Twitter, Reddit, and major news APIs filtered by geolocation. Bright Data handles location-specific scraping where APIs are limited. OpenAI performs sentiment and keyword extraction, aggregating scores into a daily report stored in Google Sheets and visualized in Data Studio.

## Tools Used

- **n8n** – Coordinates all steps
- **Bright Data** – Collects geo-targeted data beyond API limits
- **OpenAI** – Runs sentiment analysis and topic modeling
- **Google Sheets** – Houses cleaned sentiment metrics
- **Data Studio / Looker** – Optional dashboard for visualization

## How to Install

1. **Import the Workflow** into n8n with the provided `.json`.
2. **Configure Bright Data** credentials.
3. **Set Up OpenAI** API key.
4. **Connect Google Sheets** and create a destination spreadsheet.
5. **Customize Regions & Keywords** in the Start node.

## Use Cases

- **Brand Monitoring**: Measure public opinion in target markets.
- **Political Campaigns**: Gauge voter sentiment by district.
- **Market Entry**: Understand regional attitudes before launching.
- **Crisis Management**: Detect negative spikes early.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #sentimentanalysis #geolocation #brightdata #openai #sociallistening #n8nworkflow #nocode #brandmonitoring

## 🔗 Nodes Used

Trello, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
