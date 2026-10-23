# 📊 Send adaptive daily Supabase product pulse emails with Claude and SMTP

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This scheduled workflow reads your Supabase project’s live schema, uses Anthropic Claude to plan safe PostgREST queries from a plain-English requirement, computes the requested metrics, and sends a daily pulse email via SMTP with results or a clear “no matching data” notice.

## How it works
1. Runs every morning at 8am on a schedule.
2. Fetches your Supabase REST OpenAPI schema and condenses it into a list of available tables and columns.
3. Sends your plain-English reporting requirements and the live schema to Anthropic Claude to generate PostgREST metric queries.
4. Validates the planned queries against the discovered schema, replaces time placeholders with real timestamps, and builds Supabase REST URLs.
5. Executes each query against the Supabase REST API and calculates counts, sums, or top-group breakdowns from the returned rows.
6. If results exist, asks Anthropic Claude to write a short headline/summary/insights and emails a formatted report via SMTP; otherwise, emails a not-found message listing skipped items.

## Setup
1. Add credentials for Supabase API, Anthropic (HTTP Header Auth using `x-api-key`), and an SMTP account.
2. In the Config step, set `supabaseUrl`, `reportEmail`, `fromEmail`, `brandName`, `windowHours`, and your plain-English `requirements`.
3. Ensure the Supabase REST API can see the tables referenced by your requirement (reload PostgREST schema if needed) and adjust the schedule time to your timezone before activating.

## Requirements
- A Supabase project + Supabase API credential (host + service key)
- An Anthropic (Claude) API key
- An SMTP account (any provider — Brevo, Gmail, etc.)

## Customization
- Rewrite the plain-English requirements in Config to report on anything
- Set windowHours (24 = day, 168 = week, 720 = month)
- Adjust schedule time/timezone; swap the Claude model
- Edit the email design in Build Email, or the planSystem/reportSystem prompts

## Additional info
Zero DB setup — no functions, no Postgres connection. It reads your live schema, queries only tables that exist, safely skips anything missing, and sends a clear "not found" email instead of a blank report.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
