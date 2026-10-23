# ⚡ Send Outlook calendar due reminders to Telegram for today, tomorrow and week

> ⚡ **48 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow monitors a Microsoft Outlook calendar on a schedule and sends Telegram group digests for events due today, tomorrow, and within the next week.

## How it works
1. Runs daily at midnight to fetch events from a selected Microsoft Outlook calendar and filters them to only those happening today.
2. Aggregates today’s matching events into a single list and sends a Telegram message with the subjects and dates.
3. Runs daily to fetch events from the same Microsoft Outlook calendar and filters them to only those starting within the next 24 hours.
4. Aggregates tomorrow’s matching events into a single list and sends a Telegram message with the subjects and dates.
5. Runs weekly to fetch all upcoming events from the Microsoft Outlook calendar and filters them to only those occurring between now and one week from now.
6. If there are any events in that window, aggregates them into a single list and sends a Telegram weekly digest with the subjects and dates.

## Setup
1. Add Microsoft Outlook OAuth2 credentials and select the target calendar (update the calendar ID where it is set to `YOUR_OUTLOOK_CALENDAR_ID`).
2. Add Telegram Bot API credentials, then set the destination `YOUR_TELEGRAM_GROUP_CHAT_ID` in each Telegram message action.
3. Adjust the schedule trigger times (daily and weekly) to match your timezone and reminder cadence.
4. Edit the Telegram message templates to match your team’s wording and @mentions.

## 🔗 Nodes Used

Telegram, Microsoft Outlook, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
