# 🎣 Generate, score, and send B2B leads with Google Places, Airtable, and email

> ⚡ **30 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow automates lead discovery, scoring, and human-approved outreach by combining Google Places, website scraping, optional Google PageSpeed audits, and Airtable CRM updates, then generating Hot/Warm/Low priorities and drafting outreach messages before sending approved emails (SMTP) plus optional WhatsApp and Instagram messages via external worker URLs.

## How it works
1. Runs manually or on a schedule to build a search matrix from your target locations and search terms and queries the Google Places API.
2. De-duplicates and normalizes each Place result, then upserts the lead into Airtable using the Google place_id as the unique key.
3. For leads with a non-social website, fetches the site HTML, extracts contact and page metadata (emails, phones, title, description, contact link), and updates Airtable with the research results.
4. If enabled, calls the Google PageSpeed Insights API (mobile with desktop fallback) and writes performance/SEO metrics or failure details back to Airtable.
5. Runs manually or on a schedule to pull new unscored Airtable leads, calculate a rule-based opportunity score and priority (Hot/Warm/Low), and save scoring plus recommended service and messaging angle.
6. Prepares Hot outreach or Warm follow-up drafts and notes, routes Low priority leads into a nurture/hold state, and writes these outputs back to Airtable.
7. Runs manually or on a schedule to initialize an approval queue in Airtable, then for Approved leads sends eligible outreach via SMTP email and via WhatsApp/Instagram worker HTTP endpoints, updating per-channel send status to Sent or Failed.

## Setup
1. Create and configure an Airtable base/table with fields used by the workflow (place_id matching, website/contact fields, PageSpeed metrics, scoring fields, approval fields, and per-channel send statuses).
2. Add credentials for Airtable Personal Access Token, Google Places API key (Places API v1), and Google PageSpeed API key.
3. Fill in Buyer Config - Lead Discovery and Buyer Config - Scoring with your Airtable Base ID/Table ID (and company/sender names) plus your target locations, search terms, and max results.
4. For outreach, add an SMTP credential for the sender mailbox and complete Buyer Config - Outreach with sender email, Airtable IDs, and your WhatsApp/Instagram worker URLs plus their HTTP header secrets.
5. Keep the scheduled triggers disabled at first, run each phase manually with a test lead, then enable the schedules once results and send-status updates look correct in Airtable.

## 🔗 Nodes Used

Airtable, Send Email, HTTP Request, Stop and Error, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
