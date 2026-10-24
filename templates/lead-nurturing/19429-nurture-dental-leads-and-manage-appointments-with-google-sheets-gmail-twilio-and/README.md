# 💬 Nurture dental leads and manage appointments with Google Sheets, Gmail, Twilio, and Google Calendar

> ⚡ **4 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow captures new dental leads via webhook, logs them to Google Sheets, and nurtures them with Twilio WhatsApp and Gmail messages until they book or are marked. When an appointment is booked via webhook, it creates a Google Calendar event, updates the sheet, sends reminders, and requests a review.

## How it works
1. Receives a new lead via a webhook request and normalizes the contact details and service interest.
2. Appends the lead to a Google Sheets “Leads” worksheet with a default status of New.
3. If a phone number is present, sends a Twilio WhatsApp welcome message and then sends a Gmail welcome email.
4. After 1 hour, looks up the lead in Google Sheets by phone and stops the nurture sequence if the Status is already “Booked.”
5. If not booked, sends a WhatsApp follow-up after 1 day, then checks Google Sheets again on day 3 and emails a special-offer follow-up if still not booked.
6. Checks the status again on day 7 and, if still not “Booked,” sends a final WhatsApp message and updates the lead’s Status to “Lost” in Google Sheets.
7. Receives an appointment-booked webhook, creates a Google Calendar event, updates the lead to “Booked” in Google Sheets, sends 24-hour and 2-hour WhatsApp reminders, then emails a post-visit review request.

## Setup
1. Create and connect credentials for Google Sheets, Gmail, Google Calendar, and Twilio in n8n.
2. Replace `YOUR_GOOGLE_SHEET_ID` and ensure the “Leads” sheet has columns for Name, Email, Phone, Source, Status, Service, CreatedAt, and (optionally) AppointmentDateTime.
3. Configure Twilio WhatsApp by setting a valid WhatsApp-enabled “from” number and ensuring your recipients are reachable (sandbox or approved sender setup).
4. Customize the WhatsApp and email templates with your clinic name, booking link, address, and offer text.
5. Copy the two webhook URLs (new lead and appointment booked) and configure your lead capture form/CRM and booking system to POST the required fields (including `appointmentDateTime` and `appointmentEndDateTime` for bookings).

## 🔗 Nodes Used

Google Sheets, Twilio, Webhook, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
