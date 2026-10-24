# 🧾 Convert legal timesheets to LEDES and PDF invoices

> ⚡ **40 views** · 🧾 [Invoice Processing](../)

## Description

## Who is this for

This template is built for solo attorneys, small law firms, and legal billing coordinators who receive timesheet documents by email and need to produce LEDES-compliant e-billing files for client billing management systems. If you have an IMAP inbox, an OpenAI API key, a self-hosted Gotenberg instance, and a Microsoft 365 account, you can have AI-processed LEDES invoices delivering automatically in under 30 minutes of setup.

## What it does

The workflow monitors an inbox for emails with PDF or Word timesheet attachments, extracts all time entries using GPT-4o, assigns UTBMS task codes, auto-increments an invoice number, and returns a PDF invoice, LEDES 1998B file, and LEDES XML 2.0 file to the original sender — all without any manual data entry.

## How it works

An **IMAP — Watch Inbox** trigger monitors for unread emails with attachments. **Classify Attachment** detects whether the file is a PDF or Word document and routes it to the correct extractor.

**Extract — PDF Text** or **Extract — Word Text** pulls the raw text content from the attachment and passes it to the AI pipeline.

**AI Agent — Extract Time Entries** uses GPT-4o to parse all time entries from the document, capture date, timekeeper, hours, rate, description, client, and matter fields, and assign the best-fit UTBMS ABA task code (A101–A111) for each line. If rate or timekeeper information is missing, configurable defaults are applied automatically.

**AI Agent — Extract Sender Info** runs a second GPT-4o-mini pass over the email body and signature to extract the sender's name, address, and contact details for the "Remit To" section of the invoice.

**Excel — Read Invoice Numbers** queries your `timesheets.xlsx` tracking workbook via Microsoft Graph API to find the last issued invoice number and increment it automatically.

**Merge — Time Entries + Invoice Number** combines the AI-extracted data with the new invoice number, then fans out to four parallel generation nodes.

**Generate — LEDES 1998B**, **Generate — LEDES XML 2.0**, **Generate — Invoice HTML**, and **Prep Excel Rows** run simultaneously to produce all outputs. All brand variables — logo URL, firm name, colors — are defined as named constants at the top of the Invoice HTML Code node for easy one-time customization.

**Convert to PDF** sends the finished HTML to your self-hosted [Gotenberg](https://gotenberg.dev/) instance, returning a print-ready US Letter PDF — no third-party PDF service required.

**Send Invoice Email** delivers all three billing files as attachments via Gmail OAuth2 back to the original sender. **Excel — Append Time Entries** and **Excel — Append Invoice Number** update your tracking workbook with the full LEDES row data and the new invoice record.

## How to set up

1. Install the **n8n-nodes-word2text** community node under Settings → Community Nodes and restart n8n.
2. In **IMAP — Watch Inbox**, configure your IMAP credential for the inbox you want to monitor.
3. On both **LLM** nodes, connect your OpenAI API credential.
4. In **Send Invoice Email**, connect your Gmail OAuth2 credential.
5. On all three **Excel** nodes, connect your Microsoft Excel OAuth2 credential and point each node at your `timesheets.xlsx` workbook, worksheet, and table.
6. In **Convert to PDF**, update the Gotenberg base URL to your self-hosted instance and configure HTTP Basic Auth if required.
7. In **Get Next Invoice Number**, update the `'INV-'` prefix to match your firm's invoice numbering convention.
8. In **Generate — Invoice HTML**, update `logoUrl` and the brand color constants to match your firm identity.

## Requirements

- Self-hosted n8n — required for the **n8n-nodes-word2text** community node
- OpenAI API key (GPT-4o for time entry extraction; GPT-4o-mini for sender info)
- IMAP-accessible inbox for monitoring incoming timesheets
- Gmail account with OAuth2 configured in n8n
- Microsoft 365 account with OneDrive or SharePoint access for Excel tracking
- Self-hosted [Gotenberg](https://gotenberg.dev/) instance for HTML-to-PDF conversion

## How to customize the workflow

- **Default billing rate** — Change the fallback hourly rate in the AI Agent system prompt (currently $650/hr) to match your firm's standard rate.
- **UTBMS task codes** — Add, remove, or redefine task code mappings in the **AI Agent — Extract Time Entries** system prompt to match your practice area or client requirements.
- **Invoice layout** — All styling, fonts, colors, and section order are controlled inside **Generate — Invoice HTML**. The HTML uses `@page` CSS rules and table-based layout for reliable PDF rendering.
- **Email delivery** — Swap the Gmail node for Outlook, SendGrid, or any SMTP-compatible service supported by n8n. The binary attachment references require no changes.
- **Approval gate** — Insert a **Wait** node and an internal Slack or email notification between **Convert to PDF** and **Send Invoice Email** to require internal review before delivery.
- **Word-only or PDF-only** — If you only process one file type, remove the unused branch and its corresponding If node to simplify the workflow.

Visit [automatedintelligentsolutions.com](https://automatedintelligentsolutions.com) for more information, support, and workflows.

## 🔗 Nodes Used

Email Trigger (IMAP), HTTP Request, Microsoft Excel 365, Microsoft Outlook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
