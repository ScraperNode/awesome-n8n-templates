# ⚡ Sync Google Calendar events to Google Sheets with Slack notifications

> ⚡ **165 views** · ⚡ [Personal Productivity](../)

## Description

Sync your Google Calendar events with Google Sheets and get daily Slack summaries with meeting statistics.
FEATURES:

Real-time sync of new and updated events
Auto-categorization (Meeting, 1:1, Interview, Demo, Focus Time)
Platform detection (Google Meet, Zoom, Teams)
Daily statistics dashboard
Cancellation tracking
Optional email notifications to attendees

FLOWS:

New Event: Log to Sheets + Slack notification + Optional email
Updated Event: Update Sheets + Slack notification
Canceled Event: Log cancellation + Slack alert
Daily Summary (8AM): Meeting time stats + Schedule to Slack

SETUP:

Connect Google account with Calendar access
Create Google Sheet with 3 tabs:

Events: ID, Synced At, Title, Category, Date, Day, Start Time, End Time, Duration, Platform, Attendees, Status, Meeting Link
Cancellations: ID, Canceled At, Title, Original Date, Original Time, Affected Attendees
Statistics: Date, Total Events, Meeting Time, Minutes, Busy %, Status, Virtual, In-Person


Replace YOUR_DOCUMENT_ID in all Sheets nodes
Connect Slack (#calendar, #errors channels)
Optional: Connect Gmail for attendee notifications

DAILY STATISTICS:

Total events count
Time spent in meetings
Busy percentage of work day
Virtual vs in-person breakdown
Full day schedule

IDEAL FOR:
Anyone wanting to track their calendar, analyze meeting patterns, or get daily schedule summaries on Slack.

## 🔗 Nodes Used

Google Sheets, Slack, Google Calendar, Gmail, Google Calendar Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
