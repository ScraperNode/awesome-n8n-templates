# 🤝 Automate Calendly sales meetings with HubSpot, Google, ClickUp and Slack

> ⚡ **43 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How it works
This workflow automatically manages every new Calendly booking from start to finish. When a prospect books a meeting, it captures all details, syncs everything to HubSpot, creates a prep task for the sales rep, sends confirmation and reminder emails, and notifies the team — all without any manual effort.

## Step-by-step
- **Trigger & format**
  - **Calendly — New Booking** – Listens for new `invitee.created` events when a prospect books a meeting.
  - **Format Booking Data** – Extracts and normalizes all booking details including name, email, company, phone, meeting time, join URL, reschedule and cancel links, and computes reminder timestamps.

- **Logging**
  - **Google Sheets — Log Booking** – Appends all booking details including name, email, company, event type, meeting time, and join URL to a Google Sheets tracker.

- **CRM sync**
  - **HubSpot — Search Contact by Email** – Searches HubSpot to check if the prospect already exists by email.
  - **IF — Contact Exists in HubSpot?** – Routes to update or create based on whether a matching contact is found.
  - **Update HubSpot Contact** – Updates the existing contact with the latest name, phone, company, and lead source.
  - **Create HubSpot Contact** – Creates a new HubSpot contact with all prospect details if none exists.
  - **Set — Contact ID** – Normalizes the contact ID from either branch so all downstream nodes reference it consistently.

- **Calendar & deal creation**
  - **Google Calendar — Create Rep Event** – Creates a 30-minute meeting event on the sales rep's Google Calendar with join URL, prospect details, and reschedule/cancel links.
  - **HubSpot — Get Owner ID** – Fetches the HubSpot owner to assign the deal to the correct sales rep.
  - **HubSpot — Create a Deal** – Creates a new deal in the `appointmentscheduled` stage linked to the contact, with meeting details and next steps.

- **Preparation & confirmation**
  - **ClickUp — Create Prep Task** – Creates a pre-call research task in ClickUp with a full checklist covering LinkedIn research, company background, discovery questions, and competitor analysis. Due 2 hours before the meeting.
  - **Gmail — Send Confirmation** – Sends a polished HTML confirmation email to the prospect with meeting details, join button, and reschedule/cancel options.

- **Team notification & CRM logging**
  - **HubSpot Log Note** – Logs a full activity note in HubSpot linked to both the contact and the deal, including all meeting details and the ClickUp prep task link.
  - **Slack — Notify Sales Channel** – Posts a booking alert to the sales Slack channel with prospect info, meeting time, join URL, and confirmation of all actions taken.

- **Automated reminders**
  - **Wait — Until 24h Before Meeting** – Pauses execution until exactly 24 hours before the scheduled meeting.
  - **Gmail — Send 24h Reminder** – Sends an HTML reminder email with meeting details, join link, and a pre-call checklist.
  - **Wait — Until 1h Before Meeting** – Pauses execution until exactly 1 hour before the meeting.
  - **Gmail — Send 1h Reminder** – Sends a final HTML reminder email with a prominent join button and last-minute tips.

## Why use this?
- Eliminates all manual admin after a Calendly booking by instantly syncing data across HubSpot, Google Sheets, and Google Calendar
- Auto-creates or updates HubSpot contacts and deals so no lead ever falls through the cracks
- Gives sales reps a structured ClickUp prep task with a research checklist before every call
- Keeps prospects engaged and informed with a confirmation email plus automated 24h and 1h reminders
- Notifies the entire sales team in Slack the moment a new meeting is booked

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, ClickUp, Calendly Trigger, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
