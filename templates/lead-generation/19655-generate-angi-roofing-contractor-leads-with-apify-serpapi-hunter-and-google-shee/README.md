# 🎣 Generate Angi roofing contractor leads with Apify, SerpApi, Hunter and Google Sheets

> ⚡ **5 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Video: https://lnkd.in/p/dCCv3avg
 
This workflow runs daily to scrape roofing contractor leads via Apify, deduplicates them against a Google Sheets lead list, enriches new leads with website and email data using SerpApi and Hunter, and then appends results to Google Sheets with Slack notifications.

## How it works
1. Runs on a daily schedule trigger.
2. Calls the Apify API to scrape Angi roofing contractor profiles for Austin, TX and normalizes the results while removing duplicates within the same scrape batch.
3. Loads existing leads from a Google Sheets “Leads” tab and flags any scraped records that match by proId, phone, or a name+location fallback key.
4. Sends new leads to SerpApi (Google Search) to discover a likely company domain while skipping common directory and social sites.
5. If a domain is found, queries the Hunter Domain Search API and selects the best available contact email based on seniority/title; otherwise marks the lead as phone-only.
6. Appends the finalized lead (including enrichment status, website, and contact details when available) to Google Sheets.
7. Posts to Slack when a new lead is saved and posts a separate Slack message when a duplicate lead is skipped.

## Setup
1. Add credentials for Apify (HTTP Header Auth), SerpApi (HTTP Query Auth), Hunter (HTTP Query Auth), Google Sheets OAuth2, and Slack OAuth.
2. Replace REPLACE_WITH_SHEET_ID with your Google Sheets document ID in both Google Sheets steps and ensure the sheet name is “Leads” with matching columns (e.g., proId, phone, fallbackKey, companyName, website, email, enrichmentStatus).
3. Update the Apify scrape parameters (searchTerms, location, maxResults, and detailLevel) if you want different contractor types or service areas.
4. Set the Slack channel ID for both Slack messages to the channel where you want lead and duplicate notifications.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
