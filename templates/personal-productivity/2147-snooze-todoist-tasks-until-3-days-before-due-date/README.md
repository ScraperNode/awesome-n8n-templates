# ⚡ Snooze Todoist tasks until 3 days before due date

> ⚡ **848 views** · ⚡ [Personal Productivity](../)

## Description

## Use case
This workflow snoozes any Todoist tasks, by moving them into a Snoozed todoist list and unsnoozes them 3 days before due date. Helps keep inbox clear only of tasks you need to worry about soon.
![Screenshot 20240228 at 19.40.42.png](fileId:754)

## How to setup
1. Add your Todoist creds
2. Create a Todoist project called `snoozed`
3. Set the project ids in the relevant nodes
4. Add due dates to your tasks in Inbox. Watch them disappear to `snoozed`. Set their date to tomorrow, watch it return to inbox.

## How to adjust this template
Adjust the timeline.. Maybe 3 days is too close for you. Works mostly for me :)

## 🔗 Nodes Used

HTTP Request, Todoist, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
