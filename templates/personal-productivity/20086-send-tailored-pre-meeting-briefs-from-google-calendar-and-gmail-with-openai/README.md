# ⚡ Send tailored pre-meeting briefs from Google Calendar and Gmail with OpenAI

> ⚡ **2 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs every 30 minutes (or manually) to find upcoming external Google Calendar meetings, pulls recent Gmail history with the primary external attendee, uses OpenAI to generate a concise meeting brief, emails it to you, and logs the event in Google Sheets to avoid duplicate briefs.

## How it works
1. Runs every 30 minutes on a schedule or on demand via a manual trigger.
2. Retrieves upcoming events from a specified Google Calendar and loads a “Briefed” log from Google Sheets.
3. Filters meetings to those starting within the lead-time window and skips cancelled events, meetings you declined, internal-only meetings (based on domain), and events already logged as briefed.
4. For each selected meeting, searches Gmail for recent messages to or from the primary external attendee and compiles snippets into a short history context.
5. Uses an OpenAI chat model to write a four-section brief (WHO, WHERE WE LEFT OFF, OPEN THREADS, GO IN WITH) based on the invite details and email history.
6. Emails the brief to your chosen address via Gmail and appends the meeting details to the Google Sheets log to prevent re-briefing.

## Setup
1. Connect Google Calendar, Gmail, Google Sheets, and OpenAI credentials in n8n.
2. Update the configuration values for CalendarId, SendBriefTo, InternalDomains, LeadTimeMinutes, and HistoryEmailCount.
3. Create a Google Sheets spreadsheet with a “Briefed” tab containing the columns: Briefed At, Event ID, Meeting, Starts At, Attendees, History Found.
4. Set the Google Sheets document ID (spreadsheet ID) in both Google Sheets steps to point to your log spreadsheet.

## 🔗 Nodes Used

Google Sheets, Google Calendar, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
