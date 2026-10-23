# 🎣 Build hospitality lead lists from Booking.com using Apify and Google Sheets

> ⚡ **30 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow uses Apify and Google Sheets to find accommodation leads from Booking.com, enrich them with Google Maps contact details, discover official websites via Google Search, scrape additional contacts from those sites, and then append the finalized partner list to a Google Sheets spreadsheet.

## How it works
1. Manually triggers and sets the destination, maximum number of results, and property type to search.
2. Runs the Apify Booking Scraper actor for the configured destination and retrieves the Booking.com dataset results.
3. Maps each Booking.com result into a normalized lead record, using Booking trader details (when available) for initial email and phone fields.
4. Runs the Apify Google Maps with Contact Details actor for leads missing email and merges any найден emails, phones, websites, and social links into the lead records.
5. For leads still missing both email and website, runs the Apify Google Search Scraper actor to find an “official website” candidate and assigns the best non-OTA domain.
6. Scrapes those candidate websites with the Apify Contact Info Scraper actor to extract emails/phones/socials and merges the results into the final lead rows.
7. Appends the finalized lead list (including Booking URL and contact source) to Google Sheets.

## Setup
1. Add an Apify credential with access to run actors and read their datasets.
2. Add a Google Sheets OAuth2 credential and select the target spreadsheet and sheet for the append step.
3. Update the destination, maxItems, and propertyType values (and optionally the check-in/check-out dates) used to configure the Booking Scraper input.
4. Ensure your Google Sheet has columns that match the output fields (for example: name, address, email, phone, website, socials, and BookingURL).

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
