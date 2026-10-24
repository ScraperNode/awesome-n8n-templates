# ⚒️ Analyze machine downtime and OEE with Google Sheets, OpenAI and WhatsApp

> ⚡ **93 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow captures per-shift machine production and downtime data via an n8n Form or an authenticated webhook, calculates OEE and TPM Six Big Losses from Google Sheets data, uses OpenAI for structured root-cause analysis, then sends a WhatsApp report with a Pareto chart and updates maintenance work orders.

## How it works
1. Accepts shift production and downtime entries from an n8n Form and/or an authenticated webhook from an IoT/PLC gateway, normalizes and validates the payload, and upserts it into a Google Sheets “Shift Log” tab.
2. Runs on a schedule 15 minutes after each shift end to identify the completed shift and load the “Machine Master” and “Shift Log” data from Google Sheets.
3. Calculates plant and per-machine Availability, Performance, Quality, and OEE, breaks downtime into the TPM Six Big Losses, and flags critical machines and anomalies against a rolling 7-day baseline.
4. If no shift data is found, sends a WhatsApp alert to the plant head listing missing machine logs.
5. If shift data is found, sends the shift KPIs to an OpenAI-powered agent that queries Google Sheets “OEE History” and “Maintenance Tickets” to generate a structured RCA report with assignable actions.
6. Builds a WhatsApp-ready summary plus a QuickChart Pareto image URL, sends the report and chart to the plant head via WhatsApp, and appends per-machine KPI rows to the Google Sheets “OEE History” tab.
7. For each critical machine, looks up open tickets in Google Sheets and either updates the existing ticket or creates a new work order in the “Maintenance Tickets” tab, then sends a combined WhatsApp escalation message to maintenance.

## Setup
1. Create a Google Sheets workbook with tabs named “Machine Master”, “Shift Log”, “OEE History”, and “Maintenance Tickets”, and populate “Machine Master” with machine_id (and optional line, ideal_cycle_time_sec, and active flags).
2. Add Google Sheets credentials and replace all REPLACE_WITH_GOOGLE_SHEET_ID values with your spreadsheet ID across the workflow.
3. Add an OpenAI credential for the Chat Model used by the AI agent.
4. Add WhatsApp Business Cloud credentials, set your phoneNumberId, and fill in the plant head and maintenance recipient phone numbers in the shift configuration.
5. If using the IoT/PLC feed, configure header authentication for the webhook and point your gateway to the webhook URL path (oee-iot-feed) with the matching header token.
6. Review and adjust shift times/cron schedule, OEE targets, critical thresholds, anomaly z-threshold, and breakdown alert minutes in the shift identification step before activating.

## 🔗 Nodes Used

Google Sheets, Webhook, WhatsApp Business Cloud, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
