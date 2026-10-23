# 💬 Book appointments and manage sales opportunities via webhooks in HighLevel

> ⚡ **54 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives appointment requests via webhook, checks slot availability, then creates/updates a contact & books a 30-minute appointment in GoHighLevel. It also creates/updates a related opportunity with custom fields and triggers follow-up sub-workflows for background processing and error handling. Full setup guide: https://uzzaman.dev/guides/gohighlevel-n8n-appointment-booking/

## How it works
1. Receives a POST webhook request with the patient’s name, phone, address, service type, and preferred date/time.
2. Calls a separate n8n workflow to check whether the requested time slot is available.
3. If the slot is unavailable, returns a response indicating the appointment was not booked and the slot is unavailable.
4. If the slot is available, builds a 30-minute start/end time window from the preferred date/time and creates or updates the contact in GoHighLevel.
5. Books the appointment in the specified GoHighLevel calendar and then searches the GoHighLevel pipeline for an existing opportunity matching the contact/phone.
6. Updates the existing opportunity stage or creates a new opportunity, then uses the LeadConnector/GoHighLevel API to set custom fields (service type, preferred date/time, and event ID).
7. Returns a “booked” response payload and triggers a separate background workflow with the booking details, while routing any GoHighLevel failures to an error workflow.

## Setup
1. Add GoHighLevel (HighLevel) OAuth2 credentials for the contact, calendar appointment, and opportunity actions.
2. Add a GoHighLevel/LeadConnector private integration bearer token for the HTTP request that updates opportunity custom fields.
3. Update the GoHighLevel location ID, calendar ID, pipeline ID, stage ID, and custom field IDs to match your GoHighLevel account.
4. Publish and configure the dependent sub-workflows (“Ray - Check Slot Availability”, “Ray - Background Workflow”, and “Ray - Error Workflow”) and ensure their workflow IDs are correct.
5. Copy the webhook URL for `POST /ray/book-appointment` and configure the calling system to send the required request body fields.

## 🔗 Nodes Used

HTTP Request, Webhook, Execute Sub-workflow, HighLevel

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
