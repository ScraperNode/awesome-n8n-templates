# 📋 Sync Asana project tasks with a mirrored Google Sheets tab

> ⚡ **22 views** · 📋 [Project Management](../)

## Description

## Quick Overview
This workflow runs hourly to sync tasks from an Asana project into a Google Sheets tab, keeping a row-per-task mirror with task metadata and a `present` flag that marks tasks removed from Asana without deleting them from the sheet.

## How it works
1. Runs every hour on a schedule.
2. Fetches all tasks from a specified Asana project via the Asana API (including assignee, due date, completion status, section, permalink, and modified time) and paginates through results.
3. Flattens the Asana task list into one Google Sheets-ready row per task and stamps each row with a sync timestamp.
4. Reads the existing rows from the target Google Sheets tab.
5. Compares Asana tasks to sheet rows by task GID to prepare upserts for current tasks and “soft-delete” updates that set `present` to `No` for tasks no longer in Asana.
6. Writes changes back to Google Sheets by upserting live tasks and updating removed tasks, then produces a one-line run summary with created/updated/removed counts.

## Setup
1. Add an Asana credential (personal access token) and set the Asana project GID used to fetch tasks.
2. Add a Google Sheets OAuth2 credential and set the target spreadsheet ID and tab name.
3. Ensure the sheet tab has a header row with these columns: gid, name, assignee, section, due_on, completed, permalink, modified_at, synced_at, present.
4. Adjust the schedule interval if you want the sync to run more or less frequently.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
