# 📊 Automated local event monitor with Bright Data MCP and OpenAI analysis

> ⚡ **544 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically monitors local event platforms (Eventbrite, Meetup, Facebook Events) and aggregates upcoming events that match your criteria. Never miss a networking or sponsorship opportunity again.

## Overview

A scheduled trigger scrapes multiple event sites via Bright Data, filtering by location, date range, and keywords. OpenAI classifies each event (conference, meetup, workshop) and extracts key details such as venue, organizers, and ticket price. Updates are posted to Slack and archived in Airtable for quick lookup.

## Tools Used

- **n8n** – Core automation engine
- **Bright Data** – Reliable multi-site scraping
- **OpenAI** – NLP-based event categorization
- **Slack** – Delivers daily event digests
- **Airtable** – Stores enriched event records

## How to Install

1. **Import the Workflow**: Add the `.json` file to n8n.
2. **Configure Bright Data**: Provide your account credentials.
3. **Set Up OpenAI**: Insert your API key.
4. **Connect Slack & Airtable**: Authorize both services.
5. **Customize Filters**: Edit the initial Set node to adjust city, radius, and keywords.

## Use Cases

- **Community Managers**: Curate a calendar of relevant events.
- **Sales Teams**: Identify trade shows and meetups for prospecting.
- **Event Planners**: Track competing events when choosing dates.
- **Marketers**: Spot speaking or sponsorship opportunities.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #eventmonitoring #brightdata #openscraping #openai #slackalerts #n8nworkflow #nocode #meetup #eventbrite

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
