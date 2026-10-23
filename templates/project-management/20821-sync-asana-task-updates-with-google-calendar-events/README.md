# 📋 Sync Asana task updates with Google Calendar events

> ⚡ **0 views** · 📋 [Project Management](../)

## Description

## Quick overview
When an Asana task changes, update the linked Google Calendar event to match. It finds the event through an n8n data table sync log, then syncs the title, description, start and end times and attendees, using task followers from your company domain.

## How it works
1. An Asana trigger fires when a task in your chosen workspace and project changes. Other change types are ignored.
2. The workflow looks up the task’s row in the sync log (an n8n data table) and skips changes that were already synced, based on the stored last-synced time. Tasks without a log row are ignored.
3. It loads the Asana task, its assignee and followers, and the linked Google Calendar event.
4. It compares the task to the event: name, description, start and end times, and followers against company attendees.
5. For each difference it updates the event:
   * The task name becomes the event title.
   * The task notes become the event description.
   * The task’s start and due times become the event’s start and end.
   * New followers are added as attendees.
   * Company attendees who no longer follow the task are removed.
6. When several fields changed, all updates run in the same pass.
7. The task’s last modified time is saved to the sync log, so the same change is not processed twice.

## Setup
1. Connect your Asana OAuth2 account. In the Asana trigger, choose the workspace and the project to monitor (the project where your tasks live).
2. Connect your Google Calendar OAuth2 account. It must be allowed to edit the events you want to update.
3. Use the same n8n data table as the companion workflow, with the text columns CalendarEventID, AsanaTaskID and LastSyncedUpdate. Select it in both Data Table nodes (Get Sync Data and Update Sync Log).
4. Open the Set configuration node and enter the calendar ID (“primary” works for your main calendar) and your company email domain (for example yourcompany.com). The domain decides which attendees are added or removed.
5. Activate the workflow, then change a task in Asana (for example its name or due time) and check that the calendar event follows.

## Requirements
- An Asana account with access to the project you monitor
- A Google Calendar account that can edit the synced events (Google lets only the organiser, or guests with modify rights, change attendees)
- An n8n version with Data Tables
- An n8n instance reachable from the internet, so Asana can send webhook events
- The sync log filled by the companion template, “Sync Google Calendar events to Asana tasks”

## Customization
- Remove any branch after “Route by detected change” if you don’t want that field synced back to the calendar.
- Change the monitored project in the Asana trigger.
- Change the company domain to control who is added or removed as an attendee.

## Additional info
* This is the second half of a two-way sync. The companion template creates the tasks and the sync log. This one sends Asana edits back to the calendar. Install both for a full sync.
* Reschedule meetings from Asana: when you change a task’s start and due times, the calendar event moves to match.
* Only tasks that already have a row in the sync log are synced. Tasks you create by hand in Asana are ignored.
* The event description is replaced with the task’s plain-text notes.
* The task’s assignee is treated as the organiser and is never added or removed as an attendee.

## 🔗 Nodes Used

Asana, Asana Trigger, Google Calendar, Filter, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
