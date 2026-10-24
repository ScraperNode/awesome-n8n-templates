# 🔧 Send renewal reminder ladder with Google Sheets, GPT-4.1-mini and Slack

> ⚡ **29 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow runs daily to read renewal data from Google Sheets, calculate reminder stages and renewal risk, use OpenAI to draft tailored reminder emails, send them via Gmail, optionally book high-risk save calls in Google Calendar, and post a run summary to Slack.

## How it works
1. Runs every day at 09:00 on a schedule.
2. Reads renewal rows from Google Sheets and normalizes fields like email, renewal date, usage score, open tickets, and contract value while skipping invalid rows.
3. Calculates days until renewal, assigns each customer to a T-30, T-7, or T-1 reminder stage, and computes a 0–100 risk score while preventing repeat reminders for the same stage.
4. For each due customer, uses OpenAI to generate a short plain-text renewal reminder email with a tone based on the risk tier.
5. Sends the email via Gmail and updates the matching Google Sheets row with the last reminder stage/date and the latest risk score.
6. If the risk score is 70 or higher, creates a “save call” event on Google Calendar for the renewal date.
7. Builds a daily digest of reminders sent and high-risk accounts and posts it to a Slack channel.

## Setup
1. Connect credentials for Google Sheets, Gmail, OpenAI, Google Calendar, and Slack.
2. Replace YOUR_GOOGLE_SHEET_ID and confirm the sheet/tab name (Renewals) and required columns (including Customer ID, Email, Renewal Date, Last Reminder Stage/Date, and Risk Score).
3. Set the target Google Calendar (YOUR_CALENDAR_EMAIL) and Slack channel name (YOUR_SLACK_CHANNEL_NAME).
4. Adjust the schedule time, ladder day ranges (T-30/T-7/T-1), and risk scoring thresholds/weights in the code steps to match your process.

## 🔗 Nodes Used

Google Sheets, Slack, Google Calendar, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
