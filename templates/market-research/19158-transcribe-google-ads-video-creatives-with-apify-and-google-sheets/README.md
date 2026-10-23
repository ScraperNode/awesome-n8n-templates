# 📊 Transcribe Google Ads video creatives with Apify and Google Sheets

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Every Monday this workflow transcribes the new YouTube video ads each brand is running in Google's Ads Transparency Center, has an AI break the script down, appends them to a Google Sheet and emails you the week's breakdown.

## How it works
1. A Schedule Trigger fires weekly. One Config node holds the domains, region, ads per domain and the recipient.
2. It loops over the domains: each Transparency Center page is scraped on Apify, then that run's dataset goes straight to the Google Ads Video Transcript Scraper.
3. Remove Duplicates drops every creative seen in an earlier execution, so a weekly run only reports new ads. Nothing new means no email is sent.
4. An Information Extractor breaks each new ad down: hook type, promise, proof, CTA and script structure.
5. Google Sheets appends a row per ad; Gmail sends a digest counting transcribed and silent ads separately.

## Setup
1. Create an HTTP Header Auth credential (name `Authorization`, value `Bearer YOUR_APIFY_TOKEN`) and select it on the three HTTP Request nodes.
2. Add a Groq credential on the chat model node - a drop-in swap for OpenAI or Anthropic.
3. Connect Google Sheets and Gmail, then set your domains, region and recipient in Config.

## Requirements
- An Apify account, a chat model account and a Google account.
- Transcription is charged only when a transcript is delivered; music-only ads are uncharged and still reach the sheet with their status.

## Customization
- Point it at advertiser names instead of domains, or change the region.
- Send the digest to Slack instead of Gmail.

## Additional info
YouTube and Google Ads performance marketers who would rather read competitor scripts than watch them.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Groq Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
