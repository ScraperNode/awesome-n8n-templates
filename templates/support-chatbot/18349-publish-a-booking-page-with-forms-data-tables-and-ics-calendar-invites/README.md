# 💬 Publish a booking page with forms, data tables, and .ics calendar invites

> ⚡ **18 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow publishes an n8n Form booking page that checks each requested date/time against an n8n Data Table to prevent double bookings, then creates a downloadable .ics calendar invite and stores confirmed bookings.

## How it works
1. Receives a booking request from an n8n Form where the visitor submits their name, email, date, and time.
2. Applies configurable booking settings (meeting length, subject, and organizer name/email) and normalizes the selected date/time.
3. Looks up the n8n Data Table for any existing booking rows matching the same date and time.
4. Determines whether the slot is available and, if it is, generates an RFC 5545-compatible .ics calendar invite for the meeting.
5. If the slot is available, converts the invite text into an `invite.ics` file, inserts the booking details into the Data Table, and shows a confirmation page.
6. If the slot is taken, displays a “pick another time” completion page to the visitor.

## Setup
1. Create an n8n Data Table named `Bookings` with text columns `Date`, `Time`, `Name`, `Email`, and `BookedAt`, then select it in both Data Table steps.
2. Update the booking defaults (meeting length, subject, organizer name, and organizer email) in the booking settings values.
3. Publish the n8n Form and share the form URL as your public booking page.

## 🔗 Nodes Used

n8n Form Trigger, Convert to File, n8n Form, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
