# 📊 Track Singapore COE prices with AI forecasting & smart buy recommendations via Telegram

> ⚡ **81 views** · 📊 [Market Research & Insights](../)

## Description

## Introduction
Automates Singapore COE price tracking with AI forecasts and buy/wait recommendations. Weekly scraping collects LTA data, enriches with economic indicators, predicts 6-month trends, and alerts users via Telegram/email—helping car buyers and fleet managers make data-driven purchase decisions while avoiding manual tracking.

## How it Works
Weekly trigger scrapes LTA COE → validates → stores in Google Sheets → calculates indicators → AI forecasts trends → multi-scenario analysis → generates buy/wait signals → sends actionable alerts.

## Setup Steps
1. Add OpenAI/NVIDIA API credentials in n8n
2. Authenticate Google Sheets and create spreadsheet
3. Configure Telegram bot or Gmail SMTP
4. Set weekly trigger (Thursday 9AM SGT post-bidding)
5. Adjust alert thresholds in conditional nodes

## Workflow
Schedule Trigger → Scrape COE → Validate → Store Sheets → Fetch Historical → Calculate Indicators → AI Prediction → Merge Economics → Multi-Scenario Analysis → Compare Conditions → Generate Dashboard → Send Alerts

## Workflow Steps
1. Scraping: Fetch LTA COE results with retry logic
2. Validation: Check completeness, flag anomalies
3. Storage: Append timestamped records to Sheets
4. Enrichment: Calculate moving averages, volatility, seasonality
5. AI Analysis: Forecast next 6 months with confidence intervals
6. Decision Engine: Output buy/wait/monitor recommendation
7. Reporting: Create dashboard and send alerts via Telegram/email

## Prerequisites
OpenAI/NVIDIA API key, Google Sheets access, Telegram bot token or Gmail, basic COE category understanding

## Use Cases
First-time buyers timing purchases, fleet operators coordinating bulk acquisitions

## Customization
Add SMS alerts via Twilio, integrate loan calculators for total cost analysis

## Benefits
Saves 5+ hours monthly, captures 10–18% price dips, provides predictive insights (potential $10K–$25K savings)

## 🔗 Nodes Used

Airtable, Send Email, Google Sheets, HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
