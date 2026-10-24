# 🎣 Generate qualified eBay B2B seller leads from item IDs with Apify

> ⚡ **3 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs manually or every Monday at 8 AM to scrape eBay seller disclosure contact details via Apify, then scores and formats the results into CRM-ready B2B lead records with outreach fields.

## How it works
1. Runs on a manual trigger or on a weekly schedule every Monday at 8 AM.
2. Uses the Apify eBay Seller Contact Scraper actor to extract seller contact and business disclosure data for a configured list of eBay item IDs.
3. Cleans, enriches, and scores each seller using feedback score and positive feedback rate, and assigns a merchant tier.
4. Produces lead records with contact details and prewritten cold outreach fields such as an email subject and icebreaker.
5. Adds CRM metadata like lead status and an enrichment timestamp to each lead so it is ready to send to a CRM or outreach tool.

## Setup
1. Create an Apify account, add your Apify API token in n8n, and connect it to the Apify node credentials.
2. Update the Apify actor input to include your target eBay item IDs (or listing URLs if supported by the actor) and adjust poolCount as needed.
3. Review and customize the lead scoring and tier thresholds in the qualification code to match your ideal merchant profile.
4. Optionally connect the final output to your destination (for example HubSpot, Salesforce, Pipedrive, Google Sheets, Airtable, Slack, or an email sequencer) to store or act on the generated leads.

## 🔗 Nodes Used

Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
