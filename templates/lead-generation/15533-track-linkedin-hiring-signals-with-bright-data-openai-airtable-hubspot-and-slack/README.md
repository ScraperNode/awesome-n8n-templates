# 🎣 Track LinkedIn hiring signals with Bright Data, OpenAI, Airtable, HubSpot and Slack

> ⚡ **23 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works

- A daily Schedule Trigger pulls active LinkedIn job-search URLs from Airtable
- Bright Data Web Unlocker scrapes each search results page
- GPT extracts structured job data from the raw HTML
- A second GPT call scores each job as a HIGH / MEDIUM / LOW buying signal and drafts a personalized cold outreach email
- HIGH/MEDIUM signals are pushed to HubSpot as deals and notified to the sales team in Slack

## Set up steps

- Setup time: ~10 minutes
- Connect Airtable, Bright Data, OpenAI, HubSpot and Slack credentials
- Add LinkedIn job-search URLs to your Airtable with `Active = TRUE`
- Pick the Slack channel in the notification node
- Activate the workflow

See the sticky notes inside the workflow to swap Airtable, OpenAI, HubSpot or Slack for your preferred tools.

## 🔗 Nodes Used

Airtable, Slack, HubSpot, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
