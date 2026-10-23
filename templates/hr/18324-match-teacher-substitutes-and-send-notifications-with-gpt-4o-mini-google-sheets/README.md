# 👥 Match teacher substitutes and send notifications with GPT-4o-mini, Google Sheets, Gmail and Telegram

> ⚡ **14 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow captures teacher leave requests via an n8n form, pulls timetable and substitute availability from Google Sheets, uses OpenAI to pick the best substitute, then notifies the substitute, students, and an admin (Gmail and Telegram) and logs coverage and payroll back to Google Sheets.

## How it works
1. Receives a teacher leave request from an n8n form with the teacher name, email, leave date, and reason.
2. Fetches the full timetable and the substitute availability pool from Google Sheets.
3. Filters the timetable down to the absent teacher’s classes on the requested leave date and creates one item per affected class.
4. Builds a structured prompt per class and sends it to OpenAI (gpt-4o-mini) to select the best substitute based on subject fit, availability, and weekly hours.
5. Parses the OpenAI JSON response to extract the chosen substitute, match reason, and confidence.
6. Emails the assigned substitute and notifies the affected students via Gmail, while also sending an assignment summary to an admin via Telegram.
7. Updates the timetable in Google Sheets to mark the class as covered and appends a payroll log entry for the substitute.

## Setup
1. Add Google Sheets credentials and replace `YOUR_SPREADSHEET_ID` and `YOUR_TIMETABLE_SHEET_ID` with your actual spreadsheet ID(s), ensuring the Timetable, Substitutes, and SubstitutePayroll sheets and column names match the workflow.
2. Add a Gmail OAuth2 credential for sending emails to substitutes and students.
3. Add an OpenAI credential/API key and ensure the selected model (gpt-4o-mini) is available in your OpenAI account.
4. Add a Telegram bot credential and replace `YOUR_ADMIN_TELEGRAM_CHAT_ID` with the admin chat ID to receive summaries.
5. Add a Slack OAuth2 credential and set the target channel for error alerts triggered by the workflow error handler.

## 🔗 Nodes Used

Google Sheets, Slack, Twilio, Telegram, Google Calendar, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
