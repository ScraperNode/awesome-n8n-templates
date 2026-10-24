# 📈 Send portfolio risk reports from Google Sheets with OpenAI and Gmail

> ⚡ **5 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow collects a portfolio request via an n8n Form, loads holdings from Google Sheets, calculates portfolio risk and concentration metrics, generates an HTML risk narrative with OpenAI, then emails the full report via Gmail and appends an audit record back to Google Sheets.

## How it works
1. Receives a portfolio analysis request from an n8n Form containing the investor details, base currency, and a Google Sheet ID.
2. Reads all holdings from the provided Google Sheets document (Portfolio tab) and bundles the rows into a single portfolio dataset.
3. Calculates market value, allocations, sector and asset-class breakdowns, P&L, concentration flags, and a 0–100 risk score.
4. Sends the computed portfolio summary, breakdowns, risk flags, and holdings to OpenAI to generate a structured risk report in HTML.
5. Builds a branded HTML email that includes the AI narrative plus sector and top-holdings tables and a concentration alert banner.
6. Sends the HTML risk report to the investor via Gmail and appends a summary row to a Google Sheets “Analysis Log” audit sheet.

## Setup
1. Create a Google Sheet with a tab named “Portfolio” and headers: ticker, company, sector, asset_class, quantity, avg_buy_price, current_price.
2. Connect a Google Sheets OAuth2 credential and set the audit log document ID (replace YOUR_AUDIT_LOG_SHEET_ID) with a sheet tab named “Analysis Log” containing the mapped columns.
3. Connect an OpenAI API credential in the OpenAI Chat Model node and select the model to use.
4. Connect a Gmail OAuth2 credential to send emails, then activate the workflow and use the generated Form URL to submit your portfolio request.

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
