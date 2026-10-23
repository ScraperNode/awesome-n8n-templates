# 🤝 Score supplier reliability from incidents with Claude, Google Sheets, and SendGrid

> ⚡ **7 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives supplier incident reports via webhook, uses Anthropic Claude to classify the incident and generate a recommendation, calculates an explainable reliability score, logs every incident to Google Sheets, and escalates high-risk suppliers by sending emails through SendGrid.

## How it works
1. Receives a POST webhook request containing a supplier incident report and recent performance metrics.
2. Uses Anthropic Claude to extract structured incident details such as severity, root cause, SLA breach status, and a short summary.
3. Routes low-confidence or unclear reports to a “Needs Manual Review” webhook response instead of scoring them.
4. Calculates an updated 0–100 supplier reliability score and tier using a rule-based formula that applies severity, SLA, root-cause, and incident-rate penalties.
5. Uses Anthropic Claude to generate a procurement-focused recommendation, reasoning, and corrective actions based on the incident and updated score.
6. Appends a scorecard row for the incident to a Google Sheets SupplierScorecard tracker via the Google Sheets API.
7. Sends escalation and supplier-improvement emails via SendGrid when the tier is At Risk/Critical or the recommendation is Probation/Terminate, then responds to the webhook with either an escalated or routine JSON result.

## Setup
1. Add Anthropic credentials for the two Claude chat model steps.
2. Configure Google Sheets OAuth2 credentials and replace YOUR_SHEET_ID and the target range (SupplierScorecard tab) used by the Google Sheets API append request.
3. Add your SendGrid API key by replacing YOUR_SENDGRID_API_KEY in both email requests and set the “from”/recipient email addresses (including procurement@youragency.com and supplier-quality@youragency.com).
4. Activate the workflow and copy the webhook URL into your incident source system so it can POST incident payloads to /supplier-incident-inbound.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
