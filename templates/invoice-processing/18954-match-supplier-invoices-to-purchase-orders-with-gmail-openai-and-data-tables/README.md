# 🧾 Match supplier invoices to purchase orders with Gmail, OpenAI, and Data Tables

> ⚡ **37 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow monitors a Gmail label for unread supplier invoice emails, extracts key fields from PDF attachments with OpenAI, matches invoices against n8n Data Tables of open purchase orders and previously seen invoices, then logs cleared invoices or drafts a Gmail reply for any invoice that fails validation.

## How it works
1. Triggers every 10 minutes when an unread email arrives in Gmail with the configured invoice label and downloads all attachments.
2. Filters the message attachments to PDFs and stops processing if no PDF invoice is found.
3. Extracts text from each PDF and uses OpenAI to pull out invoice fields such as invoice number, vendor, PO reference, currency, total, and line items.
4. Converts printed money formats into numeric values and loads open purchase orders and previously seen invoices from n8n Data Tables.
5. Matches each invoice to a purchase order by PO number or by vendor and closest amount, then checks for duplicates, currency mismatches, tolerance breaches, and totals that do not align with line items.
6. Logs clear invoices into the invoices_seen Data Table with a cleared status.
7. For any held invoice, uses OpenAI to draft a short supplier query, logs the issue to the invoices_seen Data Table, and creates a Gmail draft reply in the original email thread.

## Setup
1. Connect a Gmail credential and set the Gmail label name in the workflow settings to match where invoice emails arrive (and ensure attachments are enabled on the trigger).
2. Create an n8n Data Table named purchase_orders with columns po_number, vendor, amount, currency, and status, and populate it with your open POs.
3. Create an n8n Data Table named invoices_seen with columns invoice_key, invoice_number, vendor, amount, currency, po_number, status, reason, and seen_on.
4. Add an OpenAI (or OpenAI-compatible) API credential for the model and extractor nodes and adjust tolerance_percent and tolerance_amount in the Settings step for your approval rules.

## Requirements
- Two n8n Data Tables, one holding your open purchase orders. The workflow reads them, it does not create them.

## Customization
- tolerance_percent and tolerance_amount in Settings decide what counts as a mismatch. The larger of the two wins, so a small absolute figure protects tiny orders from rounding.

## 🔗 Nodes Used

Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model, Extract from File, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
