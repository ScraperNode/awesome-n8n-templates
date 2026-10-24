# 🧾 Send fee-due WhatsApp reminders to students using Supabase

> ⚡ **79 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs daily to fetch pending student fee records from Supabase, filters fees due in three days, and sends WhatsApp Business template reminders via the Meta WhatsApp Cloud API, then updates Supabase to mark each reminder as sent.

## How it works
1. Runs every day at 9:00 AM on a schedule.
2. Pulls all pending fee records from Supabase where `reminder_sent` is false and `status` is `pending`.
3. Filters the results to only students whose `due_date` matches exactly three days from today.
4. Sends a pre-approved WhatsApp template message (Meta WhatsApp Cloud API) to each student’s phone number.
5. Updates the corresponding Supabase row to set `reminder_sent` to true so the reminder is not sent again.

## Setup
1. Create a Supabase project, add a `student_fees` table (including `student_phone`, `due_date`, `amount_due`, `status`, and `reminder_sent` fields), and ensure your fee records are stored there.
2. Add Supabase credentials in n8n and set the correct table name in the Supabase nodes.
3. Set up Meta WhatsApp Business Cloud API access in n8n (system user token/credentials) and fill in your WhatsApp phone number ID.
4. Create and get approval for a WhatsApp message template, then replace `REPLACE_WITH_YOUR_APPROVED_TEMPLATE_NAME` with your template name.
5. Adjust the schedule time and the “due in 3 days” logic if you want reminders to go out at a different time or offset.

## 🔗 Nodes Used

Supabase, WhatsApp Business Cloud, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
