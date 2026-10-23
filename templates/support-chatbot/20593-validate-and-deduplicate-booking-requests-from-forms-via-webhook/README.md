# 💬 Validate and deduplicate booking requests from forms via webhook

> ⚡ **0 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow accepts booking requests via an n8n webhook, validates and normalizes the submitted fields, enforces a lead-time booking policy, and blocks duplicate submissions before creating a booking and preparing a confirmation message for WhatsApp/SMS/email.

## How it works
1. Receives a POST booking request through an n8n webhook endpoint.
2. Validates and normalizes the payload (name, phone, email, treatment, preferred time, notes) and calculates how far in the future the requested slot is.
3. Logs invalid requests and returns a 422 JSON response containing the validation errors.
4. Checks whether the requested slot meets the booking policy (at least 2 hours ahead and no more than 60 days out) and returns a 422 decline if it does not.
5. Detects duplicate submissions by the same phone number within 30 minutes and marks them as ignored while still returning a success-shaped response.
6. For fresh, in-policy requests, creates a booking (placeholder step), builds a confirmation message, optionally sends it (placeholder step), and returns a 200 JSON response with the booking status and slot.

## Setup
1. Copy the webhook URL from the Webhook node and configure your form to POST the booking fields (name, phone, optional email, treatment, preferred_slot, optional notes) to that endpoint.
2. Replace the placeholder booking step with a real calendar/booking integration (for example, Google Calendar “Create Event”) and add the required credentials.
3. Replace the placeholder send step with your messaging/email provider (WhatsApp/SMS/email) and add the required credentials and recipient/channel configuration.
4. If you want to audit failures, replace the rejection logger with a persistent destination (for example, a Google Sheet or database table) and add the required credentials.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
