# 🎣 Scrape Google Maps data & discover email addresses with SerpAPI and EmailListVerify

> ⚡ **1,546 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow allows to : 
- scrape Google Maps data using SerpAPI
- discovery generic email addresses like contact@ using EmailListVerify API

## Who’s it for
This template is designed to prepare cold outreach for local businesses like restaurants or hotels (you need to target a type of business that is listed on Google Maps).

This template will generate a list of leads with phone numbers and email addresses.

The email addresses you will get are generic, like contact@. This isn’t a problem if you are targeting small businesses, as the owner will most likely monitor those emails. However, if your ideal customer profile has more than 20 employees, I do not recommend using those email addresses for cold outreach.
## Requirement
This template uses:
Google Sheet to handle input and output data
[SerpAPI](https://serpapi.com/) to scrape Google Maps (250 searches/month in the free plan)
[EmailListVerify](https://emaillistverify.com/) to discover email (from $0.05 per email)

## Notes
This template is an extension of [Lucas Perret template](https://n8n.io/workflows/2063-google-maps-scraper/) (adding email discovery module).

If there is some interest in it, I can make a similar template using [Apify](https://apify.com/compass/crawler-google-places?backlink=%252Fstore) as an alternative to SerpAPI for Google Map scraping.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
