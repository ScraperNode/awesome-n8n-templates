# 🤝 Flag anomalous B2B orders with Google Sheets, Gemini, and Slack

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/f7Kh1q_xL9I

This workflow runs every 15 minutes to review pending distributor orders stored in Google Sheets, enriches them with customer, product, credit, returns, and order-history stats, uses Google Gemini to assess anomaly risk, updates the order status, and posts high-risk cases to Slack.

## How it works
1. Runs every 15 minutes on a schedule.
2. Pulls the first order marked as “Pending” from the Orders tab in Google Sheets.
3. Looks up the matching customer profile, order history, product details, credit position, and recent returns from related Google Sheets tabs and computes historical averages and maximums.
4. Builds a consolidated context object (order, customer, history ratios, credit utilization, and returns metrics) and sends it to Google Gemini to produce a structured risk assessment.
5. Updates the order row in Google Sheets with the AI-derived risk level, risk score, risk reason, and sets the status to Approved or Under Review.
6. If the order requires review, appends a new case to the Review_Cases tab and sends a formatted alert to the configured Slack channel.
7. Appends an audit entry to the Audit_Log tab in Google Sheets with the model name and the final decision details.

## Setup
1. Create a Google Sheets document with tabs named Orders, Customers, Order_History, Products, Credit, Returns, Review_Cases, and Audit_Log, and ensure the columns referenced in the workflow (for example Order_ID, Status, Customer_ID, SKU, Quantity, Order_Value) exist.
2. Add Google Sheets Service Account credentials in n8n and share the target spreadsheet with the service account email.
3. Set your Google Sheet ID and Slack channel ID in the Config step, and adjust the currency symbol if needed.
4. Add a Slack OAuth credential with permission to post messages to the target channel.
5. Add Google Gemini (Google PaLM) API credentials for the Gemini chat model used by the AI Agent.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, Structured Output Parser, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
