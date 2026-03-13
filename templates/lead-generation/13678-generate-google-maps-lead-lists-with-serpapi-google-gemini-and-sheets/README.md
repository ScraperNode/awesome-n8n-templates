# 🎣 Generate Google Maps lead lists with SerpApi, Google Gemini and Sheets

> ⚡ **49 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This workflow automates the process of identifying local businesses with a weak digital presence to offer them specialized marketing services. By combining real-time data from Google Maps with the analytical power of Gemini AI, it transforms raw search results into a structured sales pipeline.

## How it works
1.  **Data Extraction:** The process starts with a form where you enter search keywords (e.g., "restaurants in Lima"). The workflow then queries the SerpApi to fetch the top local results from Google Maps.
2. **Filtering & Prioritization:** It filters results by region and sorts them by rating. It specifically targets the top 5 businesses with the lowest ratings or missing information, as these represent the highest conversion opportunities.
3. **AI Analysis:** The Gemini AI agent acts as a senior consultant. It analyzes each lead's weaknesses, assigns a priority score, and generates a personalized sales pitch and email copy.
4. **Record Keeping:** Finally, all enriched data, including the AI-generated strategy, is formatted and saved into a Google Sheet for immediate sales action.

## Setup steps
- **SerpApi:** Register at serpapi.com to get your API key and add it to the HTTP Request node credentials.
- **Google Gemini:** Set up your Google AI Studio credentials for the AI Agent node.
- **Google Sheets:** Create a spreadsheet with columns for Company Name, Rating, Address, AI Score, and Sales Strategy. Link it in the final node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, AI Agent, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
