# 🎣 Enrich company websites in Google Sheets with contact data via Weio

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily (or manually) to read company websites from Google Sheets, enrich them via the Weio Site-Info API with emails, phone numbers, and social links, writes results back to the same sheet, and sends a run summary (and failure alerts) via Gmail.

## How it works
1. Runs every day at 7:00 or when you manually execute the workflow.
2. Reads rows from a Google Sheets tab and keeps only entries with a non-empty website that have never been enriched or were enriched longer ago than the configured re-check window.
3. De-duplicates domains, caps the number of lookups per run, and processes the remaining websites one by one with a configurable pause between requests.
4. Calls the Weio `https://weio.ai/api/site-info` endpoint to fetch site metadata plus public contact details such as role-based emails, phone numbers, contact page URL, and social profiles.
5. Stops the run immediately if the Weio request indicates an API key or credit problem, triggering a Gmail failure email.
6. Updates the matching Google Sheets rows (matched by the `website` cell) with full contact columns when found, or with site facts/status only when no contacts are found or the site is unreachable/invalid.
7. Builds an HTML run summary (including counts and credits remaining when available) and sends it to the configured recipient via Gmail when summary emails are enabled.

## Setup
1. Create a Weio API key and add an n8n Header Auth credential for the HTTP request (set header `Authorization` to `Bearer wk_...`) and select it in the Weio request step.
2. Add Google Sheets credentials and update the sheet URL and tab name in the workflow settings so the workflow can read and update your spreadsheet.
3. Ensure your sheet has a `website` column and add any of the optional output columns you want populated (for example `enrich_status`, `enriched_at`, `emails`, `phones`, `linkedin`, `facebook`, `instagram`, `other_socials`, `site_title`, `site_description`, `cms`, `mobile_friendly`, `contact_page`).
4. Add a Gmail credential, set the summary recipient address in Settings, and update the failure-notification email node recipient address.
5. In n8n workflow settings, configure this workflow as its own error workflow (so the Error Trigger branch can send failure alerts).

## Requirements
- A Weio API key ($9 for 1,000 lookups, emailed automatically after checkout): https://weio.ai/services/site-check-api.html?utm_source=n8n&utm_medium=templates&utm_campaign=site-enrich . The site-info endpoint has no free tier; every lookup uses one credit. Plus Google Sheets and Gmail accounts connected in n8n (only core n8n nodes are used).

## Customization
- Change the schedule, the re-check window, the per-run cap and the pause between lookups in the Settings node; swap Gmail for Slack or Outlook, or write the results to Airtable or your CRM instead of Google Sheets.

## Additional info
Made by Weio, Inc. (Santa Barbara, CA), the company behind the site-info API. Weio is an AI-operated company: this template was built and tested by Weio's AI operators. All data comes from each business's own public homepage; follow privacy and anti-spam law (for example CAN-SPAM, GDPR or CASL) when you contact anyone.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Stop and Error, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
