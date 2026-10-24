# 🧾 Send daily CFO invoice health reports with Google Sheets, Groq, Gmail and Slack

> ⚡ **3 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This daily workflow pulls invoice and KPI history data from Google Sheets, calculates operational KPIs and trends, generates a CFO-style executive summary with Groq Llama 3, then logs results back to Google Sheets and sends either a Gmail report or a Slack escalation based on a health score.

## How it works
1. Runs every day at 9 AM on a schedule trigger.
2. Reads active invoice rows from Google Sheets and calculates current KPIs, bottlenecks, SLA-risk invoices, and an overall finance health score.
3. Fetches KPI history from Google Sheets and compares the latest snapshot to compute trend percentages and an overall direction summary.
4. Produces a backlog/SLA risk assessment from the current KPIs and trends, then sends the combined dataset to a Groq Llama 3 agent to generate a CFO-level JSON executive assessment.
5. Cleans and parses the AI response into structured fields, then sets a Looker Studio dashboard URL for reporting.
6. Appends the daily KPI snapshot and updates a dashboard sheet in Google Sheets to keep the Looker Studio data source current.
7. If the health score is above 60 it formats an HTML email and sends the report via Gmail, otherwise it posts a critical alert to a Slack channel.

## Setup
1. Connect Google Sheets credentials and update the spreadsheet ID and sheet tabs for active invoices, KPI history, KPI snapshot, and dashboard in all Google Sheets steps.
2. Add a Groq API credential and confirm the selected model (llama-3.3-70b-versatile) is available in your Groq account.
3. Add Gmail credentials and set the recipient(s) for the emailed CFO report.
4. Add Slack credentials and select the channel to receive critical alerts.
5. Replace the Looker Studio report URL with your own dashboard link and ensure your dashboard reads from the same Google Sheets “dashboard” tab that the workflow updates.

## Additional info
## How To Customize Nodes

* **Trigger Schedule:** Open the `Trigger: Daily at 9 AM` node to change the frequency. You can set it to run weekly, hourly, or at the close of business.
* **KPI Calculations:** The logic for the Health Score is located in the `Calculate Current KPIs & Bottlenecks` code node. If you want to penalize exception rates more heavily, you can easily adjust the math multipliers within that JavaScript block.
* **AI Instructions:** Open the `Generate CFO Executive Summary` node. You can edit the system prompt to change the AI's tone, ask it to focus specifically on vendor relationships, or change the length of the summary.
* **Thresholds:** Open the `check health score` IF node. Currently, it triggers a critical alert if the score is 60 or below. You can change this number based on your organization's risk tolerance.


## Add‑ons

To extend the power of this workflow, consider adding these features:

* **ERP Integration:** Replace the first Google Sheets node with a connector for Xero, QuickBooks, or NetSuite to pull live data directly from your accounting software.
* **SMS Escalations:** Add a Twilio node after the Slack alert so that severe SLA breaches text the Finance Director directly.
* **PDF Generation:** Add an HTML-to-PDF conversion node to attach a downloadable version of the report to the daily email.


## Use Case Examples

* **Daily AP Health Monitoring:** Automatically wake up every morning, check the status of all pending invoices, and provide a quick snapshot to the team before they start their day.
* **Automated Bottleneck Detection:** Stop wondering why payments are late. Use the workflow to explicitly name the department or specific manager who is holding up the highest volume of approvals.
* **Executive Finance Briefings:** Provide the CFO with an AI-written, jargon-free summary of the entire procurement landscape without requiring an analyst to spend three hours building a PowerPoint.
* **SLA Breach Forecasting:** Predict which pending invoices are in danger of violating vendor payment terms, allowing the team to fast-track them before late fees are applied.
* **Audit Trail Generation:** Maintain an automated daily snapshot of process health to show auditors how exception rates and cycle times have improved over the fiscal year.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| --- | --- | --- |
| **Workflow stops at Google Sheets nodes** | Missing permissions or incorrect Document ID. | Verify that the Google account authenticated in n8n has "Editor" access to the target sheet. Double-check that the `documentId` has been updated in all four nodes. |
| **AI Node throws a JSON parsing error** | The LLM hallucinated markdown formatting or exceeded token limits. | The workflow includes a `Parse AI Node` to self-heal formatting errors. If it fails completely, check your Groq API limits or slightly reduce the amount of historical data being passed to the prompt. |
| **Health score is showing as negative** | Extreme backlog or exception rates skewing the math. | Open the `Calculate Current KPIs` code node and adjust the penalty weights for pending invoices and cycle times to better reflect your business scale. |
| **Emails are sending, but Slack alerts are missing** | The health score is above 60, or Slack permissions are missing. | The workflow only triggers Slack alerts for scores <= 60. To test Slack, temporarily change the IF node condition to "> 0". If it still fails, ensure your n8n Slack app is invited to the target channel. |


## Need Help?

Building and optimizing intelligent automation pipelines can sometimes require a bit of custom tailoring to perfectly fit your business rules. If you need help setting up this workflow, configuring complex add-ons, integrating it with your specific ERP system, or building entirely new automation solutions from scratch, we are here for you!

Please reach out to **WeblineIndia**. Our [team of expert n8n developers](https://www.weblineglobal.com/hire/n8n-developers/) and automation architects would be happy to help you turn your business processes into seamless, automated realities.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, QuickBooks Online, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
