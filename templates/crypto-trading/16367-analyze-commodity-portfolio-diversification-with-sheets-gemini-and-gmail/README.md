# 📈 Analyze commodity portfolio diversification with Sheets, Gemini, and Gmail

> ⚡ **15 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow reads a gold/silver/oil portfolio from Google Sheets, pulls current commodity prices and a recent gold trend from GoldAPI, EIA, and Twelve Data, calculates allocation and HHI concentration risk, generates a Gemini analysis, and emails an HTML diversification report via Gmail.

## How it works
1. Starts manually and loads configuration values, then reads your portfolio holdings from Google Sheets.
2. Fetches real-time gold and silver prices in INR from GoldAPI, retrieves crude oil prices in USD from the EIA API, and converts oil prices to INR.
3. Pulls the last two daily closes for GLD from Twelve Data and compares them to label the gold market trend as UP or DOWN.
4. Aggregates the latest commodity prices and trend data, then calculates portfolio allocation percentages and an HHI concentration score from the Google Sheets holdings.
5. Sends the allocation, HHI score, and gold trend to Google Gemini to generate a structured risk assessment, rebalancing recommendations, trend impact, and a verdict.
6. Parses Gemini’s response into dedicated fields, builds a formatted HTML report with prices, allocations, risks, recommendations, and verdict, and sends it to the configured recipient via Gmail.

## Setup
1. Add API keys for GoldAPI, the U.S. EIA API, and Twelve Data in the configuration step (and confirm the USD-to-INR conversion rate is correct for your needs).
2. Connect your Google Sheets account, then update the spreadsheet and sheet tab to a portfolio table that includes commodity_name and buy_price for gold, silver, and oil.
3. Connect your Google Gemini (PaLM) API credential and ensure the selected model is available in your account.
4. Connect your Gmail OAuth2 credential and set the recipient email address used for the report delivery.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
