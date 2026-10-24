# ⚡ Create realistic exam study plans via Telegram with Gemini and Google Sheets

> ⚡ **26 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/7mFGYw7qAwU

This workflow uses Telegram, Google Gemini, and Google Sheets to extract exam details from a student message, generate a realistic study plan, save it for future reference, and send today’s actionable tasks back to the student.

## How it works
1. Receives a Telegram message from a student describing their exam and study constraints.
2. Uses Google Gemini to extract structured exam details (subject, exam date, chapters, and hours per day) and normalizes the daily hours and days remaining.
3. If required details are missing or the exam date is today/past, sends a Telegram reply asking the student for the missing or corrected information.
4. If details are valid, reads existing study plans from Google Sheets to provide the student’s previous context.
5. Uses Google Gemini to generate a detailed JSON study plan with block-based tasks for the first 7 days and a roadmap for the remaining days.
6. Appends the generated plan to a Google Sheets “Study Plans” tab and sends a formatted “today’s plan” message to the student on Telegram.
7. Logs the completed action to a Google Sheets “Activity Log” tab.

## Setup
1. Connect Telegram credentials and start a Telegram bot, then message the bot so the Telegram Trigger can receive updates.
2. Add a Google Gemini (Google PaLM) API credential for both AI steps.
3. Create a Google Sheets service account credential and share your target spreadsheet with the service account email.
4. Replace the placeholder Google Sheet ID and ensure the spreadsheet contains tabs named “Study Plans” and “Activity Log” with columns that match the appended fields.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
