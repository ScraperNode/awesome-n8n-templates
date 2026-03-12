# 🤝 Predict customer churn with AI analysis of HubSpot and Google Sheets data

> ⚡ **1,294 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Who it’s for
Built for Customer Success and Account Management teams focused on proactive retention. This workflow helps you automatically identify at-risk customers – before they churn – by combining CRM, usage, and sentiment data into one actionable alert.

## What it does
This end-to-end workflow continuously monitors customer health by consolidating data from HubSpot and Google Sheets.
Here’s how it works:
* Fetch deals from HubSpot.
* Collect context — linked support tickets and feature usage from a Google Sheet.
* Run sentiment analysis on the tickets to generate a customer health score.
* Evaluate risk — an AI agent reviews deal age, sentiment score, and usage trends against predefined thresholds.
* Send alerts — if churn risk is detected, it automatically sends a clear, data-driven email to the responsible team member with next-step recommendations.

## How to set it up
To get started, configure your credentials and parameters in the following nodes:

1.  **Credentials:**
    * **HubSpot:** Connect your account (`HubSpot: Get All Deals`).
    * **LLM Model:** Add credentials for your preferred provider (`Config: Set LLM for Agent & Chains`).
    * **Google Sheets:** Connect your account (`Tool: Get Feature Usage from Sheets`).
    * **Email:** Set up your SMTP credentials (`Email: Send Churn Alert`).
2.  **Tool URLs:**
    * In **Tool: Calculate Sentiment Score**, enter the **Webhook URL** from the `Trigger: Receive Tickets for Scoring` node within this same workflow.
    * In **Tool: Get HubSpot Data**, enter the **Endpoint URL** for your MCP HubSpot data workflow. *(Note: This tool *does* call an external workflow)*.
3.  **Google Sheet:**
    * In **Tool: Get Feature Usage from Sheets**, enter the Document ID for your own Google Sheet.
4.  **Email Details:**
    * In **Email: Send Churn Alert**, change the `From` and `To` email addresses.

## Requirements
* HubSpot account with Deals API access
* LLM provider account (e.g. OpenAI)
* Google Sheets tracking customer feature usage
* n8n with LangChain community nodes enabled
* A separate n8n workflow set up to act as an MCP endpoint for fetching HubSpot data (called by `Tool: Get HubSpot Data`).

## How to customize it
Tailor this workflow to match your business logic:
* **Scoring logic:** Adjust the JavaScript in the `Code: Convert Sentiment to Score` node to redefine how customer scores are calculated.
* **Alert thresholds:** Update the prompt in the `AI Chain: Analyze for Churn Risk` node to fine-tune when alerts trigger (e.g. deal age, score cutoff, or usage drop).
* **Data sources:** Swap HubSpot or Google Sheets for your CRM or database of choice — like Salesforce or Airtable.

✅ **Outcome:** A proactive customer health monitoring system that surfaces risks before it’s too late — keeping your team focused on prevention, not firefighting.

## 🔗 Nodes Used

Send Email, Webhook, HubSpot, Markdown, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
