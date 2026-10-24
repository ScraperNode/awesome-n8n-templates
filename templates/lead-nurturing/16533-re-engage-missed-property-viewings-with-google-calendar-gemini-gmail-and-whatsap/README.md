# 💬 Re-engage missed property viewings with Google Calendar, Gemini, Gmail, and WhatsApp

> ⚡ **71 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
When a buyer misses a scheduled viewing, this workflow automatically sends an AI-personalized follow-up by email and WhatsApp using Google Gemini, then logs the outcome to Google Sheets, recovering leads that would otherwise go cold.

## How it works
1. Triggers every 15 minutes when a Google Calendar event is updated in the selected viewings calendar.
2. Checks the event title/summary and continues only if it contains the tag “no-show”.
3. Extracts the lead’s name, email, phone, property address, and scheduled viewing time from the calendar event details.
4. Sends the lead and viewing context to Google Gemini to generate an email message and a WhatsApp message in JSON format.
5. Parses and cleans the AI output into safe HTML for email and a trimmed plain-text WhatsApp message.
6. Sends the re-engagement email via Gmail and appends the follow-up outcome to a Google Sheets log.
7. If a phone number is available, sends the WhatsApp message and updates a Google Sheets status field to record that WhatsApp was sent.

## Setup
1. Connect credentials for Google Calendar, Gmail, Google Sheets, and a Google Gemini (PaLM) API key.
2. Select the correct Google Calendar (viewings calendar) and ensure missed appointments are consistently tagged with “no-show” in the event summary.
3. Create or choose a Google Sheets document and sheet, then fill in the document ID/URL, sheet name, and the columns expected by the append/update logging steps.
4. Configure WhatsApp credentials in n8n (or disable the WhatsApp branch) and ensure lead phone numbers are stored in the calendar event description in the expected format (e.g.,  Name: ... | Email: ... | Phone: ... |).

## Requirements
- Before running this workflow, create a Google Sheet with these exact column headers:  Record ID | Lead Name | Email | Phone | Property Address | Original Viewing Time | Email Sent | WhatsApp Sent | Email Message Text | WhatsApp Message Text | Timestamp

## Customization
- Edit the AI prompt in "Draft Re-Engagement Messages" to change tone or language
- Add SMS or other channels by duplicating the WhatsApp branch pattern
- Adjust the "no-show" tag keyword if your calendar uses different terminology

## Additional info
WhatsApp is optional. If you don't have WhatsApp Business Cloud API credentials, disable that branch — the email follow-up will still send normally.

This template assumes calendar events are tagged with "no-show" in the title and  include lead contact info in the event description (Name: ... | Email: ... | Phone: ... |).

## 🔗 Nodes Used

Google Sheets, Gmail, Google Calendar Trigger, WhatsApp Business Cloud, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
