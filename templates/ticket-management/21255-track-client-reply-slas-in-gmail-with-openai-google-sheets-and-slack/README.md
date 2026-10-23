# 🎫 Track client reply SLAs in Gmail with OpenAI, Google Sheets, and Slack

> ⚡ **4 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow runs hourly to find Gmail threads where a client is waiting for your reply, uses OpenAI to triage and summarize new overdue messages, logs SLA timing in Google Sheets, and posts new and escalated reminders to a Slack channel.

## How it works
1. Runs every hour on a schedule.
2. Reads recent Inbox and Sent messages from Gmail and matches them by thread to identify client emails that are still awaiting your reply.
3. Compares the currently-waiting threads against a Google Sheets “Reply Log” to detect newly-due threads, threads that have become overdue, and threads you have already replied to.
4. For newly-due or overdue unlogged threads, sends the email preview to OpenAI to decide whether a reply is needed, assign a priority, and generate a short summary.
5. Appends each new thread evaluation to the Google Sheets “Reply Log” and posts a formatted alert to Slack only when OpenAI indicates a reply is needed.
6. For still-unanswered threads that cross 2× the reply target, updates the row as overdue in Google Sheets and posts an escalation message to Slack.
7. When a reply is detected for an open thread, updates the Google Sheets row with replied time and calculated response hours.

## Setup
1. Connect credentials for Gmail, Google Sheets, OpenAI, and Slack.
2. Create a Google Sheets tab named “Reply Log” with columns matching the fields the workflow writes (including inbound_message_id, thread_id, client_email, subject, summary, priority, stage, status, received_at, flagged_at, replied_at, and response_hours).
3. In the workflow’s settings values, set your email address, internal domains to exclude, reply_target_hours and lookback_days, the Google Sheet ID, and the target Slack channel (and optionally set client_domains to limit monitoring).

## Requirements
- Gmail account (used for both inbox and sent mail)
- OpenAI API key, a Google Sheet with a Reply Log tab, and a Slack workspace

## Customization
- List client_domains to watch only specific clients, and adjust reply_target_hours
- Change the Gmail search to watch one label or a shared client inbox
- Add a weekly Slack summary of average response hours per client from the Reply Log

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
