# 🎣 Identify company decision makers with Coresignal and Google Sheets

> ⚡ **29 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow manually pulls company website data from Google Sheets, finds matching companies in Coresignal, and searches for decision-maker employees. It then writes the resulting contact and company details back to a dedicated “Decision makers” sheet in Google Sheets.

## How it works
1. Manually starts the workflow and reads company rows from a Google Sheets spreadsheet.
2. Normalizes each company website URL into a clean domain and searches Coresignal for the matching company by website domain.
3. Processes companies in batches and writes placeholder “no employee found” company details to the “Decision makers” sheet in Google Sheets.
4. For each matched company, searches Coresignal for current employees whose titles match common executive and leadership roles.
5. If the title-based search does not return a single employee ID, runs a broader Coresignal decision-maker search that excludes HR-related roles and departments.
6. Retrieves detailed employee (and, when needed, company) fields from Coresignal and appends or updates the “Decision makers” sheet with names, titles, emails, LinkedIn URLs, and company information.

## Setup
1. Create a Google Sheets OAuth2 connection and set the source sheet (companies with a Website field) and the target “Decision makers” sheet in the Google Sheets nodes.
2. Create a Coresignal API credential in n8n and ensure your plan supports company and employee Elasticsearch DSL search and profile retrieval.
3. Confirm your input sheet includes a website column named either Website or website, and adjust the Coresignal title/department filters to match the decision-maker roles you want to capture.

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
