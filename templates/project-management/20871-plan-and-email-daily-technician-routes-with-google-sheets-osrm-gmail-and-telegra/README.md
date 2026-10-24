# 📋 Plan and email daily technician routes with Google Sheets, OSRM, Gmail and Telegram

> ⚡ **0 views** · 📋 [Project Management](../)

## Description

## Quick overview
Each morning, pulls today's visits from Google Sheets, builds the shortest driving order from real OSRM road times, and emails the technician a run sheet with arrival times. Dispatch is alerted in Telegram only when the day overruns working hours.

## How it works
1. Runs on a cron schedule every morning (Mon–Sat) to start planning the day’s route.
2. Reads rows from the Google Sheets “Visits” tab and keeps only today’s visits with valid coordinates that are not marked done or cancelled.
3. Builds an OSRM Table API request to fetch a drive-time matrix between the depot and all stops, and falls back to straight-line time estimates if OSRM is unavailable.
4. Optimizes the stop sequence using a nearest-neighbor pass followed by 2‑opt improvements while keeping any visits pinned as “first” or “last” in place.
5. Calculates chained ETAs and departure times from the configured day start, adds buffers and visit durations, and flags stops that push the route past end-of-day.
6. Appends or updates the numbered route in the Google Sheets “Routes” tab, emails the technician the HTML run sheet via Gmail, and sends a Telegram alert to dispatch only when the route overruns working hours.

## Setup
1. Create a Google Sheets document with a “Visits” tab (including visit_id, visit_date, lat, lng, duration_minutes, pin, status, and contact/job fields) and a “Routes” tab with columns matching the route output.
2. Add a Google Sheets credential in n8n and replace the placeholder spreadsheet ID in both Google Sheets nodes.
3. Edit the configuration in the code step to set depot coordinates, timezone, working hours, default visit length, buffer, return-to-depot behavior, and stop limit.
4. Add a Gmail credential and replace the technician email address in the email step.
5. Add a Telegram credential and replace the dispatcher chat ID in the Telegram step.

## Requirements
- A Google Sheet with a Visits tab and a Routes tab (headers listed in the setup sticky note)
- Google Sheets and Gmail credentials
- A Telegram bot and chat ID for the dispatcher alert
- No API key for routing: the public OSRM demo server needs none, and its matrix limit is why the template caps a day at 24 stops

## Customization
- Swap the schedule trigger for a webhook so dispatch can replan after a new job lands mid-morning.
- Set RETURN_TO_DEPOT to false for technicians who take the van home.
- Raise BUFFER_MINUTES for sites with parking or security check-in.
- Point the HTTP request at your own OSRM instance or another matrix provider for traffic-aware times or more than 24 stops.
- Replace Gmail and Telegram with Slack, SMS or your field service app without touching the optimisation nodes.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
