# 🎣 Build local business lead lists with SpecStream and Google Sheets

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow collects a business type and city via an n8n form, uses the SpecStream API to price and run a web-based business search, then writes the resulting business details (including website, phone, and source URL) into Google Sheets.

## How it works
1. Receives a form submission with the business type, city, optional condition, desired number of businesses, and a maximum budget.
2. Builds a single request sentence and sends it to SpecStream to parse into a runnable query.
3. Requests a SpecStream price quote for the desired number of results and stops with an error if the request is not runnable or the quote exceeds the provided maximum price.
4. Approves the quote to start the SpecStream execution and polls SpecStream every 30 seconds until the run is no longer queued, planning, or running.
5. Fetches all result rows from SpecStream with pagination, flattens each row into one item with business fields plus Source, Read at, and a link to the SpecStream list.
6. Appends the rows into the selected Google Sheets spreadsheet and worksheet, inserting new columns if extra fields are returned.

## Setup
1. Create a SpecStream API key and add it to an n8n HTTP Bearer Auth credential used by the SpecStream HTTP Request steps.
2. Connect a Google Sheets credential and select the target spreadsheet and worksheet in the Google Sheets append step.
3. Open the n8n form URL for the workflow, submit a test request, and confirm the resulting rows appear in your sheet.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Stop and Error, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
