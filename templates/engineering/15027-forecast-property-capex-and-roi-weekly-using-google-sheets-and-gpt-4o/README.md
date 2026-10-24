# ⚒️ Forecast property CAPEX and ROI weekly using Google Sheets and GPT-4o

> ⚡ **58 views** · ⚒️ [Engineering](../)

## Description

## How It Works
This workflow automates weekly capital expenditure (CAPEX) forecasting for property portfolios using a multi-agent AI architecture. It targets property managers, asset managers, and facilities finance teams who need data-driven maintenance budgeting without manual spreadsheet analysis. Three Google Sheets sources, namely: maintenance records, property data, and tenant feedback, are merged into a unified dataset. A Main Prediction Agent orchestrates three specialist sub-agents: a CAPEX Prioritizer that ranks spending needs, an ROI Simulator that models return scenarios, and a Quote Requester that fetches vendor estimates. Each agent is backed by dedicated AI models, memory, and tools including a Calculator and Financial Modeling Tool. Structured predictions are parsed, split by category, formatted, saved back to Google Sheets, and pushed to an external budgeting system via POST, delivering a fully automated, auditable CAPEX planning pipeline every week.

## Setup Steps
1. Connect Google Sheets credentials to all three read nodes and the Save Predictions node.
2. Set correct Sheet IDs for maintenance, property, and tenant feedback tabs.
3. Add Claude or OpenAI API credentials to all Chat Model nodes.
4. Configure the Financial Modeling Tool with your cost rate assumptions.
5. Replace the POST placeholder URL in Update Budgeting System with your actual endpoint.

## Prerequisites
- Google Sheets account with populated maintenance, property, and tenant data
- Claude or OpenAI API credentials
- External budgeting system with a POST-compatible API endpoint
## Use Cases
- Weekly CAPEX forecasting for multi-property real estate portfolios
- Automated ROI modelling for planned renovations or equipment replacement
## Customization
Add more data sources (e.g., IoT sensors, ERP exports). 
## Benefits
Eliminates manual CAPEX spreadsheet work with autonomous AI forecasting.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
