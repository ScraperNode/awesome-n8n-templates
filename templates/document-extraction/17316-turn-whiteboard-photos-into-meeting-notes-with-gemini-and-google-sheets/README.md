# 🔬 Turn whiteboard photos into meeting notes with Gemini and Google Sheets

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow collects a meeting title, attendee emails, and a whiteboard photo via an n8n form, uses Google Gemini to extract structured meeting notes and action items, logs results to Google Sheets, and emails the notes to attendees via Gmail.

## How it works
1. Receives a submission from an n8n form with the meeting title, attendee email list, and an uploaded whiteboard photo.
2. Sends the image to Google Gemini with instructions to produce structured JSON containing a summary, decisions, action items (owner and due date), and open questions.
3. If Gemini cannot parse the whiteboard, sends a Gmail message to the provided attendee emails asking for a clearer, well-lit photo.
4. Formats the extracted fields into a meeting record plus a count and readable list of action items.
5. Appends the meeting notes to a Google Sheets tab for meetings.
6. Emails the formatted notes (summary, decisions, action items, and open questions) to all attendees via Gmail.
7. If action items exist, splits them into individual entries and appends one row per action item to a Google Sheets tab for action tracking.

## Setup
1. Add credentials for the Google Gemini (PaLM) API, Google Sheets OAuth2, and Gmail OAuth2.
2. Select the target Google Sheets spreadsheet and set the two destination tabs to match your setup (for example, “Meetings” and “Action Items”).
3. Publish the n8n form and share the form URL with your team so they can submit whiteboard photos after meetings.

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
