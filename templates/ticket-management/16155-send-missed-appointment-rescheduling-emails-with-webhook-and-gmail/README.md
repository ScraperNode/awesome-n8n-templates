# 🎫 Send missed appointment rescheduling emails with webhook and Gmail

> ⚡ **18 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow receives missed-appointment events via a webhook, validates and filters them, then sends a single rescheduling email through Gmail and returns a JSON acknowledgement to the caller.

## How it works
1. Receives a POST webhook request containing appointment and contact details.
2. Validates that `event_id`, `contact.email`, and `appointment.id` are present, then builds a rescheduling email message using the configured business name, booking URL, and subject.
3. Blocks processing when the appointment status is not `missed` or when `transactional_contact_allowed` is false.
4. Sends a plain-text rescheduling email to the contact via Gmail when the event is allowed.
5. Returns a JSON webhook response confirming acceptance and indicating whether the event was blocked.

## Setup
1. Configure the webhook URL in your CRM/scheduling system to send missed-appointment events to this workflow’s webhook path.
2. Connect a Gmail credential and verify the sending mailbox used to deliver the rescheduling email.
3. Update the business name, booking URL, and email subject used in the outgoing message.

## 🔗 Nodes Used

Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
