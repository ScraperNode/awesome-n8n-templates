# 🎣 Enrich legal leads and send attorney briefings with webhooks and Google Sheets

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow receives new leads via webhook, enriches business-domain emails using a configurable enrichment API, logs results to Google Sheets, and emails an internal briefing to an attorney, plus a weekly scheduled email summary of lead value tiers and top companies.

## How it works
1. Receives a new lead via a webhook and normalizes key fields like name, email, phone, practice area, and case description.
2. Extracts the email domain, determines whether it is a business domain, and either calls an external enrichment API for company details or records that no company signal is available.
3. Computes a “matter value tier” using keyword and dollar-amount signals from the case description and the presence of company enrichment data.
4. Appends the lead, enrichment fields, and value tier to a Google Sheets “Enrichment Log” for tracking.
5. Builds an HTML/text briefing, logs the briefing to a separate guardrail/compliance workflow via Execute Workflow, and sends the briefing to the configured attorney email address.
6. Runs weekly on a schedule, reads the Google Sheets enrichment log, aggregates the last N days into tier counts and top companies, and emails a weekly lead quality summary.

## Setup
1. Configure your lead source to POST to the workflow’s webhook URL for the “lead-enrichment” endpoint.
2. Set n8n variables for ENRICHMENT_API_URL (and optional CONSUMER_EMAIL_DOMAINS and HIGH_VALUE_KEYWORDS) and provide an HTTP Header Auth credential for your enrichment provider.
3. Connect Google Sheets credentials and set ENRICHMENT_LOG_SHEET_ID, ensuring the “Enrichment Log” sheet has columns matching the fields being appended.
4. Connect an SMTP email credential and set FIRM_FROM_EMAIL plus the recipient variables (INTAKE_ATTORNEY_EMAIL and/or FIRM_EMAIL) used for the briefing and weekly summary.
5. Set GUARDRAIL_WORKFLOW_ID to the internal audit workflow (or update/remove the Execute Workflow step) and adjust the weekly cron schedule and LEAD_SUMMARY_LOOKBACK_DAYS as needed.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
