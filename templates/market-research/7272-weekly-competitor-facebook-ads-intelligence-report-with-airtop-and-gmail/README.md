# 📊 Weekly competitor Facebook ads intelligence report with Airtop and Gmail

> ⚡ **1,114 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

README

# Monitor Competitor Facebook Ads with Airtop

## Use Case

Monitor a competitor’s active Facebook ads and get a weekly HTML intelligence brief by email — saving time on manual research and helping you spot messaging, offers, and creative trends quickly.

## What This Automation Does

* Runs weekly on a set schedule.
* Uses **Airtop** to visit the competitor’s Facebook Ad Library page and extract up to 30 active ads.
* Summarizes each ad with key points: message, topic, CTA, duration active, language, target audience.
* Sends the compiled HTML report via Gmail.

## How It Works

1. **Schedule Trigger** – Fires once a week at the configured time.
2. **Airtop Extraction** – Loads the Ad Library URL and runs a prompt to extract and format the ads into HTML.
3. **Email Delivery** – Sends the HTML report to your specified recipient using Gmail.

## Setup Requirements

1. **Airtop API Key** — [Generate here](https://portal.airtop.ai/api-keys).
2. **Airtop Credential in n8n** — Add your API key under “Airtop” in n8n.
3. **Gmail OAuth2 Credential** — Connect the Gmail account to send reports.
4. **Competitor’s Ad Library URL** — Replace the default `view_all_page_id` in the workflow with your target.

## Next Steps

* Duplicate the Airtop step for multiple competitors.
* Enrich reports by visiting ad landing pages for deeper analysis.
* Send outputs to Slack or archive in a shared workspace.

[Read about ways to monitor your competitors ads here](https://www.airtop.ai/automations/competitor-facebook-ads-intelligence-agent-n8n)

## 🔗 Nodes Used

Gmail, Schedule Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
