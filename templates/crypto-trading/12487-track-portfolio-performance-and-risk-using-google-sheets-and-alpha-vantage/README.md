# 📈 Track portfolio performance and risk using Google Sheets and Alpha Vantage

> ⚡ **160 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## 📄 Description
This workflow helps users track and understand the performance of their stock portfolio in an automated and structured way. It reads portfolio holdings from Google Sheets, fetches the latest market prices, calculates key performance metrics, and updates the results back into the same sheet. In addition to standard return calculations, the workflow also classifies each holding based on overall performance and risk, making the output more actionable and easier to interpret.
The workflow is designed for investors who want a simple, repeatable way to monitor portfolio performance without manual calculations.
## ⚙️ What This Workflow Does
- Reads portfolio holdings (stock, buy price, quantity, buy date) from Google Sheets
- Fetches daily stock price data using Alpha Vantage
- Calculates key metrics:
  - Invested Value
   - Current Value
  - Profit & Loss (P&L)
   - P&L Percentage
   - CAGR
   - Maximum Drawdown
- Classifies each holding as Healthy, Watch, or Risk based on return and drawdown
- Updates the same Google Sheet with the latest results
- Runs automatically on a schedule
## ✅ Key Benefits
- Eliminates manual portfolio tracking and calculations
- Provides clear performance and downside risk visibility
- Adds a simple decision layer through portfolio status classification
- Keeps all portfolio data in one place (Google Sheets)
- Dashboard-ready output for further analysis or visualization
## 🧩 Features
- Scheduled portfolio evaluation
- Daily market price data from Alpha Vantage
- Deterministic, explainable financial calculations
- Simple risk and performance classification logic
- Google Sheets-based input and output
Clean, update-in-place data handling (no duplicate rows)
## 🔐 Requirements
- Alpha Vantage API key (for market price data)
- Google Sheets OAuth credentials
- An n8n instance (cloud or self-hosted)
## 🎯 Target Audience
- Retail investors tracking long-term portfolios
- Finance teams maintaining internal portfolio dashboards
- Automation builders creating investment-related workflows
- Users looking for a simple, explainable portfolio monitoring setup

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
