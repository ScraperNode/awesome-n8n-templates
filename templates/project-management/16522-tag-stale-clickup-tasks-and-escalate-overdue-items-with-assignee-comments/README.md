# 📋 Tag stale ClickUp tasks and escalate overdue items with assignee comments

> ⚡ **16 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow runs daily on a schedule and checks ClickUp tasks in one or more lists for inactivity based on the task’s date_updated field, automatically applying “stale” tags and escalating long-idle tasks by tagging them and posting an assignee comment.

## How it works
1. Runs every day at the configured hour using the schedule trigger.
2. Loads monitoring settings (statuses, tags, stale thresholds, and tag names) and fetches matching tasks from the selected ClickUp list(s), then merges and deduplicates them.
3. Skips tasks that already have the second-level stale tag (for example, stale:14).
4. For tasks without the first-level stale tag, checks the last updated timestamp and adds either the first-level stale tag (for example, stale:7) or the second-level stale tag if they already exceed the higher threshold.
5. For tasks that already have the first-level stale tag, checks whether enough time has passed since that tag was applied and, if so, removes the first-level tag and adds the second-level stale tag.
6. When a task is escalated to the second-level stale tag, posts a warning comment on the ClickUp task and assigns the comment to the task assignee (or the creator if no assignee exists).

## Setup
1. Add a ClickUp API credential (OAuth or API token) and select it on all ClickUp nodes.
2. In the ClickUp task search node(s), choose the list(s) you want to monitor and enable/configure the second list node if you want to pull tasks from multiple lists.
3. Update the monitoring settings (monitoredStatuses, monitoredTags, daysUntilFirstStaleTag, daysUntilSecondStaleTag, and the stale tag names) to match your ClickUp workspace conventions.
4. Adjust the schedule trigger time and, if needed, set the workflow timezone in n8n settings so the run time matches your local time.

## Requirements
- A ClickUp account with API access
- ClickUp credential configured in n8n
- At least one ClickUp list to monitor

## Customization
- Change thresholds — Edit `daysUntilFirstStaleTag` and `daysUntilSecondStaleTag` in `SetContext` to any number of days
- Change tag names — Update `firstStaleTagName` / `secondStaleTagName` to match your ClickUp tag naming convention
- Monitor different statuses — Edit `monitoredStatuses` and `monitoredTags` in `SetContext` (e.g. add `review`, `blocked`)
- Add more lists — Duplicate `GetTaskFromList1`, update the List ID, enable the node, and connect its output to a new input port on `AppendListTasks`
- Change schedule — Open `TriggerRegularly` and switch from daily to weekdays-only or any custom cron interval
- Disable subtasks — Open each `GetTaskFromList` node and set `subtasks` to `false` in the Filters section

## 🔗 Nodes Used

ClickUp, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
