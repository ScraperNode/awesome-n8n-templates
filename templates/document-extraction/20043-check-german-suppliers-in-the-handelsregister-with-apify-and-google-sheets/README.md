# 🔬 Check German suppliers in the Handelsregister with Apify and Google Sheets

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a German supplier name from an n8n form, looks it up in the official Handelsregister via Apify, selects the best match, logs the result to Google Sheets, and shows the outcome on the form confirmation page.

## How it works
1. Receives a submission from an n8n form with a company name, optional register number, and an exact or keyword search choice.
2. Uses Apify’s Germany Handelsregister Scraper actor to search the official Handelsregister and return up to five matching companies.
3. If the register request fails, prepares a “check failed” result so the run is not recorded as “no match.”
4. If results are returned, picks the best match (preferring an exact name match) and extracts key fields like legal form, register court/number, status, address, capital, EUID, and other matches.
5. Appends the normalized result row to Google Sheets.
6. Displays a completion message on the form showing either the matched company details, “No match found,” or that the register did not answer.

## Setup
1. Create an Apify account, add an Apify API token credential in n8n, and (for self-hosted n8n) install the community node `@apify/n8n-nodes-apify`.
2. Set up Google Sheets OAuth credentials in n8n and select the target spreadsheet and sheet in the Google Sheets append step.
3. Create a header row in the sheet that matches the workflow output fields (for example: checkedAt, query, matchFound, companyName, legalForm, registerCourt, registerNumber, status, seat, address, capital, euid, otherMatches).
4. Activate the workflow and share the form’s production URL with colleagues who need to run supplier checks.

## 🔗 Nodes Used

Google Sheets, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
