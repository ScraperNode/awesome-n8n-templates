# 💬 Check appointment availability via authenticated webhook and Google Calendar

> ⚡ **5 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow exposes an authenticated webhook that validates a proposed start/end time, checks Google Calendar availability for that interval, and returns a structured JSON response indicating whether the slot is available, busy, or could not be checked.

## How it works
1. Receives a POST webhook request authenticated via header auth with a JSON body containing start and end timestamps.
2. Validates that start and end are RFC3339 timestamps with seconds and an explicit offset, start is in the future, and the interval is positive and no longer than 24 hours.
3. If the request is valid, queries Google Calendar for free/busy availability for the provided time window.
4. Formats the result as JSON with status (available or busy), a boolean available flag, and the normalized UTC start and end.
5. Returns HTTP 200 for successful checks, HTTP 400 with validation errors for invalid requests, or HTTP 502 if Google Calendar cannot be queried without making an availability claim.

## Setup
1. Create a Header Auth credential for the webhook and configure your calling app to send the same header name and secret value.
2. Add a Google Calendar OAuth credential and replace YOUR_CALENDAR_ID with the calendar ID you want to check.
3. Keep the workflow inactive while configuring a unique webhook path and a dedicated test calendar. Send Content-Type: application/json and the configured authentication header, with start and end timestamps including seconds and a time-zone offset. Test a future free interval, a busy interval, invalid times and a provider permission failure. A provider failure must never return available. Activate only after those checks, then use the production webhook URL shown by n8n.

## Requirements
- An n8n installation with Webhook, Code, IF, Respond to Webhook and Google Calendar nodes; a Google account and accessible calendar; Google Calendar OAuth credentials; and a calling application that can send an authenticated JSON POST request. No AI provider or model subscription is required.

## Customization
- Change the webhook path and calendar. Add your own scheduling rules before the availability check for office hours, staff eligibility, lead time, buffers or holidays. Keep the separate invalid-request and provider-error branches.

## Additional info
HTTP 200 returns status available or busy, a boolean available, and normalized UTC start and end. HTTP 400 returns invalid_request and validation errors. HTTP 502 returns unavailable without claiming that the interval is free. This is a snapshot for one interval. It neither generates a slot catalogue nor holds or creates an appointment. Calendar state can change after the check. Successful, error and manual execution saving are disabled in the export; review instance logging and retention before using real requests. Prepared by Benian Technologies: https://benian.ai/integrations/n8n-automation

## 🔗 Nodes Used

Webhook, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
