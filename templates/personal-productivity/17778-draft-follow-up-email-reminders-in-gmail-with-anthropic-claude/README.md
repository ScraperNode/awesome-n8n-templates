# ⚡ Draft follow-up email reminders in Gmail with Anthropic Claude

> ⚡ **24 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs every weekday morning to find Gmail threads where your last sent message has not been replied to, generates short follow-up drafts with Anthropic Claude, saves each as a Gmail draft in the original thread, and emails you a digest of the queued follow-ups.

## How it works
1. Runs every weekday morning on a schedule.
2. Fetches messages you sent in Gmail and messages you received over the same look-back window.
3. Compares messages by Gmail thread to keep only threads where the newest message is still yours, excluding automated senders by keyword and limiting the list to a maximum count.
4. Filters the remaining threads to only those silent for between the configured minimum and maximum number of days.
5. Sends the thread context (recipient, subject, and last-sent snippet) to the Anthropic Messages API (Claude) to generate a prioritized follow-up draft for each thread.
6. Saves each generated follow-up as a Gmail draft reply on the original thread and sends you a plain-text digest email listing the drafts sorted by priority.

## Setup
1. Connect your Gmail credentials for reading sent/received messages, creating drafts, and sending the digest email.
2. Provide an Anthropic API key (set `ANTHROPIC_API_KEY` in your n8n environment) to allow the HTTP request to Claude.
3. Update the configuration values for look-back days, silence window (min/max), excluded sender keywords, your name, tone, digest recipient, and maximum threads to process.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
