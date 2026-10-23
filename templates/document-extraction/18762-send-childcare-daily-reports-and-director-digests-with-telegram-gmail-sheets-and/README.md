# 🔬 Send childcare daily reports and director digests with Telegram, Gmail, Sheets and DeepSeek

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Daily childcare notes turned into parent-ready reports. This workflow takes each teacher's notes from Telegram, matches the child against your Google Sheets roster, and has DeepSeek write a parent-friendly summary before Gmail sends it, with the director pulled in whenever something needs attention.

*Last updated: September 2026.*

## Quick Overview
This workflow collects teachers’ daily childcare notes via Telegram, matches each child to a Google Sheets roster, uses DeepSeek to generate a parent-friendly summary, logs results to Google Sheets, and emails parents via Gmail, with Telegram/Gmail alerts for unknown children, processing errors, and reports needing director attention.

## How it works
1. Receives a teacher’s daily report message through a Telegram bot.
2. Validates that the message contains enough content, replies on Telegram if it looks incomplete, and logs invalid submissions to Google Sheets.
3. Loads the child roster from Google Sheets, extracts the child name from the message text, and checks for a matching roster entry.
4. If no match is found, sends an alert to the director via Telegram and Gmail and logs the unknown-child report to Google Sheets.
5. If a match is found, sends the notes plus roster context to a DeepSeek (LangChain) agent to generate a short JSON summary with concern and follow-up flags, and alerts the director on Telegram if the AI output cannot be parsed.
6. Logs the final report (including summary and flags) to Google Sheets, emails the daily summary to the parent via Gmail, and confirms back to the teacher on Telegram.
7. If the report is flagged as a concern or follow-up, sends the director a detailed alert via Telegram and Gmail.
8. Runs a daily scheduled sweep to find children missing a report by comparing the roster to today’s Google Sheets logs, then sends reminders via Telegram and Gmail, and runs a weekly scheduled digest that uses DeepSeek to summarize weekly stats and posts/emails the digest.

## Setup
1. Create and connect Telegram bot credentials for both the Telegram trigger and Telegram send actions, then start the workflow so the Telegram webhook can receive messages.
2. Connect a Google Sheets OAuth2 credential and ensure the spreadsheet contains a “Roster” sheet (with fields like child_name, class_name, parent_email, allergies, emergency_contact) and a “DailyReports” sheet for logging.
3. Connect an OpenAI API credential for the DeepSeek chat model (deepseek-v4-flash) used by the parent-summary agent and the weekly-digest agent.
4. Connect a Gmail OAuth2 credential and update the director/ops email addresses and the director Telegram chat ID used for alerts and reminders.
5. Adjust the scheduled trigger times (daily sweep and weekly digest) to match your center’s timezone and reporting cadence.

### Quick Answers
**What if a note looks incomplete?**
The workflow replies on Telegram and logs the submission as invalid in Google Sheets.

**What if the child is not on the roster?**
The director is alerted through Telegram and Gmail, and the unknown-child report is logged to Google Sheets.

**What does DeepSeek produce?**
A short JSON summary with concern and follow-up flags. If that output cannot be parsed, the director is alerted on Telegram.

**Who receives what?**
The parent gets the daily summary by Gmail, the teacher gets a Telegram confirmation, and a flagged concern or follow-up triggers a detailed director alert by Telegram and Gmail.

**What about children with no report?**
A daily sweep compares the roster against today's logs and sends reminders by Telegram and Gmail. A weekly digest with AI-written stats is posted and emailed as well.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
