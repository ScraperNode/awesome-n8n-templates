# 🔒 Summarize daily security logs with OpenAI and send briefings via WhatsApp and email

> ⚡ **33 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick Overview
This workflow pulls the last 24 hours of aggregated security logs from a SIEM API, normalizes and deduplicates events, uses OpenAI to generate a daily risk briefing with optional escalation gating, and sends a short summary via WhatsApp and a detailed HTML report via email.

## How it works
1. Runs every morning on a schedule (or manually for testing).
2. Queries your SIEM/log aggregator API for events from the configured systems over the last 24 hours.
3. Normalizes mixed log formats, categorizes events, collapses near-duplicates, scores severity, and trims to the most notable events.
4. Uses OpenAI to produce a JSON briefing with an executive summary, findings, recommended actions, overall risk level, and an escalationRequired flag.
5. Builds two outputs from the AI result: a short WhatsApp message and a detailed HTML email with category and top-IP breakdowns.
6. If escalation is required, waits for a security lead acknowledgment before proceeding.
7. Sends the daily briefing to the configured recipient via WhatsApp Business Cloud API and via SMTP email.

## Setup
1. Provide an HTTP Header Auth credential for your SIEM/log aggregator API and update the logAggregatorApiUrl and query parameters as needed for your platform.
2. Add OpenAI credentials for the Chat Model used to generate the briefing.
3. Configure WhatsApp Business Cloud API credentials and set the WhatsApp phone number ID and recipient phone number in the config.
4. Configure SMTP email credentials and set the from/to addresses used for the daily email.
5. Adjust the schedule time, lookback window (timeRangeHours), and notableEventLimit to match your reporting needs.

## 🔗 Nodes Used

Send Email, HTTP Request, WhatsApp Business Cloud, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
