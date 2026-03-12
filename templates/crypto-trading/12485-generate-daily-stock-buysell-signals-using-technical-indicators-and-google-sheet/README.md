# 📈 Generate daily stock buy/sell signals using technical indicators and Google Sheets

> ⚡ **1,933 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## 📊 Description
This automation calculates commonly used technical indicators for selected stocks and presents the results in a simple, structured dashboard. It removes the need for manual chart analysis by automatically fetching price data, calculating indicators, and generating clear Buy, Sell, or Neutral signals.
The workflow is designed to run daily and provides a consistent technical snapshot for each tracked stock. It is suitable for traders and analysts who want a repeatable and transparent way to monitor technical conditions without relying on manual tools.
## ⚙️ What This Template Does
- Runs automatically on a daily schedule
- Processes a predefined list of stock symbols
- Fetches recent daily price data from a market data API
- Calculates RSI, Moving Averages, and MACD
- Applies rule-based logic to generate Buy, Sell, or Neutral signals
- Stores indicator values and signals in Google Sheets
## ✅ Key Benefits
- Eliminates manual technical analysis
- Uses standard, widely accepted indicators
- Produces clear and easy-to-interpret signals
- Keeps all results in a single dashboard
- Easy to customize and extend
## 🧩 Features
- Daily scheduled execution
- Historical price data integration
- RSI (14-period) calculation
- Moving Averages (SMA 20 and SMA 50)
- MACD (12, 26, 9) calculation
- Rule-based Buy / Sell / Neutral classification
- Google Sheets dashboard output
- Built-in data validation checks
## 🔐 Requirements
- To use this workflow, you will need:
- A market data API key (Alpha Vantage or similar)
- A Google Sheets account for storing results
- Google Sheets credentials configured in n8n
- An active n8n instance (cloud or self-hosted)
## 🎯 Target Audience
- Stock traders and investors
- Technical analysts
- Finance and research teams
- Automation builders working with market data
## 🛠 Customization Options
- Update the stock list to track different symbols
- Adjust indicator periods or thresholds
- Modify Buy / Sell signal rules
- Change the schedule frequency
- Extend the dashboard with additional indicators

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
