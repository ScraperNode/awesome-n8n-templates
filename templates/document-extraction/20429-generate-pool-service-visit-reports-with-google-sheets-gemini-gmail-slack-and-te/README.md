# 🔬 Generate pool service visit reports with Google Sheets, Gemini, Gmail, Slack, and Telegram

> ⚡ **3 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow collects pool service visit notes via an n8n Form, looks up customer and history in Google Sheets, uses Google Gemini to structure the notes into a report, logs visits and work orders back to Sheets, and sends alerts via Gmail, Slack, and Telegram.

## How it works
1. Receives a pool service visit submission from an n8n Form with customer ID, technician notes, and optional water readings.
2. Looks up the customer in Google Sheets and sends a Telegram alert if the customer ID is unknown.
3. Pulls the customer’s recent visit history from Google Sheets and combines it with the new readings to generate rule-based flags for out-of-range chemistry and high filter pressure.
4. Sends the combined context to Google Gemini to extract structured fields (condition, issues, actions, follow-up, summaries) and validates the response against a strict JSON schema.
5. Builds a visit record with an HTML customer report, calculates urgency, priority, and next visit date, and appends the visit to the Google Sheets Visits table (or logs a manual-review record and posts a Slack alert if the AI step fails).
6. If follow-up is needed, creates a work order in the Google Sheets Work Orders table and updates the customer record with the latest status and next visit date.
7. If the visit is urgent, posts an operations alert to Slack, and if the report needs manager approval it emails an approve/hold link via Gmail and waits for the decision before either sending the customer report email or marking it as held.
8. Runs every morning (Mon–Sat) to pull open work orders from Google Sheets, builds a daily digest, and sends it to Telegram.

## Setup
1. Create a Google Sheets spreadsheet with Customers, Visits, and Work Orders sheets (and matching column names used by this workflow), then add a Google Service Account credential with access to the spreadsheet and update the document ID if needed.
2. Add a Google Gemini (Google PaLM) API credential and keep the model set to `models/gemini-3.1-flash-lite` (or update it consistently across the workflow).
3. Add a Gmail OAuth2 credential, set the manager approval recipient email, and ensure the sender name and customer email field mapping match your business requirements.
4. Add Slack and Telegram credentials, then replace `YOUR_TELEGRAM_CHAT_ID` and select the correct Slack channel for urgent alerts and AI-failure notifications.
5. Edit the configuration constants in the code steps (company name/phone/brand color, chemistry thresholds, PSI limits, plan intervals, and Sunday skipping) to match your operating standards.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
