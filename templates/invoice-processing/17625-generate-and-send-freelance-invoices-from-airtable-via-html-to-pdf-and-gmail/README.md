# 🧾 Generate and send freelance invoices from Airtable via HTML-to-PDF and Gmail

> ⚡ **6 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow runs daily to find Airtable projects marked ready to invoice, validates required fields, generates a PDF invoice via an HTML-to-PDF API, emails it with Gmail, and updates the Airtable record as invoiced or flagged as needs info.

## How it works
1. Runs every day at the configured time.
2. Loads configuration values and searches Airtable for projects where status is `ready_to_invoice` and `invoiced` is false.
3. Checks each project has a client email, a project name, and either a fixed fee or both an hourly rate and billable hours.
4. If required details are missing, updates the Airtable record status to `needs_info`.
5. If details are complete, calculates subtotal, tax amount, total amount, and an invoice date.
6. Builds an HTML invoice using the project and configuration data.
7. Sends the HTML to an external HTML-to-PDF API and receives a PDF file response.
8. Emails the PDF invoice to the client with Gmail and updates Airtable to mark the project invoiced with the invoice date and amount.

## Setup
1. Add an Airtable Personal Access Token credential and set your Airtable base ID and table name in the configuration values.
2. Ensure your Airtable table includes fields used by the workflow (at least `status`, `invoiced`, `client_email`, `client_name`, `project_name`, `hourly_rate`, `billable_hours`, and `fixed_fee`).
3. Add a Gmail OAuth2 credential and confirm the sender mailbox used to email invoices.
4. Provide your HTML-to-PDF service endpoint URL and API key in the configuration values.
5. Update the business name and tax percentage in the configuration values, and adjust the schedule time if needed.

## 🔗 Nodes Used

Airtable, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
