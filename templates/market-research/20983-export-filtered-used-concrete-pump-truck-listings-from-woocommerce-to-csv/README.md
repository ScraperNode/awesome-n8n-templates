# 📊 Export filtered used concrete pump truck listings from WooCommerce to CSV

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow manually pulls the 100 most recent public WooCommerce product listings for used concrete pump trucks, filters them by brand and boom reach, and exports the resulting shortlist as a downloadable CSV file.

## How it works
1. Runs when you execute the workflow manually.
2. Requests up to 100 recent products from a WooCommerce Store API endpoint using an HTTP GET call.
3. Filters the returned products to concrete pump truck listings, matches the preferred brand from the title, and keeps only items with a boom reach within the configured meter range.
4. Normalizes the shortlisted fields (catalog ID, brand, boom reach, title, URL, and a review note) and outputs a placeholder row if nothing matches.
5. Converts the final list into a CSV file and provides it for download.

## Setup
1. Update the WooCommerce Store API URL (including the category ID and any query parameters) in the shortlist settings to point to your target catalog endpoint.
2. Set your filter values in the shortlist settings (preferredBrand, minReachM, maxReachM), using an empty brand or 0 reach limits to disable those filters.
3. Execute the workflow and download the generated CSV from the final step.

## Additional info
Example public data source: [Mechabro used truck-mounted concrete pump catalog](https://www.mechabro.com/en/product-category/concrete-machinery/truck-mounted-concrete-pump/). The workflow uses the public WooCommerce Store API without credentials. Its CSV lists catalog references only; confirm each machine’s current availability, condition, quotation, and export terms with the seller.

## 🔗 Nodes Used

HTTP Request, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
