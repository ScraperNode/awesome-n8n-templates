# 🎫 Triage and route support emails with Gemini, Gmail, Sheets and Slack

> ⚡ **31 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow monitors unread Gmail support emails, uses Google Gemini to classify and summarize each message and draft a reply, logs the ticket details to Google Sheets, creates a Gmail draft response, and sends a Slack alert when the ticket is marked high priority.

## How it works
1. Triggers every minute when a new unread email arrives in Gmail.
2. Adds brand context and support guidelines, then builds a prompt that asks Google Gemini to return a JSON classification, priority, summary, and suggested reply.
3. Sends the prompt to the Google Gemini API and parses the returned JSON into structured ticket fields.
4. Appends the ticket details (sender, subject, category, priority, summary, and suggested reply) to a Google Sheets tab.
5. Creates a Gmail draft reply in the original thread using the suggested response text.
6. Sends a Slack message to a chosen channel when the ticket priority is high.

## Setup
1. Connect credentials for Gmail, Google Gemini (PaLM) API, Google Sheets, and Slack.
2. Update the brand name and support guidelines values used to guide Gemini’s response.
3. Select the target Google Sheets spreadsheet and the “Tickets” sheet (and ensure your header columns match the fields you want to log).
4. Choose the Slack channel to receive high-priority alerts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
