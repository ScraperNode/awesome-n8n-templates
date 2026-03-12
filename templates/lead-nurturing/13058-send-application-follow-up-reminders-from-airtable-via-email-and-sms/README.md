# 💬 Send application follow-up reminders from Airtable via email and SMS

> ⚡ **36 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

**How it works**

This workflow runs on a daily schedule and automatically sends follow-up reminders to candidates who have received an application link but have not yet applied. It checks Airtable for eligible records, calculates how much time has passed since outreach was sent, and decides whether to send a first reminder, second reminder, or no message.

All decision logic is handled in a single Code node, which outputs a simple routing value. This makes the workflow easy to understand and prevents fragile conditional logic.

Each reminder is sent only once. After a reminder is sent, the workflow updates Airtable with a corresponding “sent” flag so the same reminder cannot be sent again on future runs.

**Setup steps**

Connect your Airtable account and select the table containing candidate records.

Ensure Airtable includes a timestamp field indicating when outreach was sent.

Ensure checkbox fields exist for each reminder (for example, “Reminder 1 Sent” and “Reminder 2 Sent”).

Connect your email provider (Brevo) and SMS provider.

Set the Cron node to run once per day at your preferred time.

Initial setup typically takes 10–15 minutes.

**When to use this template**

You want automated follow-ups without manual chasing

You need to avoid sending duplicate reminders

You want Airtable to remain the source of truth

## 🔗 Nodes Used

Airtable, HTTP Request, Brevo, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
