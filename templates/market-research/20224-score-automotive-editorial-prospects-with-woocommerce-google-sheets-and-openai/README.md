# 📊 Score automotive editorial prospects with WooCommerce, Google Sheets, and OpenAI

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This manual workflow reads pending editorial prospects from Google Sheets, matches each one to a published WooCommerce product from an EU or NA store, fetches the prospect page metadata, scores editorial relevance with OpenAI, and upserts a prioritized review record back into Google Sheets.

## How it works
1. Runs when started manually.
2. Fetches all published products from two WooCommerce stores (EU and NA) and reads pending prospects from a Google Sheets tab.
3. Validates each prospect (region, permission status, and safe public URL) and text-matches it to the best-fit regional WooCommerce product.
4. For valid prospects, requests the target URL and extracts the page title and meta description from the HTML response.
5. Sends the page metadata and matched product context to the OpenAI Chat Completions API to get a JSON relevance score, rationale, pitch angle, and suggested anchors.
6. Combines the OpenAI relevance score with sheet-provided domain rating and traffic inputs to set a review status and append-or-update the opportunity in the Google Sheets Opportunities tab.
7. For invalid, unapproved, or unsafe prospects (or fetch/metadata failures), skips the AI step and writes a flagged record to the Opportunities tab for manual follow-up.

## Setup
1. Add WooCommerce credentials for both regional stores and ensure product permalinks use the expected EU/NA hostnames.
2. Add a Google Sheets OAuth credential, replace REPLACE_WITH_SPREADSHEET_ID, and ensure the Pending_Leads and Opportunities sheet tabs exist.
3. Add an OpenAI API key as an HTTP Bearer Auth credential for the OpenAI Chat Completions request and change the model name if your account requires it.
4. Ensure Pending_Leads includes the required columns (prospect_id, target_url, target_region, brand, model, part_category, permission_status) and Opportunities has opportunity_key set as the match column for upserts.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
