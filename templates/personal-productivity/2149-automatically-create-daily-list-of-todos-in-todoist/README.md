# ⚡ Automatically create daily list of todos in Todoist

> ⚡ **2,512 views** · ⚡ [Personal Productivity](../)

## Description

## Use case
Automatically create todo items in Todoist every morning. 

This workflow has two flows
1. At 5am, delete any uncompleted tasks every morning
2. At 5:10 am, copy all template tasks into Inbox

In each template task, set the due dates and days to add the task. You can do that like this `days:mon,tues; due:8pm` which will add the task every Monday and Tuesday and make it due at 8pm.


## How to setup
1. Add Todoist creds
2. Create a `template` list to copy from in Todoist. Add days and due times on each task as necessary.
3. Set the projects to copy from and to write to in each **Todoist** node

## 🔗 Nodes Used

Todoist, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
