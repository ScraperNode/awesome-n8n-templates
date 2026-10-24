# 🎣 Collect and deduplicate local business leads from Google Maps with Figranium and Google Sheets

> ⚡ **49 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow collects local business leads from Google Maps using Figranium based on a category and location submitted via an n8n form, then deduplicates results against an existing Google Sheets list and appends only new leads to the same spreadsheet.

## How it works
1. Receives a form submission with a business category and location.
2. Reads the existing leads from a Google Sheets worksheet and aggregates them into a single list for comparison.
3. Runs a Figranium Maps Scraper task with the submitted category and location to fetch matching Google Maps business results.
4. Splits the scraped results into individual lead items with fields like name, rating, address, phone, and website.
5. Checks each scraped lead against the cached Google Sheets list by business name and filters out leads that already exist.
6. Appends each new lead to Google Sheets, and ignores any duplicates.

## Setup
1. Install and run a Figranium instance, import a Google Maps scraping preset/task, and create an n8n Figranium credential with your instance URL and API key.
2. Add Google Sheets OAuth2 credentials in n8n and select the target spreadsheet and worksheet in both Google Sheets steps.
3. Ensure your sheet has columns for Name, Rating, Address, Phone, and Website so appended leads map correctly.
4. Publish the workflow to enable the form and use the generated form URL to submit category and location searches.

## Requirements
- A running Figranium instance
- The free Figranium Maps Scraper preset
- A Figranium API key
- A Google account with access to Google Sheets
- An n8n instance with the verified Figranium node installed

## Additional info
Figranium is free and open-source and runs on your own infrastructure. This workflow does not require a paid scraping API or per-result credits. Duplicate detection is based on business name, and existing leads in the selected Google Sheet are skipped.

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
