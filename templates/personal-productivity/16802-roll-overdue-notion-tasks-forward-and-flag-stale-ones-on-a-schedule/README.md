# ⚡ Roll overdue Notion tasks forward and flag stale ones on a schedule

> ⚡ **49 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow runs every morning, scans a Notion tasks database for overdue, unfinished items, rolls their due dates forward, increments a roll counter, and marks tasks as stale once they have been rolled too many times.

## How it works
1. Runs every morning at 7:00 based on a schedule.
2. Retrieves all pages from the selected Notion database.
3. Filters for tasks with a due date before today and a status that is not in the configured “done” list.
4. Sets each overdue task’s due date to today (or the next business day), increments its Rolled counter, and marks it Stale when the roll count exceeds the threshold.
5. Updates the matching Notion pages with the new due date, Rolled number, and Stale checkbox values.

## Setup
1. Add your Notion API credentials and share the target Notion database with the Notion integration.
2. Select your tasks database in the Notion “Get Open Tasks” step.
3. Ensure your database has matching properties (Due date, Status select/status, Rolled number, and Stale checkbox) and update the property names, DONE_VALUES, STALE_THRESHOLD, and ROLL_TO settings in the code to match your schema.

## Requirements
- A Notion internal integration credential, with the tasks database shared with the integration
- A tasks database with a Date property (due date), a Status or Select property, a Number property (roll counter), and a Checkbox property (stale flag)

## Customization
- Set ROLL_TO to roll dates to today or to the next business day
- Edit DONE_VALUES to define which statuses count as finished and are never touched
- Change STALE_THRESHOLD to control how many rolls mark a task stale
- Rename the property keys in the code config to match your own schema
- Adjust the schedule to run at a different time

## Additional info
Overdue is judged by calendar date, so a task due earlier today is left alone until tomorrow. Rows that would not change are skipped before the update step, so the workflow is idempotent and safe to run repeatedly. Fully deterministic, no AI. Test on a copy of your database first.

## 🔗 Nodes Used

Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
