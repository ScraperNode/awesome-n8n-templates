# 🔬 Sync ONDC seller catalog between Google Sheets, seller app, and OpenAI

> ⚡ **18 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow syncs an ONDC seller catalog from Google Sheets to a seller app API on a schedule or via webhook, using OpenAI to clean product content, validating ONDC retail rules, checking image links, writing sync results back to the sheet, and emailing an error-focused run report.

## How it works
1. Runs every 30 minutes or when a POST request hits the n8n webhook endpoint.
2. Loads catalog rows from Google Sheets and fetches the current live catalog from the seller app API to detect changed, new, disabled, or drifting SKUs.
3. Sends only “full update” items that need content changes to OpenAI (gpt-4o-mini) to normalize titles, descriptions, categories, units, and attributes.
4. Verifies product image URLs with HTTP HEAD requests and flags broken links, non-image content types, or oversized files.
5. Validates each SKU against ONDC retail rules, applies a price-jump guard that holds large changes until the sheet confirms them, and builds batched upsert and inventory payloads.
6. Pushes the batched catalog and inventory updates to the seller app API and compiles API responses together with validation failures.
7. Updates Google Sheets with sync status, hashes, timestamps, and any AI-cleaned fields, logs failures into a “Sync Errors” tab, optionally writes AI fix suggestions back to the catalog sheet, and emails a summary report via Gmail.

## Setup
1. Create a Google Sheet with a “Catalog” tab (including SKU, pricing, stock, content fields, and sync tracking columns like sync_status/content_hash/stock_hash) and a “Sync Errors” tab for appended error logs.
2. Add Google Sheets OAuth2 credentials and set the Sheet ID and tab names in the configuration values.
3. Add an OpenAI API key for the gpt-4o-mini steps that clean product attributes and generate fix suggestions.
4. Add Gmail OAuth2 credentials and set the report recipient email address used for run summaries.
5. Configure an HTTP Header Auth credential for your seller app API and update the API base URL, endpoints, and ONDC identifiers (provider_id, location_id, fulfillment_id, consumer care details) in the configuration values.
6. If using on-demand runs, copy the webhook URL from the workflow and call it with a POST request (optionally providing a JSON body for SKUs/full resync behavior).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
