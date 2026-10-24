# 🎫 Send AI appointment reminders and follow-ups with Calendly, Gmail, OpenAI, and Google Sheets

> ⚡ **19 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow checks upcoming Calendly appointments every two hours, uses OpenAI to draft reminder and follow-up emails, sends them via Gmail, and logs whether the customer replied or needed a follow-up in Google Sheets.

## How it works
1. Runs every 2 hours on a schedule.
2. Fetches scheduled events from the Calendly API and iterates through each appointment.
3. Filters to appointments starting within the next 24 hours, then fetches invitee details for each event.
4. Formats the client and appointment details, generates a short reminder with OpenAI, and sends it to the invitee via Gmail.
5. Waits briefly, then searches Gmail for a reply from the invitee’s email address.
6. If no reply is found, uses OpenAI to draft a polite follow-up email, sends it via Gmail, and appends a “Follow-Up Sent” record to Google Sheets.
7. If a reply is found, appends a “Customer Replied” record with the Gmail thread ID to Google Sheets.

## Setup
1. Add a Calendly personal access token (HTTP Bearer Auth) and replace `YOUR_CALENDLY_USER_URI` in the Calendly request with your user URI.
2. Add an OpenAI credential for the reminder and follow-up text generation.
3. Connect a Gmail OAuth2 account with permission to send mail and read inbox messages.
4. Connect a Google Sheets OAuth2 account and set the target spreadsheet and sheet tabs used for reply and follow-up logging.
5. Adjust the schedule interval, 24-hour reminder window, and wait time to match how far in advance you want reminders and how long you want to wait before sending a follow-up.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
