# 📈 Send daily price-drop digest emails for Amazon, Walmart and Google via ScraperAPI

> ⚡ **92 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Track your product wishlist across Amazon, Walmart, and Google and get an email the moment a price drops.
 
## **How it works**
- Every morning, reads your products from a Data Table and pulls fresh prices from Amazon, Walmart, and Google Shopping via ScraperAPI.
- Logs every check to a *price_history* table for trend analysis.
- Sends a single HTML digest email, only when something actually dropped.

## **Set up steps**

About 5 minutes:
- Connect your ScraperAPI credential and SMTP or Gmail credential.
- Click ► on Run Setup once to create the tables and seed sample products.
- Add your own products, test, then toggle Active.

## 🔗 Nodes Used

Send Email, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
