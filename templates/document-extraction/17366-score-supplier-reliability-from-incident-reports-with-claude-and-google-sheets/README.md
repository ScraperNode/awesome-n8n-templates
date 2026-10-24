# 🔬 Score supplier reliability from incident reports with Claude and Google Sheets

> ⚡ **7 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives supplier incident reports via webhook, uses Anthropic Claude to classify severity and root cause, calculates an explainable reliability score, logs each incident to Google Sheets, and sends SendGrid email alerts when a supplier crosses into escalation tiers.

## How it works
1. Receives a POST webhook incident report with supplier details, SLA terms, and recent incident/booking history.
2. Uses Anthropic Claude to extract structured incident details (severity, root cause, SLA breach status, and a neutral summary) from the free-text report.
3. Routes low-confidence or unclear reports to a “Needs Manual Review” webhook response instead of scoring them.
4. Calculates a new 0–100 reliability score, score change, and tier using a weighted formula based on severity, SLA breach, root cause, and 90-day incident rate.
5. Uses Anthropic Claude to generate a procurement recommendation, reasoning, corrective actions, and whether a contract review is required.
6. Appends the incident and scorecard summary to a SupplierScorecard tab in Google Sheets.
7. If the supplier is “At Risk” or “Critical / Non-Compliant” (or the recommendation is Probation/Terminate), sends escalation emails via SendGrid to internal procurement and the supplier contact, then responds to the webhook with the escalation result; otherwise, it responds with a routine log confirmation.

## Setup
1. Add Anthropic API credentials for both Claude chat model steps.
2. Create/choose a Google Sheets spreadsheet with a SupplierScorecard sheet and replace YOUR_SHEET_ID in the Google Sheets append request, then connect a Google OAuth2 credential with access to that spreadsheet.
3. Add a SendGrid API key and replace YOUR_SENDGRID_API_KEY in both SendGrid HTTP requests.
4. Update the internal recipient (procurement@youragency.com) and the sender addresses used in the SendGrid payloads to match your organization.
5. Activate the workflow and copy the webhook URL into your incident source system, then POST a test incident to verify logging, scoring, and escalation paths.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
