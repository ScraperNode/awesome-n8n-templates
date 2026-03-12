# 🎣 Enrich Google Sheets data with the Tavily Research API

> ⚡ **4 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

Enrich your CSV data with web-sourced information using Tavily's AI-powered research API. This workflow fills in missing data for existing columns without creating new ones.

Video Link: https://youtu.be/8g8v3vNyhe4

## How it works
- Reads rows from a Google Sheet
- For missing values, finds information from the web using Tavily Research
- Maps results to existing columns
- Writes the enriched data to a new sheet
- Retries automatically until results are ready (up to ~5 minutes)

## Setup steps
1) Prepare your sheet
2) Create the columns you want filled (e.g. CEO, revenue, HQ - if the data is related to company information)
3) Create an empty output sheet
4) Add credentials
5) Google Sheets OAuth for both sheet nodes
6) Tavily API key for the research nodes
7) Configure and run
8) Enter the Google Sheet ID and sheet names (For both the CSV nodes)
9) Click Start

Requirements: Google account (For sheets) and Tavily API key

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
