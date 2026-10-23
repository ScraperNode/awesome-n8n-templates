# ⚡ Capture Telegram voice notes as tasks and events with OpenAI and Google

> ⚡ **40 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow listens for Telegram voice notes or text messages, uses OpenAI to transcribe and extract structured tasks and calendar events, appends tasks to Google Sheets, creates events in Google Calendar, and replies in Telegram with a summary of what was saved.

## How it works
1. Triggers when a new Telegram message is received and blocks unknown senders by checking the sender ID against an allow list.
2. If the message is a voice note, downloads it from Telegram and transcribes it with OpenAI.
3. Sends the transcribed or typed text to an OpenAI chat model that extracts a summary plus structured task and calendar event data using your timezone.
4. Normalizes the extracted data by filling missing task fields and applying a default duration to events that don’t include an end time.
5. Appends each extracted task as a new row in Google Sheets.
6. Creates each extracted event in Google Calendar with the parsed start/end times and optional location.
7. Replies in Telegram with a human-readable confirmation listing the tasks and events that were saved.

## Setup
1. Create a Telegram bot and connect your Telegram Bot API credentials in the Telegram trigger and reply nodes.
2. Add OpenAI API credentials for audio transcription and the chat model used to extract tasks and events.
3. Connect Google Sheets and Google Calendar credentials, then set the target spreadsheet/tab and calendar ID.
4. Update the configuration values (allowed Telegram user ID, sheet ID/name, calendar ID, timezone, and default event length) before activating the workflow.
5. Ensure your Google Sheet tab (for example, “Captured Tasks”) has columns for Task, Source, Status, Due Date, Priority, and Captured At.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Google Calendar, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
