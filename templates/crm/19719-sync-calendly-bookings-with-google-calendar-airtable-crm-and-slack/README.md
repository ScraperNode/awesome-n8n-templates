# 🤝 Sync Calendly bookings with Google Calendar, Airtable CRM, and Slack

> ⚡ **7 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow triggers on new Calendly bookings, matches and updates the related Google Calendar event, then syncs the invitee and meeting details into an Airtable CRM and posts a formatted booking notification to a Slack channel.

## How it works
1. Triggers when Calendly creates a new invitee booking.
2. Waits briefly, then extracts and normalizes key booking fields like invitee details, event times, meeting link, and Q&A.
3. Searches Google Calendar for an event around the booking time and matches the correct event by attendee email or Calendly event UUID, then updates the event to add configured attendees.
4. Searches Airtable for an existing contact by the invitee’s email and either updates the contact or creates a new one.
5. Checks Airtable for an existing meeting record with the same Calendly Event ID to prevent duplicates.
6. If no duplicate exists, creates a new meeting record in Airtable and sends the booking details and links to Slack.

## Setup
1. Create and connect credentials for Calendly (OAuth2), Google Calendar (OAuth2), Airtable (personal access token), and Slack.
2. Select the Calendly event source in the Calendly trigger and copy the generated webhook URL into Calendly if your setup requires manual webhook configuration.
3. In Google Calendar nodes, select the target calendar and (optionally) configure the additional attendee emails that should be added to matched events.
4. In Airtable, select your base and set up Contacts and Meetings tables with fields referenced in the workflow (for example Email, Last Meeting At/Type, and Calendly Event ID), then choose those tables in the Airtable nodes.
5. Select the target Slack channel ID in the Slack node where booking notifications should be posted.

## 🔗 Nodes Used

Airtable, Slack, Calendly Trigger, Google Calendar, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
