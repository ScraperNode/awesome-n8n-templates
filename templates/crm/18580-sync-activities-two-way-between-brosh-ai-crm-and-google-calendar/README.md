# 🤝 Sync activities two-way between BROSH AI CRM and Google Calendar

> ⚡ **3 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow keeps Google Calendar events and BROSH AI CRM Activity records in sync in both directions, creating or updating BROSH Activities when events change in Google Calendar and polling BROSH for recently modified Activities to create or update matching Google Calendar events.

## How it works
1. Triggers every minute when a Google Calendar event is created, updated, or cancelled in the selected calendar.
2. Normalizes the Google Calendar event details (title, time range, location, description, attendees) and builds sync metadata.
3. Searches BROSH AI CRM (via the BROSH MCP API) for an Activity already linked to the Google event ID, then updates the Activity or creates a new one.
4. Runs on a schedule to poll BROSH AI CRM Activities changed in the last 10 minutes.
5. Skips BROSH Activities that were just synced from Google Calendar to prevent update loops.
6. Creates a new Google Calendar event or updates the existing one based on whether a Google event ID is already stored on the BROSH Activity.
7. Writes the Google Calendar event ID and sync metadata back to the BROSH Activity via the BROSH MCP API.

## Setup
1. Add Google Calendar OAuth2 credentials to all Google Calendar nodes and confirm the calendar ID (defaults to `primary`).
2. Add BROSH MCP OAuth2 API credentials for HTTP Request nodes and ensure the endpoint is set to `https://mcp.brosh.io/api/mcp`.
3. In BROSH AI CRM, create the Activity fields `googleCalendarEventId` and `message_additional_info` so the workflow can store the event mapping and sync metadata.
4. Review the polling and loop-protection timing (Google triggers every minute; BROSH polling runs every 5 minutes with a 10-minute lookback) and adjust if needed for your environment.

## 🔗 Nodes Used

HTTP Request, Google Calendar, Google Calendar Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
