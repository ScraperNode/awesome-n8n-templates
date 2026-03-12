# ⚡ Auto-block focus time in Google Calendar on busy days

> ⚡ **169 views** · ⚡ [Personal Productivity](../)

## Description

## How it works:
- This flow checks the user's Google calender of events from Sunday to Saturday of current week, to determine how many hours have been booked each day.
- If a day has over 6 hours booked, it blocks out the remaining work hours for dedicated focus time. 
- The flow assumes 8 work hours per day. For example, if the Monday of this week has 6.5 hours booked (for meetings, tasks etc.), it automatically blocks off the remaining 1.5 hours for dedicated focus time, so external users can see and not book new events for those hours.
- Benefit: Prevents users from being overloaded with meetings and gives time for dedicated deep work/focus time.  

## Set up steps:
- Update start time of the "Schedule Trigger," this is the time the flow will run daily. Note: the workflow assumes a 9AM-5PM work schedule so it's recommended to schedule the flow to trigger before 9AM.
- Update the credentials for the "Get Full Weeks Events" and "Create Focus Time Event" nodes. Use your Google credentials so the workflow can connect to your Google calendar.

## 🔗 Nodes Used

Google Calendar, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
