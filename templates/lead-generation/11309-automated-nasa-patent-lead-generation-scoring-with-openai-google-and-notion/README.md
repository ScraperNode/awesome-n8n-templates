# 🎣 Automated NASA patent lead generation & scoring with OpenAI, Google, and Notion

> ⚡ **102 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who is this for
This workflow is designed for **Innovation Managers**, **Tech Transfer Offices**, and **Business Development Representatives** looking to find commercial partners for new technologies.

## What it does
This template automates the process of scouting startups that might be a good fit for NASA patents.

1. **Search**: It fetches patents from the NASA Tech Transfer API based on a keyword you define.
2. **Find**: It searches Google to identify startups operating in related fields.
3. **Enrich**: It crawls the identified startup's website to extract context about their business.
4. **Analyze**: Using OpenAI, it scores the "fit" between the patent and the startup and drafts a personalized outreach email.
5. **Save**: High-scoring leads are enriched with LinkedIn company pages and saved directly to a Notion database.

## How to set up
1. **Configuration**: In the **Configuration** node, set the `keyword` variable to the technology topic you want to search for (e.g., "robotics").
2. **NASA API**: Get a free API key from `api.nasa.gov` and enter it in the **NASA Patents API** node parameters.
3. **Apify**: Connect your Apify account credential. You will need credits to run the `google-search-scraper` and `website-content-crawler` actors.
4. **OpenAI**: Connect your OpenAI credential.
5. **Notion**: Create a database with the following properties and connect it in the **Create Notion Lead** node:
   - `Company` (Text)
   - `Website` (URL)
   - `LinkedIn` (URL)
   - `Email` (Email)
   - `Score` (Number)
   - `Draft Email` (Text)
   - `NASA Tech` (Text)

## Requirements
- **NASA API Key**: Free to obtain.
- **Apify Account**: Requires `google-search-scraper` and `website-content-crawler` actors.
- **OpenAI API Key**: For analysis and text generation.
- **Notion Account**: To store the leads.

## 🔗 Nodes Used

HTTP Request, Notion, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
