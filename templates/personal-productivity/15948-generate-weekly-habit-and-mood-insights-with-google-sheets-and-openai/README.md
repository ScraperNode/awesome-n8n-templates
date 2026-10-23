# ⚡ Generate weekly habit and mood insights with Google Sheets and OpenAI

> ⚡ **76 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
Track daily mood, energy, sleep, stress, focus, and habits with a simple form, then receive a weekly AI-generated personal analytics report with patterns, best/hardest day comparison, and one small experiment for the next week. The result helps users understand what conditions seem linked with better wellbeing.


## How it works
1. Receives a daily check-in submission from an n8n Form.
2. Normalizes the submitted fields and calculates daily wellbeing and habit scores, tags, a risk flag, and a small suggestion.
3. Appends the daily entry to a Google Sheets `daily_entries` tab.
4. Sends a Gmail confirmation email, using a more supportive message when the risk flag indicates `needs_support`.
5. Runs every week on a schedule trigger and reads all daily entries from Google Sheets.
6. Calculates weekly analytics for the previous Monday–Sunday week (including averages, best/hardest day, and detected patterns) and stops with a “not enough data” Gmail message if fewer than 3 entries exist.
7. Generates a weekly coaching insight with an OpenAI Chat Model (via Groq), parses the returned JSON into email fields, appends the weekly report to a Google Sheets `weekly_reports` tab, and emails the formatted weekly insights via Gmail.

## Setup
1. Connect Google Sheets OAuth2 credentials and update the spreadsheet ID and sheet tabs (`daily_entries` and `weekly_reports`) used by the Google Sheets nodes.
2. Create the `daily_entries` and `weekly_reports` sheets with column names matching the fields the workflow appends (for example `wellbeing_score`, `habit_score`, `risk_flag`, and `ai_summary`).
3. Connect Gmail OAuth2 credentials and replace `YOUR_EMAIL_ADDRESS_PLACEHOLDER` with your recipient email address in all Gmail nodes.
4. Add an OpenAI-compatible API credential (configured here as Groq) and ensure the selected chat model is available to the OpenAI Chat Model node.
5. Adjust the weekly schedule trigger (day/time) if you want the report to run at a different time zone or cadence.
6. Test the daily branch and submit the daily form once. Confirm that a row appears in the daily_entries sheet. Confirm that the confirmation email is sent.
7. Test the weekly branch. Add at least 3 daily entries. For a full test, add 7 entries covering Monday through Sunday. Run the weekly branch manually. Confirm that the weekly analytics node returns one weekly summary item. Confirm that the LLM returns valid JSON. Confirm that the final weekly email is rendered correctly.

## Requirements
- You need credentials for: Google Sheets, Gmail or Email Send, OpenAI

## Customization
- Change the daily questions: Edit the form fields if you want to track different habits.
- Change the scoring logic: Open the Calculate Daily Scores node to adjust wellbeing score weights, habit score rules, tags, risk flag thresholds and tiny suggestions
- Change the weekly reporting day: Open the Weekly Report Trigger node
- Change the LLM prompt: Open the Basic LLM Chain node and redesign the prompt to suit your need. If you change the prompt, keep the JSON structure the same unless you also update the parser and email template.
- Change the email design: Open the Email Weekly Insights node and update the body HTML format.

## Additional info
This workflow is for personal reflection only. It does not provide medical advice, mental health diagnosis, or crisis support. The wellbeing score and habit score are simple personal analytics scores. They are not clinical scores. The AI-generated insight should be treated as a reflection aid, not as expert advice. If a user feels unsafe or at risk of harm, they should contact local emergency or crisis support.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
