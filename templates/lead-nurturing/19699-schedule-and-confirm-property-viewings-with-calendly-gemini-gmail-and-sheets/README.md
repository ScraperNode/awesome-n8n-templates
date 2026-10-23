# 💬 Schedule and confirm property viewings with Calendly, Gemini, Gmail and Sheets

> ⚡ **3 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow receives property viewing requests via webhook, uses Google Gemini/OpenAI/Anthropic to draft a proposed schedule with a Calendly link, sends the proposal via Gmail, and logs it to Google Sheets; when Calendly confirms a booking, it creates a Google Calendar event, emails confirmations, and sends 24-hour reminders.

## How it works
1. Receives a viewing request via an HTTP webhook (or an optional Google Sheets row-added trigger) and normalizes the lead and property details.
2. Builds up to three proposed viewing slots from your configured weekly availability, duration, and days-ahead window, and generates a Calendly booking URL.
3. Uses the selected AI engine (Google Gemini, OpenAI, or Anthropic Claude) to draft a personalized email subject/body and a short SMS-style message.
4. Sends the viewing proposal email to the lead via Gmail and appends the request, proposed slots, and status to a Google Sheets log.
5. Receives a Calendly booking webhook, extracts invitee and event timing details, and calculates the reminder time 24 hours before the viewing.
6. Creates a Google Calendar event with the lead and agent as attendees, sends booking confirmation emails to both via Gmail, and updates the Google Sheets row to Status = Booked.
7. Waits until 24 hours before the scheduled start time, then emails reminders to the lead and agent and marks the reminder as sent in Google Sheets.

## Setup
1. Add credentials for Gmail, Google Sheets, and Google Calendar, and select the correct spreadsheet/document ID and sheet for the append/update actions.
2. Configure Calendly to send an invitee.created webhook to the workflow’s “calendly-booking-received” production webhook URL.
3. Choose and configure your AI provider (Google Gemini API credentials, or enable OpenAI and add an OpenAI API key, or set an Anthropic API key in the configuration) and set AI_ENGINE accordingly.
4. Update both agent configuration sections with your agent details, Calendly username/event slug, property address/URL, and your weekly availability hours, slot duration, and days-ahead settings.

## Requirements
- Calendly setup: Create a free Calendly account and an event type named Property Viewing (or any name). Your booking URL will be calendly.com/YOUR_USERNAME/YOUR_EVENT_SLUG. Register the Phase 2 webhook URL in Calendly → Integrations → Webhooks → subscribe to invitee.created. The Phase 2 webhook URL requires a permanent public n8n URL — not localhost. For local testing, use a Cloudflare tunnel.
- Google Sheets setup: Create a sheet named Viewing Requests with these columns: Record ID, Timestamp, Lead Name, Email, Phone, Property, Slot 1, Slot 2, Slot 3, AI Engine Used, Email Sent, Status, Calendly Event URL, Viewing Start, Viewing End, Reminder Sent.
- Only one AI credential is required. Connect the engine you prefer and set AI_ENGINE in the Configuration node to match.

## Customization
- Change AI_ENGINE in the Configuration node to Gemini, ChatGPT, or Claude — all three nodes are on canvas, only the selected one fires.
- Adjust SLOT_DAYS_AHEAD to look further ahead for available slots — default is 7 days.
- Adjust VIEWING_DURATION to match your standard viewing length — default is 30 minutes.
- Edit availability hours per day in the Configuration node — set empty string for days the agent is unavailable.
- Chain from any previous QualMatic template — send an HTTP POST request to the Phase 1 webhook URL with lead details to trigger the viewing proposal automatically when a Hot lead is identified.

## Additional info
Two-phase architecture. This template contains two independent execution phases in one workflow. Phase 1 fires when a viewing request arrives. Phase 2 fires when Calendly sends a booking webhook. Both phases have their own Configuration node — this is intentional because each phase starts a fresh execution context. Keep both Config nodes updated with the same values.

Wait node behavior. The Wait node pauses workflow execution until exactly 24 hours before the viewing start time. If the reminderTime has already passed when Phase 2 fires (for same-day bookings), the Wait node fires immediately rather than waiting — reminders still send.

Template chaining. This template is designed to work downstream from the QualMatic lead qualification templates. When Template #5, #6, or #10 identifies a Hot lead, add one HTTP Request node to that workflow pointing to this template's Phase 1 webhook URL — passing leadName, leadEmail, leadPhone, and propertyAddress. The viewing proposal fires automatically without any agent action.

Template#5
https://n8n.io/workflows/17258-qualify-facebook-lead-ads-and-send-follow-ups-with-gemini-gmail-and-sheets/

Template#6
https://n8n.io/workflows/17409-qualify-inbound-real-estate-leads-from-gmail-with-gemini-and-hubspot/

Template#10
https://n8n.io/workflows/18329-match-new-property-listings-to-buyer-leads-with-gemini-gmail-and-sheets/

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Google Sheets Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
