# 🎣 Verify Google Sheets lead emails with Apify Email Verifier

> ⚡ **4 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Automatically verify email addresses in your Google Sheets lead list before launching campaigns. This workflow identifies unverified contacts, validates them in batches via SMTP handshake, catch-all and disposable checks, and writes detailed verdicts back to your spreadsheet. 

## How it works
1. Reads unverified rows: Fetches leads from Google Sheets where the status column is empty, ensuring scheduled runs only process new contacts.
2. Deduplicates and batches: Cleans whitespace, drops duplicate addresses to avoid duplicate charges, and groups emails into batches of 100.
3. Live verification: Sends batches to the Apify Email Verifier API to perform syntax, MX, disposable, and SMTP catch-all checks without sending any emails.
4. Maps verdicts back: Matches verification responses by email address (handling case-insensitivity and email tags) to maintain sheet integrity even when results return reordered.
5. Updates sheet: Writes the final status, sub-status, quality score, catch-all flag, and disposable flag back to the matching row.

## Setup
1. Google Sheet preparation: Add the following column headers to your sheet: email, status, sub_status, score, catch_all, disposable, verified_at. Only the email column needs lead data.
2. Apify credential: In n8n, navigate to Credentials > New > Header Auth. Name it Apify API, set Header Name to Authorization, and set Header Value to Bearer YOUR_APIFY_TOKEN (obtain from console.apify.com).
3. Connect Google Sheets: Open both Google Sheets nodes ("Read Unverified Rows in Sheets" and "Update Sheets with Verdicts"), authenticate your Google account, and select your target document and sheet.
4. Execute: Click "Test workflow" to verify your unverified leads and view live results populated in your spreadsheet.

## Requirements
- Google Sheets account and credentials connected in n8n.
- Apify account with an API token (free tier available with monthly credits).
- An n8n Header Auth credential named "Apify API".

## Customization
- Change batch size: In the "Filter and Batch Rows" node, adjust BATCH_SIZE (default: 100) based on your list size and Apify plan.
- Custom column names: If your spreadsheet uses different header names, update EMAIL_COLUMN and STATUS_COLUMN constants in the Code nodes.
- Schedule trigger: Replace the "Manual Execution Trigger" node with a Schedule Trigger to run automated lead list cleaning on a recurring basis.

## Additional info
• Cost: Uses the pay-per-event Apify Actor (sumitr_mardy/email-verifier). Free tier available.
• Open-source repository, documentation, and additional templates (CSV cleaner, Signup webhook, AI agent tool): https://github.com/sumitrmardy/email-verifier-api

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
