# ⚡ Daily calendar digest: Format Google Calendar events with Claude 3.5 Sonnet for Telegram

> ⚡ **456 views** · ⚡ [Personal Productivity](../)

## Description

## How it works
Every day at 6:00 AM, the workflow pulls all events from your Google Calendar scheduled for that day.
It extracts each event’s ID, title, and start time, aggregates them into one list, and converts them into a text string.
This text is passed to an AI-powered Information Extractor (using Claude 3.5 Sonnet) to format the events into a clear daily summary.
Finally, the summary is sent as a Telegram message to your chosen chat ID, giving you a ready-to-read daily to-do list.

## How to use

Connect your Google Calendar account to the Get many events node.

Set the correct calendar in the calendar field.

Link your Telegram account and set your chatId in the Send a text message node.

Adjust the Schedule Trigger node if you want a different reminder time.

Activate the workflow — it will run daily and send your event summary to Telegram automatically.

## Customising this workflow

Reminder time: Change triggerAtHour in the Schedule Trigger node for morning, evening, or multiple reminders per day.

Calendar source: Switch to another Google Calendar or add multiple Get many events nodes for different calendars.

Message style: Edit the Information Extractor system prompt to change language, formatting, or level of detail in your summary.

Delivery channel: Replace or add another messaging node (e.g., Email, Slack, WhatsApp) if you want your to-do list in different apps.

Event filtering: Add a filter before aggregation to include only certain event types or keywords (e.g., “Meeting”, “Deadline”).

## 🔗 Nodes Used

Telegram, Google Calendar, Schedule Trigger, Anthropic Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
