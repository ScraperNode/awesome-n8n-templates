# 🎣 Find local sales leads from Google Maps with CoreClaw

> ⚡ **9 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Google Maps Lead Finder collects structured local business leads from a keyword and location. It returns business names, categories, addresses, phone numbers, websites, ratings, review counts, and Google Maps URLs for sales automation and local market research.

## How it works
1. Receives a POST webhook request containing a business keyword/category, a target location, and an optional result limit.
2. Validates and normalizes the input into the keyword, location, and max_results parameters.
3. Sends the parameters to the CoreClaw Google Maps Lead Finder API to fetch matching businesses from Google Maps.
4. Normalizes the API response into consistent lead records (name, category, address, phone, website, rating, review count, and Maps URL).
5. Responds to the original webhook request with a JSON payload that includes the lead count and the list of normalized leads.

## Setup
1. Set the CORECLAW_API_KEY environment variable in your n8n instance so the workflow can authenticate to the CoreClaw API.
2. Activate the workflow and copy the production webhook URL from the Webhook trigger.
3. Send a POST request to the webhook URL with at least keyword (or query/category) and location (or base_location), and optionally max_results (or limit).

## Additional info
Retrieve public web page data using the CoreClaw production-grade Web Data API: https://www.coreclaw.com/?utm_source=google&utm_medium=cpc&utm_campaign=n8&utm_term=&utm_id=n8

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
