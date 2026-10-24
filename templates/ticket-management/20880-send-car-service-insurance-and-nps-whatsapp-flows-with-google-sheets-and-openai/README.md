# 🎫 Send car service, insurance, and NPS WhatsApp flows with Google Sheets and OpenAI

> ⚡ **15 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow uses Google Sheets, WhatsApp Business Cloud, OpenAI, Gmail, webhooks, and an n8n Form to send automated service and insurance reminders, manage test-drive follow-ups, sync closed job cards from a DMS, and collect and triage post-service NPS feedback.

## How it works
1. Runs every day at 9 AM (IST) and loads vehicle, test-drive, and reminder-log data from Google Sheets.
2. Builds a capped daily queue (up to 150) of due service reminders, insurance renewal reminders, and scheduled test-drive follow-ups while skipping any reminder stage already logged.
3. Sends service and insurance reminder messages to customers via WhatsApp Business Cloud and appends each send result to the Reminder Log in Google Sheets.
4. Sends urgent insurance cases to your insurance desk on WhatsApp and sends a daily summary of counts to the service manager on WhatsApp.
5. Generates day 1/3/7/14 test-drive follow-up copy with OpenAI, sends it to the lead via WhatsApp, updates the lead in Google Sheets, and alerts the salesperson if the lead is marked cold.
6. Receives a “job card closed” webhook from your DMS, upserts the job into the Service Jobs sheet, updates the vehicle’s last service date/odometer in the Vehicles sheet, waits 3 hours, and sends an NPS survey link via WhatsApp.
7. Accepts NPS submissions via an n8n Form, looks up the related job in Google Sheets, uses OpenAI to analyze the comment, routes the response by NPS band, and sends the appropriate WhatsApp/Gmail notifications while logging the outcome back to Google Sheets.

## Setup
1. Create a Google Sheets file with tabs named Vehicles, Test Drives, Reminder Log, Service Jobs, and NPS Log, and ensure each tab includes the key columns referenced in the workflow (for example vehicle_id, phone, insurance_expiry, and job_card).
2. Add credentials for Google Sheets, WhatsApp Business Cloud, OpenAI, and Gmail, then replace all REPLACE_WITH_GOOGLE_SHEET_ID, REPLACE_WITH_WHATSAPP_PHONE_NUMBER_ID, and service manager email/phone placeholders in the workflow.
3. Edit the “Set AutoOS Config” values (dealer name, booking/insurance links, service intervals, thresholds, and manager/desk WhatsApp numbers) to match your dealership.
4. Copy the production URL of the “Post-Service NPS Form” and set it in the NPS link inside the job-card normalization step, then configure your DMS to POST closed job cards to the workflow webhook path (and secure it with header authentication if required).
5. Set your Google review link/review ID used in the promoter message so promoters are sent to the correct review page.

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail, WhatsApp Business Cloud, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
