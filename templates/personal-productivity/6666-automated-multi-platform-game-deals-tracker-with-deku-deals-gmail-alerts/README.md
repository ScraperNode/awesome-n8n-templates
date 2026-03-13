# ⚡ Automated Multi-Platform Game Deals Tracker with Deku Deals & Gmail Alerts

> ⚡ **146 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**How it works**

This advanced workflow keeps you informed about the hottest game deals across multiple platforms (Nintendo Switch, PlayStation, Xbox, PC, etc.), aggregated by Deku Deals. No more manual checking for price drops – it automatically:

- Scans Deku Deals daily for popular game deals.

- Extracts key information like game title, platforms, current price, original price, discount, and direct links.

- Intelligently tracks previously seen deals using a local database, guaranteeing you only get notified about genuinely new price drops or added games.

- Delivers a clear and concise notification to your email (or preferred service) summarizing the best new deals.

Stay ahead of the sales, save money, and never miss a great game deal again!

**Set up steps**

Setting up this workflow involves web scraping, local database management, and understanding some web element selectors. It typically takes around 20-35 minutes. You'll need to:

- Authenticate your preferred notification service (e.g., Gmail, Telegram).

- Understand how to use your browser's developer tools to find CSS Selectors (detailed instructions provided within the workflow).

- No external database setup required, as it uses n8n's built-in SQLite database.

All detailed setup instructions and specific configuration guidance are provided within the workflow itself using sticky notes.

## 🔗 Nodes Used

Cron, Function, HTTP Request, HTML Extract, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
