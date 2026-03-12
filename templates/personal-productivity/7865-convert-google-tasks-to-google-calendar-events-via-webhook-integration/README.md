# ⚡ Convert Google Tasks to Google Calendar events via webhook integration

> ⚡ **591 views** · ⚡ [Personal Productivity](../)

## Description

## Who’s it for

Operators and makers who capture tasks from custom forms, bots, or automations and want them to appear as time-boxed events in Google Calendar with minimal setup.

## How it works

A Webhook receives a payload containing the task title and a due date (as Unix seconds). The workflow formats the date, checks the most recently updated events in your calendar to avoid duplicates, and creates a new 30-minute event (configurable). After creation, it optionally deletes the original task, keeping your Task list clean and your Calendar up to date.

## How to set up

1. Select your Google Tasks and Google Calendar credentials.
2. Open the **Configuration** node and set `tasklistId`, `calendarId` (use `primary` or a specific calendar), `defaultMinutes`, and `eventColor`.
3. Send a sample POST to the Webhook with `{ TaskName, DueDateTimeSeconds }`.
4. Run once in manual mode and, if all looks good, activate.

## Requirements

Google accounts for Tasks and Calendar. Appropriate scopes/permissions in the selected credentials.

## How to customize the workflow

Change the event duration/color in **Configuration**. Adjust duplicate detection by modifying the Calendar search window and query. Map additional fields (e.g., description, attendees) on the Calendar node’s optional fields.

## Tags

Google Calendar, Google Tasks, Webhook, Automation, Productivity

## Categories

Productivity, Google, Calendar

## 🔗 Nodes Used

Webhook, Google Calendar, Google Tasks

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
