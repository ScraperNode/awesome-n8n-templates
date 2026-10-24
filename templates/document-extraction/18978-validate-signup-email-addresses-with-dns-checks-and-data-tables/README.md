# 🔬 Validate signup email addresses with DNS checks and Data Tables

> ⚡ **14 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow exposes a webhook that evaluates an email address at signup using Cloudflare DNS-over-HTTPS lookups, RDAP domain registration data, and a public disposable-domain blocklist, then returns an accept/review/reject verdict with reasons and logs the check to an n8n Data Table.

## How it works
1. Receives a POST webhook request containing an email address (from JSON body, form fields, or a query parameter) and normalizes it for checks.
2. Queries Cloudflare DNS-over-HTTPS for MX, A, DMARC (TXT), and SPF (TXT) records, fetches RDAP domain registration/expiry data from rdap.org, and downloads the disposable-email domain blocklist from GitHub.
3. Interprets the DNS and RDAP responses to detect conditions like NXDOMAIN, null MX (RFC 7505), mail-to-A fallback, mail provider hints, disposable domains, and domain age.
4. Generates a typo suggestion for common mistyped domains (for example, gmial.com → gmail.com) using an edit-distance check.
5. Looks up how many times the canonicalized address has been checked before in the n8n Data Table and combines this with role-address and policy checks.
6. Returns a JSON response with the accept/review/reject verdict, reasons, and key signals, and inserts a log row for the check into the Data Table.

## Setup
1. Create an n8n Data Table named `email_checks` with columns `address_key`, `email`, `domain`, `verdict`, `reasons`, and `checked_on`.
2. Activate the workflow and use the production webhook URL (`POST /check-email`) from your form or app.
3. Adjust the in-workflow settings for role prefixes, free providers, and thresholds (repeat checks and minimum domain age) to match your signup policy.

## Requirements
- No credentials at all. Every lookup is a public endpoint - Cloudflare DNS over HTTPS, RDAP and a public blocklist on GitHub.

## Customization
- role_addresses in Settings decides whether info@ and sales@ are a reject or a review, and min_domain_age_days sets how new a domain has to be before it is worth a second look.

## 🔗 Nodes Used

HTTP Request, Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
