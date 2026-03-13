# 📊 Find out which Chrome extensions are tracked by Linkedin

> ⚡ **939 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## What this workflow does
**Linkedin tracks which Chrome extensions are installed in your browser.**  This workflow uses a huge raw JSON of chrome extension ids, extracted from Linkedin pages, and builds a pretty Google Sheet with the list of these extensions. This workflow web scrapes Google to search for chrome extension id - and extracts the first search result.

## Setup
1. Clone this Google Sheet template: https://docs.google.com/spreadsheets/d/1nVtoqx-wxRl6ckP9rBHSL3xiCURZ8pbyywvEor0VwOY/edit?gid=0#gid=0
2. Get API key for Google SERP API access here: https://rapidapi.com/restyler/api/serp-api1
3. Create n8n header auth for Google SERP API

## Some context and discussion 
https://www.linkedin.com/feed/update/urn:li:activity:7245006911807393792/

**Follow the author and get the final Google Sheet with 1300+ Chrome extensions:** https://www.linkedin.com/in/anthony-sidashin/

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
