# 🔒 Investigate scam URLs with URLScan.io, Telegram, Gmail, and Data Tables

> ⚡ **91 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow accepts a suspected scam URL via an n8n form, enriches it with RDAP, certificate transparency, DNS/IP hosting data, urlscan.io results, and HTML fingerprints, then correlates findings against a Data Table case log, posts a report to Telegram, and drafts an abuse report in Gmail.

## How it works
1. Receives a scam or phishing URL submission through an n8n form.
2. Extracts the domain from the submitted URL and queries RDAP, crt.sh certificate transparency, and Google DNS to resolve the A record and enrich it with IPInfo hosting details.
3. Submits the URL to urlscan.io, waits briefly for the scan to finish, and fetches the full scan result.
4. Downloads the page HTML and extracts identifying fingerprints such as Google Analytics IDs, Facebook Pixel IDs, AdSense publisher IDs, favicon URL, crypto wallet addresses, and Telegram handles.
5. Consolidates all enrichment data and derives related domains from certificate transparency results.
6. Loads all prior cases from an n8n Data Table and correlates the current case against past entries based on matching fingerprints.
7. Formats a forensic report, sends it to a configured Telegram chat, stores/upserts the case in the Data Table, and creates a Gmail draft addressed to the provider’s abuse contact when available.

## Setup
1. Add a URLScan.io API key as HTTP Header Auth credentials and select it in the urlscan.io request nodes.
2. Add Telegram Bot credentials and set the target chat ID in the Telegram message step.
3. Add Gmail OAuth2 credentials for creating email drafts.
4. Create (or select) an n8n Data Table named “Scam Site Case Log” with columns matching the stored fields (for example domain, ip, registrar, investigatedAt, and fingerprint fields).
5. Open the form trigger, copy the form URL, and share it with users who should submit scam URLs.

## 🔗 Nodes Used

HTTP Request, Telegram, Gmail, n8n Form Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
