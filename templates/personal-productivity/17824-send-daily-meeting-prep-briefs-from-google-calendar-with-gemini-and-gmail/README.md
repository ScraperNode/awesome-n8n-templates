# ⚡ Send daily meeting prep briefs from Google Calendar with Gemini and Gmail

> ⚡ **55 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow runs each morning, pulls today’s events from Google Calendar, uses Google Gemini to generate a short prep brief for each meeting, combines the briefs into a single daily summary, and emails it to you via Gmail.

## How it works
1. Runs each morning on a schedule trigger.
2. Fetches all of today’s events from Google Calendar and orders them by start time.
3. Extracts key meeting details (title, start time, description, attendee list, and event link) for each event.
4. Sends each meeting’s details to Google Gemini to generate a one-minute prep note with a purpose, talking points/questions, and one thing to prepare.
5. Combines all meeting prep notes into a single daily brief (or creates a “no meetings today” message if there are none).
6. Sends the daily brief to your chosen recipient using Gmail.

## Setup
1. Connect your Google Calendar OAuth2 account, select the calendar to read, and ensure the time window expressions match your timezone expectations.
2. Add a Google Gemini (PaLM) API credential for the Gemini chat model used to generate meeting prep notes.
3. Connect your Gmail OAuth2 account and replace the recipient address (you@example.com) with the email address that should receive the daily brief.
4. Adjust the schedule trigger hour to match when you want the email to arrive each morning.

## 🔗 Nodes Used

Google Calendar, Gmail, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
