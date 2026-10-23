# 🔧 Publish a live calendar feed from Google Sheets to Google, Apple and Outlook

> ⚡ **2 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow serves a token-protected iCalendar (.ics) feed from a Google Sheets “events” tab, so Google Calendar, Apple Calendar, and Outlook can subscribe to a live calendar URL.

## How it works
1. Receives an incoming webhook request for `calendar.ics` and checks the `?token=` query parameter against the configured feed token.
2. Looks up a short-lived cached .ics response and immediately serves it when it is still fresh.
3. If the cache is stale, reads event rows from a Google Sheets document and continues even if the sheet read errors.
4. Validates and normalizes each row (including all-day vs timed events, status values, and a past/future time window) and drops malformed or out-of-window entries.
5. Renders the remaining events into an RFC 5545 iCalendar text body (with correct escaping, CRLF line endings, and UTC timestamps) and optionally adds a “feed health” event.
6. Stores the generated .ics in workflow static data for caching and responds with `text/calendar`, serving the last known good calendar when a sheet read/render failure occurs or returning 404/503 on unauthorized/unavailable requests.

## Setup
1. Add Google Sheets OAuth credentials, select the target spreadsheet in the Google Sheets read step, and create a tab named `events` with the required headers (uid, title, start_date, start_time, end_date, end_time, location, description, status, updated_at, rrule).
2. In the feed configuration, replace `feed_token` with a long random secret, set a unique `feed_namespace`, and review timezone/window/default duration settings to match your spreadsheet and desired publish range.
3. Activate the workflow, copy the production webhook URL for `calendar.ics`, append `?token=YOUR_TOKEN`, and use that URL to subscribe from Google Calendar, Apple Calendar, or Outlook.

## 🔗 Nodes Used

Google Sheets, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
