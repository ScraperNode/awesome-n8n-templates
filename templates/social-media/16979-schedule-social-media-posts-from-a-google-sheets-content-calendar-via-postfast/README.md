# 📱 Schedule social media posts from a Google Sheets content calendar via PostFast

> ⚡ **71 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow runs every morning to read a Google Sheets content calendar, filter for posts marked ready and scheduled in the future, schedule them in PostFast, and then update the sheet to mark each row as scheduled.

## How it works
1. Runs every day at 7:00 AM using a schedule trigger.
2. Reads all rows from a Google Sheets content calendar.
3. Keeps only rows where the status is `ready` and the `scheduledAt` time is at least 10 minutes in the future.
4. Creates scheduled posts in PostFast using each row’s content, scheduled time, and social account ID.
5. Updates the corresponding Google Sheets rows to set `status` to `scheduled` so they are not scheduled again.

## Setup
1. Install and enable the PostFast community node (`n8n-nodes-postfast`) and add your PostFast API key credentials.
2. Add your Google Sheets credentials and select the target spreadsheet and sheet in both Google Sheets steps.
3. Ensure your sheet includes `content`, `scheduledAt` (ISO date-time), `accountId` (PostFast social account ID), and `status` columns, and set `status` to `ready` for rows you want to schedule.
4. Confirm the Google Sheets update step matches rows correctly for your data (it uses the `content` column as the matching key) to avoid updating the wrong row.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
