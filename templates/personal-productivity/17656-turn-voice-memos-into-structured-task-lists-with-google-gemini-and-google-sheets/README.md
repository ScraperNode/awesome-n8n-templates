# ⚡ Turn voice memos into structured task lists with Google Gemini and Google Sheets

> ⚡ **16 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow collects a voice memo via an n8n form, transcribes it with Google Gemini, extracts a structured task list, emails the summary and tasks via Gmail, and appends each task as a new row in Google Sheets.

## How it works
1. Receives a voice memo, project name, and recipient email address through an n8n Form trigger.
2. Sends the uploaded audio file to Google Gemini to generate a transcript, and emails the user if transcription fails.
3. Uses a Google Gemini chat model to convert the transcript into a structured JSON output containing a one-line summary and tasks with owner, due date, and priority.
4. Formats the extracted tasks into an email-friendly list and prepares the task fields for storage.
5. Sends the summary and task list to the submitter using Gmail.
6. Splits the task array into individual items and appends each task as a row in a Google Sheets worksheet.

## Setup
1. Add credentials for Google Gemini (PaLM) API, Gmail OAuth2, and Google Sheets OAuth2.
2. In the Google Sheets append step, select your target spreadsheet and the worksheet (for example, a tab named “Tasks”).
3. Open the form URL from the Form trigger, submit a project name and your email, and upload an audio file in a supported format (mp3, m4a, wav, or ogg).

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
