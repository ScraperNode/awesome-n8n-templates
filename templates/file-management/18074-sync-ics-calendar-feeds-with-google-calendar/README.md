# 📁 Sync ICS calendar feeds with Google Calendar

> ⚡ **78 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow runs every 15 minutes (configurable) to mirror events from an ICS/webcal feed into a Google Calendar by fetching and parsing the ICS file, comparing it with existing calendar events, and creating missing events or optionally deleting previously mirrored events that no longer exist in the feed.

## How it works
1. Runs every 15 minutes (configurable) on a schedule trigger.
2. Loads sync settings (ICS URL, Google Calendar ID, time window, deletion toggle, timezone defaults, and ID prefix).
3. Downloads the ICS feed over HTTP and parses it into individual event occurrences within the configured past/future window, generating deterministic Google Calendar event IDs.
4. Fetches existing events from the target Google Calendar within the same time window.
5. Compares the ICS occurrences to Google Calendar events (restricted to events whose IDs start with the configured prefix) to decide which events to create, keep, or delete.
6. Creates missing events in Google Calendar and, if enabled, deletes previously mirrored events that are no longer present in the ICS feed.

## Setup
1. Add a Google Calendar OAuth2 credential in both Google Calendar nodes and ensure the account has access to the target calendar.
2. In the Config step, set `icsUrl` to your ICS/webcal feed URL and `calendarId` to the destination calendar ID (for example, `primary`).
3. Review and adjust `syncDaysPast`, `syncDaysFuture`, `defaultTimeZone`, and `eventIdPrefix` to match your feed and desired sync window.
4. Decide whether to run in add-only mode by setting `enableDeletions` to false, and tune `maxDeletionsPerRun` to limit deletions per execution.
5. (Recommended) Use a dedicated Google Calendar for this mirror to avoid mixing synced events with manually managed events.
6. CRITICAL: Create a new calendar for this within your Google Calendar. If enableDeletions is enabled, this will delete EVERYTHING from your Google Calendar

## Requirements
- Create a new dedicated calendar within your Google Calendar account for this purpose. Do not mix this with your personal calendar or your existing events may be deleted.

## Additional info
This is incredibly useful for Notion users where your work calendar cannot be signed into from external services such as Notion Calendar, but can be shared via ICS.
Notion Calendar can subscribe to ICS calendars, but cannot be used for native meetings.
Using this tool allows an ICS calendar to be used as a proper Google Calendar - enabling full support within Notion Calendar application.

## 🔗 Nodes Used

HTTP Request, Google Calendar, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
