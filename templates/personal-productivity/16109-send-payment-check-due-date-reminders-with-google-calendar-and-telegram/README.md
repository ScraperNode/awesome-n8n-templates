# ⚡ Send payment check due-date reminders with Google Calendar and Telegram

> ⚡ **24 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs on schedules to pull upcoming “check due” events from Google Calendar and send grouped reminders to a Telegram chat for items due today, tomorrow, and within the next week.

## How it works
1. Runs on two daily schedules (for today and tomorrow reminders) and a weekly schedule (for the next-week overview).
2. Fetches events from the selected Google Calendar for the relevant date range.
3. Filters events to those due today or within the next 24 hours (tomorrow reminder) based on the event start date.
4. Aggregates matching events into a single list and sends a formatted reminder message to your Telegram group chat for due-today and due-tomorrow items.
5. On the weekly run, filters events whose title contains the configured check label (for example, “BDO Check No.”).
6. If any matching events are found, aggregates them and sends a “due until next week” reminder to Telegram.

## Setup
1. Add a Google Calendar OAuth2 credential and set the correct calendar ID on all Google Calendar nodes.
2. Add a Telegram Bot API credential and replace `YOUR_TELEGRAM_GROUP_CHAT_ID` with your target Telegram group/chat ID.
3. Update the check label text used to match events (for example, “BDO Check No.”) to fit your event naming convention.
4. Adjust the schedule triggers (daily and weekly run times and timezone) to match when you want reminders sent.

## 🔗 Nodes Used

Telegram, Google Calendar, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
