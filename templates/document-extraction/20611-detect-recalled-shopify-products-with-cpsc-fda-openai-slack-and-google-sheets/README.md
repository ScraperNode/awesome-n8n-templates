# 🔬 Detect recalled Shopify products with CPSC, FDA, OpenAI, Slack, and Google Sheets

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every morning, checks recent CPSC and FDA recalls against your Shopify product catalog, uses OpenAI to verify likely matches, and then posts alerts to Slack while logging results to Google Sheets (with an optional step to set high-confidence matches to draft in Shopify).

## How it works
1. Runs every day at 8am.
2. Pulls all products from Shopify and fetches recent recall data from the CPSC recall API and the FDA enforcement APIs for food, drug, and medical device recalls.
3. Reads a Google Sheets “Recall log” tab to skip recalls that were already processed, then normalizes all new recalls into a consistent format.
4. Scores each recall against your Shopify catalog using UPC/barcode matches, vendor/brand names, and shared product keywords to shortlist likely candidate products.
5. Sends only recalls with shortlisted candidates to OpenAI to decide whether each candidate is truly affected, returning a confidence score, a lot/batch check flag, and a recommended action.
6. Posts a Slack alert for each confirmed match above the confidence threshold and appends a detailed row to the Google Sheets “Matches” tab.
7. Optionally sets confirmed, high-confidence active listings to DRAFT in Shopify via the Admin GraphQL API, logs each checked recall to the “Recall log” tab, and posts a daily Slack summary of the run.

## Setup
1. Create a Shopify custom app, grant at least read_products (and write_products if you want auto-drafting), and add a Shopify Access Token credential in n8n.
2. Add credentials for OpenAI (Chat Completions), Slack, and Google Sheets.
3. Create a Google Sheet with tabs named “Recall log” (with a “Recall ID” header in A1) and “Matches”, then paste the sheet URL into the workflow configuration.
4. Update the configuration values (Shopify store handle, Slack channel, lookback days, confidence thresholds, and whether to auto-draft products) before activating the workflow.

## Requirements
- Shopify store with a custom app access token (read_products; write_products only if you enable auto-draft)
- OpenAI API key
- Google Sheets with two tabs: Recall log (header "Recall ID" in A1) and Matches
- Slack workspace
- No API key is needed for the CPSC or FDA recall data

## Customization
- Set autoDraftProducts to true to unpublish confirmed matches automatically (90%+ confidence by default)
- Deactivate the FDA food, drug or device nodes you don't need, for example drugs and devices for a toy store
- Raise minConfidence for fewer alerts, or lower minCandidateScore to catch more possible matches
- Change lookbackDays to scan a longer history on the first run
- Swap Slack for Gmail or Microsoft Teams alerts
- Update the Status column in the Matches tab (Open, Removed, Not affected) to track follow-up

## Additional info
Recalls are pre-filtered by barcode, brand and product words before any AI call, so OpenAI cost stays low even with large catalogs: only plausible product and recall pairs are verified. The AI only judges products it was shown and flags lot-specific recalls for a supplier check instead of guessing. Auto-draft is off by default; when enabled it only changes active listings with a high-confidence match, and every action is posted to Slack and logged in Google Sheets.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Shopify, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
