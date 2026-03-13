# 📊 Monitor G2 competitors reviews [Google Sheets, ScrapingBee, Slack]

> ⚡ **3,439 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This workflow monitor G2 reviews URLS. 

When a new review is published, it will: 
- trigger a Slack notification 
- record the review in Google Sheets

To install it, you'll need: 
- access to Slack, Google Sheets and ScrapingBee

Full guide here: https://lempire.notion.site/Scrape-G2-reviews-with-n8n-3f46e280e8f24a68b3797f98d2fba433?pvs=4

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Markdown, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
