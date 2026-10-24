# 🧾 Reconcile GST invoices from Gmail with GSTR-2B using Google Sheets and OpenAI

> ⚡ **4 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs monthly to extract GST purchase invoice details from Gmail PDF attachments using OpenAI, reconciles them against GSTR-2B data in Google Sheets, writes a reconciliation report, emails an ITC-at-risk summary to accounts, and creates vendor follow-up emails as Gmail drafts.

## How it works
1. Runs at 10:00 AM on the 15th of each month and sets the company details, return period, tax tolerance, and Gmail search query.
2. Searches Gmail for recent emails matching the query, downloads PDF attachments, and splits them so each invoice PDF is processed as a separate item with sender and thread context.
3. Extracts text from each PDF and uses OpenAI to parse key invoice fields (GSTINs, invoice number/date, taxable value, and IGST/CGST/SGST), skipping non-tax invoices and duplicates.
4. Reads the GSTR-2B tab from Google Sheets and reconciles each email invoice to GSTR-2B by supplier GSTIN and invoice number, falling back to a tax-amount match within the configured tolerance.
5. Flags issues such as missing invoices in GSTR-2B, tax mismatches, invalid supplier GSTINs, or invoices billed to the wrong buyer GSTIN, and also notes GSTR-2B entries that have no matching invoice email.
6. Appends or updates the results in a Google Sheets Reconciliation tab, then emails an HTML summary of counts and total ITC at risk to the accounts email address.
7. Groups flagged items by vendor, uses OpenAI to draft a concise reminder per vendor, and saves each message as a Gmail draft (optionally in the original thread) for review before sending.

## Setup
1. Connect Gmail OAuth2 credentials (to search emails, send the accounts summary, and create vendor drafts) and ensure the Gmail query in the rules matches how your invoices arrive.
2. Connect Google Sheets OAuth2 credentials and replace YOUR_GOOGLE_SHEET_ID in both Google Sheets nodes, with a GSTR-2B tab containing the expected columns and a Reconciliation tab for output.
3. Add an OpenAI API key credential for both extraction and reminder drafting, and confirm your data policy allows sending invoice text to OpenAI.
4. Update companyName, companyGSTIN, accountsEmail, and (optionally) taxTolerance and return period logic in the rules so reconciliation and messages match your filing period and thresholds.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
