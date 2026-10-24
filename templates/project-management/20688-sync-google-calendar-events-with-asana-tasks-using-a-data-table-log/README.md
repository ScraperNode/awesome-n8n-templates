# 📋 Sync Google Calendar events with Asana tasks using a data table log

> ⚡ **1 views** · 📋 [Project Management](../)

## Description

## Quick overview
Every hour, sync Google Calendar events to Asana tasks, so meeting times and availability show up in Asana. An n8n data table logs each event, so tasks are created, updated or deleted as events change; organisers are assigned, company attendees follow.

## How it works
1. A schedule trigger runs every hour. It loads standard Google Calendar events from the last 3 days to the end of your configured window (2 weeks by default), including cancelled ones.
2. It reads the sync log from an n8n data table and matches each event to its logged Asana task ID.
3. For each event it decides what to do: create a task when the event has no task yet, update it when the event changed after the last sync, delete it when the event is cancelled or you declined it, or skip it when nothing changed.
4. When it creates or updates a task, it looks up the users in your Asana workspace. The event organiser becomes the assignee, so the meeting time counts toward their availability. Attendees from your company domain who accepted or are tentative become followers.
5. The task gets the event title, description, start and end time, and a pinned comment with the event summary and a Google Calendar link.
6. Before a task is deleted, a pinned comment explains why.
7. The sync log is updated with the task ID and the event’s last-updated time, so nothing is duplicated.

## Setup
1. In n8n, create a data table with three text columns: CalendarEventID, AsanaTaskID, LastSyncedUpdate.
2. Select that table in the three Data Table nodes (Get sync records, Create Sync Record, Update Sync Log).
3. Connect your Google Calendar and Asana OAuth2 accounts.
4. Open the Set configuration node and fill in: calendar ID (“primary” works for your main calendar), Asana workspace GID, Asana project GID (the project where tasks are created), company email domain (for example yourcompany.com), your time zone (for example Europe/London) and the sync window.
5. Run it once manually and check the tasks in Asana, then activate the workflow.

## Requirements
- A Google Calendar account with access to the calendar you want to sync
- An Asana account with permission to create tasks in the target project, and a plan that supports start dates (Asana’s paid plans)
- An n8n version with Data Tables
- The Asana workspace GID and project GID

## Customization
- Change the interval in the schedule trigger.
- Change the end of the sync window (period and number of periods) in Set configuration.
- Change the comment wording in the two “Prepare” code nodes.
- Change the time zone used for the times in the comment.

## Additional info
* User availability in Asana: the events of the connected calendar become Asana tasks with the event’s start and end time, so the calendar owner’s busy time is visible in Asana next to their work. Each task is assigned to the event’s organiser. Attendees from your company who accepted or are tentative follow it.
* Only standard events are synced. Focus time, out-of-office and working-location events are skipped.
* An organiser who is not in the Asana workspace is replaced by the connected Asana account. Followers are added but never removed.
* A task is deleted when its event is cancelled or you decline it.
* This is the first half of a two-way sync. The companion template, “Sync Asana task changes to Google Calendar events”, writes Asana edits back to the calendar and uses the same data table.

## 🔗 Nodes Used

Asana, HTTP Request, Google Calendar, Schedule Trigger, Filter, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
