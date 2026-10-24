# 🎣 Score new Shopify stores from Apify and route hot leads to Sheets and Slack each morning

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs every morning to fetch newly discovered Shopify stores from Apify’s Pre-Launch Radar actor and forwards each store record to a destination webhook (for example, Clay, Make, Slack, or a CRM) for downstream processing.

## How it works
1. Runs every day at 8:00 on a schedule trigger.
2. Calls the Apify API to run the “New Shopify stores (Pre-Launch Radar)” actor and retrieves up to 100 stores found in the last day.
3. Posts each returned store payload to your specified webhook URL as a JSON request body, one request per store, so your CRM or enrichment table receives clean rows.

## Setup
1. Add an Apify API token using HTTP Header Auth (Authorization: Bearer <token>) for the Apify request.
2. Replace the placeholder webhook URL with your destination endpoint and ensure it accepts POST requests with JSON bodies.
3. If your destination is a third-party tool (e.g., Clay, Make, Slack, or a CRM), create/configure the receiving webhook there and paste its URL into the workflow.

## Requirements
- An Apify account and API token (pay per result, billed by Apify). A webhook URL that accepts JSON POST requests (Clay, Make, Slack, CRM).

## Customization
- Change maxItems to cap the billed stores per run, sinceDays to widen the window, or the trigger hour. Add a Filter node to keep only one country, currency or status (pre-launch vs live).

## Additional info
Data comes from public Certificate Transparency logs, DNS and business-level store metadata only: no emails, no names, no personal data. Not affiliated with, endorsed or sponsored by Shopify Inc. Provided as-is.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
