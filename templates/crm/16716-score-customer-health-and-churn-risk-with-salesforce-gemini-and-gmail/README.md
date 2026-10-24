# 🤝 Score customer health and churn risk with Salesforce, Gemini, and Gmail

> ⚡ **50 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow runs every minute to pull accounts from Salesforce, enrich each customer with order, payment, support, and marketing data via HTTP APIs, analyze the combined profile with Google Gemini, then update the Salesforce account and send Gmail alerts for high-risk customers and execution outcomes.

## How it works
1. Runs every minute on a schedule and retrieves up to five Salesforce Account records.
2. Processes accounts in batches and initializes a retry counter to control fault-tolerant data fetching.
3. Fetches customer order data via an HTTP API, retrying up to three times with a wait delay and falling back to a backup HTTP endpoint if needed.
4. Fetches payments, support tickets, and marketing engagement for the same customer via HTTP API requests and normalizes everything into a single customer profile.
5. Sends the unified customer profile to Google Gemini to generate a JSON assessment with health score, churn risk, customer type, a summary, and a recommended action.
6. Parses the AI output and emails a high-risk alert via Gmail when the churn risk equals HIGH.
7. Routes by customer type, updates the Salesforce Account description with the AI summary, then logs the result and emails a success notification via Gmail.
8. If any workflow execution fails, sends a Gmail error notification with execution details.

## Setup
1. Connect Salesforce OAuth2 credentials and ensure the workflow has permission to read and update Account records.
2. Connect a Google Gemini (PaLM) API credential for the Gemini model used in the customer intelligence step.
3. Connect Gmail OAuth2 credentials and fill in the recipient email address(es) for the high-risk, success, and error notification emails.
4. Review and replace the HTTP API endpoints (currently dummyjson.com) with your ERP/orders, payments, support, and marketing systems, ensuring they accept the customer Id parameter.
5. Adjust the schedule interval, batch size, and retry limits to match your data volume and external API rate limits.

## 🔗 Nodes Used

HTTP Request, Salesforce, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
