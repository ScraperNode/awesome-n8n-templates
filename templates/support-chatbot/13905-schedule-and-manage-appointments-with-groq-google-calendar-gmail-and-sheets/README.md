# 💬 Schedule and manage appointments with Groq, Google Calendar, Gmail and Sheets

> ⚡ **466 views** · 💬 [Support Chatbots](../)

## Description

## AI appointment bot with Google Calendar, Gmail and Sheets

---

📌 Overview
This workflow automates end-to-end appointment scheduling for your business 
using an AI-powered chatbot. Clients can book, reschedule, or cancel meetings 
through a simple chat interface — no manual coordination needed.

Two independent flows run in parallel. The AI Chat Flow handles real-time 
client conversations using Groq LLaMA 4 Scout, managing calendar availability, 
event creation, updates, and Gmail confirmations automatically. The Daily Sync 
Flow runs every morning to refresh your Google Sheet with the day's appointments 
and email an admin summary report.

All times are handled in IST (GMT+05:30) with full ISO 8601 formatting.

---

⚙️ How it works

AI Chat Flow
* Client sends a message to the bot
* AI Agent collects name, email, purpose, date, time, and duration
* Checks Google Calendar for availability
* Creates, updates, or deletes calendar events based on request
* Sends Gmail confirmation or cancellation email to the attendee

Daily Sync Flow
* Triggers every morning at 9:30 AM IST
* Clears previous rows from Google Sheets (keeps header)
* Fetches all of today's Google Calendar events
* Formats and inserts each event into the sheet
* Emails the admin a summary report with total meeting count and sheet link

🛠️ Setup steps
1. Import this workflow into n8n
2. Add a Google Calendar OAuth2 credential and set your calendar email
3. Add a Gmail OAuth2 credential for the agent and admin report
4. Add Google Sheets OAuth2 (for Clear node) and Service Account (for Insert node)
5. Add your Groq API key for the LLaMA 4 Scout model
6. Update your admin email, calendar email, and Google Sheet ID in the workflow
7. Activate the workflow — both flows run independently

---

🚀 Features

AI-powered scheduling
* Books, reschedules, and cancels appointments via chat
* Checks real-time calendar availability before confirming
* Suggests 3 alternative slots if the requested time is unavailable
* Sends automatic Gmail confirmations to attendees
* Maintains conversation memory across the session (last 50 messages)

---

Daily reporting
* Auto-clears and refreshes the Google Sheet every morning
* Syncs all calendar events with full details (name, email, time, duration)
* Emails admin a daily count summary with a direct sheet link

---

📋 Requirements
* n8n (cloud or self-hosted)
* Google Calendar, Gmail, and Google Sheets access
* Groq API key (free tier supported)

---

🎯 Benefits
* Zero manual appointment coordination
* Clients self-serve via chat 24/7
* Admin always has a fresh daily schedule in Google Sheets
* Automatic email confirmations build client trust
* IST timezone enforced consistently across all events

--- 

👨‍💻 Author
BytezTech Pvt Ltd

## 🔗 Nodes Used

Google Sheets, Google Calendar, Gmail, Schedule Trigger, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
