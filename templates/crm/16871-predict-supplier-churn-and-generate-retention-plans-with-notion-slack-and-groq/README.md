# 🤝 Predict supplier churn and generate retention plans with Notion, Slack, and Groq

> ⚡ **16 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs weekly to pull supplier activity from Notion, engineer churn-risk features, and use Groq-hosted LLM prompts to classify supplier churn risk and generate retention plans. It updates each supplier record in Notion and posts a Slack alert only when a supplier is rated High risk.

## How it works
1. Runs every week on a schedule.
2. Retrieves all supplier records from a Notion database.
3. Calculates behavioral risk features such as PO trend, engagement score, and delivery/financial/contract-risk flags from the Notion fields.
4. Processes suppliers one at a time and sends the features to a Groq LLM to return structured JSON with churn risk level, risk score, confidence, and key drivers.
5. Sends the churn assessment to a second Groq LLM prompt to generate a structured retention plan with priority, recommended actions, suggested owner, and summary.
6. If the supplier’s churn risk is High, posts a formatted alert with drivers and recommended actions to a Slack channel.
7. Updates the supplier’s Notion page with the churn risk, risk score, key drivers, retention plan, and a “Last Evaluated” timestamp, then continues to the next supplier.

## Setup
1. Connect your Notion credentials and set the correct database ID, ensuring each page contains the fields referenced (PO counts, RFQ response rate, contract expiry days, delivery/quality/payment/dispute metrics, and the output fields like Churn Risk and Risk Score).
2. Add a Groq API credential (used as the language model for both AI prompts) and confirm the selected model is available in your Groq account.
3. Add a Slack OAuth2 credential and select the target channel for High-risk alerts.
4. Review the schedule timing (weekly, Monday at 09:00) and adjust it to match your monitoring cadence.
5. (Optional) Tune the risk thresholds and scoring logic in the feature-engineering code and the AI prompt instructions to fit your procurement definitions.

## Additional info
## How To Customize Nodes

* **Adjusting Risk Rules:** Modify the JavaScript in the **Compute Supplier Risk Features** node to change what constitutes a "delivery risk" or "financial stress" (e.g., changing the payment delay threshold from 30 to 45 days).
* **Scheduling:** The **Start Workflow** node is fully adjustable. While set to weekly, you can change this to daily for high-velocity procurement environments.
* **AI Model Swapping:** In the **AI Churn Risk Predictor** and **Retention Strategy** nodes, you can select different Groq-supported LLMs based on your preference for speed versus reasoning depth.


## Add‑ons

* **Automated Vendor Meeting Scheduler:** Add a Google Calendar node to book a "Relationship Review" once a high-risk churn is detected.
* **ERP Integration:** Replace the Notion "Fetch" node with a database node (PostgreSQL/MySQL) to pull live data directly from your ERP.
* **Dashboarding:** Connect a Google Sheets node to log every weekly run and create a long-term trend chart of your total supply chain risk.


## Use Case Examples

* **Manufacturing Continuity:** Identifying when a key raw-material supplier is showing signs of financial stress before they stop production.
* **SaaS Vendor Management:** Monitoring engagement with software vendors to ensure you aren't paying for tools that are no longer being supported.
* **Logistics Reliability:** Tracking freight forwarder performance to shift volumes to more reliable partners before a peak shipping season.
* **Contract Renewal Cycles:** Flagging suppliers 60 days before expiry who also have low engagement scores to prepare for tough negotiations.
* **Strategic Sourcing:** Using churn scores to identify which categories need a new RFP (Request for Proposal) to be launched.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Workflow fails at Code node** | Missing numeric data in Notion. | Ensure all numeric fields in Notion have a value (even if it's 0) to avoid "null" errors. |
| **AI Output is garbled** | Prompt/Parser mismatch. | Verify the **Parse Churn Prediction Output** schema matches the JSON format requested in the prompt. |
| **Slack alerts not sending** | IF-Node routing. | Check if the supplier is actually being classified as "High" risk; otherwise, the alert is skipped by design. |
| **Notion Update fails** | Property names don't match. | Double-check that your Notion property names (e.g., "Churn Risk") match the keys in the Update node exactly. |
| **Rate Limit Errors** | Too many suppliers at once. | Increase the time in the **Rate Limit** (Wait) node to give the Groq API more room to breathe. |


## Need Help?

Building a predictive supply chain requires precision. If you need assistance mapping your specific procurement data to this workflow, or if you want to extend this system with custom AI prompts and ERP integrations, our [n8n workflow developers](https://www.weblineglobal.com/hire/n8n-developers/) are ready to assist.

## 🔗 Nodes Used

Slack, Notion, Basic LLM Chain, Structured Output Parser, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
