# 📱 Create daily Google Trends posts for LinkedIn, Facebook, and Bluesky with Perplexity and PostWire

> ⚡ **16 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every weekday, pulls your country’s Google Trends RSS items, uses Perplexity to choose and research one brand-relevant trend, then uses PostWire to write and publish tailored posts to LinkedIn, Facebook, and Bluesky while logging results to Google Sheets and emailing failures via Gmail.

## How it works
1. Runs every weekday at 8:00 using a schedule trigger.
2. Reads the Google Trends RSS feed for the configured country, skips trends seen in previous executions, and keeps the top 10 items.
3. Sends the trend list and your brand/niche context to Perplexity to pick one suitable trend (or return no match) and provide a short explanation, facts, and source citations.
4. Stops if Perplexity marks the trend as not relevant, so no social posts are created.
5. Uses PostWire to generate and publish a native post for LinkedIn, Facebook, and Bluesky based on the selected trend and research.
6. Appends a “published” row per network to Google Sheets with the post URL and sources, and if any publish fails, logs the error details and emails a consolidated fix request via Gmail.

## Setup
1. Create a Perplexity API credential in n8n.
2. Install and configure the PostWire node, add a PostWire API credential, and connect your LinkedIn, Facebook, and Bluesky accounts in PostWire.
3. Create a Google Sheets spreadsheet with columns date, trend, network, status, link, sources, and note, then select the document and sheet in both Google Sheets nodes.
4. Connect a Gmail account in n8n and set your recipient email plus your brand, niche, and country code in the “Set your brand and niche” step.

## 🔗 Nodes Used

Google Sheets, RSS Read, Gmail, Schedule Trigger, Perplexity

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
