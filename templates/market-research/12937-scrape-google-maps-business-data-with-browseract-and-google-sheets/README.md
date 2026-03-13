# 📊 Scrape Google Maps business data with BrowserAct and Google Sheets

> ⚡ **236 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

Automatically scrape Google Maps business data using BrowserAct AI automation and save results directly to Google Sheets.

🎯 What This Workflow Does:
- Collects business information from Google Maps based on location and category
- Extracts name, phone, rating, address, website, and latest reviews
- Automatically saves data to Google Sheets with deduplication
- User-friendly form interface for easy data collection

🔧 Requirements:
- [BrowserAct Community Node](https://www.npmjs.com/package/n8n-nodes-browseract-workflows)
- [BrowserAct account](https://browseract.ai/kristian)
- Google Sheets OAuth2 credentials
- [BrowserAct Google Maps Detail Scraper template](https://www.browseract.com/template-share/template-of-googlemaps-detail-scraper-2026-01-20/626dfc97051f46dc9ee0d0f33642387a)

✨ Perfect For:
- Lead generation and prospecting
- Market research and competitor analysis
- Building business directories
- Local SEO research
- Sales outreach campaigns

📊 Extracted Data Includes:
- Business Name
- Phone Number
- Category
- Rating
- Full Address
- Website URL
- Latest Review Summary

💡 Easy Setup:
Just fill in the form with your target location and business category, and let BrowserAct AI handle the scraping while results automatically populate your Google Sheets.

🎥 [Full tutorial on YouTube](https://youtu.be/6M3HyfOYzVI)

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
