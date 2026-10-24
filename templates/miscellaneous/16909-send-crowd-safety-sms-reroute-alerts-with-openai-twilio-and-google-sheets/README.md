# 🔧 Send crowd safety SMS reroute alerts with OpenAI, Twilio, and Google Sheets

> ⚡ **20 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow ingests crowd density and incident reports via webhook or a 5‑minute schedule, assesses risk with Python thresholds, uses OpenAI to generate a short rerouting recommendation, then sends an SMS via Twilio and logs each alert to a Google Sheets heatmap tracker.

## How it works
1. Triggers when a POST request hits the n8n webhook or every 5 minutes on a schedule.
2. Normalizes incoming fields (location, crowd density, safety score, incidents, traveler contact, and preferences) and fills in defaults when values are missing.
3. Calculates risk level in Python based on configurable thresholds for high density, incident count, and low safety score.
4. Continues only for high-risk items and pauses briefly before the AI call.
5. Uses OpenAI (via an AI agent) to generate a personalized rerouting suggestion under 150 words from the live data and traveler preferences.
6. Sends the rerouting alert to the traveler via Twilio SMS and appends the alert details and reroute text to a Google Sheets log via the Google Sheets API.

## Setup
1. Add an OpenAI API credential and select the model in the OpenAI Chat Model connection.
2. Configure Twilio credentials (Account SID and Auth Token), replace YOUR_TWILIO_ACCOUNT_SID in the Twilio API URL, and set an SMS-capable Twilio “From” number.
3. Enable Google Sheets API access, replace YOUR_HEATMAP_SHEET_ID, and ensure Sheet1 exists with columns that match the appended values (date, risk area, location, risk level, density, status, timestamp, reroute text).
4. If using the webhook trigger, copy the webhook URL from n8n and configure your crowd/incident data source to POST the expected fields (location, crowdDensity, safetyScore, optional incidents and travelerContact).

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
