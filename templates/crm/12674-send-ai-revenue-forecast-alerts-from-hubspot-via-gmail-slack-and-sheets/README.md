# 🤝 Send AI revenue forecast alerts from HubSpot via Gmail, Slack and Sheets

> ⚡ **46 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How it works
This workflow automatically generates an AI-powered revenue forecast whenever a new deal is created in HubSpot. It collects all active deals, standardizes key sales data, and sends it to an AI model for forecasting and risk analysis. The AI produces best, likely, and worst-case revenue scenarios along with actionable insights. Results are shared with stakeholders via Slack and Email and stored in Google Sheets for tracking.

## Step-by-step
- **Step 1 : Collect & prepare HubSpot deals**
  - **HubSpot Trigger** – Starts the workflow when a new deal is created in HubSpot.
  - **Get many deals** – Fetches all active deals from the sales pipeline.
  - **Format HubSpot Data** – Cleans and standardizes deal fields like amount, stage, probability, and region.
  - **Loop Over Items** – Iterates through formatted deals to prepare them for AI analysis.

- **Step 2 : Generate & distribute AI forecast**
  - **AI Revenue Forecast & Risk Analysis** – Sends pipeline data to the AI model to generate revenue forecasts and insights.
  - **Groq Chat Model** – Powers the AI analysis and produces structured forecasting output.
  - **Format AI response** – Extracts key metrics, risks, and recommendations from the AI response.
  - **Send a message (Gmail)** – Emails the revenue forecast report to stakeholders.
  - **Send a message (Slack)** – Posts the forecast summary to a selected Slack channel.
  - **Append row in sheet** – Logs forecast data and insights into Google Sheets.
  - **Wait** – Adds a controlled pause before looping or completing the workflow.

## Why use this?
- Get real-time revenue forecasts triggered directly by CRM activity.
- Reduce manual pipeline analysis and reporting effort.
- Identify high-risk deals early with AI-driven insights.
- Keep leadership aligned through automated Slack and Email updates.
- Maintain a historical forecast log for audits and performance tracking.

## 🔗 Nodes Used

Google Sheets, Slack, HubSpot, HubSpot Trigger, Gmail, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
