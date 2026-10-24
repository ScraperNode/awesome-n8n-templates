# 📊 Score automotive editorial backlink prospects with WooCommerce, Sheets, and OpenAI

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs manually to evaluate Google Sheets editorial prospects against regional WooCommerce product catalogs, fetches page metadata from each prospect URL, uses OpenAI to score editorial relevance, and upserts a single review-ready opportunity record per prospect into an Opportunities sheet.

## How it works
1. Starts on a manual trigger.
2. Loads published products from two WooCommerce stores (EU and NA) and reads prospect rows from the Google Sheets `Pending_Leads` tab.
3. Validates each prospect (region, URL safety, required fields, and permission status) and picks the best matching product from the correct regional catalog.
4. For valid prospects, fetches the prospect’s editorial page HTML and extracts the page `<title>` and meta description.
5. Sends the page metadata, prospect topic, and selected product details to OpenAI to return a JSON relevance score, rationale, pitch angle, and anchor suggestions.
6. Combines quantitative prospect signals (domain rating and organic traffic) with the AI relevance score to set a status and review flags.
7. Upserts the evaluated result into the Google Sheets `Opportunities` tab using `opportunity_key`, and writes invalid or unapproved prospects there with a “Needs input or permission review” status.

## Setup
1. Configure WooCommerce credentials for both regional stores (EU and NA) and ensure the store domains match the host checks used for product permalinks.
2. Configure a Google Sheets OAuth credential, replace `REPLACE_WITH_SPREADSHEET_ID`, and ensure the spreadsheet has `Pending_Leads` and `Opportunities` tabs.
3. Add required columns to `Pending_Leads` (`prospect_id`, `target_url`, `target_region`, `brand`, `model`, `part_category`, `permission_status`) and optional scoring fields (`domain_rating`, `organic_traffic`, `placement_type`, `link_attribute`).
4. Create an `opportunity_key` column in the `Opportunities` tab and keep it as the match column for append-or-update behavior.
5. Add an OpenAI API key as an HTTP Bearer Auth credential and attach it to the OpenAI request node.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
