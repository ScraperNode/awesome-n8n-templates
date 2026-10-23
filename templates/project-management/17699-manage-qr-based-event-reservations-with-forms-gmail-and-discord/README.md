# 📋 Manage QR-based event reservations with forms, Gmail and Discord

> ⚡ **17 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow collects event reservations via an n8n form, checks capacity against n8n Data Tables, generates a ticket and QR code, emails an e-ticket with Gmail, and posts updates to Discord, including a continuously updated availability message.

## How it works
1. Receives a reservation submission from an n8n Form Trigger with the attendee’s name, email, requested time slot, and party size.
2. Loads time slot capacity data from an n8n Data Table and selects the requested slot or the next available open slot that can fit the party size, rejecting invalid requests.
3. If no slot is available, posts a “cannot reserve” notification to a Discord channel with the reason.
4. If a slot is available, creates a reservation record in an n8n Data Table and updates the selected slot’s reserved count and open/closed status.
5. Calls a separate n8n workflow to generate a unique ticket ID, then generates a QR code image by requesting quickchart.io.
6. Sends the attendee a confirmation email via Gmail with the ticket details and QR code attached, then writes the ticket ID back to the reservation record.
7. Posts a reservation confirmation to Discord and refreshes a Discord “availability board” by either updating an existing message via the Discord API or sending a new message and saving its message ID.

## Setup
1. Create and populate three n8n Data Tables: one for time slots (slot_id, slot_label, slot_order, capacity, reserved_count, status), one for reservations (name, email, slot_id, party_size, ticket_id, reserved_at), and one for workflow settings (setting_key, setting_value, channel_id).
2. Connect Gmail credentials for sending email and update the email subject/body text if needed.
3. Connect Discord credentials for posting messages, set your target guild and channel IDs, and add an HTTP Header Auth credential containing a Discord bot token for the Discord API message update request.
4. Set up and reference the “Generate Ticket” sub-workflow (the Execute Workflow step) so it returns a ticket_id (and issued_at if you want to store it).
5. Share the form URL (path: /event-reservation) with participants and adjust the slot dropdown options to match your time_slots Data Table slot_id values.

## 🔗 Nodes Used

HTTP Request, Discord, Execute Sub-workflow, Gmail, n8n Form Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
