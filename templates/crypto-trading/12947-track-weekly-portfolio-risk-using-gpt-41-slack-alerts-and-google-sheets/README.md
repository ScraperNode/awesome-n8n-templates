# 📈 Track weekly portfolio risk using GPT-4.1, Slack alerts, and Google Sheets

> ⚡ **105 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

📊 Description
This workflow reads your portfolio from Google Sheets, fetches market data, evaluates key risk factors such as sector concentration, volatility, and stock correlation, and generates an easy-to-understand risk summary using AI.
When meaningful risk is detected, the workflow sends a structured alert to Slack and stores a weekly risk snapshot in Google Sheets for tracking trends over time. This automation is designed to help investors, analysts, and teams understand portfolio risk clearly without manual analysis or constant monitoring.

## 🔁 What This Workflow Does
1️⃣ Runs automatically on a weekly schedule using a Schedule Trigger
 2️⃣ Reads portfolio holdings from Google Sheets
 3️⃣ Validates portfolio data to ensure required fields are present
 4️⃣ Processes stocks in batches to avoid API rate limits
 5️⃣ Fetches historical price data from Alpha Vantage
 6️⃣ Normalizes market data into a consistent structure
 7️⃣ Calculates portfolio-level risk metrics.
 8️⃣ Generates a single portfolio risk score and risk flag
 9️⃣ Uses AI to explain detected risks in simple language
 🔟 Sends a clear weekly risk alert to Slack
 1️⃣1️⃣ Stores a summarized weekly risk snapshot in Google Sheets
 1️⃣2️⃣ Handles invalid data safely to avoid noisy or misleading alerts

## ⭐ Key Benefits
✅ Understand portfolio risk at a glance
 ✅ Detect sector overexposure and diversification issues early
 ✅ Receive only meaningful, high-signal alerts
 ✅ Simple AI explanations instead of raw numbers
 ✅ Automatic weekly risk history stored in Google Sheets
 ✅ No financial advice, only analytical insights
 ✅ Designed for reuse and easy customization

## 🧩 Features
- Weekly automated portfolio risk analysis
-  Google Sheets–based portfolio input
-  Alpha Vantage market data integration
-  Batch processing with rate-limit protection
-  Sector, volatility, and correlation risk analysis
-  Portfolio risk scoring system
-  AI-generated risk explanations
-  Slack alerts for detected risk
-  Google Sheets storage for historical tracking

## 🔐 Requirements
- Google Sheets credentials
-  Alpha Vantage API key
-  Slack credentials (OAuth or webhook)
-  AI provider API key 

## 🎯 Target Audience
- Long-term and active investors
-  Portfolio and risk analysts
-  Finance and operations teams
-  Fintech and investment platforms
-  Automation engineers building financial workflows

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
