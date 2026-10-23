# 📊 Monitor Google Maps, Yelp and Tripadvisor reviews with Apify and Google Sheets

> ⚡ **43 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every four days to scrape Google Maps, Yelp, and Tripadvisor reviews via Apify, stores them in dedicated Google Sheets tabs, and then sends a Gmail notification when the collection run finishes.

## How it works
1. Runs on a schedule every four days at 07:00.
2. Uses Apify’s Google Maps Reviews Scraper to collect up to 50 recent reviews from the configured Google Maps place URLs.
3. Uses Apify’s Yelp Reviews Scraper to collect up to 50 reviews per configured Yelp business URL.
4. Uses Apify’s Tripadvisor Reviews Scraper to collect up to 50 reviews per configured Tripadvisor URL.
5. Appends or updates the captured review fields into separate Google Sheets tabs for Google Maps, Yelp, and Tripadvisor where sentiment analysis is performed.
6. Merges the three flows and sends a Gmail email to notify you that the review data is ready.

## Setup
1. Create or copy a Google Sheets template and update the Google Sheets document ID and sheet/tab selection for the Google Maps, Yelp, and Tripadvisor write steps.
2. Add an Apify connection and update each Apify actor input (especially the startUrls, date/language options, and per-site review limits) to match the locations you want to monitor.
3. Add a Gmail connection and set the recipient address, subject, and message for the notification email.
4. Adjust the schedule (days interval and trigger hour) to control how often the workflow checks for new reviews.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
