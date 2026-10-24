# 🔬 Generate regional sales reports from CRM exports with DocMint and Excel

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives a CRM sales export via webhook, validates the payload, aggregates revenue and regional totals, and uses DocMint to fill an Excel sales report template before returning the generated .xlsx file (or a 422 error) in the webhook response.

⚠️ This template uses the `n8n-nodes-docmint` community node, so it runs on **self-hosted n8n only**.

## How it works
1. Receives a POST webhook request containing a reporting period, source, and a flat array of sales rows.
2. Adds fixed report constants (template name, company name, and currency) and maps the incoming payload into the fields used downstream.
3. Validates that the request includes a non-empty rows array and a non-empty period, returning a 422 JSON error if the export is unusable.
4. Uses DocMint to read the Excel template fields to confirm the template exists and determine the placeholders it requires.
5. Calculates revenue per row and aggregates totals by region (including reps, units, revenue, and prior revenue) to match the template's expected structure.
6. Uses DocMint to fill the Excel workbook with the prepared JSON and returns the rendered .xlsx as the webhook response, or returns a 422 JSON error if rendering fails.

The canvas is annotated in four stages — receive and validate, confirm the template exists, do the arithmetic and fill, always answer the caller — with every node inside the note that explains it.

## Setup
1. Create or select a DocMint Excel template named `sales-report` with placeholders for the provided fields (company, currency, period, generated, rows, and regions) and connect your DocMint credentials in n8n.
2. Configure the source CRM/exporter to POST to the workflow webhook URL with `period` and `rows` (each row containing region, rep, channel, units, unit_price, and optional prior_revenue).
3. Update the company name, currency, and (optionally) the template name in the workflow constants to match your organization and DocMint template.

## Additional info
Disclosure: I build and run DocMint, the service this template calls. This is a self-submission, not a third-party recommendation.

Revision of 2026-08-29: the previous version was returned with the note that the workflow needed annotations. The canvas now carries a yellow overview note plus four grey stage notes, and all 11 functional nodes sit inside one of them.

Every claim here was executed before submitting, in n8n 2.8.4 with n8n-nodes-docmint@0.2.0 installed from the public npm registry through n8n's own community-node installer. All three paths were run against this exact JSON: a five-row CRM export returned HTTP 200 and an 8,673-byte .xlsx in 0.28 s, whose per-region roll-up (DACH 2,700 units / 114,188.00; Benelux 2,100 / 86,025.00; Nordics 940 / 43,992.00, sorted by revenue, across two sheets) matches an independent calculation, with zero leftover placeholders; an empty rows array returned 422 with the validation message; and DocMint pointed at a closed port returned 422 with the real connection error.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
