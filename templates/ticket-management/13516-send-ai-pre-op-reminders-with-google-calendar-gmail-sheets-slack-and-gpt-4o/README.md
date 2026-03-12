# 🎫 Send AI pre-op reminders with Google Calendar, Gmail, Sheets, Slack and GPT-4o

> ⚡ **146 views** · 🎫 [Ticket Management & Triage](../)

## Description

## 📘 Description
This workflow automates end-to-end pre-surgery checklist reminders and confirmation tracking for healthcare operations teams. It ensures patients receive timely preparation instructions, can confirm completion with a single click, and allows staff to monitor confirmation status in real time—without manual coordination.
Every day at 9:00 AM, the workflow fetches surgery events from Google Calendar, extracts patient details from event descriptions, and generates a unique confirmation link for each patient. An AI assistant then creates a personalized, patient-friendly pre-op checklist email (subject + styled HTML body) that includes surgery details and a confirmation button.
When a patient clicks the confirmation link, a webhook captures the confirmation, updates Google Sheets as the source of truth, and records the timestamp. A separate periodic scheduler scans the sheet for patients who have not confirmed within the expected window. If confirmation is missing, the assigned nurse or owner is alerted in Slack with full patient and surgery context for immediate follow-up.
This creates a closed-loop system: reminder → confirmation capture → tracking → escalation.

## ⚙️ What This Workflow Does (Step-by-Step)
▶️ Daily 9:00 AM Trigger
 Starts the pre-op reminder cycle automatically each morning.
📅 Fetch Today’s Surgery Events (Google Calendar)
 Pulls calendar events and filters only surgery-related entries.
🧾 Extract Patient Details from Event Description
 Parses patient name, email, phone, ID, procedure, and surgery time.
🔗 Generate Unique Confirmation Link
 Creates a secure confirmUrl per patient with tracking parameters.
✉️ AI Email Generation (Subject + HTML Body)
 Uses Azure OpenAI (gpt-4o) to generate a calm, professional checklist email with:
Surgery details
Basic preparation checklist
Green confirmation button linked to confirmUrl
📤 Send Pre-Op Reminder via Gmail
 Delivers the styled HTML email directly to the patient.
✅ Confirmation Webhook (GET /confirm)
 Captures patient clicks, parses query parameters, and marks the checklist as confirmed.
🧾 Upsert Confirmation Status (Google Sheets)
 Stores and updates patient confirmation records as the operational source of truth.
⏳ Periodic Confirmation Check
 Runs on a schedule to scan all patient rows for missing confirmations.
🚨 Slack Alert for Missing Confirmations
 Notifies the nurse or owner with full patient context when confirmation is not received in time.

## 🧩 Prerequisites
 • Google Calendar OAuth2
 • Gmail OAuth2
 • Azure OpenAI (gpt-4o) credentials
 • Google Sheets OAuth2
 • Slack API credentials
 • Publicly accessible webhook URL for confirmation tracking

## 💡 Key Benefits
 ✔ Automated pre-op reminders at a fixed daily time
 ✔ Personalized AI-generated patient emails
 ✔ One-click confirmation tracking
 ✔ Google Sheets audit trail for operations
 ✔ Proactive Slack alerts for missing confirmations
 ✔ Reduced manual follow-ups and missed preparations

## 👥 Perfect For
-  Hospitals and surgical centers
-  Clinic operations teams
-  Care coordinators
-  Day-surgery facilities
-  Healthcare admin automation systems

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Google Calendar, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
