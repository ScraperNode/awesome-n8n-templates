# 🎫 Text back missed calls with Twilio, GPT-5.6, Google Sheets and Slack

> ⚡ **132 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives Twilio call status callbacks, detects missed inbound calls, looks up the caller in Google Sheets, and uses OpenAI (GPT-5.6) to draft a short SMS reply. It sends the SMS via Twilio, records the contact in an n8n Data Table, and alerts a Slack channel.

## How it works
1. Receives a POST webhook from Twilio when a call ends and normalizes the payload while calculating whether the call was missed and whether it occurred within opening hours.
2. Filters to missed inbound calls only (busy, no-answer, failed, or canceled) and stops if someone answered.
3. Looks up the caller’s phone number in a Google Sheets “Customers” sheet and checks an n8n Data Table to see whether the number was texted within the configured quiet period.
4. Classifies the caller as an existing customer, a new lead, or after-hours and only proceeds if a reply should be sent.
5. Uses OpenAI (GPT-5.6) to generate a concise SMS reply, then cleans and hard-limits the text and estimates SMS segment count.
6. Sends the SMS through Twilio, upserts the “missed_calls” record to prevent repeat texts, and posts a tailored notification to Slack based on the caller type.

## Setup
1. Configure your Twilio credentials, ensure you have an SMS-capable Twilio number, and set that number’s Status Callback URL to this workflow’s production webhook URL.
2. Add a Google Sheets OAuth credential, provide the spreadsheet URL/ID in the settings, and ensure a “Customers” sheet exists with at least a phone column (optionally name and notes).
3. Create an n8n Data Table named “missed_calls” with fields to store phone, texted_at, call_count, and last_status.
4. Add an OpenAI credential and keep the chat model selection as-is or update it to a model available in your account.
5. Add a Slack credential and set the target channel name in the settings values.
6. Update the workflow settings values (business name, opening hours, open days, quiet minutes, and Twilio “from” number) to match your business.

## 🔗 Nodes Used

Google Sheets, Slack, Twilio, Webhook, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
