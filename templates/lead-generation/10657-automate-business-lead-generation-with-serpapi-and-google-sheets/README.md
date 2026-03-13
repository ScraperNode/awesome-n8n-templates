# 🎣 Automate business lead generation with SerpAPI and Google Sheets

> ⚡ **189 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Overview

This workflow helps you automatically collect verified business leads from Google Search using SerpAPI — no coding required.
It extracts company names, websites, emails, and phone numbers directly from search results and saves them into Google Sheets for easy follow-up or CRM import.

Perfect for marketers, freelancers, and agencies who want real, usable leads fast — without manual scraping or paid databases.

# How It Works

- SerpAPI Node performs a Google search for your chosen keyword or niche.
- Split Out Node separates each result for individual processing.
- HTTP Request Node optionally visits each site for deeper data extraction.
- Code Node filters, validates, and formats leads using smart parsing logic.
- Google Sheets Node stores the final structured data automatically.
- All steps include sticky notes with configuration help.

# Setup Steps

- Setup takes about 5–10 minutes:
- Add your SerpAPI key (replace the placeholder).
- Connect your Google Sheets account.
- Update the search term (e.g., “Plumbers in New York”).
- Run the workflow and watch leads populate your sheet in real time.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
