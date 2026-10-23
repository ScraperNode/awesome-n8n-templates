# 🎣 Generate and qualify daily B2B leads with Searlo, Gemini, and Google Sheets

> ⚡ **17 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs daily to generate B2B lead search queries with Google Gemini, fetches Google-style SERP results via the Searlo API, uses Gemini to qualify and score each result, and appends the enriched leads to a Google Sheets spreadsheet.

## How it works
1. Runs every day at 09:00 using a schedule trigger.
2. Uses Google Gemini to generate five targeted Google search queries for finding B2B company pages and then parses the returned JSON (with a fallback query list if parsing fails).
3. Sends each query to the Searlo SERP API to retrieve up to 10 organic web results per query.
4. Extracts the title, URL, snippet, and position from each organic result and processes the results in batches of two.
5. Uses Google Gemini to analyze each batch and return structured lead data including company name, root domain, description, industry, location, lead score (1–10), and a score rationale.
6. Parses the AI output into individual lead rows, adds a discovery timestamp, and appends each lead to Google Sheets.

## Setup
1. Add a Google Gemini (PaLM) API credential and select the Gemini model used for both query generation and lead qualification.
2. Add your Searlo API key credential for the HTTP request to `https://api.searlo.tech/api/v1/search/web`.
3. Connect a Google Sheets OAuth2 account and set the target spreadsheet, sheet name, and column mapping for the appended lead fields.
4. Adjust the schedule time, search locale parameters (gl/hl), and result limits if needed for your region and lead volume.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
