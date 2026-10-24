# 🤝 Sync Tally Prime AR ledgers between GoHighLevel and Google Sheets

> ⚡ **33 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow runs every two hours and syncs accounts receivable data between Tally Prime, GoHighLevel, and Google Sheets, calculating balances and aging, updating GoHighLevel fields and tags from Tally, and queuing GoHighLevel-driven ledger changes and receipts for accountant approval before writing back to Tally.

## How it works
1. Runs on a schedule every two hours during business hours (Mon–Sat, 9:00–19:00).
2. Reads the Customers, Bills, and Tally Change Queue tabs from Google Sheets and posts any queue rows marked Approved to Tally Prime as import XML.
3. Exports debtor ledgers and the Bills Receivable report from Tally Prime over its XML/HTTP interface and parses them into customer balances and open bills.
4. Fetches GoHighLevel contacts and recent payment transactions (with pagination) via the GoHighLevel API.
5. Matches Tally ledgers to GoHighLevel contacts, computes overdue/aging and credit status, resolves email/phone changes with conflict detection, and generates actions for updates, new records, and approval-required changes.
6. Updates GoHighLevel contacts by writing AR custom fields, syncing contact email/phone when safe, and adding/removing AR tags based on the latest Tally receivables.
7. Writes mirror tables back to Google Sheets (Customers, Bills, Conflicts) and appends any Tally changes (new ledgers, contact edits, receipt vouchers) to the Tally Change Queue for approval.
8. Sends a Slack message to an accounts channel only when attention is needed (writes applied/failed, queued approvals, conflicts, unlinked payments, or new credit holds).

## Setup
1. Enable Tally Prime’s HTTP connectivity (Client/Server mode) and set the workflow’s Tally URL and company name so n8n can reach the Tally machine securely (LAN/VPN/tunnel, not public internet).
2. Create a Google Sheet with tabs named Customers, Bills, Tally Change Queue, and Conflicts (with matching headers), add Google Sheets credentials in n8n, and replace YOUR_GOOGLE_SHEET_ID in all Google Sheets nodes.
3. Add a GoHighLevel OAuth2 credential in n8n, set your GoHighLevel location ID, and create the required GoHighLevel custom fields and tags, then paste their field IDs and tag names into the sync rules.
4. Add Slack credentials in n8n and set the target Slack channel (for example, #accounts-sync) used for notifications.
5. Review and adjust sync rules such as debtor group name, receipt clearing bank ledger, payment lookback days, and whether to auto-approve Tally writes before activating the workflow.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
