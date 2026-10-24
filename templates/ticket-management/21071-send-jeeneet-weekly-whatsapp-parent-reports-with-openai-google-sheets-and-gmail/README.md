# 🎫 Send JEE/NEET weekly WhatsApp parent reports with OpenAI, Google Sheets and Gmail

> ⚡ **23 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs weekly to analyze JEE/NEET student test performance from Google Sheets, uses OpenAI to draft WhatsApp reports for parents with a trend chart, alerts faculty about batch-wide weak topics by WhatsApp and Gmail, and handles parent replies (questions, callbacks, and STOP) via WhatsApp.

## How it works
1. Runs every Sunday at 6 PM IST to start the weekly reporting cycle.
2. Loads Students, Test Scores, Faculty, and Report Log data from Google Sheets and applies institute-specific thresholds from the built-in configuration.
3. Calculates per-student weekly performance (overall percentage, subject/topic accuracy, negative-marking loss, week-on-week change, and batch rank) and skips students who already received a report this week or have opted out.
4. Uses OpenAI (gpt-4o-mini) to generate a short parent-friendly WhatsApp message, then builds a scorecard plus a QuickChart trend image URL from recent subject percentages.
5. Sends the WhatsApp text report and trend chart image to each parent and appends a record to the Google Sheets Report Log.
6. Detects batch-level weak topics by subject, uses OpenAI to generate a remedial plan, sends alerts to faculty via WhatsApp and Gmail, logs the alert to the Weak Topics sheet, and sends a weekly summary to the academic head via WhatsApp.
7. Triggers on incoming WhatsApp replies, matches the parent number to the student and latest logged report in Google Sheets, uses OpenAI to classify the intent, sends an appropriate WhatsApp reply, logs callback requests, and updates the student record to opt out on STOP.

## Setup
1. Connect credentials for WhatsApp Business Cloud (trigger + send), Google Sheets, OpenAI, and Gmail.
2. Create a Google Sheets file with tabs named Students, Test Scores, Faculty, Report Log, Weak Topics, and Callbacks, and ensure Students includes columns like student_id, parent_whatsapp, opted_out, mentor_whatsapp, and language.
3. Replace REPLACE_WITH_GOOGLE_SHEET_ID, REPLACE_WITH_WHATSAPP_PHONE_NUMBER_ID, REPLACE_WITH_ACADEMIC_HEAD_NUMBER, and REPLACE_WITH_ACADEMICS_EMAIL, and edit the configuration values (exam max, negative marking, and alert thresholds) to match your institute.
4. Configure the WhatsApp webhook URL in Meta for the incoming message trigger and verify the sender/recipient phone formats match the sheet values.
5. Run the workflow once with sample data to validate report logging, chart rendering via quickchart.io, and that opt-out and callback logging behave as expected.

## 🔗 Nodes Used

Google Sheets, Gmail, WhatsApp Business Cloud, Schedule Trigger, OpenAI, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
