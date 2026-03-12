# 🎣 Automated company research & lead enrichment with GPT-4o and Google Sheets

> ⚡ **2,834 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Supercharge your sales and marketing with this AI-powered workflow! 🚀 Stop wasting hours on manual company research. This template deploys an autonomous AI agent that takes a list of company names from a Google Sheet, scours the web to find critical information, and automatically updates your sheet with the enriched data.

**What it does:**
- Reads a list of companies to research from a Google Sheet.
- Uses an AI agent equipped with Google Search and web scraping tools.
- Extracts key data points like LinkedIn URLs, pricing details, integrations, market focus (B2B/B2C), and more.
- Structures the output into a clean JSON object.
- Updates the original Google Sheet with the new information.

**Key Features & Customization:**
This workflow is built to be easily customized. You can modify the AI's prompt in the "AI company researcher" node and adjust the "Structured Output Parser" to gather any public data point you need, such as recent news, key executives, or their technology stack.

**Required Credentials:**
- OpenAI
- Google Sheets
- SerpApi or ScrapingBee for search capabilities

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser, SerpApi (Google Search)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
