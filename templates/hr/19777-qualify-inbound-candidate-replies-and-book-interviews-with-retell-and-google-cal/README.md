# 👥 Qualify inbound candidate replies and book interviews with Retell and Google Calendar

> ⚡ **1 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow receives inbound Twilio SMS replies, Twilio status callbacks, and Retell call_analyzed webhooks, then verifies the signature, handles opt-outs, qualifies candidates from structured answers, books interviews in Google Calendar, writes outcomes back to the ATS, and notifies recruiters via Slack and Gmail.

## How it works
1. Receives a POST request on a single webhook endpoint used by Twilio (inbound SMS and status callbacks) and Retell (call_analyzed events).
2. Verifies the request signature (Twilio HMAC-SHA1 or Retell HMAC-SHA256) and rejects unsigned or invalid requests in live mode.
3. Normalizes the incoming payload into a common event format, detects opt-out/positive/negative intent for SMS replies, and ignores non-actionable events like delivery receipts and non-final call events.
4. If the message is an opt-out, records the phone number opt-out in Supabase (stopping all future outreach) and optionally sends a single confirmation message.
5. Otherwise, evaluates Retell’s structured screening answers (and SMS intent where applicable) against the QUALIFY rules to mark the candidate as qualified, needs review, or not qualified.
6. For qualified candidates, selects the job’s recruiter and proposes the next available interview slot, then books the interview in Google Calendar and records the appointment in Supabase when writeback is enabled.
7. Queues and posts an outcome note (and optional status update) to the ATS, optionally alerts the recruiter via Slack and Gmail, logs the inbound event to Supabase, and returns a fast provider-friendly webhook response.

## Setup
1. Create and configure a Supabase project (including the required schema/RPC such as stop_all_outreach) and add your SUPABASE_URL, service key, and CLIENT_ID in the config.
2. Add Twilio credentials and configure the Twilio webhook and status callback URL to this workflow’s production webhook URL (and set the same URL in TWILIO_STATUS_CALLBACK for signature verification).
3. If using Retell, add your Retell API key/agent details, set RETELL_WEBHOOK_SECRET, and register the same webhook URL in the Retell dashboard.
4. Connect Google Calendar credentials (and optionally Gmail) and ensure recruiter email addresses map to valid calendar IDs (or configure RECRUITER_CALENDARS).
5. Provide your ATS base URL and token (for example Bullhorn) if you want ATS notes/status updates, and optionally set SLACK_WEBHOOK_URL for Slack alerts.
6. Switch DEMO_MODE to false and TEST_RUN to false only when you are ready to send real messages, create calendar events, and write back to your ATS.

## Customization
- Part 3 of 3 parts Candidate Engine Workflow.
- Part 1 : https://n8n.io/workflows/19775-score-ats-candidates-and-enroll-top-matches-into-supabase-outreach-campaigns/
- Part 2 : https://n8n.io/workflows/19776-send-scheduled-sms-and-voice-outreach-from-supabase-via-twilio-and-retell/

## 🔗 Nodes Used

HTTP Request, Webhook, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
