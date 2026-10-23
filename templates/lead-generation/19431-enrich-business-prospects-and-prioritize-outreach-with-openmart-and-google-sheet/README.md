# 🎣 Enrich business prospects and prioritize outreach with OpenMart and Google Sheets

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow pulls a list of businesses from Google Sheets, runs paid OpenMart enrichment to find company emails and decision-makers, then ranks each prospect’s outreach readiness and writes a new dated Google Sheets report with contact details and recommended next steps.

## How it works
1. Runs manually to start a bulk research batch with configurable limits, defaults, and a required confirmation flag for paid enrichment.
2. Reads enabled business rows from a Google Sheets tab, validates required fields, deduplicates by domain, and applies per-row overrides up to the maximum business cap.
3. Checks your OpenMart credit balance and stops the run if no credits are available.
4. Submits two OpenMart background jobs per business to find shared company emails and decision-makers (with email/phone) based on the configured titles and location.
5. Waits and polls OpenMart batch status up to two times, then retrieves completed task results (or records timeouts/empty results).
6. Extracts emails, phone numbers, LinkedIn URLs, and people names/titles, then assigns an A–D priority and recommended next step for each business.
7. Creates a new Google Sheets spreadsheet and appends the prioritized research rows into a “Research” sheet.

## Setup
1. Add an OpenMart API credential and ensure your OpenMart account has credits available for enrichment.
2. Add a Google Sheets OAuth2 credential with access to the source sheet and permission to create new spreadsheets.
3. Create a Google Sheets “Businesses” tab with columns like enabled, company_name, website, city, state, country, decision_maker_titles, and max_contacts.
4. Paste your source Google Sheet URL and sheet name in the workflow settings, then set confirmPaidEnrichment to true when you are ready to spend OpenMart credits.
5. Adjust maxBusinesses, default decision-maker titles, max contacts per business, and the wait intervals to match your desired batch size and polling behavior.

## 🔗 Nodes Used

Google Sheets, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
