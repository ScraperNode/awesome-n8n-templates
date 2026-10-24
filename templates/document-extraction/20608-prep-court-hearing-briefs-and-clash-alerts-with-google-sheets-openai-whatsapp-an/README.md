# 🔬 Prep court hearing briefs and clash alerts with Google Sheets, OpenAI, WhatsApp and Telegram

> ⚡ **18 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow schedules daily court-hearing preparation by pulling active cases from Google Sheets, downloading court cause lists via HTTP, extracting PDF/HTML text, matching listings, detecting advocate clashes, and using OpenAI to generate hearing briefs that are sent over WhatsApp or Telegram, with outcomes logged back to Google Sheets.

## How it works
1. Runs every evening at 7:00 PM IST to compute the next working hearing date and load active cases and court cause-list sources from Google Sheets.
2. Builds one download job per relevant court, fetches each cause list over HTTP, and alerts an admin on Telegram if any download fails.
3. Extracts text from the downloaded PDF or HTML cause lists and matches each active case against the normalized text to determine whether it is listed and capture item number, court hall, bench, and stage.
4. Checks the existing Hearing Log in Google Sheets to skip cases already reminded, estimates call times from item numbers, and flags potential scheduling clashes for advocates appearing in multiple courts or halls.
5. Sends a consolidated “partner board” summary to a partner on Telegram with all listed matters, clashes, missing listings, and any failed cause-list fetches.
6. For each listed (and not-yet-reminded) matter, uses an OpenAI agent with Google Sheets tools to read hearing history and case notes, generates a short structured brief, logs the hearing entry, and sends the reminder to the advocate via WhatsApp or Telegram.
7. Runs again at 8:30 AM on court days to send each advocate a day board from the Hearing Log, and accepts a post-hearing form submission to update the Hearing Log and case status/next date in Google Sheets while confirming the entry on Telegram.

## Setup
1. Create a Google Sheets file with “Cases”, “Courts”, “Hearing Log”, and “Case Notes” tabs and ensure the columns referenced by the workflow (for example case_id, status, court_code, cause_list_url, advocate contact fields, and log_key) exist.
2. Add credentials for Google Sheets, Telegram, OpenAI, and WhatsApp Business Cloud, and set the WhatsApp Phone Number ID used to send messages.
3. Replace all REPLACE_WITH_* values, including the Google Sheet ID, Telegram chat IDs (admin and partner), WhatsApp phoneNumberId, and your n8n base URL used to build the outcome form link.
4. Populate the “Courts” tab with each court’s cause-list URL pattern (using placeholders like {DD}, {MM}, {YYYY}, or {DATE_ISO}) and set the expected format (pdf/html).
5. Copy the public URL for the “hearing-outcome” form and protect it (for example with n8n authentication) so only your team can submit hearing outcomes.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, WhatsApp Business Cloud, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
