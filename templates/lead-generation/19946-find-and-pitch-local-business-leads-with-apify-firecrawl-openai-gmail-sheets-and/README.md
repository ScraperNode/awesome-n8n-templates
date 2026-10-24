# 🎣 Find and pitch local business leads with Apify, Firecrawl, OpenAI, Gmail, Sheets and Slack

> ⚡ **83 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects local business leads from Google Maps via Apify, audits each website using HTTP requests and Firecrawl, scores opportunities, generates outreach copy with OpenAI, saves results to Google Sheets, posts summaries to Slack, and creates Gmail drafts for approved leads on a schedule.

## How it works
1. Starts from an n8n form submission where you enter the business type, location, country code, max results, and the service you want to pitch.
2. Calls the Apify Google Places crawler to scrape matching Google Maps listings, then normalizes fields and deduplicates by place ID and website.
3. Fetches each business website to detect contact details and signals (email, booking, chat widget, contact form, mobile friendliness, and copyright year), and falls back to Firecrawl scraping when the site is unreachable or no email is found.
4. Calculates a rule-based opportunity score, assigns a Hot/Warm/Cold priority, and generates an OpenAI-written email subject, email body, and call opener only for Hot/Warm leads.
5. Writes all leads to a Google Sheets “Leads” tab, logs run totals to a “Runs” tab, and posts a Slack run summary (or a “no results” alert) to the chosen channel.
6. On weekdays at 10:00, reads Google Sheets for leads you marked as Approved, creates up to 20 Gmail drafts addressed to each lead using the generated pitch, updates the sheet status, and posts a Slack confirmation when drafts are ready.

## Setup
1. Add HTTP Header Auth credentials for Apify (Bearer token) and Firecrawl (Bearer API key) and ensure the Apify actor endpoint for `compass/crawler-google-places` is accessible.
2. Connect Google Sheets and update the spreadsheet ID and sheet tabs so the “Leads” and “Runs” sheets include the expected columns (including `place_id` for matching and a `status` field for approvals).
3. Connect Slack and set the target channel ID used for run summaries, no-result alerts, outreach completion, and error alerts.
4. Connect Gmail OAuth credentials so the workflow can create drafts, and review the weekday schedule and daily cap (20) to match your outreach limits.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
