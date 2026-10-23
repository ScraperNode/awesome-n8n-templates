# 💬 Book and confirm clinic appointments with WhatsApp, Google Calendar, and Gmail

> ⚡ **699 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
Automate clinic appointment booking end to end. Patients submit a request via webhook, the workflow generates a unique Booking ID, routes online consultations to Google Meet and offline ones to the clinic address, then notifies both patient and doctor via Gmail and WhatsApp.

## How it works
1. A patient submits a booking request via webhook containing name, email, phone, date, time, and consultation type — online or offline.
2. The workflow extracts all fields and generates a unique Booking ID in the format CLN-YYYYMMDD-XXXXXX for tracking.
3. The consultation type is checked — if online, a Google Meet link is generated and attached to the calendar event.
4. If offline, the clinic physical address is used instead of a meeting link.
5. A confirmed appointment is created in the doctor Google Calendar with full patient details attached.
6. The patient receives a confirmation email via Gmail and a WhatsApp message via Twilio with the Booking ID and appointment details.
7. The doctor receives a full appointment notification via Gmail, then 24 hours before the appointment the patient is automatically sent a reminder via email and WhatsApp.

## Setup
1. Connect your Google Calendar credential in n8n and replace YOUR_DOCTOR_CALENDAR_ID with your Calendar ID found in Google Calendar Settings.
2. Connect your Gmail credential in n8n — used for patient confirmation, doctor notification, and reminder emails.
3. Sign up at twilio.com, enable WhatsApp Sandbox, connect the Twilio credential in n8n, and replace YOUR_TWILIO_WHATSAPP_NUMBER with your sandbox number in format whatsapp:+14155238886.
4. Replace YOUR_DOCTOR_EMAIL in the Notify Doctor via Email node with the doctor actual email address.
5. Replace YOUR_CLINIC_ADDRESS in the Create Offline Calendar Event and Store Offline Event Data nodes with your clinic physical address.
6. Test the workflow by sending a POST request to the webhook URL with this body: name, email, phone, date, time, and consultation_type set to online or offline.

## Requirements
- Google Calendar account connected via OAuth2
- Gmail account connected via OAuth2
- Twilio account with WhatsApp Sandbox enabled — free tier available at twilio.com
- Publicly accessible webhook URL — activate the workflow before testing

## Customization
- Add multiple doctors by routing to different Google Calendars based on specialization using an additional IF node
- Add a Stripe payment node before calendar booking to collect consultation fees upfront
- Add a Google Sheets node after doctor notification to maintain a full patient booking log
- Replace Gmail with SendGrid via HTTP Request node for branded transactional emails
- Extend the reminder to also send 1 hour before the appointment for online consultations by adding a second Wait node

## 🔗 Nodes Used

Twilio, Webhook, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
