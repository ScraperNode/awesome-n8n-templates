# 🔧 Book property viewings and send reminders with Google Calendar, Sheets and Gmail

> ⚡ **17 views** · 🔧 [Miscellaneous](../)

## Description

## Quick Overview
This workflow accepts property viewing requests via a webhook, checks availability in Google Calendar, logs confirmed bookings in Google Sheets, and emails confirmations and alternative time suggestions via Gmail, then runs hourly to send reminder emails for upcoming viewings.

## How it works
1. Receives a property viewing request via a POST webhook with buyer details, listing reference, and preferred date/time.
2. Validates the request against configured working days, opening hours, and minimum notice, and returns a 422 response if required fields are missing or invalid.
3. Checks the requested time window (including a buffer) against Google Calendar availability.
4. If the slot is free, creates a Google Calendar event, appends the booking to the “Viewings” tab in Google Sheets, emails a confirmation via Gmail (BCC to the agent), and returns a success response to the caller.
5. If the slot is busy, reads upcoming events from Google Calendar, computes the closest available alternative slots, emails the alternatives via Gmail, and returns a 409 response with the alternatives.
6. Runs every hour, reads booked viewings from Google Sheets that start within the reminder window and have not been reminded yet, sends reminder emails via Gmail, and updates the row to mark the reminder as sent.

## Setup
1. Add credentials for Google Calendar, Google Sheets, and Gmail in n8n.
2. Update the Config values for your Google Sheet ID, calendar ID, time zone, agent/agency details, working days/hours, viewing duration, buffers, and reminder timing.
3. Create a Google Sheets document with a “Viewings” sheet and columns matching the workflow fields (including “Viewing ID” and “Reminder Sent At”).
4. Copy the webhook URL from the webhook trigger and configure your website form or booking tool to POST the required fields (email, listing_ref, and start/date+time).

## 🔗 Nodes Used

Google Sheets, Webhook, Google Calendar, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
