# 🎣 Route RB2B leads to multichannel outreach with HeyReach, Instantly, and FullEnrich

> ⚡ **11 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow ingests RB2B lead events via webhook (or test triggers), stores them in an n8n Data Table, validates or enriches business emails with FullEnrich, and then routes leads into HeyReach LinkedIn campaigns and Instantly email campaigns based on the lead’s tags.

## How it works
1. Receives a lead payload via a webhook (or runs via manual/schedule test triggers that generate a sample payload).
2. Upserts the lead fields (name, LinkedIn URL, website, business email, tags) into an n8n Data Table keyed by LinkedIn URL.
3. Routes leads by tags to add them to the matching HeyReach campaign (Hot Page, Hot Lead, or Hot Page + Hot Lead).
4. Checks whether the provided business email is present and not a Gmail address, and if it is valid it routes the lead to the matching Instantly campaign based on tags.
5. If the email is missing or not acceptable, it starts a FullEnrich enrichment to find contact emails using the lead’s LinkedIn URL.
6. When FullEnrich sends the enrichment callback, the workflow looks up the lead in the Data Table, checks deliverability status, and either adds the lead to the appropriate Instantly campaign or falls back to adding the lead to the matching HeyReach campaign.

## Setup
1. Create credentials for HeyReach, Instantly, and FullEnrich in n8n.
2. Configure the RB2B (or other source) to POST lead events to the “Webhook for Lead Ingest” URL, and ensure FullEnrich can reach the “When Enrichment Callback Received” webhook URL.
3. Update the HeyReach campaign IDs and Instantly campaign selections to match your campaigns for each tag path.
4. Select or create an n8n Data Table for storing leads, and ensure the upsert/get filters match your chosen unique key (LinkedIn URL).

## 🔗 Nodes Used

Webhook, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
