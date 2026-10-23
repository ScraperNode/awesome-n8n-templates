# 🤝 Log multi-platform ad spend from Meta, Google, TikTok, and Taboola to Airtable

> ⚡ **184 views** · 🤝 [CRM & Sales Operations](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs hourly to collect campaign spend, clicks, and impressions from Meta (Facebook), Google Ads, TikTok Ads, and Taboola, then upserts the metrics into Airtable and creates a time-stamped snapshot record for Meta campaigns. Get Implementation help via https://nocode.expert

## How it works
1. Runs every 60 minutes on a schedule.
2. Builds today’s date values (including a sheet-friendly format and PST-adjusted dates) for use in API queries and Airtable filters.
3. Pulls ACTIVE and PAUSED campaign lists from up to four Meta ad accounts and searches Airtable for existing rows matching today’s date.
4. Matches Meta campaigns to Airtable records by Campaign ID, fetches Meta Insights for each campaign for today, and keeps only campaigns with non-zero spend.
5. Upserts the Meta campaign metrics into the Airtable “Daily Ad Spend” table and creates a separate time-slot snapshot row in a second Airtable table.
6. Retrieves today’s performance data from Taboola (via OAuth token), Google Ads (GAQL query), and TikTok Ads (integrated report), then normalizes the results into a single campaign list.
7. Filters out non-spending campaigns and upserts the remaining Google, Taboola, and TikTok campaign metrics into the same Airtable “Daily Ad Spend” table.

## Setup
1. Create an Airtable personal access token connection and set your Airtable Base ID and both Table IDs for the “Daily Ad Spend” and “Daily Snapshot” tables.
2. Replace the placeholder Meta ad account IDs and add a valid Meta Graph API access token in the Meta campaign and insights request URLs.
3. Add Google Ads OAuth2 credentials in n8n and set your Google customer ID, login-customer-id, and developer token headers for the Google Ads API request.
4. Add your TikTok access token and advertiser ID, and add your Taboola client ID/secret and account name in the Taboola token and report requests.
5. Ensure your Airtable “Daily Ad Spend” table includes fields matching the mapped columns (for example Date, Spend, Clicks, Impressions, Campaign ID, Campaign Name, Source, and Ad Account) so the upserts succeed.

## Requirements
- Accounts and API access for Meta Graph API, Google Ads API, TikTok Business API, Taboola Backstage API, and an Airtable base

## Customization
- change the schedule from hourly to daily, or narrow the campaign-name keyword filter to only the campaigns you want tracked

## 🔗 Nodes Used

Airtable, HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
