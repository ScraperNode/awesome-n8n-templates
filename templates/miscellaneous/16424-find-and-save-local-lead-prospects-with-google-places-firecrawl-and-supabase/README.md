# 🔧 Find and save local lead prospects with Google Places, Firecrawl and Supabase

> ⚡ **63 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow receives a webhook request with a target business vertical and location, finds matching companies via Google Places API, scrapes their websites with Firecrawl to extract and validate contact emails, deduplicates against Supabase, stores new prospects, and sends a single digest via Microsoft Outlook plus a notification webhook.

## How it works
1. Receives a POST webhook request containing a business vertical, location, and optional result limit.
2. Searches Google Places Text Search for matching local businesses and keeps operational results that include a website while filtering out competitor categories.
3. Scrapes each business homepage and a likely contact page with Firecrawl to extract a preferred email address and detect parked or low-content domains.
4. Validates the extracted email domain by checking DNS MX records via Google DNS-over-HTTPS.
5. Collects all processed businesses, fetches existing prospects from Supabase, and removes entries that match existing website URLs or verified emails.
6. Inserts the new, emailable prospects into a Supabase table and sends a single HTML digest email through Microsoft Outlook.
7. Posts a run summary to a separate webhook endpoint (for a Telegram relay) and returns a JSON response to the original webhook caller.

## Setup
1. Create credentials for Google Places API (HTTP Header Auth with your API key), Firecrawl, Supabase, and Microsoft Outlook OAuth2.
2. Replace the Supabase REST URLs (YOUR-PROJECT.supabase.co) and ensure a pilot_prospects table exists with fields to store website_url, verified_email, and the inserted prospect payload.
3. Update the webhook path and send POST requests like {"vertical":"dentists","location":"Orlando FL","limit":20} to trigger the workflow.
4. Set the digest recipient/sender addresses in the Microsoft Outlook email node.
5. Replace the notification webhook URL used for the Telegram relay with your own endpoint (and configure that endpoint/bot to post to your target chat).

## Additional info
Two details that make this more useful than a plain Places scrape. It validates each extracted email domain with a real DNS MX lookup, so you are not saving addresses that can never receive mail. And it deduplicates against what you already have in Supabase before inserting, matching on both website URL and verified email, so re-running it on the same vertical will not fill your table with the same businesses again.

The competitor-category filter and the parked-domain detection are both worth tuning to your own market before you run it at volume.

Questions or help getting it running: support@priscgroup.com

Built by PRISC Group. Automate. Relentlessly. Ruthlessly.

## 🔗 Nodes Used

HTTP Request, Webhook, Microsoft Outlook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
