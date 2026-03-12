# 📊 Automated Web Scraper: Niche Job/Product Monitor With Telegram Alert

> ⚡ **2,851 views** · 📊 [Market Research & Insights](../)

## Description

**How it works**

This workflow is your personal digital assistant for tracking specific information on websites that lack APIs or RSS feeds. It's perfect for keeping an eye on:

- Niche job postings on specialized forums or company career pages.

- Product availability or price changes on smaller e-commerce sites.

- Any specific text or data appearing on a public webpage.

It automatically:

- Visits a specified webpage on a schedule (e.g., hourly, daily).

- Intelligently extracts specific data points (like job titles, links, product names, or stock status) from the page's HTML using advanced selectors.

- Notifies you via Telegram when new relevant information is found or if a change occurs.

Stop manually refreshing pages and let automation bring the critical updates directly to you!

**Set up steps**

Setting up this workflow is more involved than basic automations due to the web scraping aspect, typically taking around 20-40 minutes. You'll need to:

- Identify the exact URL of the webpage you want to monitor.

- Learn how to find CSS Selectors or XPath for the specific data elements you want to extract from the webpage (a browser's developer tools are essential here).

- Authenticate your Telegram account to receive notifications.

- Optionally, set up an AI service (like OpenAI) if you want to summarize extracted content.

All detailed setup instructions and specific configuration guidance, including how to find CSS selectors, are provided within the workflow itself using sticky notes.

## 🔗 Nodes Used

Cron, Function, HTTP Request, Telegram, HTML Extract

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
