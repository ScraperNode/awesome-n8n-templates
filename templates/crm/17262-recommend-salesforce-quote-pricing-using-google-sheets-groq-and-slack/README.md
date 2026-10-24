# 🤝 Recommend Salesforce quote pricing using Google Sheets, Groq, and Slack

> ⚡ **29 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow receives Salesforce Quote events via a webhook, enriches them with Salesforce Opportunity and Account data, benchmarks the deal against historical outcomes stored in Google Sheets, uses Groq (LangChain agent) to generate a pricing recommendation, then updates the Quote in Salesforce and notifies a Slack user.

## How it works
1. Receives a POST webhook request containing a Salesforce Quote payload (including the Opportunity ID and Quote ID).
2. Retrieves the related Opportunity and Account records from Salesforce and normalizes key deal attributes like amount, stage, segment, industry, and deal size.
3. Loads historical deal records from Google Sheets and selects the most similar past deals based on deal size, segment, and industry.
4. Computes pricing benchmarks from the matched history, including win rate, average discounts for won vs. lost deals, and a recommended discount range.
5. Sends the current deal context and benchmark metrics to a Groq-hosted LLM (via a LangChain agent) to produce a structured JSON recommendation with discount, final price, win probability, confidence, risk level, and justification.
6. Updates the Salesforce Quote via the Salesforce REST API with the recommended fields and posts a detailed pricing summary to a Slack user.

## Setup
1. Configure the webhook endpoint URL in your Salesforce Quote event source so it sends POST requests with the required fields (at minimum quoteId and opportunityId).
2. Add Salesforce OAuth2 credentials and replace {DOMAIN_NAME} in the Salesforce REST API URL with your Salesforce instance domain.
3. Add Google Sheets OAuth2 credentials and ensure the referenced spreadsheet contains the expected columns (e.g., DealSize, Segment, Industry, Outcome, DiscountGiven, FinalPrice).
4. Add a Groq API credential for the LLM used by the LangChain agent and adjust the model if needed.
5. Add Slack OAuth2 credentials and set the target user/channel for the pricing notification.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Salesforce, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
