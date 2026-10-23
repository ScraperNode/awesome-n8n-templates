# 🔬 Send weekly parent progress reports with Google Sheets, GPT-4o mini and Gmail

> ⚡ **30 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow runs every Friday at 18:00 UTC to read student performance data from Google Sheets, generate a personalised parent narrative with OpenAI, render it as a PDF via PDFShift, and send updates through Gmail and Telegram, while logging sends back to Google Sheets and alerting errors in Slack.

## How it works
1. Runs on a weekly schedule (Friday 18:00 UTC) and pulls all student rows from a Google Sheets “Students” worksheet.
2. Calculates attendance, average test score, and homework completion percentages and flags students that fall below the configured thresholds.
3. Uses OpenAI (gpt-4o-mini) to write a warm, parent-friendly narrative report using each student’s metrics and any red flags.
4. Injects the narrative into an HTML template and converts it into a PDF attachment using the PDFShift API.
5. Sends the PDF report to each parent via Gmail and posts a brief performance summary to the parent via Telegram.
6. If a student meets the urgent criteria, sends an additional high-priority Telegram alert listing the specific concerns.
7. Appends an audit log row to a Google Sheets “Send Logs” worksheet for each student and sends a consolidated Telegram summary of urgent students to the teacher.
8. If the workflow errors, posts an alert message to a Slack channel via the workflow error trigger.

## Setup
1. Connect Google Sheets OAuth credentials and set your spreadsheet ID and worksheet names for the “Students” read and “Send Logs” append actions.
2. Add an OpenAI API key credential (or OpenAI connection) for generating the parent narrative.
3. Provide a PDFShift API key via an n8n variable/credential and ensure the HTTP request Authorization header references it.
4. Connect a Gmail OAuth2 credential and confirm the parent email field in your sheet maps to the recipient address.
5. Add a Telegram Bot credential and ensure your sheet contains the correct parent and teacher Telegram chat IDs.
6. Connect Slack OAuth2 credentials and select the channel that should receive workflow error alerts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Telegram, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
