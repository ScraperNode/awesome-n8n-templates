# 🤝 Diagnose customer churn risk from PostgreSQL data with Gemini and Slack alerts

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/MTHAZzOZCnQ?si=0k_06-RgGYHtC08v

This workflow runs daily to score customer “relationship drift” from Postgres metrics, uses Google Gemini to generate a structured diagnosis for medium/high-risk accounts, stores the assessment back in Postgres, and posts actionable alerts to Slack.

## How it works
1. Runs on a daily 07:00 schedule (or manually) to start the drift check.
2. Pulls customer drift feature data from a Postgres view and calculates a rule-based risk score, level, and supporting signals for each customer.
3. Sends only customers above the configured threshold to Postgres to fetch recent support tickets and communications context.
4. Uses Google Gemini (via a LangChain agent) to produce a structured drift diagnosis, evidence, and recommended next action, then validates that the AI output cites known rule signal IDs.
5. Merges AI-diagnosed and non-AI results, builds a consolidated record (including Slack message text and CRM payloads), and assigns an urgency and due date.
6. Writes each assessment to a Postgres drift_assessments table and posts a Slack alert for actionable medium/high drift cases.

## Setup
1. Configure Postgres credentials and ensure the required objects exist (v_customer_drift_features view, support_tickets and communications tables, and the drift_assessments table/columns used by the INSERT).
2. Add a Google Gemini (Google PaLM) API credential for the LangChain chat model used to generate the drift diagnosis.
3. Add a Slack credential and set the target channel ID for where drift alerts should be posted.
4. Review or adjust the cron schedule (currently 07:00 daily) and the rule thresholds inside the drift scoring code if you need different sensitivity.

## 🔗 Nodes Used

Postgres, Slack, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
