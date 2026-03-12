# 🎫 Post-surgery patient triage & follow-up system with Gemini AI, Telegram & Google Suite

> ⚡ **70 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Who’s it for
This template is for clinics, hospitals, care teams, and telemedicine providers who need a structured, automated system for post-surgery follow-up. It helps reduce manual workload while ensuring every patient gets timely check-ins and appropriate triage.

## What it does / How it works
This workflow automates daily recovery monitoring using Google Sheets and Telegram.  
It sends scheduled check-in messages to all patients within their follow-up window.  
When a patient replies, the message is:

- Captured by Telegram Trigger  
- Cleaned and structured  
- Summarized by an AI agent  
- Classified into **low**, **moderate**, or **high** intensity  

Based on the intensity level:

- **Low:** Sends a supportive, non-urgent response  
- **Moderate:** Sends guidance + schedules a follow-up event in Google Calendar  
- **High:** Sends an alert email to the doctor via Gmail  

All logic runs automatically.

## Requirements
- Google Sheets OAuth2 credentials  
- Gmail OAuth2 credentials  
- Google Calendar OAuth2 credentials  
- Telegram Bot credentials  
- Gemini API credentials  
- A Google Sheet with patient name, surgery type, follow-up duration, and doctor email  

## How to set up
1. Connect all required credentials inside n8n.  
2. Replace the Google Sheet ID with your own patient sheet.  
3. Adjust column mappings if your sheet structure differs.  
4. Test by sending a Telegram message to your bot.  
5. Enable the Schedule Trigger to begin automated daily follow-ups.

## How to customize the workflow
- Modify AI prompts inside the AI Agent nodes  
- Adjust triage logic for intensity levels  
- Change follow-up intervals in the Schedule Trigger  
- Add additional notification channels (SMS, Slack, CRM logging)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
