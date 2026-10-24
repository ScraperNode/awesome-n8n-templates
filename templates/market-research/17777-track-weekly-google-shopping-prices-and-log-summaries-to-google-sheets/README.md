# 📊 Track weekly Google Shopping prices and log summaries to Google Sheets

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs every Monday morning, searches Google Shopping for a list of products using Apify, summarizes credible weekly pricing metrics per product, and appends the results to a Google Sheets spreadsheet for ongoing price-history tracking.

## How it works
1. Runs every Monday morning on a schedule.
2. Defines the list of product search queries plus the target country and language.
3. Splits the product list so each product is searched individually.
4. Uses Apify’s Google Shopping actor to fetch offers and prices for each product.
5. Skips products where Google Shopping returns no offers.
6. Aggregates the remaining offers into one weekly summary per product, trimming very low-price outliers and calculating metrics like lowest price, median, highest price, cheapest seller, and best discount.
7. Appends the summary rows to a Google Sheets tab.

## Setup
1. Create an Apify account and add your Apify API token as an Apify credential in n8n.
2. Connect Google Sheets credentials and select the target spreadsheet document and sheet tab in the Google Sheets append step.
3. Replace the example product queries and adjust the country/language values to match your market and search needs.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
