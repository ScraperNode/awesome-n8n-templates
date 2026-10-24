# 🎣 Capture and score local business leads with Serper, Hunter.io, and Google Sheets

> ⚡ **5 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow searches Google Places via Serper.dev for local businesses across multiple areas, enriches and scores each lead using website email extraction and Hunter.io, and appends the results to Google Sheets with an optional HMAC-signed webhook sync back to your CRM.

## How it works
1. Runs manually or starts from an optional webhook request that can pass a run ID and maximum number of leads to capture.
2. Builds area-based Google Places queries and calls Serper.dev to fetch place results for each area, then filters by name rules and deduplicates overlapping matches.
3. Caps the lead list to the requested maximum and removes businesses whose Place ID already exists in your Google Sheets to avoid reprocessing.
4. For each remaining business, fetches the website homepage and contact page and extracts a contact email limited to the business’s own domain.
5. If no email is found on the site, queries Hunter.io domain search to find an email and enrich the record with contact name and position when available.
6. Scores the lead (email/phone/website/named contact), assigns a Hot/Warm/Cold tier, appends the row to Google Sheets, and optionally batches qualified leads to send to your CRM with an HMAC-SHA256 signature.

## Setup
1. Add a Serper.dev API key as an HTTP Header Auth credential (header name `X-API-KEY`) and attach it to the Serper request.
2. Add a Hunter.io API key as an HTTP Query Auth credential (query parameter `api_key`) and attach it to the Hunter.io request.
3. Connect Google Sheets OAuth for both Google Sheets nodes, select your target spreadsheet and sheet, and ensure row 1 includes headers like `Company`, `Email`, `Phone`, `Website`, `Address`, `Place ID`, and `Captured On`.
4. Update the search configuration in the code block (business type, areas, name include/exclude keywords, optional extra email domains, and default max leads).
5. If using CRM sync, set your shared secret for HMAC signing, replace the CRM webhook URL, and copy the workflow’s incoming webhook URL into your CRM to start runs by POSTing `{ run_id, maxLeads }`.

## Requirements
- A free Serper.dev API key for Google Places search (header auth: X-API-KEY)
- A free Hunter.io API key for email finding and enrichment (query auth: api_key)
- A Google account with a spreadsheet for the lead log (headers: Company, Email, Phone, Website, Address, Place ID, Captured On)
- Optional: your own CRM webhook endpoint and a shared secret if you want signed lead batches pushed back

## Customization
- Set BUSINESS_TYPE and AREAS in the CONFIGURE block to target any niche and any city or postcode districts
- Use NAME_KEYWORDS and EXCLUDE_NAMES to keep results on-topic and skip national chains and franchises
- Adjust the lead scoring weights (email +45, phone +25, website +20, named contact +10) and the Hot/Warm/Cold thresholds to match your qualification criteria
- Delete the CRM branch to run Sheets-only, or keep it and connect your endpoint for HMAC-signed lead batches
- Swap Google Sheets for Airtable, HubSpot or Pipedrive as the lead store

## Additional info
About the creator: Built and maintained by Ali Amin, founder of IhsanOps (https://ihsanops.ai) — a UK-based AI automation consultancy building lead generation, enrichment and CRM automations for agencies and SME service businesses. Want this adapted to your niche, data sources or CRM? Get in touch via ali@ihsanops.ai or https://linkedin.com/in/ali-tm-amin.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
