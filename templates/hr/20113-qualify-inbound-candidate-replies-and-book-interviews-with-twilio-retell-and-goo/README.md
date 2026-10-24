# 👥 Qualify inbound candidate replies and book interviews with Twilio, Retell and Google Calendar

> ⚡ **1 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow receives inbound Twilio SMS replies, Twilio delivery callbacks, and Retell call analysis webhooks, then verifies signatures, handles opt-outs, qualifies candidates using rule-based criteria, books interviews in Google Calendar, queues and writes notes back to an ATS, notifies recruiters via Slack and Gmail, and logs eventsto Supabase.

## How it works
1. Receives a POST webhook from Twilio (inbound SMS or status callback) or Retell (call_analyzed) and loads runtime settings from the config.
2. Verifies the webhook signature for Twilio or Retell and rejects unsigned/untrusted requests unless running in preview mode.
3. Normalizes the inbound payload into a single event shape, detects SMS intent (opt-out, interested, not interested, question, unclear), and ignores non-actionable events like delivery receipts or non-final Retell events.
4. If the message is an opt-out, calls a Supabase RPC to stop all outreach for that phone number and (optionally) prepares a one-time confirmation message.
5. Otherwise, evaluates the candidate against the configured QUALIFY rules (including Retell’s structured answers when present) to mark them as qualified, not qualified, needs review, or no answer.
6. For qualified candidates, selects the job’s recruiter and proposes an interview slot, then creates a Google Calendar event when calendar booking is enabled and the workflow is running in live mode.
7. Records the appointment and logs the inbound event in Supabase, queues and optionally writes an ATS note/status update, and notifies the recruiter via Slack webhook and/or Gmail before responding to Twilio/Retell with a fast acknowledgement.

## Setup
1. Create a Supabase project, run the provided schema/seed SQL, and add your Supabase URL and service role key (or equivalent) to the config and Supabase HTTP Request nodes.
2. Configure Twilio (Account SID/Auth Token, sending number or Messaging Service SID, and the status callback URL) and paste this workflow’s production webhook URL into Twilio and set the same value in TWILIO_STATUS_CALLBACK for signature verification.
3. If using Retell, set your Retell API key, agent ID, and webhook signing secret, and configure Retell to send call_analyzed webhooks to this workflow’s webhook URL.
4. Connect Google Calendar credentials (and set CALENDAR_PROVIDER to google) and connect Gmail credentials if you want recruiter email notifications.
5. If you want ATS write-back, set the ATS base URL/token and confirm the candidate/job field mappings in ATS_FIELDS match your ATS.
6. Review and adjust QUALIFY rules, quiet hours/booking windows, and set DEMO_MODE/TEST_RUN to false only when you are ready to send messages and write back to external systems.

## 🔗 Nodes Used

HTTP Request, Webhook, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
