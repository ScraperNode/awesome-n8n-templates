# 💬 Send scheduled SMS and voice outreach from Supabase via Twilio and Retell

> ⚡ **2 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs every 15 minutes to claim due outreach tasks from Supabase, decide whether each candidate should receive an SMS via Twilio or a voice call via Retell, record results back to Supabase with retry/backoff logic, and optionally post a run summary to Slack.

## How it works
1. Runs every 15 minutes (or manually) and loads runtime settings like quiet hours, send caps, and provider credentials.
2. Claims a batch of due outreach enrollments from Supabase (or uses a built-in sample queue when Supabase is not configured).
3. Evaluates each enrollment against the outreach sequence, enforcing candidate-local quiet hours/weekend rules and generating the exact SMS text or Retell call context plus an idempotency key.
4. If sending is enabled, sends SMS messages through Twilio and initiates voice calls through Retell, or marks items as transient when the required provider is not configured.
5. Classifies send outcomes (sent, transient, permanent), updates next-attempt scheduling with backoff/jitter when needed, and flags carrier-level opt-outs returned by Twilio.
6. Writes contact attempts, enrollment state updates, and any opt-outs back to Supabase (when configured) and posts an optional Slack summary when there is something notable to report.

## Setup
1. Create and configure the required Supabase tables/views and RPC used by the workflow (due-queue view logic plus endpoints to claim due attempts and store contact_attempts, enrollments updates, and opt_outs).
2. Add your Supabase project URL and service role key (or store them as credentials and reference them) and set the correct client identifiers in the workflow’s configuration.
3. Add Twilio Account SID/Auth Token and a From number or Messaging Service SID, and set the optional Twilio StatusCallback URL if you want delivery updates handled elsewhere.
4. Add your Retell API key, agent ID, and outbound from-number if you plan to use voice calls.
5. (Optional) Add a Slack incoming webhook URL to receive runner summaries, then switch DEMO_MODE/TEST_RUN settings to control preview, test-phone routing, and live sending.

## Customization
- Part 2 of 3 parts Candidate Engine Workflow.
- Part 1 : https://n8n.io/workflows/19775-score-ats-candidates-and-enroll-top-matches-into-supabase-outreach-campaigns/
- Part 3 : https://n8n.io/workflows/19777-qualify-inbound-candidate-replies-and-book-interviews-with-retell-and-google-calendar/

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
