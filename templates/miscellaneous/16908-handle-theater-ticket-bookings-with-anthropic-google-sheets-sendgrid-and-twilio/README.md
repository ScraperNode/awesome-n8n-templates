# 🔧 Handle theater ticket bookings with Anthropic, Google Sheets, SendGrid, and Twilio

> ⚡ **26 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow receives theater ticket booking requests via webhook, validates and normalizes them with Anthropic Claude, assigns seats and calculates pricing from a Google Sheets seat map, then logs the booking, sends confirmation via SendGrid email and Twilio SMS, and returns a confirmation JSON response.

## How it works
1. Receives a booking request via an HTTP POST webhook and standardizes fields like show details, ticket count, and customer contact info.
2. Uses Anthropic Claude to validate and normalize the booking request, then filters out requests with a low validation score.
3. Retrieves the current SeatMap data from Google Sheets and assigns specific seat numbers if enough seats remain in the requested category.
4. Calculates the final ticket total based on seat category pricing, bulk-discount rules, and tax.
5. Uses Anthropic Claude to generate a personalized confirmation message, upsell line, and arrival instructions.
6. Builds a final booking record (including a QR payload string), appends it to a Google Sheets tracker, sends the confirmation by SendGrid email and Twilio SMS, and responds to the webhook with the booking confirmation JSON.

## Setup
1. Add an Anthropic API credential and select it for both Claude steps used for validation and confirmation message generation.
2. Set up a Google Sheets OAuth2 credential, replace YOUR_SHEET_ID in both Google Sheets HTTP requests, and create SeatMap and BookingTracker tabs with the expected columns.
3. Add a SendGrid API key and replace the Authorization header value (Bearer YOUR_SENDGRID_API_KEY) and the sender email/name in the email request.
4. Configure Twilio by replacing YOUR_TWILIO_ACCOUNT_SID, YOUR_TWILIO_PHONE_NUMBER, and the Basic auth header (YOUR_TWILIO_BASE64_AUTH), and ensure booking requests provide a valid customerPhone if you want SMS.
5. Copy the production webhook URL from n8n and configure your booking form/app to POST the required fields (showName, showDate, showTime, seatCategory, ticketCount, customer details) to that endpoint.

## 🔗 Nodes Used

HTTP Request, Webhook, Filter, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
