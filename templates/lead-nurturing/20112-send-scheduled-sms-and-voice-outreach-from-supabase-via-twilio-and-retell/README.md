# 💬 Send scheduled SMS and voice outreach from Supabase via Twilio and Retell

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs every 15 minutes to claim due outreach enrollments from Supabase, decide the next SMS or voice touch based on a sequence and quiet hours, send via Twilio (SMS) or Retell (voice), then write attempts and enrollment updates back to Supabase and optionally post a Slack summary.

## How it works
1. Runs every 15 minutes (or manually) and loads configuration that controls the outreach sequence, quiet hours, caps, and provider settings.
2. Claims a batch of due outreach attempts from Supabase via an RPC call, or falls back to a built-in sample queue when Supabase is not configured.
3. Evaluates each due enrollment to choose the next ladder step, render the SMS body or voice-call variables, enforce candidate-local quiet hours/weekend rules and daily caps, and generate an idempotency key.
4. If sending is enabled, routes each item to Twilio to send an SMS or to Retell to start an outbound voice call, otherwise outputs a preview of what would be sent.
5. Classifies provider responses as sent, transient failure, or permanent failure (including carrier opt-outs), and determines whether to advance, retry later with backoff, or stop the enrollment.
6. Writes contact attempts, enrollment state updates, and carrier-level opt-outs to Supabase when database writes are enabled.
7. Builds a run summary and posts it to Slack via an incoming webhook when Slack is configured and there is something noteworthy to report.

## Setup
1. Create and configure the required Supabase schema (RPC to claim due attempts, enrollments queue/view logic, contact_attempts and opt_outs tables, and uniqueness on the idempotency key) and set your Supabase URL and service role key in the config.
2. Add your Twilio Account SID, Auth Token, and a From number or Messaging Service SID (and optionally a Twilio Status Callback URL) in the config to enable SMS sending.
3. Add your Retell API key, agent ID, and from number in the config to enable voice outreach.
4. Review and customize the outreach sequence templates, quiet hours/weekend rules, daily send cap, and permanent SMS error codes in the config node.
5. (Optional) Set a Slack incoming webhook URL in the config to receive runner summaries, and switch from DEMO_MODE/preview to test/live sending when you are ready.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
