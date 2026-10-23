# 🔧 Sync Amazon Luna Prime games to Google Sheets with automatic updates

> ⚡ **65 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Automatically fetch Amazon Luna games included with Prime, detect newly added titles, synchronize the catalog with Google Sheets, and optionally send Discord notifications when new games become available.

## How it works
1. Scheduled refresh — The workflow runs every five days at 3:00 PM by default; the schedule can be changed in n8n.
2. Amazon Luna fetch — An HTTP Request calls the Luna backend with configurable locale and marketplace headers to retrieve the current Included with Prime catalog.
3. Game parsing — JavaScript extracts structured metadata including ASIN, title, release year, publishers, genres, product URL, images, and age rating.
4. New-game detection — Retrieved titles are compared with Google Sheets records, primarily by ASIN and with title as a fallback.
5. Google Sheets sync — Games are appended or updated in the selected sheet to keep the catalog synchronized without duplicate records.
6. Discord notification — Newly detected games can be filtered, batched, and sent to Discord with game details and artwork.

## Setup
1. Import the workflow — Import workflow.json into n8n.
2. Configure Amazon headers — Update the Edit Fields node with the locale, marketplace ID, Origin, Referer, Accept-Language, and User-Agent for your target Amazon region.
3. Connect Google Sheets — Configure credentials, document, and sheet for reading the existing catalog and writing synchronized records.
4. Configure Discord — Connect Discord OAuth2 and select the target server and channel, or remove/replace this branch if notifications are not required.
5. Review the schedule — Keep the default five-day interval or choose your preferred refresh frequency.
6. Activate the workflow — Run a manual test, verify rows and notifications, then activate it.

## Requirements
- n8n instance
- Google Sheets account and credentials
- Google Sheet used as the game catalog
- Network access to the Amazon Luna endpoint
- Discord account and n8n Discord OAuth2 credentials (optional)
- Alternative notification service such as Telegram, Slack, email, or webhook (optional)
- Additional branches for multiple Amazon marketplaces (optional)

## Customization
- Region — Change locale, marketplace ID, Origin, Referer, and language headers for another supported marketplace.
- Schedule — Adjust how often the Luna catalog is refreshed.
- Stored metadata — Extend or reduce fields extracted by the Code node and mapped to Google Sheets.
- Notifications — Replace Discord with another n8n-supported messaging, email, or webhook integration.
- Multi-region tracking — Duplicate the fetch, parsing, synchronization, and notification logic for separate regional catalogs.

## Additional info
Amazon may change Luna endpoints or request requirements; review the request configuration if fetching stops working.
Amazon data remains subject to Amazon's applicable terms and policies.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Discord, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
