# 🔬 Create daily construction site reports from WhatsApp with OpenAI and Google

> ⚡ **8 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow captures WhatsApp voice notes, photos, and texts from construction crews, uses OpenAI to transcribe and structure updates, logs them to Google Sheets, stores photos in Google Drive, alerts managers via Gmail, and emails per-project end-of-day reports on a schedule.

## How it works
1. Triggers when a WhatsApp message arrives or every day at 6pm.
2. Looks up the sender in a Google Sheets Crew tab and matches the update to a project from the Projects tab (optionally using a #ProjectName tag).
3. If the sender is not registered, replies on WhatsApp asking to be added to the crew list and stops processing.
4. For registered senders, retrieves WhatsApp media and uses OpenAI to transcribe voice notes or describe site photos (and saves photos to Google Drive), while text messages pass through as-is.
5. Uses OpenAI to extract structured site-log fields (for example summary, category, hours, materials, issues, safety, and attention flags) and appends a row to the Site log tab in Google Sheets.
6. Confirms the log entry back to the crew member via WhatsApp and sends an immediate Gmail alert to the project’s report email list when the update needs attention.
7. At 6pm, reads today’s Site log rows from Google Sheets, groups them by project, uses OpenAI to write a per-project daily report (or a no-update notice), emails it via Gmail, and appends a summary row to the Daily reports tab.

## Setup
1. Connect WhatsApp Business Cloud API credentials (WhatsApp Trigger and WhatsApp nodes) and configure your WhatsApp Business number to send message webhooks to the workflow.
2. Add OpenAI credentials for audio transcription, image analysis, and report generation.
3. Add Google Sheets credentials and create one spreadsheet with Crew and Projects tabs (and empty Site log and Daily reports tabs), then paste the sheet URL into the Configuration step.
4. Add Google Drive credentials and set a target folder ID in Configuration for saving site photos.
5. Add Gmail credentials and set the fallback office email (and project-specific “Report emails” values in the Projects tab) to receive alerts and daily reports.

## Requirements
- WhatsApp Business Cloud API number (Meta developer app) with WhatsApp Trigger and WhatsApp credentials
- OpenAI API key (voice transcription, photo description and report writing)
- Google Sheets with four tabs: Crew, Projects, Site log, Daily reports
- Google Drive folder for site photos
- Gmail account for alerts and daily reports

## Customization
- Change the report time in "Every evening at 6pm", for example weekdays only
- Set reportLanguage in Configuration to write logs and reports in any language
- Add a client's email to a project's "Report emails" column to share reports with them
- Edit the extraction prompt to track trade-specific fields such as concrete volume or inspections
- Swap Gmail for Outlook or Slack for alerts and reports
- Crew members can add #ProjectName to a message to log it against a different project

## Additional info
Crews can report in any language; voice notes are transcribed and every field is written in the report language. Messages from numbers not in the Crew tab are politely rejected and never logged. The AI is instructed to use only what the crew reported and never invent quantities or progress. Projects marked Active = no in the Projects tab are skipped, and active projects with no updates get a "no update received" notice so the PM can follow up.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
