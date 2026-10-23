# 🔬 Write safe procedures from screen recordings with Google Gemini

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors unread Gmail messages for scheduling-related subjects, uses Google Gemini and Google Calendar to propose three verified meeting times within your rules, then drafts a reply, places a tentative hold on your calendar, logs the request to Google Sheets, and sends a Slack notification.

## How it works
1. Polls Gmail every minute for unread emails whose subject suggests a meeting request.
2. Adds your working hours, timezone, default meeting duration, and booking rules to the incoming email context.
3. Uses Google Gemini with Google Calendar tools to decide if the email is a real scheduling request, then lists existing events and checks availability to generate three verified time slots and a reply.
4. If it is a scheduling request, creates a draft reply in the original Gmail thread that includes the proposed time options.
5. Places a transparent “HOLD” event on Google Calendar for the first proposed slot and stores the proposed options and notes in the event description.
6. Appends the request details to a Google Sheets log and posts a summary to a Slack channel.
7. If it is not a scheduling request, marks the email as read in Gmail.

## Setup
1. Connect credentials for Gmail, Google Calendar, Google Gemini (PaLM) API, Google Sheets, and Slack.
2. Select the correct Google Calendar in the event listing, availability check, and hold-event steps.
3. Update the scheduling rules (working hours, timezone, default duration, and buffer/booking rules) to match your availability.
4. Choose the target Google Sheets spreadsheet and sheet for logging meeting requests.
5. Select the Slack channel where the workflow posts scheduling notifications.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Basic LLM Chain, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
