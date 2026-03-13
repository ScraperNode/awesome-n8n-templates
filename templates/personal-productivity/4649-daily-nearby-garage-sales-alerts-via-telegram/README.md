# ⚡ 📍 Daily nearby garage sales alerts via Telegram

> ⚡ **1,161 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Get a personalized list of garage sales happening today, based on your current location, directly in Telegram each morning! This n8n workflow integrates Home Assistant and [Brocabrac.fr](Brocabrac.fr )to:
- Automatically detect your location every day
- Scrape and parse garage sale listings from Brocabrac
- Filter for high-quality and nearby events
- Send a neatly formatted message to your Telegram account

Perfect for treasure hunters and second-hand enthusiasts who want to stay in the loop with zero effort!

## 🔗 Nodes Used

HTTP Request, Telegram, Home Assistant, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
