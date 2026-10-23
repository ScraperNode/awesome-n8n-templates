# 🎣 Build verified local business leads from Google Maps with Apify and Google Sheets

> ⚡ **62 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow searches Google Maps via Apify, extracts business websites, finds and verifies email addresses from those sites, and then appends or updates the resulting lead records in Google Sheets.

## How it works
1. Starts manually when you execute the workflow.
2. Sends the configured search term, location, result limit, and minimum review count to Apify’s Google Maps Scraper to collect businesses that have websites.
3. Builds a unique list of the collected business websites and passes it to Apify’s Website Email Finder to extract email addresses from each site.
4. Deduplicates the discovered email addresses and sends them to Apify’s Bulk Email Verifier to check deliverability.
5. Joins Google Maps business data with the found emails and verification results, filters out duplicates and non-deliverable emails (optionally keeping catch-all results), and formats rows for export.
6. Appends new rows to Google Sheets or updates existing ones by matching on the email address.

## Setup
1. Add an Apify API token credential, and select it in the three Apify nodes (Google Maps Scraper, Website Email Finder, and Bulk Email Verifier).
2. Add a Google Sheets OAuth credential, then select the target spreadsheet and sheet in the Google Sheets node.
3. Ensure the sheet has headers that match the output fields (for example: business, category, email, email_status, phone, website, address, rating, reviews, maps_url, email_source, found_at).
4. Update the search parameters (searchTerm, location, maxBusinesses, minReviews, and keepCatchAll) to match the leads you want to collect.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
