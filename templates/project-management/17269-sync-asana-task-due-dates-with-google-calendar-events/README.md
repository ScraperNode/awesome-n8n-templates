# 📋 Sync Asana task due dates with Google Calendar events

> ⚡ **19 views** · 📋 [Project Management](../)

## Description

## Quick Overview
This workflow runs every 15 minutes to sync due dates from Asana tasks in a chosen project into Google Calendar, creating, updating, or deleting calendar events as tasks change, using an `asana_gid` marker in event descriptions to prevent duplicates.

## How it works
1. Runs every 15 minutes on a schedule.
2. Reads the Asana project GID, target Google Calendar ID, and default timed-event duration from the workflow configuration.
3. Fetches all tasks from the specified Asana project, including due dates, completion status, assignee, and task link.
4. Retrieves existing Google Calendar events that contain the `asana_gid:` token in their description to identify previously synced items.
5. Compares tasks to events and decides whether to create a new event, update an existing one, or delete an event when a task is completed, loses its due date, or no longer exists.
6. Creates, updates, or deletes the corresponding Google Calendar events, writing the `asana_gid:<taskGid>` marker into the event description for future runs.
7. Produces a run summary with counts of created, updated, and deleted events.

## Setup
1. Add an Asana credential (Personal Access Token) and select it for the Asana node that reads tasks.
2. Add a Google Calendar OAuth2 credential and select it for the Google Calendar nodes that list, create, update, and delete events.
3. Replace the Asana project GID and Google Calendar ID in the configuration step, and adjust the default timed-event duration if needed.

## 🔗 Nodes Used

Asana, Google Calendar, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
