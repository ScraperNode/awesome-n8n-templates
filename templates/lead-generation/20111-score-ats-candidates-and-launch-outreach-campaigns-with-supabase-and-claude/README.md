# 🎣 Score ATS candidates and launch outreach campaigns with Supabase and Claude

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives a new job order from an ATS webhook, optionally extracts requirements using Anthropic, searches and scores matching candidates from the ATS, checks suppression rules and engagement history in Supabase, then upserts a campaign with scheduled enrollments and optionally posts a launch summary to Slack.

## How it works
1. Receives a job order via webhook (or runs manually) and normalizes it into a consistent job spec using the configured ATS field mapping.
2. If the job order is missing enough structured skills, calls Anthropic Messages API to extract required and preferred skills and merges them back into the job spec.
3. Searches for candidates in the ATS via its API (or falls back to a built-in sample candidate pool if the ATS is not connected).
4. Normalizes candidates (including E.164 phone formatting, status-based exclusions, and deduplication) and computes a transparent match score with human-readable reasons.
5. Fetches opt-outs, recent touches, and active enrollments from Supabase (or uses demo/empty history when Supabase is not configured) and gates out ineligible candidates.
6. Upserts the job order, campaign, and candidates into Supabase, links IDs, inserts enrollment rows with the first touch scheduled (not sent), and optionally posts a formatted launch summary to Slack.

## Setup
1. Configure your ATS webhook subscription to send “job order created” events to the workflow webhook URL.
2. In the config values, set your ATS vendor details and field mappings (ATS_FIELDS), plus thresholds like MIN_MATCH_SCORE and ENROLL_TOP_N.
3. Add credentials and fill connection values for Supabase (project URL and service role key) and ensure your database has the required tables/RPC (including the engagement_history function) and appropriate RLS policies.
4. If you want AI requirement extraction, add an Anthropic API key and choose the model settings in the config.
5. If you want notifications, set a Slack incoming webhook URL in the config.
6. Turn off DEMO_MODE and adjust TEST_RUN/TEST_PHONE once you are ready to persist real campaigns and enrollments.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
