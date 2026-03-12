# 📊 Automated business KPI insights with GPT-4, MSSQL, analytics & multi-channel alerts

> ⚡ **730 views** · 📊 [Market Research & Insights](../)

## Description

## WORKFLOW OVERVIEW

This workflow is an AI-powered business intelligence agent designed for founders and business owners.
It automatically collects key business metrics, calculates performance KPIs, applies decision logic, uses AI reasoning, and sends clear, actionable notifications — without dashboards or manual reports.

## Key Features:

✅ Aggregates multiple data sources (MSSQL, Google Analytics, Google Sheets)
✅ Calculates critical KPIs: ROAS, CAC, Revenue & User Growth
✅ Applies rule-based decision logic for business risk and opportunity detection
✅ AI-powered reasoning: summarizes insights and recommends actions
✅ Multi-channel notifications: Email, WhatsApp, Slack, Telegram
✅ Fully automated daily execution via Cron trigger
✅ Enterprise-ready: error handling, structured data, KPI validation

## Setup & Requirements:


- API access to data sources (MSSQL, Google Analytics, Google Sheets)
- OpenAI or Google Gemini API for AI reasoning
- Messaging integration: Gmail, Twilio (WhatsApp), Slack, Telegram
- 
## Workflow Flow:

- Cron Trigger – runs daily at a chosen time
- Data Collection – revenue, users, marketing spend, website analytics
- Merge Node – combines all data sources
- Function Node – consolidates into a single JSON object
- KPI Calculation – calculates ROAS, CAC, growth rates
- Business Logic Engine – identifies risks and opportunities
- AI Reasoning Agent – summarizes insights, suggests actions
- Notification Formatter – builds founder-friendly message
- Notification Delivery – sends via WhatsApp, Email, Slack, or Telegram

## Example Data Formation

These data below Getting from all different channels.

`{
  "revenue": 4290,
  "registeredUsers": 20,
  "totalUsers": 3,
  "adSpend": 800
}`

Applies rule-based logic to detect potential risks or opportunities

`{
  "ROAS": 5.36,
  "CAC": 40,
  "agentStatus": "normal",
  "agentPriority": "low",
  "insights": ["Marketing campaigns are performing very well"]
}`

## Workflow Highlights

Fully automated, runs daily without human intervention
Integrates multiple business data sources
Converts raw data into KPIs for actionable insight
Applies both rule-based logic and AI reasoning
Generates concise, human-friendly notifications
Sending notification to different channels.

## 🔗 Nodes Used

Send Email, Google Sheets, Microsoft SQL, Google Analytics, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
