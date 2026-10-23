# 🎫 Cut appointment no-shows with staged reminders, reply triage and waitlist backfill

> ⚡ **13 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs every 6 hours to read upcoming appointments (demo data or Google Sheets), generate WhatsApp- or email-ready reminder messages based on how soon the appointment starts, and route same-day reminders to a priority dispatch lane.

## How it works
1. Runs every 6 hours on a schedule.
2. Loads appointment rows from the built-in demo data (or from Google Sheets when enabled).
3. Filters to appointments starting within the next 48 hours and generates a reminder message, choosing a shorter template for appointments within 3 hours.
4. Uses each record’s channel preference to target WhatsApp (phone number) or email (email address).
5. Splits same-day reminders from upcoming reminders to handle urgent messages separately.
6. Labels each reminder with a dispatch queue and timestamp so you can connect WhatsApp and email sending steps.

## Setup
1. If using Google Sheets, enable the Google Sheets node, add Google Sheets credentials, set your spreadsheet ID and sheet name, and ensure columns exist for appointment_id, customer_name, phone, email, starts_at (ISO), practitioner, treatment, and channel_preference.
2. Add your sending integrations after both dispatch branches (for example, WhatsApp Business Cloud for WhatsApp and Gmail/SMTP for email) and configure the recipient field to use the workflow’s prepared “to” value.
3. Adjust the reminder windows and message text in the message-building step (48-hour inclusion window and 3-hour same-day threshold) to match your reminder policy.

## Requirements
- n8n (any plan). For production: a Google Sheets credential and a WhatsApp Business Cloud or email sending credential.

## Customization
- Reminder window (48h) and same-day threshold (3h) are plain constants in the message-builder node; message texts are editable strings.

## 🔗 Nodes Used

Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
