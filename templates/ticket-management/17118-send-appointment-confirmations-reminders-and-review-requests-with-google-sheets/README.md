# 🎫 Send appointment confirmations, reminders and review requests with Google Sheets and Gmail

> ⚡ **124 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs daily at 8 AM to read appointment records from Google Sheets, send the right Gmail email (confirmation, reminder, no-show win-back, or post-visit review request) based on each appointment’s status and date, and then update the appointment status back in the sheet.

## How it works
1. Runs every day at 8 AM (or manually for testing) to start processing appointments.
2. Loads appointment rows from the “Appointments” tab in Google Sheets.
3. Classifies each row by comparing its Status and AppointmentDate to today to decide whether to send a confirmation, reminder, win-back, or review request.
4. Sends the appropriate HTML email through Gmail using the recipient’s Email and your configured business links.
5. Updates the matching appointment row in Google Sheets with the new Status and LastContacted date to prevent duplicate messages.

## Setup
1. Connect Google Sheets OAuth2 credentials and set the correct Google Sheet document ID in both Google Sheets steps.
2. Connect Gmail OAuth2 credentials for the mailbox that sends the emails.
3. Create an “Appointments” sheet with columns including AppointmentID (unique), Name, Email, AppointmentDate (YYYY-MM-DD), Status, and LastContacted.
4. Update the configuration values for businessName, bookingUrl, reviewUrl, and reminderDaysBefore to match your business and desired reminder timing.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
