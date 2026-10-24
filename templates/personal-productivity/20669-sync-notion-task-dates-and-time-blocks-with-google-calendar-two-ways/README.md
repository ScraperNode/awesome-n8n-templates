# ⚡ Sync Notion task dates and time blocks with Google Calendar two ways

> ⚡ **1 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow keeps Notion tasks and a dedicated Google Calendar in sync for time blocking, creating, updating, or deleting calendar events based on Notion task dates and writing the Google event ID back to Notion, while also pushing Google Calendar time changes back into Notion.

## How it works
1. Polls a Notion tasks database every 30 minutes for new or updated task pages.
2. Normalizes each task into a flat structure (title, date/time, all-day vs timed, status, and stored Google event ID) and skips items that have no relevant changes to sync.
3. Creates, updates, or deletes a Google Calendar event in the selected calendar based on whether the task has a timed date, an all-day date, an existing event ID, or a timed/all-day conversion is required.
4. Writes the created event’s Google event ID back to the Notion task (or clears it when the event is deleted/recreated) and stores a fingerprint to prevent sync loops caused by the Notion update.
5. Polls Google Calendar every 30 minutes for updated events in the sync calendar and ignores events that don’t include a Notion link in the description.
6. Compares the Google event’s start/end against the Notion task’s current date field and updates the Notion due date when the calendar time is different.

## Setup
1. Connect Notion OAuth2 and Google Calendar OAuth2 credentials.
2. In Notion, create/confirm a tasks database with properties for Task (title), Due date (date), Status (status/select), optional Direction (select), and Google Event ID (rich text).
3. Set your Notion database data source ID in the Notion trigger and backfill nodes, and set the target Google Calendar ID in all Google Calendar nodes (ideally a dedicated calendar for synced tasks).
4. Update the property names and IANA time zone in the code nodes and Notion date update nodes to match your Notion schema and locale.
5. Run the manual backfill once to create events for existing open future tasks, then activate the workflow for ongoing two-way syncing.

## 🔗 Nodes Used

Google Calendar, Notion, Notion Trigger, Stop and Error, Google Calendar Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
