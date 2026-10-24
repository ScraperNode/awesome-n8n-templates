# 📊 Run bulk backlink and domain analysis with DataForSEO and Google Sheets

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow is built for SEO teams, link-building specialists, and digital agencies that regularly pull multiple backlink data points per audit. Instead of maintaining five separate workflows, you can run any combination of the five DataForSEO bulk backlinks endpoints in the same execution.

## How it works
1. Triggers manually whenever you want to run bulk backlinks analysis.
2. Reads the list of target domains from your Google Sheet through the shared Get targets node. Aggregates all domains into a single batch request.
3. Sends the batch to each connected DataForSEO bulk backlinks endpoint (up to five in one execution).
4. Splits each endpoint's response and writes the data back to the corresponding rows in your Google Sheet.

## Setup
1. Create or select your DataForSEO connection (use your API login and password).
2. Create or select your Google Sheets connection.
3. Prepare your Google Sheet with target domains following the required column structure.
4. Select the same spreadsheet in the Get targets node and in every Update rows in the sheet node you plan to use.
5. Keep only the endpoint branches you want to run and disconnect the rest.
6. Run the workflow.

## Requirements
- DataForSEO account and API credentials.
- Google Sheets integration connected to n8n.

## Customization
- You can customize this workflow by choosing which endpoint branches to keep connected for a given run. Within each branch, you can switch from domain-level to subdomain- or page-level analysis, set a custom starting date in the new & lost branches to track changes over a defined period (up to 365 days), apply filters such as a spam score threshold, or schedule the workflow to run automatically at regular intervals.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
