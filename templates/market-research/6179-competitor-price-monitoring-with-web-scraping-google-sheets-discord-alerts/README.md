# 📊 Competitor price monitoring with web scraping, Google Sheets & Discord alerts

> ⚡ **569 views** · 📊 [Market Research & Insights](../)

## Description

This workflow monitors product prices from [BooksToScrape](https://books.toscrape.com) and sends alerts to a Discord channel via webhook when competitor's prices are lower than our prices.

## 🧩 Nodes Used

- Schedule (for daily or required schedule)
- If nodes (to check if checked or unchecked data exists)
- HTTP Request (for fetching product page )
- Extract HTML (for extracting poduct price)
- Code(to clean and extract just the price number)
- Discord Webhook (send discord allerts)
- Sheets (extract and update)

## 🚀 How to Use

1. Replace the Discord webhook URL with your own.
2. Customize the scraping URL if you're monitoring a different site.([Sheet i used](https://docs.google.com/spreadsheets/d/16-hEaIl8Tng5SB5jbpu26kT7G-g1cFM5_w2AILwT3Pc/edit?usp=sharing))
3. Run the workflow manually or on a schedule.

## ⚠️ Important

- Do not use this for commercial scraping without permission.
- Ensure the site allows scraping (this example is for learning only).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Discord, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
