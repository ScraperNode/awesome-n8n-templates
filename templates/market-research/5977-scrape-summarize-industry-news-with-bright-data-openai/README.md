# 📊 Scrape & summarize industry news with Bright Data & OpenAI

> ⚡ **1,860 views** · 📊 [Market Research & Insights](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow automatically scrapes and summarizes the latest industry news, delivering a curated digest to your team. Stay informed without sifting through countless articles.

## Overview

Bright Data scrapes top news sites, blogs, and press release feeds relevant to your sector. OpenAI summarizes each article and tags it by topic. The daily digest is compiled into Markdown and sent via Slack and email, while full summaries are archived in Notion.

## Tools Used

- **n8n** – Automation framework
- **Bright Data** – Scrapes news sources reliably
- **OpenAI** – Generates concise summaries and tags
- **Slack & Gmail** – Distributes daily digest
- **Notion** – Stores detailed article notes

## How to Install

1. **Import the Workflow** into n8n.
2. **Configure Bright Data** credentials.
3. **Set Up OpenAI** API key.
4. **Authorize Slack, Gmail, and Notion**.
5. **Customize Source List & Keywords** in the Set node.

## Use Cases

- **Executive Briefings**: Keep leadership updated.
- **Product Teams**: Track competitor announcements.
- **Marketing**: Identify content trends quickly.
- **Investors**: Monitor sector developments.

## Connect with Me

- **Website**: https://www.nofluff.online
- **YouTube**: https://www.youtube.com/@YaronBeen/videos
- **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
- **Get Bright Data**: https://get.brightdata.com/1tndi4600b25 (Using this link supports my free workflows with a small commission)

#n8n #automation #industrynews #webscraping #brightdata #openai #newsdigest #n8nworkflow #nocode

## 🔗 Nodes Used

Gmail, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
