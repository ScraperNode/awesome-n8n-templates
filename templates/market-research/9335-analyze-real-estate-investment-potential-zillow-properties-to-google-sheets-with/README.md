# 📊 Analyze real estate investment potential: Zillow properties to Google Sheets with GPT-4o

> ⚡ **577 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automates the process of scraping, analyzing, and storing real estate data from Zillow using Apify, OpenAI, and Google Sheets.

It begins by running an Apify Actor that extracts live property details such as price, location, and key features. The data is then cleaned and processed before being analyzed by an AI model that assigns an investment potential score (1–10).

To maintain reliable results, the AI only scores properties that include all required fields — for example, listings missing price or description data are automatically skipped. This ensures that only complete and accurate information is evaluated.

Finally, all valid results are appended or updated in a Google Sheet, creating a central, always-up-to-date property database for future analysis.

Ideal for real estate investors, analysts, and data-driven agencies, this template provides a fully automated loop for property collection, evaluation, and reporting — all in one flow.

Tools used: Apify, OpenAI, Google Sheets, n8n![Captura de pantalla 20251015 202643.png](fileId:2966)

## 🔗 Nodes Used

Google Sheets, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
