# 🎣 Find local business leads on Google Maps with Apify and save to Google Sheets

> ⚡ **47 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs on demand to scrape Google Maps business listings with websites via Apify, enriches each website with emails and phone numbers using Apify’s Contact Details Scraper, and appends the merged lead data (business details plus contacts and social links) to Google Sheets.

## How it works
1. Runs when you manually execute the workflow.
2. Defines the search query, target location, maximum places to crawl, and an Apify spend cap.
3. Uses Apify’s Google Maps Scraper to collect businesses that have a website for the specified search and location.
4. De-duplicates the resulting websites and sends the unique domains to Apify’s Contact Details Scraper to extract emails, phone numbers, contact URLs, and social profiles.
5. Merges the Google Maps business data with the extracted contact details by matching on website domain.
6. Appends the combined lead rows to a selected Google Sheets worksheet.

## Setup
1. Add an Apify API token credential and select it in both Apify nodes (Google Maps Scraper and Contact Details Scraper).
2. Add a Google Sheets credential, then choose the target spreadsheet and worksheet in the Google Sheets append step.
3. Update the search term, location, maxPlaces, and maxCostUsd values to match your lead criteria and budget.

## Requirements
- Apify account (free plan works). Google Maps Scraper bills per place; Contact Details Scraper bills only for websites where an email or phone is found (about $3 per 1,000). Each run is capped by maxCostUsd.

## Customization
- Loop over several searches or cities, run it on a Schedule trigger, add a Filter to keep only rows with an email, or send rows to your CRM instead of Google Sheets.

## Additional info
Uses the verified Apify community node (@apify/n8n-nodes-apify). On self-hosted n8n, install it from Settings > Community nodes. Contact details come only from public business websites; follow CAN-SPAM, GDPR and similar rules when contacting leads.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
