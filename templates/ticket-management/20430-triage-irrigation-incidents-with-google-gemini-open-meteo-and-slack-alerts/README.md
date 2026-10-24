# 🎫 Triage irrigation incidents with Google Gemini, Open-Meteo, and Slack alerts

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow ingests irrigation telemetry via a webhook, enriches it with hyperlocal weather from Open-Meteo, uses Google Gemini to classify incident severity and generate remediation steps, then posts a work-order style alert to Slack and returns a structured response to the caller.

## How it works
1. Receives irrigation telemetry (zone, moisture, pump state, last run time, and coordinates) via an HTTP POST webhook.
2. Normalizes and fills missing sensor fields with defaults, then calls the Open-Meteo API to fetch recent and forecast precipitation and temperature for the provided location.
3. Combines sensor and weather context into a prompt and sends it to Google Gemini (Gemini 3.1 Flash Lite) to produce a structured incident assessment (severity, title, root cause, SLA, action items, and escalation flag).
4. Parses and augments the AI output by normalizing severity/SLA values and generating a unique ticket ID with timestamps and the original telemetry context.
5. Routes the incident based on severity (CRITICAL, HIGH, ADVISORY, NORMAL) to set the appropriate dispatch channel, audience, urgency, and work order status.
6. Builds a work-order payload (including SLA deadline) and posts a formatted incident alert message to a Slack channel.
7. Responds to the original webhook request with the final structured ticket payload and processing status.

## Setup
1. Add a Google Gemini (PaLM) API credential and ensure the workflow is configured to use the Gemini 3.1 Flash Lite model.
2. Add Slack API credentials and select the target channel where incident alerts should be posted.
3. Copy the webhook URL from the webhook trigger and configure your telemetry source to POST sensor readings and coordinates to it.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
