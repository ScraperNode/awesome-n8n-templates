# 📈 Send portfolio risk reports with Google Sheets, GPT-4o-mini and Gmail

> ⚡ **57 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow receives a portfolio via webhook (uploaded CSV or Google Sheets), calculates allocation and concentration risk metrics, generates an OpenAI HTML risk report, emails it through Gmail, and returns a JSON API response with the report status.

## How it works
1. Receives a POST webhook request containing a portfolio source type plus user name and email.
2. Loads holdings either by decoding an uploaded base64 CSV into rows or by reading rows from Google Sheets.
3. Combines all holdings into a single dataset and attaches user and source metadata.
4. Calculates portfolio totals, position weights, sector and asset-class breakdowns, concentration flags, top gainers/losers, and an overall risk score and label.
5. If the portfolio is valid, sends the computed metrics to OpenAI to generate a client-ready HTML risk narrative.
6. Builds a formatted HTML email that includes the AI analysis plus sector and top-holdings tables, then sends it to the user via Gmail and returns a success JSON response.
7. If the portfolio is empty or invalid, emails a failure notice via Gmail (when an email is provided) and returns a 422 JSON error response.

## Setup
1. Create and connect credentials for Google Sheets OAuth2, OpenAI, and Gmail OAuth2.
2. Configure the webhook endpoint by copying the production URL and sending POST requests to the /portfolio-analyze path.
3. For CSV submissions, include base64 CSV content in body.fileData (or body.csvBase64/body.file) and ensure the columns include ticker, company, sector, quantity, avg_buy_price, current_price, and asset_class.
4. For Google Sheets submissions, update the spreadsheet document ID and sheet (gid) to the holdings table you want to analyze.
5. Ensure the request includes userEmail (body, query, or x-user-email header) so the workflow can deliver the report or validation error message.

## 🔗 Nodes Used

Google Sheets, Spreadsheet File, Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
