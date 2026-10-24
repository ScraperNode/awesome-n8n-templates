# ⚡ Send daily daycare menu, schedule, and weather briefings with Gemini and WhatsApp

> ⚡ **15 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs every morning to fetch a daycare menu from a webpage, read your family schedule from Google Sheets, and pull a local forecast from Open-Meteo, then uses Google Gemini to reliably extract today’s meals and sends a single WhatsApp briefing via CallMeBot.

## How it works
1. Runs every day at 07:00 and calculates today’s date in your configured timezone, stopping if a message was already successfully sent for the same date.
2. On weekdays, downloads the daycare menu webpage, extracts the text around today’s date, and asks Google Gemini to return today’s meals as strict JSON.
3. Verifies Gemini’s response by checking that the quoted “date text seen” exists in the page content, and falls back to reporting the menu as unavailable if verification fails.
4. Reads recurring and date-specific schedule items from a Google Sheets tab named `schedule` and selects the items that match today.
5. Requests an hourly forecast for your coordinates from Open-Meteo and converts it into a deterministic weather summary and child-focused clothing advice.
6. Assembles a single morning briefing message (skipping school menu details on weekends) and sends it to your WhatsApp number via the CallMeBot WhatsApp API.
7. Marks today as sent only after the WhatsApp API response indicates delivery was queued/sent, so failures retry on the next run.

## Setup
1. Add credentials for Google Gemini (API key), Google Sheets (OAuth2), and an HTTP Query Auth credential for CallMeBot containing your WhatsApp API key.
2. Update the settings values for `menu_url`, `timezone`, `latitude`, `longitude`, `whatsapp_phone`, `schedule_sheet_url`, and `output_language` in the “Configure your settings” step.
3. Create a Google Sheet with a `schedule` tab and columns `date | weekday | title | details`, using `YYYY-MM-DD` (plain text) for date-specific items and leaving `date` empty for weekly recurring items.
4. Register your WhatsApp number with CallMeBot to obtain an API key and ensure the target phone number is in international format.
5. Activate the workflow and confirm it runs at 07:00 server time (or adjust the cron expression if needed).

## Requirements
- Google Gemini API key (free tier works)
- Google account for the Sheets schedule
- A WhatsApp number registered with CallMeBot (free for personal use)
- A daycare or school menu page that is publicly viewable without login

## Customization
- Replace the WhatsApp node with Telegram, Slack, Discord or Gmail
- Change output_language in the settings node to translate menus into any language
- Adjust the clothing temperature bands or the 7:00-17:00 daytime window in the weather code node
- Add recurring activities, trips or closures to the Google Sheet without touching the workflow
- Change the send time in the schedule trigger

## Additional info
The menu extraction is designed to never invent food. Gemini must quote the exact date text it found for today, and the workflow verifies that quote exists on the fetched page. If the page is down, has changed, or doesn't list today, the message says so instead of guessing.

Duplicate protection uses workflow static data, which only persists for active (production) runs. Manual test runs will always send.

Menus loaded by JavaScript after the page opens may not be readable by the HTTP node. Check that the menu text appears in the page source.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
