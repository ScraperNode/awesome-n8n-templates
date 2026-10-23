# 🔬 Send weekly AR ageing reports with Invoice Ninja, PDFMint and Gmail

> ⚡ **26 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs every Monday morning to pull active invoices from Invoice Ninja, generate an accounts-receivable ageing summary as a branded PDF using PDFMint, and email the report to a chosen recipient via Gmail.

## How it works
1. Runs every Monday at 08:00 on a schedule.
2. Loads your company branding and report recipient details used throughout the report.
3. Fetches all active invoices from Invoice Ninja and includes each invoice’s client details.
4. Filters to invoices with an outstanding balance, calculates days past due, and builds an HTML ageing table grouped by client and bucketed into not-yet-due, 1–30, 31–60, 61–90, and 90+ days.
5. Stops the workflow when there are no clients with an outstanding balance to avoid generating and sending an empty report.
6. Converts the HTML report into a landscape PDF with PDFMint and emails it as an attachment using Gmail.

## Setup
1. Install the PDFMint community node (`n8n-nodes-pdfmint`) and add PDFMint API credentials in n8n.
2. Add your Invoice Ninja API credentials and ensure the account has access to read invoices and client data.
3. Add a Gmail OAuth2 credential with permission to send email.
4. Update the company name, address, accent colour, currency, footer note, and recipient email address in the “Your company details” step.

## Try it without Invoice Ninja
The Invoice Ninja node ships with pinned sample data: six invoices across three clients, one already paid and one not yet due. Open the workflow and run it — the paid invoice drops out, the client with a 90+ day balance is flagged, and the totals row adds up to the four summary cards at the top.

## 🔗 Nodes Used

Invoice Ninja, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
