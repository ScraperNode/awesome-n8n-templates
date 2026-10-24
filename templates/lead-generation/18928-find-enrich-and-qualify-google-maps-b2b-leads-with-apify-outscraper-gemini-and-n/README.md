# 🎣 Find, enrich and qualify Google Maps B2B leads with Apify, Outscraper, Gemini and Notion

> ⚡ **43 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs from an n8n form to collect a lead-gen campaign, searches Google Maps via Apify, enriches contacts using website scraping and Outscraper, qualifies leads, generates Gemini sales insights for high-fit prospects, and stores campaigns and leads in Notion.

## How it works
1. Receives campaign details from an n8n form submission and creates a Campaign record in Notion.
2. Builds a Google Maps search query and uses Apify’s Google Maps actor to retrieve business listings.
3. Normalizes results, handles empty searches, and removes duplicate leads by a stable lead key.
4. For each unique lead, checks Notion to skip businesses already stored globally.
5. Enriches each new lead by scraping the business website for emails and contact/social links, and falls back to Outscraper to find contacts when needed.
6. Scores and labels each lead (high fit, low fit, or rejected) based on available contact signals.
7. Sends only high-fit leads to Google Gemini to generate structured sales insights and an outreach message, then creates the Lead record in Notion.
8. Queries all campaign leads in Notion, computes run metrics (stored, enriched, high-fit, insights generated), and marks the campaign as Done.

## Setup
1. Create or select a Notion database that contains the Campaign and Lead properties used by the workflow, then add a Notion API credential.
2. Replace `REPLACE_WITH_NOTION_DATA_SOURCE_ID` in the Configuration step with your Notion data source (database) ID.
3. Install and authenticate the Apify community node and provide an Apify API token.
4. Install and authenticate the Outscraper community node and provide an Outscraper API token.
5. Add a Google Gemini (PaLM) API credential for the LangChain Gemini chat model used to generate sales insights.
6. Review and adjust the form defaults (max results and qualification threshold) and the lead scoring rules and Gemini prompt text for your niche.

## 🔗 Nodes Used

HTTP Request, Notion, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
