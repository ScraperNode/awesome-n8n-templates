# 🤝 Rescue at-risk HubSpot deals using Google Gemini and Slack reports

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/VoUdAl2f2KE

This workflow runs hourly to scan HubSpot deals for risk signals, uses Google Gemini to generate a diagnosis and follow-up email draft, writes the findings back to HubSpot as notes/tasks, and posts a prioritized rescue report to Slack.

## How it works
1. Runs every hour on a schedule trigger.
2. Pulls all HubSpot deals and scores them to identify open deals at risk based on inactivity, overdue next steps, and close-date pressure while skipping deals already audited today.
3. Processes at-risk deals in batches, fetching the most recent HubSpot notes and CRM emails for each deal to build a short activity timeline.
4. Sends the deal context to Google Gemini through an AI agent to classify the risk, explain the situation, and draft a rep-approved follow-up email.
5. Updates the HubSpot deal description with a “Deal Rescue Audit” block, then creates a HubSpot note and a prioritized follow-up task associated with the deal.
6. Compiles all flagged deals into a single Slack message summarizing total pipeline at risk and the top deal recommendations, and posts it to the selected Slack channel.

## Setup
1. Connect HubSpot OAuth2 credentials with access to deals, notes, tasks, and (optionally) CRM emails (the workflow continues if email scope is missing).
2. Add Google Gemini (PaLM) API credentials for the AI agent and keep the structured JSON output schema as-is.
3. Add Slack OAuth credentials and set the target channel for the rescue report message.
4. Review/adjust the risk scoring thresholds, closed-stage detection, and the 24-hour deduplication behavior that checks for the audit block in the deal description.

## 🔗 Nodes Used

HTTP Request, Slack, HubSpot, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
