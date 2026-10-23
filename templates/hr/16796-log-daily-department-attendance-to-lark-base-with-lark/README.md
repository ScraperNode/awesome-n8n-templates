# 👥 Log daily department attendance to Lark Base with Lark

> ⚡ **5 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow runs daily (or manually) to pull attendance logs for all users in a Lark department via the Lark Open Platform APIs, then writes each user’s first check-in and last check-out into a Lark Base (Bitable) table in batches.

## How it works
1. Runs on a daily schedule at 23:30 or starts manually for testing.
2. Requests a Lark tenant access token using your Lark app ID and app secret.
3. Fetches the list of users in the configured Lark department.
4. Calculates the current day’s start and end timestamps in the configured timezone and prepares one query per user.
5. Queries Lark Attendance for each user’s check-in/out flows within the day window.
6. Consolidates results per user per day, keeping the first check-in and last check-out and deriving on-time/late and early-out statuses.
7. Batch-creates records in the target Lark Base (Bitable) table with the attendance details.

## Setup
1. Create a Lark app with access to Contact, Attendance, and Bitable APIs, then fill in `app_id` and `app_secret` in Template Config.
2. Set your `department_id` (open_department_id) in Template Config and adjust `departmentPageSize` if needed.
3. Create or choose a Lark Base (Bitable) app and table, then set `bitable_AppToken` and `bitable_TableId` in Template Config.
4. Ensure the target Bitable table has the required fields (Employee, Check In/Out Time, comments, location, Employee Code, and the two status single-select fields with the specified values).
5. Optionally adjust `timezone`, `bitableBatchSize`, and the check-in/check-out cutoff times in Template Config to match your attendance rules.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
