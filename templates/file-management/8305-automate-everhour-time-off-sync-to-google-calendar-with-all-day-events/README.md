# 📁 Automate Everhour time-off sync to Google Calendar with all-day events

> ⚡ **133 views** · 📁 [File Management](../)

## Description

## Who’s it for
Teams that track absences in **Everhour** and want a shared **Google Calendar** view for quick planning. Ideal for managers, HR/OPS, and teammates who need instant visibility into approved time off.

## What it does
- Pulls **approved time-off** from Everhour on a schedule  
- Creates/updates **all-day events** per day of absence in Google Calendar  
- Removes **stale events** if a request changes or is canceled  
- Uses a stable external key (`everhour:ASSIGNMENT_ID:YYYY-MM-DD`) to avoid duplicates

## How it works
A **Schedule Trigger** runs periodically → the workflow fetches Everhour assignments, filters **approved** time-off, expands multi-day requests into single-day items, then **searches by external key** to either create or update events. Separate cleanup steps **list** calendar events and **delete** any that are no longer present in Everhour.

## How to set up
1. In n8n, create an **HTTP Header Auth** credential for Everhour with header `X-Api-Key: {YOUR_EVERHOUR_API_KEY}
`.  
2. Add a **Google Calendar OAuth** credential.  
3. Open the **Config** node and set your `calendarId` (e.g., `team@group.calendar.google.com`).  
4. Enable the workflow and choose your schedule.

## Requirements
- Everhour account with API access  
- Google Calendar (workspace or personal)  
- n8n Cloud or self-hosted

## How to customize the workflow
- Adjust the **schedule** (hourly/daily).  
- Filter by **user** or **time-off type**.  
- Tweak the **event title/description** templates.  
- Point to multiple calendars (duplicate the create/update branch per calendar).

## 🔗 Nodes Used

HTTP Request, Google Calendar, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
