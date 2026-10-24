# 💬 Send weather alerts to Hospitable guests with WeatherAPI and Data Tables

> ⚡ **14 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow runs daily to check WeatherAPI.com for rain or strong-wind forecasts at a Hospitable property, then messages the current or arriving guest through Hospitable when needed, using an n8n Data Table to prevent repeat sends and email notifications when it cannot send safely.

## How it works
1. Runs every day at 17:00 on a schedule trigger.
2. Fetches a 2-day hourly forecast from WeatherAPI.com for your property location and evaluates whether rain and/or wind thresholds are met within the next 24 hours.
3. If severe weather is expected, queries the Hospitable Public API for upcoming and in-progress reservations and selects the single eligible in-house or arriving-today guest (or flags the situation as ambiguous/unsendable).
4. Checks an n8n Data Table for recent messages to enforce a 48-hour no-repeat rule and renders a guest-ready message with a natural time phrase (for example, “tonight” or “tomorrow morning”).
5. In LIVE mode, claims a log row in the Data Table and posts the message to the reservation conversation via the Hospitable API, then records whether the send is confirmed, failed, or unknown.
6. Emails the host via SMTP in DRY_RUN mode and whenever the workflow cannot send (for example, no conversation available, overlapping stays, table claim failure, or an unconfirmed send).

## Setup
1. Create and select credentials for WeatherAPI.com (HTTP Query Auth with parameter `key`), Hospitable (HTTP Bearer token), and SMTP for the email steps.
2. Update the Config values for your Hospitable property ID, property latitude/longitude, property time zone, host notification email addresses, and message templates/thresholds.
3. Ensure your n8n instance supports Data Tables and allow the workflow to create the `weather_messages` table (or create it ahead of time with the same columns).
4. Set the workflow time zone to match the property so the 17:00 schedule runs at the correct local time.
5. Start with MODE set to `DRY_RUN` and switch to `LIVE` after reviewing the emailed outputs and confirming the guest selection and message text.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
