# 🎣 Fetch and enrich Apollo leads and sync verified contacts to MeldFlow/GHL

> ⚡ **58 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Apollo Leads Enrichment & MeldFlow/GHL Sync

## How It Works

1. Pulls targeted leads from Apollo using predefined ICP filters
2. Enriches each lead with Apollo people enrichment
3. Filters verified contacts and formats lead data
4. Creates or updates contacts inside MeldFlow/GHL
5. Automatically increments Apollo page number for continuous lead sourcing

---

## Setup Steps

Estimated setup time: 10–15 minutes

1. Connect Google Sheets credentials
2. Add your Apollo API key
3. Add your MeldFlow/GHL Private Integration token
4. Replace the target MeldFlow/GHL Location ID
5. Configure your Apollo ICP filters and search criteria
6. Create the Config Sheet with Apollo page tracking
7. Activate the workflow schedule trigger

Detailed configuration notes are provided inside the workflow sticky notes.

## Note

Sheets can also be used instead of a CRM

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
