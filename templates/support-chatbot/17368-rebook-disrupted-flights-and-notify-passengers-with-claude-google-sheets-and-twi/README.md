# 💬 Rebook disrupted flights and notify passengers with Claude, Google Sheets, and Twilio

> ⚡ **14 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow runs on a schedule to check flight status against active bookings in Google Sheets, logs an IROPS audit trail, and for severe delays or cancellations uses Anthropic Claude to choose the best alternate flight from inventory and sends passengers an SMS via Twilio.

## How it works
1. Runs every few minutes on a scheduled trigger.
2. Pulls the latest FlightStatus and active Bookings data from Google Sheets via the Google Sheets API.
3. Matches each active booking to its flight status, calculates an impact level (On Time, Minor Delay, Severe Delay, or Cancelled), and splits the results into one item per passenger.
4. Appends a timestamped status record for every booking to the OpsLog tab in Google Sheets.
5. For bookings marked Cancelled or Severe Delay, fetches alternate flight inventory from Google Sheets and filters to same-route, seats-available options that match the passenger’s cabin class.
6. Sends the candidate flights and passenger context to Anthropic Claude to select the best alternative and generate a short SMS message (with a safe fallback if parsing fails).
7. Writes the rebooking decision to the Rebookings tab in Google Sheets and sends the notification SMS to the passenger using Twilio.

## Setup
1. Create an Anthropic API credential in n8n and select it for the Anthropic Claude model used to generate rebooking decisions.
2. Add Google OAuth2 credentials (or update the HTTP Request authentication) and replace YOUR_SHEET_ID in all Google Sheets API requests.
3. Prepare a Google Sheet with tabs and headers for FlightStatus, Bookings (with an “Active” status column), Inventory, OpsLog, and Rebookings.
4. Add Twilio credentials (Account SID and auth, plus a Twilio phone number) and replace YOUR_TWILIO_ACCOUNT_SID, YOUR_TWILIO_PHONE_NUMBER, and the Authorization header value in the Twilio request.
5. Adjust the schedule interval and (if needed) the delay thresholds used to classify Minor vs Severe delay before activating the workflow.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
