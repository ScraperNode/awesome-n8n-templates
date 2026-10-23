# 🎫 Resolve courier NDRs via WhatsApp using GPT-4o-mini, Shiprocket and Delhivery

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow handles courier non-delivery (NDR) events from Shiprocket or Delhivery, looks up shipment details in Google Sheets, messages customers on WhatsApp with resolution options, uses OpenAI to interpret replies, submits NDR actions back to the courier API, and escalates risky or stalled cases to Slack.

## How it works
1. Receives a webhook from Shiprocket or Delhivery when a shipment tracking update indicates a failed delivery (NDR).
2. Normalizes the courier payload, looks up the shipment in Google Sheets, deduplicates repeated attempts, and calculates an NDR reason plus an RTO-risk score.
3. Sends the customer a WhatsApp message with numbered resolution options and logs the open case to an “NDR Log” sheet, alerting a Slack channel when the risk is high or the phone number is missing.
4. Triggers on inbound WhatsApp messages, matches the reply to the latest open case in Google Sheets, and uses OpenAI (gpt-4o-mini) to extract intent (reattempt, reschedule, address update, cancel, alternate phone) and structured details.
5. Validates the requested change (for example, reschedules must be within 1–5 days and pincode changes are flagged) and either asks the customer a clarification question on WhatsApp or escalates the case to Slack.
6. For valid requests, submits the corresponding NDR action to Shiprocket or Delhivery via their HTTP APIs, then logs the courier response and either confirms success to the customer on WhatsApp or alerts Slack if the courier rejects the update.
7. Runs hourly to check open cases in Google Sheets, sends a WhatsApp reminder after 6 hours of no reply, and escalates to Slack after 20 hours.

## Setup
1. Create a Google Sheet with “Shipments” (including AWB, phone, pincode, address, payment mode, COD amount, provider, and order ID) and “NDR Log” tabs, then replace all REPLACE_WITH_GOOGLE_SHEET_ID values.
2. Add credentials for WhatsApp Business Cloud (WhatsApp Trigger and Send), Google Sheets, Slack, and an OpenAI API key for the gpt-4o-mini model.
3. Configure Shiprocket HTTP Custom Auth (login body with email/password) and Delhivery HTTP Header Auth (Authorization: Token …) for the HTTP request steps.
4. Replace REPLACE_WITH_WHATSAPP_PHONE_NUMBER_ID and REPLACE_WITH_SLACK_CHANNEL_ID with your WhatsApp Phone Number ID and target Slack channel.
5. Copy the “On Courier NDR Event” webhook URL and configure it as the tracking/NDR webhook endpoint in Shiprocket and/or Delhivery.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
