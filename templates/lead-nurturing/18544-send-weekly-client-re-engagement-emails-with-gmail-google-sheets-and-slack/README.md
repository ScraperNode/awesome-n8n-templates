# 💬 Send weekly client re-engagement emails with Gmail, Google Sheets, and Slack

> ⚡ **15 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs every Monday and checks a Google Sheets contact list for clients inactive for 14+ days, then sends each one a re-engagement email via Gmail, logs the outreach to a second Google Sheets tab, and posts a top-10 summary (plus error alerts) to Slack.

## How it works
1. Runs every Monday at 9:00 AM using a scheduled trigger.
2. Reads all contact rows from Google Sheets (Sheet1) in the “Client Engagement Automation” spreadsheet.
3. Calculates which contacts have a “Last Activity Date” older than 14 days and flags them as needing attention.
4. Splits the inactive contact list into one item per contact and keeps only records flagged for attention.
5. Sends a re-engagement email to each inactive contact using Gmail.
6. Appends each contacted client to Google Sheets (Sheet2), then compiles a Slack message summarizing the total count and listing up to 10 clients.
7. Posts the weekly summary to a Slack channel and sends a separate Slack alert if the workflow execution fails.

## Setup
1. Add Google Sheets credentials with access to the “Client Engagement Automation” spreadsheet, and confirm Sheet1 contains the columns “First Name”, “Last Name”, “Email”, “Phone”, “Company”, and “Last Activity Date”.
2. Add Gmail credentials for the mailbox that sends the re-engagement emails, and customize the subject/body and sender details as needed.
3. Add Slack credentials, select the target channel for the weekly summary and error alerts, and update the channel if you want a dedicated notifications/errors channel.
4. Ensure Sheet2 exists with matching header columns for the appended log rows, and optionally configure a unique key (for example, Email) to avoid duplicate log entries on reruns.
5. Adjust the cron schedule (currently `0 9 * * 1`) and the inactivity threshold (currently 14 days) to match your engagement cadence.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
