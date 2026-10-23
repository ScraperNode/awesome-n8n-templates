# 💬 Save at-risk churn customers with OpenAI DeepSeek, Airtable, Gmail, and Telegram

> ⚡ **6 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow receives churn requests via webhook, uses OpenAI (DeepSeek) plus Airtable customer data to generate a retention offer and draft email, notifies the team for high-risk cases via Telegram, logs cases to Airtable, and sends a monthly churn report by Gmail and Telegram.

## How it works
1. Receives a POST webhook request with customer cancellation details and normalizes fields like case ID, email, plan, MRR, and reason.
2. Validates that the request includes a customer email and cancellation reason, then alerts via Telegram and emails the team via Gmail if required fields are missing.
3. For valid requests, an OpenAI (DeepSeek) agent looks up the customer in Airtable and returns a JSON decision with risk level, recommended offer, and a drafted retention email.
4. Parses the agent’s JSON output and creates a new record for the churn case in an Airtable “Churn Cases” table.
5. If the case is high risk or requires human review, posts a detailed alert to Telegram and then emails the customer the drafted save offer via Gmail; otherwise it sends the standard save offer email directly.
6. On a monthly schedule, fetches open churn cases from Airtable, summarizes counts and at-risk MRR, uses OpenAI (DeepSeek) to write narrative highlights, then sends the report via Gmail and posts it to Telegram.

## Setup
1. Create Airtable tables named “Customers” and “Churn Cases”, then update the Airtable base ID/table names as needed and connect an Airtable personal access token.
2. Add an OpenAI API credential and confirm the DeepSeek model selection used for both the retention agent and the monthly report.
3. Connect your Gmail OAuth2 credential and update the recipient addresses and email subject/body text for invalid-request notifications, save-offer emails, and monthly reports.
4. Connect a Telegram bot credential and set the target chat ID for invalid-request alerts, high-value alerts, and monthly report posts.
5. Copy the webhook URL for the POST /churn/save endpoint and configure your app/form/billing system to send churn events with at least customer_email and reason (optionally plan and mrr).

## 🔗 Nodes Used

Airtable, Webhook, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
