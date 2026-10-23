# ⚡ Send appointment reminders and reschedule alerts with Google Calendar and Telegram

> ⚡ **1 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
Small businesses that run on appointments — barbershops, clinics, consultants, studios — and lose money to no-shows. If your clients are on Telegram, this template confirms bookings for you automatically.

## How it works
1. Two flows run side by side. Every hour, the workflow reads your Google Calendar for appointments in the next 24 hours, extracts each client's Telegram chat id from the event description, and sends a personalized reminder asking them to reply YES to confirm or RESCHEDULE to change it.
2. Separately, a Telegram trigger listens for client replies: when someone asks to reschedule, you get an instant alert on your own Telegram with their message so you can follow up.

## Setup
1. Create a free Telegram bot with @BotFather (takes 2 minutes) and add its token to the Telegram credentials in n8n.
2. Connect your Google account in the Google Calendar node (it uses your Primary calendar).
3. Open **Set Reminder Config** and write your reminder message ({name} and {start} are replaced automatically); open **Set Owner Config** and paste your own Telegram chat id (message @userinfobot to get it).
4. When you create a calendar event, write `ChatID: 123456789` in its description with the client's chat id. Activate the workflow. Done.

## Requirements
- A free n8n account (self-hosted or cloud), a free Telegram bot and a Google account. No coding needed and no extra monthly costs.

## Customization
- Everything editable lives in the two Set nodes — message text and your owner chat id, no code required. Want reminders 48 hours ahead? Change the time window in **Get Tomorrow's Appointments**. Want to catch cancellations too? Extend the keyword list in **Detect Reschedule Request**. Note: Telegram bots can only message people who start the conversation (they tap Start), so this works best for clients already in touch with you.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Calendar, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
