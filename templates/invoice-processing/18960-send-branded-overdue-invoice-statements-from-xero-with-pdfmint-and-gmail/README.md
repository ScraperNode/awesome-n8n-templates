# 🧾 Send branded overdue invoice statements from Xero with PDFMint and Gmail

> ⚡ **1 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs every weekday morning to pull authorised accounts-receivable invoices from Xero, groups any past-due balances by customer, generates a branded overdue-invoice statement PDF with PDFMint, and emails each customer their statement via Gmail.

## How it works
1. Runs every weekday at 09:00 on a schedule.
2. Fetches all authorised ACCREC (sales) invoices from Xero for the specified organisation.
3. Filters to invoices that are still unpaid and past their due date, then groups them per contact and builds a branded HTML statement with totals and days overdue.
4. Skips processing when there are no overdue invoices for a contact to avoid generating empty statements.
5. Renders each customer’s HTML statement into a PDF using PDFMint and names the file after the customer.
6. Sends the PDF statement to the contact’s email address from Xero using Gmail, using a subject line that includes invoice count and total outstanding.

## Setup
1. Connect your Xero OAuth2 credential and replace the organisation (tenant) ID in the Xero step with your Xero tenant ID.
2. Add a PDFMint API credential.
3. Add a Gmail OAuth2 credential for the mailbox you want to send from.
4. Update the “Your company details” values (name, address, accent colour, and footer note) to match your branding.
5. Ensure your Xero contacts have an email address set, since the workflow sends statements to the email stored on each contact.

## 🔗 Nodes Used

Xero, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
