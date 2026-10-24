# 📊 Score generic drug opportunities with Claude, Airtable, and WhatsApp

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily to aggregate patent expiry, FDA Orange Book exclusivity, ANDA/Paragraph IV filing, and market revenue data, score generic-drug opportunities, and then log and notify results via Airtable and WhatsApp, using Anthropic Claude to generate structured BD reports for top candidates.

## How it works
1. Runs on a daily schedule at 7am (or manually for testing) and loads configuration values such as API URLs, score thresholds, and Airtable/WhatsApp targets.
2. Fetches patent expiry data, FDA Orange Book exclusivity data, ANDA/Paragraph IV filings, and market revenue estimates via HTTP requests and combines the sources.
3. Joins the datasets per drug/NDA, computes a weighted 0–100 Generic Opportunity Score, and adds cross-system correlation flags such as first-mover windows and litigation risk.
4. Routes each drug into high, watch, or low priority based on the configured thresholds.
5. For high-priority opportunities, generates a structured business-development report with Anthropic Claude, upserts the report into Airtable, and sends a WhatsApp alert to the BD lead.
6. Waits for a BD acknowledgement via a resume webhook, enforces a grace period, re-fetches competitive filings, re-scores the opportunity, and then either escalates to a VP on WhatsApp or sends a closure notice.
7. For watch-tier items, upserts a watch entry in Airtable and sends a WhatsApp notice, then sends a run digest summarizing the processed opportunities.

## Setup
1. Create HTTP Header Auth credentials for your patent, FDA Orange Book, ANDA/Paragraph IV filings, and market revenue data APIs, and update the API endpoints in the configuration step as needed.
2. Add an Anthropic (HTTP Header Auth) credential and ensure the required headers (including `anthropic-version`) and model access are available.
3. Connect Airtable credentials and set the correct base ID and table names/IDs for the reports table and watch list table.
4. Connect WhatsApp Business Cloud credentials and fill in the WhatsApp phone number ID plus the BD lead and VP recipient phone numbers.
5. Copy the resume webhook URL from the “BD review acknowledgement” wait step and configure your BD system (or a manual callback) to call it with `reviewed=true` when an item is acknowledged.

## 🔗 Nodes Used

Airtable, HTTP Request, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
