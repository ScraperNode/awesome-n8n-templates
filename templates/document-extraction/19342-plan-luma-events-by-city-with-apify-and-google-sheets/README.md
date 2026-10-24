# 🔬 Plan Luma events by city with Apify and Google Sheets

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Give a community organizer an event-planning register for one city. Bring public Luma dates, timezones, venue information and registration requirements into Google Sheets without copying attendee profiles or sending invitations.

## How it works
1. One bounded Apify run supplies source records, coverage and billing evidence.
2. The workflow checks the complete dataset before Google Sheets delivery.
3. Stable source keys update existing rows on repeat. Unobserved earlier rows remain, so the Sheet is a current review register, not a complete history.
4. COMPLETE describes the declared source window; CAPPED remains a labelled sample.
5. Source failures stop delivery. Verified empty results create no data rows.
6. Keep UTC timestamps and the source timezone together. The review action highlights applications, sold-out events and dates that have already started. Empty price or availability fields remain unknown. Review the event page before making plans; the workflow does not register guests or book tickets.

## Setup
1. Import the workflow into an empty n8n canvas. Use your own Apify account and a Header Auth credential on all five HTTP nodes.
2. Connect Google Sheets OAuth2 on Upsert review register. Create the supplied tab and import the exact [CSV header](https://raw.githubusercontent.com/bulatovicluka1989-rgb/luminar-apify-examples/main/actors/luma-events-scraper-monitor/n8n-luma-planning/sheet-header.csv).
3. Enter its spreadsheet ID in Review settings and run manually.

## Requirements
- The template is free; Apify usage is paid. The default $1 cap is a maximum, not a quoted price. Repeated results can incur charges again. Only Sheet delivery retries automatically.

## Customization
- Start with sf, then use another supported Luma city slug. Choose all, in_person or online events and all, free or paid pricing. Up to 100 events are supported. Keep settings stable and run sequentially to update the same scope. [Setup details](https://raw.githubusercontent.com/bulatovicluka1989-rgb/luminar-apify-examples/main/actors/luma-events-scraper-monitor/n8n-luma-planning/README.md).

## Additional info
![Workflow canvas](https://raw.githubusercontent.com/bulatovicluka1989-rgb/luminar-apify-examples/main/actors/luma-events-scraper-monitor/n8n-luma-planning/workflow.png)

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
