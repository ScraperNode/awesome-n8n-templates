# 🎫 Classify Gmail enquiries with GPT‑4o‑mini and log them to Google Sheets

> ⚡ **4 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow polls a Gmail inbox, filters out auto-replies and bounce emails, classifies real enquiries with an OpenAI-compatible chat model, validates and sanitizes the AI output, and appends each enquiry as a structured row in Google Sheets.

## How it works
1. Triggers every 15 minutes and fetches emails from Gmail regardless of read status.
2. Filters out common machine-generated messages (such as out-of-office replies and delivery failures) and normalizes sender, reply-to, subject, body, and a short excerpt.
3. Sends the email content to the OpenAI Chat Completions API to generate a JSON classification (category, priority, sentiment, language, summary, and recommended action).
4. Validates the AI JSON against allowed values, escalates to high priority and records substituted fields when output is missing or out of range, and sanitizes text to prevent Google Sheets formula injection.
5. Appends one row per enquiry to a Google Sheets spreadsheet with the received time, sender details, AI classification, and excerpt.

## Setup
1. Connect your Gmail account credential and confirm the polling interval and search query settings in the Gmail trigger.
2. Add an OpenAI API credential (or compatible provider) and ensure the model name in the Settings step matches a model available to your account.
3. Connect your Google Sheets credential, select the target spreadsheet and sheet, and create the header row with the required columns in the expected order before mapping fields.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
