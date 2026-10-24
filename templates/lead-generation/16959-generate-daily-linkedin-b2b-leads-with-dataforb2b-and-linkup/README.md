# 🎣 Generate daily LinkedIn B2B leads with DataForB2B and LinkUp

> ⚡ **48 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Automate B2B lead generation on autopilot: every weekday morning, DataForB2B finds fresh leads matching your ICP (800M+ profiles, 50+ filters), skips anyone already contacted, and sends up to 10 personalized LinkedIn connection requests per day via LinkUp API - with safe, human-like limits.

## How it works
1. Runs every weekday at 9:00 AM using a schedule trigger.
2. Searches for people matching your ICP in DataForB2B (for example, “Head of Sales” in the United States) and returns up to 25 results.
3. Normalizes the lead data into consistent fields such as LinkedIn profile URL, name, title, company, and location.
4. Skips leads whose LinkedIn URLs were already processed in previous executions to avoid re-contacting the same profiles.
5. Limits the list to a daily cap of 10 leads.
6. Sends a personalized connection request for each remaining lead using the LinkUp API, continuing even if individual invites fail.

## Setup
1. Create a DataForB2B API key at app.dataforb2b.ai and adjust the people filters to match your ICP.
2. Get your LinkUp API key at app.linkupapi.com and connect your account in the LinkUp dashboard.
3. Update the schedule (cron expression) if you want a different time or cadence.
4. Customize the connection message template to match your outreach style and compliance requirements.

## Requirements
- A DataForB2B account and API key — free credits to start (app.dataforb2b.ai)
- A LinkUp API key with your account connected (app.linkupapi.com)
- Self-hosted n8n with the verified community nodes "DataForB2B" and "Linkup API" installed

## Customization
- Adjust the ICP filters — 50+ available (title, country, industry, company size, funding stage...)
- Edit the connection message template to match your voice
- Change the daily cap and schedule to fit your account's activity level
- Add a Google Sheets or CRM step after the send node to log contacted leads

## 🔗 Nodes Used

Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
