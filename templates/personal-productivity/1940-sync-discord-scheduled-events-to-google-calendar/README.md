# ⚡ Sync Discord scheduled events to Google Calendar

> ⚡ **1,856 views** · ⚡ [Personal Productivity](../)

## Description

This workflow syncs Discord scheduled events to Google Calendar. On a specified schedule, a request to Discord's API is made to get the scheduled events on a particular server. Only the events that have not been created or have recently been updated will be sent to Google Calendar.

## Prerequisites
Discord account and [Discord credentials](https://docs.n8n.io/integrations/builtin/credentials/discord/).
Google account and [Google credentials](https://docs.n8n.io/integrations/builtin/credentials/google/).

## How it works
1. Triggers off on the On schedule node.
2. Gets the scheduled events from Discord.
3. The IDs of the Discord scheduled events are used to get the events from Google Calendar, since the IDs are the same on creation of the Google Calendar event.
4. We can now determine which events are new or have been updated.
5. The new or updated events are created or updated in Google Calendar.

## 🔗 Nodes Used

HTTP Request, Google Calendar, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
