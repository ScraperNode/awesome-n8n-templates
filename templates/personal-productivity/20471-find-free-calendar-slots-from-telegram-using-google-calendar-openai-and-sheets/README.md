# ⚡ Find free calendar slots from Telegram using Google Calendar, OpenAI and Sheets

> ⚡ **2 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow receives Telegram messages or voice notes, uses OpenAI to parse the requested date range and preferred time windows, checks busy times via Google Calendar FreeBusy, then replies with available slots in Telegram and logs each request to Google Sheets.

## How it works
1. Triggers on any new Telegram update and, if the message is a voice note, downloads it and transcribes it with OpenAI.
2. Normalizes the incoming Telegram text into a consistent payload (chat ID, detected language, and request text) and sends a short “finding slots” acknowledgement back to Telegram.
3. Uses OpenAI to parse the request into a bounded date range, time windows (in Europe/Berlin time), and a minimum slot length.
4. Queries Google Calendar’s FreeBusy endpoint for the requested range to get the user’s busy intervals.
5. Calculates free time blocks by merging overlapping busy intervals, subtracting them from each requested window, filtering out slots shorter than the minimum, and excluding time that has already passed.
6. Formats the availability grouped by day and window, sends the result to Telegram, and appends an audit log entry to a Google Sheets tab.

## Setup
1. Create and connect a Telegram bot, then enable the Telegram Trigger so Telegram can deliver updates to your n8n instance.
2. Add OpenAI credentials for audio transcription and request parsing, and select an appropriate model in the OpenAI nodes.
3. Add Google Calendar credentials and select the calendar to check in the FreeBusy request.
4. Add Google Sheets credentials, set the spreadsheet document ID, and create a sheet/tab named `calendar_availability` with the expected header columns.
5. Optionally customize the timezone, default time windows, minimum slot length, and a fallback chat ID in the Config node.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Google Calendar, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
