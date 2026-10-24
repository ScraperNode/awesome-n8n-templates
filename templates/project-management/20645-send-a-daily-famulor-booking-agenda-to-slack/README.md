# 📋 Send a daily Famulor booking agenda to Slack

> ⚡ **2 views** · 📋 [Project Management](../)

## Description

## Quick Overview
This workflow runs every morning to pull confirmed bookings for the current day from the Famulor API, formats them into a concise agenda (optionally including invitee names), and either previews the output or posts the agenda to a Slack channel.

## How it works
1. Runs daily at 08:00 (or on manual run) to start the agenda generation.
2. Builds a start-and-end UTC timestamp window for the current business day based on the configured timezone.
3. Fetches all confirmed bookings from the Famulor API within the date window using paginated requests.
4. Validates pagination consistency, deduplicates records, filters bookings to the date window, sorts them by start time, and formats up to 20 lines of agenda text (with a notice if more exist).
5. If preview mode is enabled, returns the prepared agenda text for inspection; otherwise, sends the agenda to the configured Slack channel.

## Setup
1. Create an HTTP Header Auth credential for Famulor (Authorization: Bearer <API key>) with the bookings:read scope and select it in the Famulor request step.
2. Add Slack credentials, invite the Slack bot to your target channel, and set the Slack channel ID in the workflow configuration.
3. Set the businessTimezone value (and the workflow timezone) to match your local timezone, and optionally enable includeNames if your Slack channel is allowed to receive invitee names.
4. Run the workflow manually with previewOnly enabled to verify the agenda output, then disable previewOnly and activate the schedule.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
