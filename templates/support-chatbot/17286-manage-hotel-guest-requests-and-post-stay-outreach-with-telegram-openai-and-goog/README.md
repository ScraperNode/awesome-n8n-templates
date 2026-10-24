# 💬 Manage hotel guest requests and post-stay outreach with Telegram, OpenAI, and Google Sheets

> ⚡ **56 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow runs a Telegram concierge for hotel guests, uses OpenAI (gpt-4o-mini) to classify requests, and updates Google Sheets to manage drivers, room extensions, maintenance tickets, and checkout folios, while sending guest and staff notifications in Telegram and posting error alerts to Slack.

## How it works
1. Triggers when a guest sends a message to your Telegram bot and extracts the chat ID, guest name, and message text.
2. Uses OpenAI (gpt-4o-mini) to classify the message intent (cab booking, stay extension, complaint, checkout, escalation, or other) and extract priority, department, and key details.
3. For cab bookings, looks up an available driver in Google Sheets, logs the request in the Bookings sheet, and sends the driver details back to the guest in Telegram.
4. For stay extensions, retrieves the guest’s current booking and room details from Google Sheets, checks availability, and sends either a price with a Razorpay-style payment link or an unavailability message to the guest in Telegram.
5. For complaints, appends a ticket to the Tickets sheet in Google Sheets, alerts staff in Telegram (urgent vs normal based on priority), and confirms receipt to the guest.
6. For checkout, reads the guest’s booking/folio from Google Sheets, sends the digital bill via Telegram, and updates the booking status to checked_out.
7. Runs daily on a schedule to find checked_out guests in Google Sheets and sends a Telegram message requesting a 1–5 rating plus a loyalty/rebooking offer.
8. Triggers on workflow errors and posts an alert to a configured Slack channel with execution details.

## Setup
1. Create a Telegram bot and connect your Telegram Bot API credentials for both the Telegram Trigger and all Telegram message nodes.
2. Add your OpenAI API credentials and ensure the model selection supports gpt-4o-mini (or update the model in the OpenAI node).
3. Connect Google Sheets OAuth2 and create a spreadsheet with tabs named Bookings, Rooms, Drivers, and Tickets using the columns shown in the template, then replace YOUR_GOOGLE_SHEET_ID in every Google Sheets node.
4. Replace REPLACE_WITH_STAFF_CHAT_ID in the staff-notification Telegram nodes with your hotel staff/group chat ID.
5. Add Slack OAuth2 credentials, set YOUR_SLACK_CHANNEL_ID for error alerts, and update the alert text if you want property-specific context.
6. Review the daily schedule timing and activate both the Telegram trigger and the schedule trigger before going live.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Telegram Trigger, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
