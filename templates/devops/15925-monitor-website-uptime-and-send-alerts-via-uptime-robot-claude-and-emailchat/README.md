# ⚙️ Monitor website uptime and send alerts via Uptime Robot, Claude, and email/chat

> ⚡ **19 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow runs on a frequent schedule to check UptimeRobot monitor status and a Google PageSpeed Insights test, logs monitor data to Google Sheets, and sends uptime or downtime notifications via Gmail, Telegram, and WhatsApp (Rapiwa), with alert text optionally rewritten by Anthropic Claude.

## How it works
1. Runs on a schedule trigger at a minute-based interval.
2. Fetches all monitors from UptimeRobot, then writes monitor details to Google Sheets and filters to a specific status value for additional handling.
3. Builds an alert payload that lists only monitors marked “May Be Down” or “Down” (excluding one hard-coded monitor ID) and sets a server_down flag.
4. If server_down is true, sends the alert text to Anthropic Claude to generate a friendlier message, escapes newlines for compatibility, and sends the alert via WhatsApp (Rapiwa), Gmail, and Telegram.
5. If server_down is false, sends an “OK” notification via WhatsApp (Rapiwa), Gmail, and Telegram.
6. In parallel, calls the Google PageSpeed Insights API for a target URL, formats any “May Be Down/Down” findings into a second alert payload, and routes it through the same down/ok notification logic.

## Setup
1. Add credentials for UptimeRobot API, Google Sheets OAuth2, Anthropic API, Gmail OAuth2, Telegram Bot API, and Rapiwa (WhatsApp) API.
2. Update the Google Sheets document ID and sheet name to your own spreadsheet (and ensure it has columns matching the monitor fields, with “id” used for matching).
3. Replace the placeholder WhatsApp number, email recipient address, and Telegram chat ID with your real destinations.
4. Update the Google PageSpeed Insights request with your target URL and a valid API key.
5. Adjust the excluded UptimeRobot monitor ID and the timezone in the message-formatting scripts if they don’t match your environment.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Gmail, UptimeRobot, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
