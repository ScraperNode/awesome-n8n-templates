# 🎣 Discover and score local B2B leads with Serper Maps and Google Sheets

> ⚡ **2 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs on demand to discover local businesses using the Serper Maps API, then filters, scores, and deduplicates the listings before appending qualified leads to a Google Sheets tab.

## How it works
1. Runs when you manually trigger the workflow.
2. Loads the search settings such as the Serper API key, query, location coordinates, and page/result limits.
3. Generates a list of paged Serper Maps searches and calls the Serper Maps API for each page.
4. Extracts business listings and filters out blocked company types/domains, optionally requiring a website and/or phone number.
5. Deduplicates results, calculates a lead score from available listing signals, and keeps only leads that meet the minimum score and maximum result count.
6. Appends the qualified leads to the Leads tab in Google Sheets with standardized columns (name, phone, website, address, score, and source details).

## Setup
1. Get a Serper API key and paste it into the Serper API key field in the Lead Search Configuration step.
2. Connect your Google Sheets credential in n8n.
3. Create or choose a Google Sheets spreadsheet, add a tab named Leads with the columns used by the append step, and set the Google Sheet document ID in the Google Sheets configuration.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
