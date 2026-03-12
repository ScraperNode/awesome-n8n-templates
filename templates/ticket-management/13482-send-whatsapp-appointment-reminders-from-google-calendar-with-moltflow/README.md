# 🎫 Send WhatsApp appointment reminders from Google Calendar with MoltFlow

> ⚡ **21 views** · 🎫 [Ticket Management & Triage](../)

## Description

## What this template does

Automatically sends WhatsApp reminders for upcoming appointments from your Google Calendar using MoltFlow (https://molt.waiflow.app). Perfect for clinics, salons, consultants, and any appointment-based business.

## How it works

1. Runs every hour and checks your Google Calendar for the next 24 hours
2. Finds appointments with client phone numbers in the event description
3. Extracts client name and appointment details
4. Sends a personalized WhatsApp reminder asking for confirmation
5. Logs the results for tracking

## Set up steps

1. Create a MoltFlow account (https://molt.waiflow.app) and connect your WhatsApp number
2. Generate an API key in MoltFlow (Sessions page, API Keys tab)
3. Connect your Google Calendar OAuth2 credential
4. Set your calendar ID (default: primary)
5. Set YOUR_SESSION_ID in the Format Reminders code node
6. Add your MoltFlow API key as an HTTP Header Auth credential (Header Name: X-API-Key)
7. Add client phone numbers to calendar event descriptions in the format: Phone: 1234567890

## Prerequisites

- MoltFlow account with an active WhatsApp session
- Google Calendar with client phone numbers in event descriptions
- Format: add "Phone: 1234567890" to the event description field

## 🔗 Nodes Used

HTTP Request, Google Calendar, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
