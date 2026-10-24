# 🎫 Log hotel booking enquiries to Google Sheets with WhatsApp and Gmail

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow collects hotel booking enquiries via an n8n Form, validates dates and guest count, logs each enquiry to Google Sheets, alerts reception via WhatsApp Business Cloud using a template message, and sends an automatic confirmation email to guests through Gmail when details look valid.

## How it works
1. Receives a new booking enquiry submission from an n8n Form.
2. Normalizes the form fields, validates check-in/check-out dates and maximum guest count, generates a booking reference, and builds a one-line summary.
3. Appends the enquiry details (including status, problems, and summary) as a new row in Google Sheets.
4. Sends a WhatsApp Business Cloud template message to the reception phone number with the enquiry summary.
5. If the enquiry is marked as valid (“New”), sends a confirmation email to the guest using Gmail; otherwise it skips the auto-reply.

## Setup
1. Create a Google Sheet with columns matching the workflow fields (for example: reference, received_at, status, name, email, phone, check_in, check_out, nights, guests, room_type, message, problems, summary) and add a Google Sheets credential.
2. Add a Gmail credential and confirm the sender name and email content used for the guest confirmation.
3. Add a WhatsApp Business Cloud credential, set your Phone Number ID in the WhatsApp node, and create/approve a template named `new_booking_enquiry` (or update the workflow to match your template name and language).
4. Update the Settings values (hotel name, reception WhatsApp number, sheet URL, and maxGuests) to match your environment.
5. Activate the workflow and share the n8n Form production URL wherever guests submit booking enquiries.

## 🔗 Nodes Used

Google Sheets, Gmail, WhatsApp Business Cloud, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
