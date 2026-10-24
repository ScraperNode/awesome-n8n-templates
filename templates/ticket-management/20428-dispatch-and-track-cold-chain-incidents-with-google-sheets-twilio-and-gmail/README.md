# 🎫 Dispatch and track cold-chain incidents with Google Sheets, Twilio, and Gmail

> ⚡ **2 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/s79Y5rty2WM

This workflow ingests cold-chain temperature alerts via webhook, looks up client SLA rules in Google Sheets, assigns severity and dispatches an on-call technician via Twilio SMS, then tracks acknowledgements, escalations, and daily SLA reporting using Google Sheets, Twilio, and Gmail.

## How it works
1. Receives a POST webhook alert, normalizes the payload, and rejects invalid requests with a 400 response.
2. Looks up the client contract in Google Sheets and rejects unknown client IDs with a 404 response.
3. Detects likely defrost-cycle spikes, logs an observation to Google Sheets, and returns a 202 response without dispatching.
4. Computes severity and SLA deadlines, checks Google Sheets for existing open tickets for the same client/equipment, and suppresses duplicates with an audit log and 200 response.
5. Matches an available certified technician from a Google Sheets roster and either creates an UNASSIGNED ticket and alerts the on-call lead via Twilio SMS or creates a DISPATCHED ticket, locks the technician as ON_JOB, and sends Twilio SMS messages to both technician and client.
6. Accepts technician status updates (accept/decline/on-site/resolved) via a callback webhook, updates ticket and technician state in Google Sheets, logs the event, and returns an HTML confirmation page.
7. Runs every 5 minutes to evaluate SLA progress, automatically reassign or escalate tickets, send Twilio escalation SMS/voice calls, and update Google Sheets ticket and technician records.
8. Runs daily at 08:00 to calculate 24-hour SLA compliance from Google Sheets, archive a snapshot back to Google Sheets, and email an HTML report via Gmail.

## Setup
1. Create Google Sheets tabs and columns for Clients_SLA, Technicians, Tickets_Dispatch, Escalation_Audit_Log, and SLA_Daily_Snapshots, then connect a Google Sheets Service Account credential with access to the spreadsheet.
2. Add a Twilio credential and update the configured phone numbers (Twilio “from”, ops manager, on-call lead, admin, and client emergency contact fields in the sheet) to real values.
3. Set your n8n public base URL in the configuration so the SMS callback links point to your reachable /webhook/tech-ack endpoint.
4. Configure the source monitoring system to send alerts to the inbound webhook URL (/webhook/coldchain-alert) using the expected fields (client_id, current_temp_celsius or sensor_fault, equipment_type, and optional context).
5. Add a Gmail OAuth2 credential and set the report recipient email address for the daily SLA report.
6. Review and adjust operational thresholds (ack timeout minutes, defrost criteria, severity rules, and SLA tiers) to match your process and contracts.

## 🔗 Nodes Used

Google Sheets, Twilio, Webhook, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
