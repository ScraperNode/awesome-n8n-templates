# 🔬 Summarize Zoom meetings and create follow-ups with OpenAI, ClickUp, and Outlook

> ⚡ **19 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow pulls the transcript and participant list from a recent Zoom meeting, uses OpenAI to generate formal meeting minutes, emails the summary via SMTP, and runs an AI agent that creates ClickUp tasks and (when details exist) schedules a follow-up meeting in Microsoft Outlook Calendar.

## How it works
1. Starts when you manually run the workflow.
2. Fetches your scheduled Zoom meetings and keeps only those that started within the last 24 hours.
3. Requests the meeting recording files from Zoom, stops with an error if no transcript is available, then extracts the transcript download URL.
4. Downloads the Zoom transcript file, extracts its text, and reformats it into clean, readable dialogue.
5. Pulls the Zoom meeting participant list (including emails) and sends the transcript and participants to OpenAI to generate structured meeting minutes.
6. Formats the minutes into an HTML email and sends the summary via SMTP to a participant email address.
7. Uses an OpenAI-powered agent to extract action items and follow-up details from the same transcript, then creates tasks in ClickUp and creates a follow-up event in Microsoft Outlook Calendar when scheduling information is present.

## Setup
1. Add Zoom OAuth2 credentials and ensure the account has access to cloud recordings and transcripts for the meetings you want to process.
2. Add an OpenAI API credential for both the meeting-minutes generation and the agent that creates tasks and meetings.
3. Configure an SMTP credential and update the sender and recipient logic (the workflow currently emails the first participant returned by Zoom).
4. Add a ClickUp OAuth2 credential and set the target workspace, space, folder, and list IDs for task creation.
5. Add a Microsoft Outlook OAuth2 credential, select the target calendar ID, and confirm the timezone and event fields match your scheduling needs.

## 🔗 Nodes Used

HTTP Request, Webhook, WooCommerce, DHL, Execute Workflow Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
