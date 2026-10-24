# 📈 Log gold and silver prices and email Groq insights with Google Sheets

> ⚡ **29 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow manually logs daily Gold and Silver prices from GoldAPI into Google Sheets, summarizes historical monthly averages, generates seasonal insights with Groq (LLM), builds QuickChart bar charts, and emails a formatted report via Gmail.

## How it works
1. Starts manually and loads a two-item asset list (Gold/XAU and Silver/XAG) to process in a loop.
2. For each commodity, calls the GoldAPI endpoint to fetch the latest INR price and converts it into a per-10g value with date and month fields.
3. Checks Google Sheets for an existing row for the same commodity and date, keeps the higher of the two prices, and appends or updates the row in the historical sheet.
4. Reads the full historical dataset from Google Sheets and calculates monthly average, minimum, and maximum prices grouped by month and commodity.
5. Formats the monthly averages into a text block and sends it to a Groq-hosted chat model to generate a structured JSON insight summary for gold, silver, and the overall trend.
6. Creates QuickChart URLs for separate Gold and Silver monthly-average bar charts and emails the AI summary and chart images using Gmail.

## Setup
1. Add a GoldAPI key and set it in the HTTP request header (x-access-token) for the GoldAPI call.
2. Connect Google Sheets OAuth credentials and select the target spreadsheet and sheet tab where rows are stored (e.g., the 04_HistoricalData sheet).
3. Ensure the sheet has columns for ID, Date, Month, Price, and Commodity, and that ID is used as the upsert/matching key.
4. Add Groq API credentials for the Groq chat model used to generate the JSON insights.
5. Connect Gmail OAuth credentials and replace the placeholder recipient address ("RECEIVER MAIL ID") and subject as needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, AI Agent, Summarize, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
