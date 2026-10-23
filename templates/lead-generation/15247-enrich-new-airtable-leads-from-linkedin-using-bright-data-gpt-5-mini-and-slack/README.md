# 🎣 Enrich new Airtable leads from LinkedIn using Bright Data, GPT-5-mini and Slack

> ⚡ **24 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## What this workflow does

Automatically enriches every new LinkedIn lead added to your Airtable base
with AI-structured data and notifies your team in Slack.

## How it works

1. **Airtable Trigger** polls for new leads every minute
2. **BrightData** scrapes the LinkedIn profile
3. **OpenAI GPT-5-mini** extracts a clean structured schema
4. **Airtable** is updated with all enrichment fields
5. **Slack** gets a beautifully formatted notification

## Prerequisites
- Airtable base with a "Leads" table (field list included)
- BrightData account with LinkedIn people profiles dataset
- OpenAI API key
- Slack workspace

## 🔗 Nodes Used

Airtable, Slack, Airtable Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
