# 👥 Score ATS candidates and enroll top matches into Supabase outreach campaigns

> ⚡ **2 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow receives new job orders from an ATS webhook, optionally extracts structured requirements using Anthropic, scores and filters matching candidates, and upserts the job, campaign, candidates, and scheduled enrollments into Supabase, with an optional Slack webhook summary.

## How it works
1. Receives a job order via an incoming webhook (or runs manually) and normalizes the payload into a consistent job spec using a configurable ATS field map.
2. If the job order has too few skills, calls the Anthropic Messages API to extract required and nice-to-have skills from the job description and merges them into the job spec.
3. Searches candidates in the configured ATS via its API (or falls back to a bundled sample candidate pool) and normalizes records by formatting phone numbers to E.164 and deduplicating people.
4. Scores each candidate against the job spec using transparent, rule-based weights and produces a ranked list with human-readable match reasons.
5. Fetches opt-outs, recent contact history, and active enrollments from Supabase (or uses a demo stub) and gates candidates out based on suppression rules, cooldown windows, and a minimum score threshold.
6. Upserts the job order, campaign, and candidate records into Supabase and inserts enrollments for the top-ranked eligible candidates with the first outreach touch scheduled (not sent).
7. Builds a run summary and optionally posts it to Slack via an incoming webhook.

## Setup
1. Configure your ATS to send “job order created” events to the workflow webhook URL and update the ATS vendor settings, base URL, token, and ATS_FIELDS mapping in the config.
2. Add Supabase connection details (URL and service role key) and ensure your Supabase project has the required tables/RPC (including the engagement_history function) used for suppression and upserts.
3. (Optional) Add an Anthropic API key and model settings if you want the workflow to extract skills from job descriptions.
4. (Optional) Add a Slack incoming webhook URL to receive the launch summary message.
5. Review the demo/test controls in config (DEMO_MODE, TEST_RUN, DRY_RUN_DB) before enabling production writes.

## Customization
- Part 1 of 3 parts Candidate Engine Workflow.
- Part 2 : https://n8n.io/workflows/19776-send-scheduled-sms-and-voice-outreach-from-supabase-via-twilio-and-retell/
- Part 3 : https://n8n.io/workflows/19777-qualify-inbound-candidate-replies-and-book-interviews-with-retell-and-google-calendar/

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
