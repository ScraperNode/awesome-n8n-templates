# 💬 Book paid legal appointments with Stripe, Google Calendar, Gmail and Telegram

> ⚡ **31 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Automate legal appointment booking end-to-end. Clients request a slot via webhook, Google Calendar checks availability, Stripe collects payment, and a confirmed calendar event is created automatically. The lawyer gets notified via Gmail and Telegram with a 24-hour reminder sent to the client.

## How it works
1. A client submits a booking request via webhook containing their name, email, phone, preferred date, time, and service type.
2. Google Calendar checks whether the requested time slot is available. If unavailable, a rejection email is sent to the client automatically.
3. If the slot is available, a Stripe payment link is generated for the consultation fee and sent to the client via Gmail and Telegram.
4. Once Stripe confirms payment, a unique booking ID is generated and a confirmed event is created in Google Calendar with full client details.
5. A confirmation email with the booking ID is sent to the client, then the lawyer is notified via Gmail and Telegram with complete appointment details.
6. The booking is logged to Google Sheets and a 24-hour reminder email is automatically sent to the client before the appointment.

## Setup
1. Connect your Google Calendar credential in n8n and replace YOUR_LAWYER_CALENDAR_ID with your Calendar ID found in Google Calendar Settings.
2. Connect your Gmail credential in n8n and replace YOUR_LAWYER_EMAIL in the Notify Lawyer via Email node with your actual email address.
3. Add your Stripe Secret Key in the Generate Stripe Payment Link node — get it from dashboard.stripe.com/apikeys.
4. In Stripe Dashboard go to Developers → Webhooks → Add Endpoint, paste the Stripe Payment Confirmed webhook URL, and select the checkout.session.completed event.
5. Create a Google Sheet with these column headers: Booking ID, Client Name, Client Email, Service, Date, Time, Amount Paid, Status, Timestamp — then replace YOUR_GOOGLE_SHEET_ID in the Log Booking node.
6. Create a Telegram bot via @BotFather, add the token as a Telegram credential in n8n, and replace YOUR_TELEGRAM_CHAT_ID_LAWYER and YOUR_TELEGRAM_CHAT_ID_CLIENT in the Telegram nodes.

## Requirements
- Google Calendar account connected via OAuth2
- Gmail account connected via OAuth2
- Stripe account with Secret API key and webhook configured
- Google Sheets with booking log headers set up
- Telegram Bot Token with Chat IDs for lawyer and client

## Customization
- Add multiple service types with different durations and prices by extending the IF node conditions
- Connect Zoom or Google Meet to auto-generate a meeting link and attach it to the calendar event on booking
- Replace Telegram with WhatsApp Business API for client notifications
- Connect HubSpot or Salesforce to auto-create client records when a booking is confirmed
- Add a cancellation webhook to handle appointment cancellations and trigger Stripe refunds automatically

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
