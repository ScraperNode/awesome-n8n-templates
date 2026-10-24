# 🔒 Monitor Polish counterparties for insolvency with Apify, Google Sheets and Gmail

> ⚡ **1 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick Overview
This workflow runs every Monday to check a Google Sheets watchlist of Polish companies against the KRZ National Debtor Register and MSiG court gazette via Apify, then emails (and optionally Slack-posts) only newly detected insolvency or restructuring-related entries.

## How it works
1. Runs every Monday at 07:00 (or manually with a sample watchlist for testing).
2. Reads your counterparty watchlist from Google Sheets and normalizes NIP/KRS identifiers, keeping only rows with a valid identifier.
3. Uses Apify to search the KRZ National Debtor Register for each company and formats results (or registry errors) into alert-ready entries.
4. Drops KRZ items that were already reported in previous executions and, for newly found proceedings, uses Apify to fetch proceeding details such as type, status, case number, and start date.
5. Uses Apify to search the MSiG court gazette for recent notices (last 8 days), formats the findings (or errors), and drops items already reported in previous executions.
6. Combines all new KRZ and MSiG entries into a single table-based alert message.
7. Sends one HTML email via Gmail with the new entries and can optionally post the text version to a Slack channel.

## Setup
1. Add an Apify API token and (if self-hosting n8n) install the community node `@apify/n8n-nodes-apify`.
2. Connect Google Sheets credentials and select the spreadsheet/document and sheet that contains `company`, `nip`, and `krs` columns.
3. Connect Gmail credentials and replace the recipient address in the email step (and enable/configure the Slack connection and channel if you want Slack alerts).

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
