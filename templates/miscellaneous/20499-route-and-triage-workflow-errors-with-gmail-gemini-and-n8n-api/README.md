# 🔧 Route and triage workflow errors with Gmail, Gemini and n8n API

> ⚡ **80 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow turns n8n into a centralized error handler with a browser-based dashboard, storing incidents in n8n Data Tables, optionally diagnosing failures with Google Gemini, notifying via Gmail (and optionally Slack/Telegram/Discord/Microsoft Teams/webhooks), and providing one-click retry and mute actions.

## How it works
1. Runs once from a manual trigger to create n8n Data Tables for configuration, error fingerprints, and incident history, and seeds a default config row if missing.
2. Serves a Settings web UI via webhook endpoints that read the current configuration from n8n Data Tables and render an HTML form.
3. Accepts Settings form submissions via a POST webhook, validates inputs, saves the updated configuration to n8n Data Tables, and redirects to the workflow connection page or returns an HTML validation error.
4. Serves a Connect web UI via webhook that lists all workflows using the n8n API and lets you bulk attach or disconnect this workflow as their error workflow.
5. Triggers on failures from connected workflows, normalizes the error payload, fingerprints recurring errors, checks mute state, and applies severity escalation and exponential backoff based on the stored config.
6. Optionally calls Google Gemini to generate a JSON diagnostic summary and retry/severity guidance, then formats and sends alerts via Gmail and any enabled channels (Telegram, Slack, Discord, Microsoft Teams, or HTTP webhook) and logs the incident.
7. Exposes webhooks for Activity and Guide pages plus action links to retry executions through the n8n API and to mute/unmute specific error fingerprints, and runs a daily scheduled cleanup to delete old incident rows based on retention settings.

## Setup
1. Add an n8n API credential (for the n8n node and execution retry HTTP requests) so the workflow can list workflows, set their error workflow, and retry executions.
2. Add a Gmail OAuth2 credential for sending email alerts, and optionally add credentials for Google Gemini (Google PaLM), Telegram, Slack, Discord, and Microsoft Teams if you plan to enable those channels.
3. Run the workflow once with the manual trigger to create the geh_config, geh_fingerprints, and geh_incidents Data Tables and seed the default configuration.
4. Open the production webhook URL for /geh-config to set your base URL and notification settings, then use /geh-assign to connect the workflows you want to monitor.
5. Protect the public webhook endpoints (for example /geh-config, /geh-assign, /geh-activity, /geh-guide, and action links) with Basic Auth or a reverse proxy sign-in before sharing the URLs externally.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Telegram, Discord, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
