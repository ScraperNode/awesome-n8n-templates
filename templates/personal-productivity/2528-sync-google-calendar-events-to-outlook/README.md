# ⚡ Sync Google Calendar events to Outlook

> ⚡ **6,337 views** · ⚡ [Personal Productivity](../)

## Description

## What this workflow does
This workflow is used as a bridge between your private Google Calendar to your Work Outlook Calendar. The same mentality can be used with other calendar types.

## Description
Send a copy of a Google Calendar event to your Outlook work account as a reminder to yourself or co-workers that you are booked for private matters like "Dentist appointment", "Taking kids to Disney Land" etc.

## How it works
- Create event
-- You create a Google Calendar event.
-- A trigger in n8n reacts and collects the event info.
-- An Outlook event is created with the same information in your Outlook Calendar.
- Cancel
-- You cancel an event in Google Calendar
-- A trigger in n8n reacts and collects the canceled event info.
-- Using the Outlook node to getAll events searches for the event in your Outlook Calendar.
-- If the event is found it is then deleted.
-- An email with the details of the cancelation is then sent to your Outook e-mail address.

The n8n Merge node is used to combine results from two different nodes that are necessary to create the cancelled event e-mail notification.

## Important notice
Make sure you use a dedicated Google Calendar for private events that will be displayed in your work Outlook calendar in order to avoid displaying unwanted calendar events that you do not wish to share with your co-workers.

## Requirements
- Active workflow*
- Google Calendar OAuth2 API
- Microsoft Outlook OAuth2 API

.*The Google Calendar trigger is activated only if this workflow is active. You can however TEST the workflow in the editor by clicking “Test step”. You will then receive a response from Google Calendar that you can use in order to view what data Google Sends.

## 🔗 Nodes Used

Microsoft Outlook, Google Calendar Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
