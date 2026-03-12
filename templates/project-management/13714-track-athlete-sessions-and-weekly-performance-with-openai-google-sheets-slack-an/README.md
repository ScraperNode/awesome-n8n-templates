# 📋 Track athlete sessions and weekly performance with OpenAI, Google Sheets, Slack, and email

> ⚡ **18 views** · 📋 [Project Management](../)

## Description

## How It Works
This workflow automates athlete performance monitoring through two parallel pipelines: real-time session analysis triggered by training form submissions, and scheduled weekly performance summaries. Designed for sports coaches, athletic trainers, and performance analysts, it eliminates manual data aggregation and ensures threshold breaches and weekly trends are communicated instantly. A training session form submission stores the record to Google Sheets, fetches historical data, and combines both inputs for a Performance Analysis Agent. OpenAI analyses the combined data, updates the sheet with insights, then checks performance thresholds—triggering Slack alerts or email notifications on breach. In parallel, a weekly schedule fetches all athlete data, groups by athlete, and passes to a Weekly Summary Agent that distributes summaries via both Slack and email.

## Setup Steps
1. Configure Training Session Form fields to match athlete and session data schema.
2. Connect Google Sheets credentials to Store, Fetch, and Update Record nodes.
3. Add OpenAI API credentials to Performance Analysis and Weekly Summary Agent nodes.
4. Configure Slack credentials and set coaching team alert and summary channels.
5. Add Gmail/SMTP credentials to Send Email Alert and Weekly Summary Email nodes.
6. Define performance threshold values in the Check Performance Threshold node.
 
## Prerequisites
- Google Sheets with service account credentials
- Slack workspace with bot token
- Gmail or SMTP credentials
## Use Cases
- Real-time performance threshold alerts for elite athlete training programmes
## Customization
- Replace OpenAI with Anthropic Claude for analysis and summary agents
## Benefits
- Automates session analysis and insight storage immediately after each training entry

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
