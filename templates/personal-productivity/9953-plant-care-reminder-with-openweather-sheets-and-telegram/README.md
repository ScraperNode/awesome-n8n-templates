# ⚡ Plant care reminder with OpenWeather, Sheets and Telegram

> ⚡ **296 views** · ⚡ [Personal Productivity](../)

## Description

This workflow automates plant care reminders and records using Google Sheets, Telegram, and OpenWeather API.

It checks when each plant needs watering or fertilizing, sends a personalized reminder, and lets you confirm the task with a single button.
When confirmed, it updates your Google Sheet and shows a confirmation HTML page.

## Who is it for?

Home gardeners who want to automate watering and fertilizing schedules. 

Anyone managing a plant collection, greenhouse, or garden and wanting a lightweight, no-code reminder system.

## How it works

1. Schedule Trigger starts the workflow once per day.
2. Read Settings (Google Sheets) checks if vacation_mode is active.
3. Read Plants (Google Sheets) retrieves all plants with columns such as id, plant, last_water, water_freq, etc.
4. DecideDue (Code Node) compares today’s date with the last watering/fertilizing date and marks which plants are due.
5. OpenWeather Request (optional) fetches local forecast for plants with coordinates and weather_delay = true.
6. WeatherGate (Code Node) skips or delays watering if it recently rained or if rain is expected soon.
7. Telegram Send Message sends a reminder for each due task.
8. The message contains an inline button “Mark as done” linking to your webhook URL (opens confirmation window).
9. Webhook – Confirm Done receives the click, update dates on Google Sheets, appends an optional log entry, and returns an HTML confirmation page.

## Setup steps Principal Workflow
1. Spreadsheet- Create a Google Sheets document with:
	1. plants sheet: (id, plant, last_water, water_freq, last_fert, fert_freq, lat, lon, weather_delay , indoor, thirst_level)
	2. settings sheet: (vacation_mode, timezone)
	3. log sheet: (ts, plant_id, action	message_id)
2. Connect your Google account
3. Configure the Schedule Trigger
4. Enable weather integration (Get a free OpenWeather API key) and add it to the HTTP Request node parameters **appid**. **https://openweathermap.org/api**
5. Configure Telegram with your credential and your chat id on **{YOUR_CHAT_ID}**.
6. Configure "Send Dues" node with your custom url https://**{YOUR_PROJECT_URL}**.app.n8n...

## Setup steps Sub-Workflow (Webhook)

1. Trigger: Configure your custom Path.

2. Google Sheets: Connect your Google Account and Map sheets and columns.

## Requirements

· A Google account with access to Google Sheets.
. A spreadsheet containing three sheets with headers matching the field names used in the workflow.
. A telegram bot.
. OpenWeather API key for climate-aware watering.

## How to customise it

Add plant photos: Include a photo URL column and show it in the Telegram message.

Extend actions: Add pruning, repotting or any other periodic task by duplicating the existing logic.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
