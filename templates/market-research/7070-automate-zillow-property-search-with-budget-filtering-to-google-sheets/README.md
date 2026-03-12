# 📊 Automate Zillow property search with budget filtering to Google Sheets

> ⚡ **75 views** · 📊 [Market Research & Insights](../)

## Description

Nodes Used:
- Manual Execution Trigger
- HTTP Request (Get Zillow Properties)
- Code Node (Split Listings Array)
- IF Node (Filter by Budget)
- Google Sheets (Append or Update)

**Description :**
This workflow automates the extraction, refinement, and organization of live real estate data from a top property platform into a clean, always-updated spreadsheet. It intelligently filters incoming data using custom criteria and ensures your sheet remains accurate without duplicates. Ideal for realtors, investors, or property analysts who need a real-time snapshot of viable listings without lifting a finger.

**YOUTUBE VIDEO OF EXECUTION:**
[https://youtu.be/zoBnYGu7fvU](https://youtu.be/zoBnYGu7fvU)

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
