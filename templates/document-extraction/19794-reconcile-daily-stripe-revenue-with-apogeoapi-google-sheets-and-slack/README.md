# 🔬 Reconcile daily Stripe revenue with ApogeoAPI, Google Sheets, and Slack

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs daily to reconcile yesterday’s successful Stripe charges in multiple currencies, converts net revenue to a single reporting currency using ApogeoAPI exchange rates, appends a dated total to Google Sheets, and posts a Slack alert if rates are stale or any charges cannot be converted.

## How it works
1. Runs every day at 09:00 (or manually with provided sample data for testing).
2. Retrieves charges from Stripe and keeps only succeeded charges created during the previous UTC day, net of any refunded amounts.
3. Fetches a full set of FX rates from ApogeoAPI in a single request using USD as the base.
4. Converts each charge to the reporting currency with correct handling for zero- and three-decimal currencies, aggregates totals by currency, and computes a grand total.
5. Appends one reconciliation row (date, totals, breakdown JSON, and any unconverted charges) to a Google Sheets tab.
6. Posts a message to a Slack channel when exchange rates are marked stale or any charges could not be converted.

## Setup
1. Install the `n8n-nodes-apogeoapi` community node (required for the ApogeoAPI exchange rate step).
2. Add credentials for Stripe, ApogeoAPI, Google Sheets (OAuth2), and Slack.
3. Update the Google Sheets document ID and ensure the sheet has a `Reconciliation` tab with columns for date, reporting currency, totals, rate flags, and JSON breakdown fields.
4. Set the Slack channel (for example `#finance`) and adjust the reporting currency constant in the code if you don’t want USD.
5. Run the manual test trigger once to validate output, then activate the scheduled workflow.

## 🔗 Nodes Used

Google Sheets, Slack, Stripe, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
