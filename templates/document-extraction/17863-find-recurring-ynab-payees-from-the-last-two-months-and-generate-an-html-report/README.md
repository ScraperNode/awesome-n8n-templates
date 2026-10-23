# 🔬 Find recurring YNAB payees from the last two months and generate an HTML report

> ⚡ **6 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This manual workflow pulls the last two full months of transactions from the YNAB API, identifies payees that appear in both months as potential recurring charges, and renders an HTML report you can review directly in n8n.

## How it works
1. Runs when you manually execute the workflow.
2. Calculates the two most recent full calendar months and reads the target YNAB budget ID.
3. Requests all YNAB transactions since the start of the older month using the YNAB API.
4. Groups transactions by payee and keeps only payees that have at least one transaction in both months.
5. Generates an HTML table showing each repeating payee with one transaction date and amount from each month.
6. Displays the HTML report in n8n for review.

## Setup
1. Create a YNAB Personal Access Token and add it as an HTTP Bearer Auth credential for the YNAB API request.
2. Set your YNAB budget ID (or use YNAB’s `last-used` shortcut) in the workflow’s budget ID field.
3. Optionally adjust the month calculations if you want to use a different date range.

## Requirements
- YNAB Personal API Token

## Additional info
You will need a YNAB API token - check out the YNAB API documentation (https://api.ynab.com/) for how to get yours.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
