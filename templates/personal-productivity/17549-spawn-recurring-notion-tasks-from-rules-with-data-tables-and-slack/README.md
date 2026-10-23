# ⚡ Spawn recurring Notion tasks from rules with Data Tables and Slack

> ⚡ **16 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow runs daily to read recurrence rules from a Notion database, creates due task pages in a Notion tasks database, prevents duplicate spawns using an n8n Data Table ledger, and posts a summary of created tasks to a Slack channel.

## How it works
1. Runs every day at 06:00 on a schedule.
2. Reads all pages from a Notion recurrence rules database.
3. Evaluates each rule against today’s date (in a configured timezone) to select which tasks are due.
4. Checks an n8n Data Table ledger to skip rules that already spawned today.
5. Creates a new page in a Notion tasks database for each due rule and sets its Due date to today.
6. Upserts the rule’s last-spawned date into the ledger and posts a one-line summary to a Slack channel.

## Setup
1. Add a Notion API credential and set your Notion Rules database ID and Notion Tasks database ID in the two Notion nodes.
2. Ensure the rules database includes properties like rule_id, task_title, frequency, interval_days, anchor_date, weekdays, day_of_month, nth, nth_weekday, and active.
3. Ensure the tasks database has a date property named Due.
4. Create an n8n Data Table named cadence_last_spawned with columns rule_id, last_spawned_on, and rule_title.
5. Add a Slack credential and set the target channel in the Slack message step.
6. (Optional) Update the TIMEZONE value in the rule evaluation code to match your preferred day boundary.

## 🔗 Nodes Used

Slack, Notion, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
