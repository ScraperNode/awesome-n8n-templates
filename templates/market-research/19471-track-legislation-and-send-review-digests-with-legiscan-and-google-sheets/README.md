# 📊 Track legislation and send review digests with LegiScan and Google Sheets

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow tracks new and updated US bills by searching the LegiScan API on a daily schedule, logging results in Google Sheets, and emailing a digest draft for human review, plus a weekly Google Sheets–based landscape summary email.

## How it works
1. Runs daily at 7:00 AM and checks whether the LEGISLATION_SEARCH_TERMS variable is configured.
2. If search terms are present, it builds one LegiScan query per practice-area term, calls the LegiScan getSearch API, and parses the returned bill results.
3. It reads the “Bill Tracker” Google Sheet, compares results to previously tracked bills to identify new or status-changed items, and appends or updates tracker rows for all matched bills.
4. It filters to alert-worthy bills (new or status-changed) and drafts a single digest grouped by practice area with a keyword-based “why it matters” blurb from each bill’s last action.
5. If search terms are missing, it drafts a setup-needed notice instead of running searches.
6. It assigns a unique digest ID, appends the draft to a “Legislation Digest Drafts” Google Sheet, and sends an HTML review-request email via SMTP to the reviewer address.
7. Runs weekly on Monday at 8:00 AM, reads the full tracker, summarizes tracked bills by practice area, and emails the landscape summary via SMTP.

## Setup
1. Create an SMTP email credential in n8n and set the sender address in FIRM_FROM_EMAIL.
2. Set n8n variables for LEGISCAN_API_KEY and LEGISLATION_SEARCH_TERMS (format: `Area One:term1,term2;Area Two:term3`).
3. Create two Google Sheets and set BILL_TRACKER_SHEET_ID and LEGISLATION_LOG_SHEET_ID, with tabs named “Bill Tracker” and “Legislation Digest Drafts” and matching column headers for the fields being written.
4. Add a Google Sheets OAuth credential with access to both spreadsheets.
5. Optionally set CONTENT_REVIEWER_EMAIL (otherwise the workflow sends review and summary emails to FIRM_FROM_EMAIL).

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
