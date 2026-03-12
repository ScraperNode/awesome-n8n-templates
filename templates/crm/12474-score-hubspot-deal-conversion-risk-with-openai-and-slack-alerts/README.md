# 🤝 Score HubSpot deal conversion risk with OpenAI and Slack alerts

> ⚡ **50 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How it works  
This workflow runs daily to review all active deals and evaluate their likelihood of closing successfully. It enriches deal data with recent engagement activity and applies AI-based behavioral scoring to predict conversion probability. High-risk or stalled deals are flagged automatically. Actionable alerts are sent to the sales team, and all analysis is logged for forecasting and tracking.

## Step-by-step  

- **Trigger and fetch deals**  
  - **Schedule Trigger** – Runs the workflow automatically at a fixed time each day.  
  - **Get Active Deals from HubSpot** – Retrieves all open, non-closed deals with key properties.  
  - **Formatting Data** – Normalizes deal fields such as value, stage, age, contacts, and activity dates.  

- **Enrich deals with engagement data**  
  - **If** – Filters only active deals for further processing.  
  - **Loop Over Items** – Processes each deal individually.  
  - **HTTP Request** – Fetches engagement associations for the current deal.  
  - **Get an engagement** – Retrieves detailed engagement records from HubSpot.  
  - **Extracts Data** – Structures engagement content, timestamps, and metadata for analysis.  

- **Analyze risk, alert, and store results**  
  - **OpenAI Chat Model** – Provides the language model used for analysis.  
    - **AI Agent** – Evaluates behavioral signals, predicts conversion probability, and recommends actions.  
  - **Format Data** – Parses AI output into structured, machine-readable fields.  
  - **Filter Alerts Needed** – Identifies deals that need immediate attention.  
  - **Send Slack Alert** – Sends detailed alerts for high-risk or stalled deals.  
  - **Append or update row in sheet** – Logs analysis results into Google Sheets for reporting.  

## Why use this?  

- Automatically identify high-risk deals before they stall or fail  
- Give sales teams clear, data-driven next actions instead of raw CRM data  
- Improve forecasting accuracy with AI-powered probability scoring  
- Maintain a historical deal health log for audits and performance reviews  
- Reduce manual pipeline reviews while increasing response speed

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, HubSpot, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
