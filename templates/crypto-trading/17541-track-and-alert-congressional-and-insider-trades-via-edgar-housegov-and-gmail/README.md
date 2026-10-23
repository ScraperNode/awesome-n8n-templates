# 📈 Track and alert congressional and insider trades via EDGAR, House.gov, and Gmail

> ⚡ **7 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs every 45 minutes to monitor U.S. House periodic transaction reports from House.gov and insider Form 4 filings from the SEC EDGAR Atom feed, enriches each filing with trade details from PDFs/XML, deduplicates against a Google Sheets log, and sends email alerts via Gmail.

## How it works
1. Runs every 45 minutes and fetches the House financial disclosure page via ScrapeUnblocker and the SEC EDGAR Form 4 Atom feed via direct HTTP with a compliant User-Agent.
2. Extracts the latest House annual disclosures ZIP link, downloads and decompresses it, and parses the XML/TSV contents to produce a list of House PTR filing records with PDF URLs.
3. Parses the EDGAR Atom feed entries into filing records and then fetches each filing’s index and ownership XML from sec.gov to extract ticker symbols, transaction codes, and estimated trade values.
4. Combines House and EDGAR filings, removes items already logged in Google Sheets, deduplicates within the run, and drops filings older than the configured recency window.
5. For new House filings, downloads each PTR PDF, extracts text, and parses transaction rows to recover the filing ID, member info, ticker, transaction type, amount range, and dates.
6. Appends the newly detected filings to a Google Sheets “Trade Log” and emails a formatted alert for each new record using Gmail.

## Setup
1. Add credentials for ScrapeUnblocker, Google Sheets, and Gmail, and set the destination email address in the Gmail node.
2. Update the Google Sheets document ID and sheet/tab name (and ensure the columns like “Filing ID”, “Source”, “Member Name”, and dates exist) used for logging and deduplication.
3. Edit the contact email in the User-Agent strings inside the EDGAR-related code steps to comply with SEC fair-access requirements.
4. Adjust the recency threshold (MAX_AGE_DAYS) and the schedule interval if you want alerts for a different time window or frequency.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
