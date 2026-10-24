# 🤝 Reconcile Google Calendar demo attendees with HubSpot, Google Sheets and Slack

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Help sales operations catch demo handoff gaps before meetings. Reconcile external Google Calendar attendees with exact HubSpot contact matches and active owners, update a Google Sheets review queue, and send one Slack digest of exceptions.

## How it works
1. Runs each weekday morning and reads a dedicated demo calendar. Excludes canceled events, declined attendees, internal domains and bookings still inside the grace period.
2. Loads the active HubSpot owner directory with bounded pagination. Incomplete responses stop the report instead of implying readiness.
3. Searches each remaining attendee's exact primary email in paced HubSpot requests, distinguishing no match from ambiguous matches.
4. Checks the matched contact for unassigned ownership or an owner absent from the active directory. It never guesses an alternate email match.
5. Updates the Google Sheets review queue using a stable event-and-attendee key, including status, evidence and recommended action.
6. After the sheet succeeds, sends one bounded Slack exception digest with calendar and queue links. Healthy attendee checks are recorded without alerts.

## Setup
1. Connect Google Calendar OAuth2, HubSpot App Token, Google Sheets OAuth2 and Slack credentials. Grant HubSpot crm.objects.contacts.read and crm.objects.owners.read; invite the Slack bot to the chosen channel with chat:write access.
2. Create a dedicated demo calendar and a Google Sheets tab using these headers: review_key, event_id, event_title, starts_at, attendee_email, rsvp, calendar_url, checked_at, contact_id, owner_name, lifecycle_stage, status, recommended_action.
3. Fill Set config values with the calendar ID, internal domains, spreadsheet ID, tab and channel ID. Review the 24-hour window, 15-minute booking grace and 150-attendee limit.
4. Test manually, set the workflow timezone and enable the weekday schedule. Filter checked_at to the current run; older observations remain in the sheet.

## Requirements
- n8n 2.33.5 or compatible; a readable demo calendar; HubSpot contact and owner read access; an editable Google Sheet; a Slack bot with channel access. No community nodes or paid enrichment service are required.

## Customization
- Adjust internal domains, look-ahead hours, booking grace and attendee limit in Set config values. Primary-email absence is a review signal: verify aliases before creating records. This workflow neither sends attendee messages nor changes CRM records. Run one execution at a time to avoid overlapping sheet updates.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Google Calendar, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
