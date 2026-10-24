# 📊 Track local legal-market signals with Socrata, Google Sheets, and email

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs daily and weekly to pull recent public-record filings from a Socrata-style open-data API, deduplicate and tag them by legal practice area, log matches to Google Sheets, and send internal digest and weekly volume summary emails via SMTP.

## How it works
1. Runs every morning at 7am and checks whether the Socrata data source URL is set in n8n variables.
2. If configured, it builds a Socrata SODA query URL for the lookback window, fetches recent records via HTTP, normalizes dataset-specific fields, and deduplicates signals using workflow static data.
3. It keyword-tags each signal to one or more practice areas and drops signals that match no configured practice area.
4. It appends valid tagged signals to a Google Sheets “Signal Log” and skips placeholder/invalid items to avoid blank rows.
5. It groups the day’s tagged signals by practice area, builds an HTML/text digest, and sends the daily email via SMTP (or sends a setup-needed notice when no data source is configured).
6. Runs every Monday at 8am, reads the Google Sheets signal log, computes a lookback summary by practice area and top signal types, and emails the weekly volume report via SMTP.

## Setup
1. Set n8n variables for the Socrata endpoint and schema mapping (SIGNAL_DATA_API_URL, SIGNAL_DATE_FIELD, SIGNAL_ID_FIELD, SIGNAL_TYPE_FIELD, SIGNAL_NAME_FIELD, and optional address/link fields) and optionally add SIGNAL_DATA_APP_TOKEN to reduce throttling.
2. Connect Google Sheets credentials, set SIGNAL_LOG_SHEET_ID, and create a “Signal Log” sheet with columns: signal_id, business_name, signal_type, address, signal_date, practice_areas, and logged_at.
3. Configure an SMTP email credential and set FIRM_FROM_EMAIL plus BD_REVIEWER_EMAIL (or rely on FIRM_FROM_EMAIL as the recipient fallback).
4. Customize SIGNAL_KEYWORDS_BY_PRACTICE_AREA (and optional SIGNAL_LOOKBACK_DAYS and SIGNAL_SUMMARY_LOOKBACK_DAYS) to control what gets tagged, logged, and included in the daily and weekly emails.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
