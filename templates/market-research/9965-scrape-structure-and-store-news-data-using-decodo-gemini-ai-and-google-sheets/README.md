# 📊 Scrape, structure, and store news data using Decodo, Gemini AI and Google Sheets

> ⚡ **249 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Sign up for Decodo [HERE](https://visit.decodo.com/discount) for Discount

Automatically scrape, structure, and log forum or news content using Decodo and Google Gemini AI. This workflow extracts key details like titles, URLs, authors, and engagement stats, then appends them to a Google Sheet for tracking and analysis.

## Who’s it for?
Ideal for data journalists, market researchers, or AI enthusiasts who want to monitor trending topics across specific domains.

## How it works
1. **Trigger:** Workflow runs on schedule.  
2. **Data Setup:** Defines forum URLs and geolocation.  
3. **Scraping:** Extracts raw text data using the Decodo API.  
4. **AI Extraction:** Gemini parses and structures the scraped text into clean JSON.  
5. **Data Storage:** Each news item is appended or updated in Google Sheets.  
6. **Logging:** Records scraping results for monitoring and debugging.

## How to set up
- Add your **Decodo**, **Google Gemini**, and **Google Sheets** credentials in n8n.  
- Adjust the **forum URLs**, **geolocation**, and **Google Sheet ID** in the `Workflow Config` node.  
- Set your preferred trigger interval in `Schedule Trigger`.  
- Activate and monitor from the n8n dashboard.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
