# 📊 Simulate business decisions with Google Sheets, GPT-4.1 and Slack

> ⚡ **57 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow simulates business decision scenarios using Google Sheets data and AI analysis, generating what-if reports and recommendations for pricing, campaign, or hiring moves, and logs results to Google Sheets and Slack.

## How it works
1. Listens for incoming scenario requests via webhook or runs weekly on a schedule.
2. Prepares scenario details and validates the scenario type.
3. Fetches historical business data from Google Sheets.
4. Parses and summarizes historical data for scenario context.
5. Constructs an AI-ready prompt with scenario and historical context.
6. Uses an AI model (OpenAI or compatible) to simulate optimistic, realistic, and pessimistic outcomes, generating recommendations.
7. Formats the results into a structured simulation report.
8. Logs the simulation summary into a Google Sheets log and sends a notification to Slack.
9. Returns the full simulation report and recommendation to the original requester via the webhook.

## Setup
1. Add your Google Sheets API key and enter your historical and log sheet IDs in the relevant HTTP Request nodes.
2. Provide your OpenAI (or compatible AI) API credentials in the workflow setup.
3. Update the Slack webhook URL in the notification node for simulation alerts.
4. Populate your Google Sheet with relevant historical business data using the required structure.
5. If using the webhook, copy its URL and configure the scenario source to send requests to that endpoint.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
