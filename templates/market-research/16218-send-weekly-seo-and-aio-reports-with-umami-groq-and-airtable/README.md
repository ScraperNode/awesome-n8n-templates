# 📊 Send weekly SEO and AIO reports with Umami, Groq and Airtable

> ⚡ **48 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs every Monday and generates per-client weekly SEO and AIO reports by pulling analytics from Umami, using Groq to write the report, emailing a branded HTML version, posting a Slack summary via webhook, and storing the results in Airtable.

## How it works
1. Runs every Monday at 07:00 on a schedule.
2. Logs in to Umami via its API to obtain a bearer token for subsequent requests.
3. Fetches all active clients from an Airtable “Clients” table, then processes them one at a time.
4. For each client, pulls current-week and prior-week Umami stats plus top pages and referrer traffic sources, then combines the results.
5. Builds a week-over-week metrics summary and prompts Groq (llama-3.3-70b) to generate a structured weekly SEO + AIO report in the client’s language.
6. Sends the report as a branded HTML email, posts a Slack Block Kit-style summary to the client’s Slack incoming webhook, and saves the metrics and full report text to an Airtable “History” table.
7. Waits for a configurable rate-limit delay, then continues with the next client.

## Setup
1. Create an Umami account with API access (self-hosted Umami v2+) and provide your Umami base URL, username, and password in the Config values.
2. Create an Airtable base with “Clients” and “History” tables/fields as shown in the template notes, generate an Airtable personal access token with read/write scopes, and set the Base ID and API key in Config.
3. Create a Groq API key, then add it to Config (and adjust model, max tokens, and temperature if needed).
4. Configure the Email node with an SMTP credential in n8n and set the sender address (MAILER_FROM) in Config.
5. Add each client in Airtable with active=yes, umami_site_id, email, slack_webhook, and language, and set an ERROR_SLACK_WEBHOOK URL in Config for error notifications.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
