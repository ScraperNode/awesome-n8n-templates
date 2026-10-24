# 📋 Match participants and schedule 1:1 Google Meet calls with OpenAI and Google Calendar

> ⚡ **14 views** · 📋 [Project Management](../)

## Description

## Quick overview
Collect participant sign-ups, match people into relevant 1:1 pairs with OpenAI, create Google Meet appointments in Google Calendar, and send invitations automatically. Based on a real-world matching workflow from innovation-networking.de and adaptable for events, communities, cohorts, and internal networking.

## How it works
1. Receives participant submissions from an n8n Form and loads matching and meeting settings from default values, optionally overridden by a Google Sheets row.
2. Checks whether the current time is before the configured matching deadline and either saves the sign-up as “registered” in an n8n data table or shows a “sign-ups closed” message.
3. Runs every 15 minutes and, once the matching deadline is reached, loads all “registered” participants from the n8n data table.
4. Deduplicates participants by email and sends the participant list and matching criteria to OpenAI to generate pairs (and one group of three only if the count is odd) with a short reason.
5. Creates a Google Calendar event for each group at the configured start time and duration, generating a Google Meet link and adding all group members as attendees.
6. Sends a Gmail message to each group with the match reason, event time, and Google Meet link, then updates each participant’s record to “matched” with their partner emails and meeting link.

## Setup
1. Create an n8n data table for participants (name, email, description, status, partner_emails, meeting_link) and select it in the nodes that save, load, and update sign-ups.
2. Add OpenAI credentials for the Chat Model used to generate the matching pairs.
3. Add Google Calendar credentials (and choose the target calendar if not using “primary”) and ensure your account can create events with Google Meet conferencing.
4. Add Gmail credentials for sending the invitation emails and adjust the email subject/body text if needed.
5. (Optional) Create a Google Sheets settings spreadsheet with columns for matching_deadline, matching_criteria, meeting_start, meeting_duration_minutes, meeting_title, and timezone, then select the document and sheet in the Google Sheets node.
6. Activate the workflow and share the published n8n Form URL using the configured path (/form/matching-signup).

## Requirements
- n8n instance with Data Tables
- OpenAI API account
- Google account with Google Calendar and Gmail
- Google Sheets account only if you want to manage settings externally

## Customization
- Change the matching criteria to pair participants by interests, industry, profession, location, complementary skills or any other criteria.
- Adjust the meeting date, duration, title and timezone.
- Customize the registration form and invitation email for your event or community.
- Use Google Sheets to manage new matching rounds without editing the workflow.

## Additional info
This workflow was originally developed for innovation-networking.de, an initiative that connects people from the innovation ecosystem through short 1:1 conversations.  
The published template generalizes this concept so it can be reused for meetups, conferences, communities, accelerators, cohorts, and internal networking events.  
Learn more about the original initiative: https://innovation-networking.de

## 🔗 Nodes Used

Google Sheets, Google Calendar, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
