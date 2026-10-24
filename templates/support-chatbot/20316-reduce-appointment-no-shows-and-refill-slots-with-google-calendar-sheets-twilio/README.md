# 💬 Reduce appointment no-shows and refill slots with Google Calendar, Sheets, Twilio, Gmail and OpenAI

> ⚡ **22 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow monitors Google Calendar appointments, uses Google Sheets as a client/waitlist database and log, and sends confirmations, waitlist offers, and recall messages via Twilio SMS or Gmail email, using OpenAI to classify incoming replies and update bookings and reporting.

## How it works
1. Runs every 15 minutes on a schedule and also reacts immediately to inbound replies received through Twilio (SMS) or Gmail (email).
2. Loads Clients, Services, Waitlist, and Log tabs from Google Sheets, then reads upcoming Google Calendar events for the configured time window.
3. Plans the next actions by logging confirmations (including a 48-hour ask and 24-hour nudge), freed-slot waitlist offers in batches, recall messages, and daily/weekly staff reports based on calendar state and prior log history.
4. Appends all planned actions to the Google Sheets Log first, then sends the resulting outbound messages via Twilio SMS or Gmail email depending on each recipient’s available channel and opt-out status.
5. Normalizes incoming SMS and email replies, filters out unknown senders and automatic/out-of-office messages, and uses OpenAI to extract the sender’s intent with quoted evidence.
6. Applies the reply to the most recent relevant message (confirmation, waitlist offer, or recall), updates the Google Sheets Log, and creates or deletes Google Calendar events when cancellations occur or a waitlist slot is accepted.
7. Notifies the front desk by email when a reply needs human handling (for example, ambiguous intent or rescheduling questions) and sends an error alert email if the workflow run fails.

## Setup
1. Add credentials for Google Calendar, Google Sheets, Gmail, Twilio (optional if you only want email), and OpenAI.
2. Create a Google Sheets file with four tabs named Clients, Services, Waitlist, and Log, and ensure your columns match what the workflow expects (for example client name/email/phone/channel, service name/price/minutes/recall_weeks, and waitlist preferences).
3. Update the values in Set Clinic Settings (sheet ID, calendar ID, business name, front desk and owner emails, timezone/locale, booking/deposit links, Twilio “from” number, and policy timings like confirm/nudge and offer batching).
4. Customize the user-facing text in Set Message Texts (subjects and message bodies) to match your tone and language.
5. If using SMS, configure Twilio to send inbound messages to the workflow’s Twilio Trigger webhook and ensure your Twilio number is capable of SMS.
6. Replace the destination address in the workflow failure email node (YOUR_ALERT_EMAIL) so errors are reported to the right person.

## 🔗 Nodes Used

Google Sheets, Twilio, Google Calendar, Gmail, Gmail Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
