# ⚡ Log vocabulary and email a daily word of the day with Gemini, Google Sheets and Gmail

> ⚡ **20 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow captures new vocabulary via an n8n form, uses Google Gemini to generate meaning, example, and grammar notes, logs everything to Google Sheets, and emails you a daily “word of the day” from that sheet using Gmail.

## How it works
1. Receives a submission from an n8n Form with a word, phrase, sentence, or grammar pattern to study.
2. Sends the submitted text to Google Gemini with your target language and level and asks it to return a structured JSON study card.
3. Parses the Gemini response into fields (term, reading, meaning, example, grammar note) and adds metadata like the date added.
4. Appends the study card as a new row in a Google Sheets vocabulary sheet.
5. Runs daily on a schedule, reads all rows from the same Google Sheets vocabulary sheet, and selects the next word to review based on whether it has been sent before.
6. Sends the selected word as an HTML “word of the day” email via Gmail and updates the corresponding Google Sheets row with a last-sent date.

## Setup
1. Add a Google Gemini (Google AI) credential and ensure the selected Gemini model is available in your account.
2. Connect Google Sheets OAuth credentials, create a spreadsheet with a sheet named to match the workflow, and include columns for term, reading, meaning, example, grammar_note, date_added, and last_sent.
3. Update the Spreadsheet ID and Sheet Name in both configuration steps (capture and digest) so the workflow writes to and reads from the same Google Sheet.
4. Connect Gmail OAuth credentials and set the recipient email address for the daily digest.
5. Enable the form trigger and copy/share the generated form URL so you can submit new vocabulary entries.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
